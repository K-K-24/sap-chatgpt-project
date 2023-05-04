import { useState } from "react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";

function MsgContainer(props) {
  const isTyping = props.isTyping;
  const messages = props.messages;

  const handleSend = (message) => {
    const newMessage = {
      message,
      direction: "outgoing",
      sender: "user",
    };

    const newMessages = [...messages, newMessage];

    props.setMessages(newMessages);

    // Initial system message to determine ChatGPT functionality
    // How it responds, how it talks, etc.
    props.setIsTyping(true);
    props.msgToGPT(newMessages);
  };

  return (
    <MainContainer>
      <ChatContainer>
        <MessageList
          scrollBehavior="smooth"
          typingIndicator={
            isTyping ? <TypingIndicator content="Sara is typing" /> : null
          }
        >
          {messages.map((message, i) => {
            // console.log(message);
            return <Message key={i} model={message} />;
          })}
        </MessageList>
        <MessageInput placeholder="Type message here" onSend={handleSend} />
      </ChatContainer>
    </MainContainer>
  );
}

export default MsgContainer;
