 import {useEffect,useRef} from 'react'
 import ChatMessage from './ChatMessage'
 import './ChatMessages.css' 
 function ChatMessages({ chatMessages }) {
         const chatMessagesRef=  useRef(null);
         useEffect(()=>{
    const contElem =  chatMessagesRef.current
          //ref-container with react features, can save html element
          if(contElem){
            contElem.scrollTop=contElem.scrollHeight;
          }
        },[chatMessages]);//depencency array, when does it run 


        return (
          <div className="chat-messages-contianer"
          ref={chatMessagesRef}>
            {chatMessages.map((chatMessage) => {

              return (
                <ChatMessage
                  message={chatMessage.message}
                  sender={chatMessage.sender}
                  key={chatMessage.id}
                  time={chatMessage.time}
                />
              );
            })}
          </div>
        );
      }
 
      export default ChatMessages