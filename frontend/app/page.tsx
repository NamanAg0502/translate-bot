import ChatBox from '@/components/chat/chat-box';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="h-screen w-full flex items-center justify-center">
      <div className="w-1/2 mx-auto h-[90vh] max-h-[800px]">
        <ChatBox />
      </div>
    </main>
  );
}
