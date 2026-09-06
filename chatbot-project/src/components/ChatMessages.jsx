 import {useEffect,useRef} from 'supersimpledev'
 import {ChatMessage} from './ChatMessage'
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
                />
              );
            })}
          </div>
        );
      }
 
      export default ChatMessages