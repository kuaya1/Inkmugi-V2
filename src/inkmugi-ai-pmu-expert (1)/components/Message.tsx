import React from 'react';
import { ChatMessage, MessageRole } from '../types';

interface MessageProps {
  message: ChatMessage;
}

const Message: React.FC<MessageProps> = ({ message }) => {
  const isUser = message.role === MessageRole.USER;

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-xl lg:max-w-2xl px-5 py-3 rounded-2xl ${
          isUser
            ? 'bg-[#4F4A45] text-white rounded-br-none'
            : 'bg-white text-[#4F4A45] rounded-bl-none border border-[#EBE3DD]'
        }`}
      >
        <p className="whitespace-pre-wrap">{message.text}</p>
      </div>
    </div>
  );
};

export default Message;