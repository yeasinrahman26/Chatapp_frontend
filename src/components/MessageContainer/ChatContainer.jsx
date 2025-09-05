import React, { useEffect } from "react";
import { useChatStore } from "../../store/useChatStore";
import MessageInput from "./MessageInput";
import ChatHeader from "./ChatHeader";
import MessageSkeleton from "./MessageSkeleton";

const ChatContainer = () => {
  const { messages, isMessagesLoading, getMessages, selectedUser } =
    useChatStore();

  useEffect(() => {
    getMessages(selectedUser._id);
  }, [selectedUser._id, getMessages]);

  if (isMessagesLoading) {
    return (
      <div className="flex-1 flex flex-col overflow-auto">
        <ChatHeader />
        <MessageSkeleton />
        <MessageInput />
      </div>
    );
  }
  return (
    <div className="flex-1 flex  flex-col overflow-auto">
      <ChatHeader />

      <div className="flex-1 overflow-y-auto space-y-4">
        
      </div>

      <MessageInput />
    </div>
  );
};

export default ChatContainer;
