'use client';

import { FormEvent, useState } from 'react';
import { Button } from '../ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from '../ui/select';
import { Input } from '../ui/input';
import { Sparkles } from 'lucide-react';
import { ScrollArea } from '../ui/scroll-area';
import axios from 'axios';
import { toast } from 'sonner';
import ChatMessages from './chat-messages';
import { languages } from '@/constants/languages';

export interface Message {
  text: string;
  type: 'user' | 'bot';
  createdAt: Date;
  id: number;
}

const ChatBox = () => {
  const [language, setLangauge] = useState('Hindi');
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: `Hello, how are you? Enter text to translate`,
      type: 'bot',
      createdAt: new Date(),
      id: 1,
    },
  ]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!text) {
      toast.error('Please enter a text to translate');
      return;
    }
    setMessages([
      ...messages,
      {
        text,
        type: 'user',
        createdAt: new Date(),
        id: messages.length + 1,
      },
    ]);
    setLoading(true);
    setText('');
    await axios
      .post(`http://localhost:4000/translate`, { language, text })
      .then((response) => {
        console.log(response.data);
        setMessages((prev) => [
          ...prev,
          {
            text: response.data.translation,
            type: 'bot',
            createdAt: new Date(),
            id: prev.length + 1,
          },
        ]);
      })
      .catch((error) => {
        console.error('Error translating text:', error);
        toast.error('Error translating text');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Card className="shadow-none h-full relative justify-between flex flex-col">
      <CardHeader className="items-start justify-between flex flex-row w-full">
        <div>
          <CardTitle className="text-2xl text-primary">
            Translate Text
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Translate text by choosing preferred language
          </CardDescription>
        </div>
        <Select onValueChange={(value) => setLangauge(value)}>
          <SelectTrigger className="shadow-none w-40">
            <SelectValue placeholder={language} />
          </SelectTrigger>
          <SelectContent className="shadow-none">
            {languages.map((language) => (
              <SelectItem key={language.value} value={language.value}>
                {language.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="border-y flex-1 h-full relative p-0">
        <ScrollArea className="h-[100%] p-4">
          <ChatMessages messages={messages} />
        </ScrollArea>
      </CardContent>
      <form onSubmit={handleSubmit}>
        <CardFooter className="mt-4">
          <Input
            className="shadow-none"
            placeholder="Type your text here..."
            name="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Button className="ml-2 shadow-none" type="submit" disabled={loading}>
            <Sparkles className="w-4 h-4 mr-2" /> Translate
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default ChatBox;
