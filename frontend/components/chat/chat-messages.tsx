import { cn, formatDateToHHMM } from '@/lib/utils';
import { Message } from './chat-box';

const ChatMessages = ({ messages }: { messages: Message[] }) => {
  return (
    <div className="flex flex-col gap-4">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`w-full flex flex-col ${
            message.type === 'user' ? 'items-end' : 'items-start'
          }`}
        >
          <div
            className={cn(
              'text-sm text-muted-foreground border rounded-lg p-4 max-w-sm w-full',
              message.type === 'user' && 'bg-primary text-white'
            )}
          >
            {message.text}
          </div>
          <span className="text-xs text-muted-foreground">
            {formatDateToHHMM(message.createdAt.toISOString())}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ChatMessages;
