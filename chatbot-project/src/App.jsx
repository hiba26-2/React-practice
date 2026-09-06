import { useState,useRef,useEffect } from 'react'
import {ChatInput} from './components/ChatInput'
import Robotimage from './assets/robot.png'
import userimage from './assets/user.png'
import './App.css'



      function ChatMessage({ message, sender }) {
        // const message = props.message;
        // const sender = props.sender;
        // const { message, sender } = props;

        /*
        if (sender === 'robot') {
          return (
            <div>
              <img src="robot.png" width="50" />
              {message}
            </div>
          );
        }
        */

        return (
          <div 
          className={
            sender==='user'?'chat-message-user'
            :'chat-message-robot'}>
            {sender === 'robot' && (
              <img src={Robotimage}className="profile" />
            )}
            <div className="chat-message-text">
              {message}
            </div>
            {sender === 'user' && (
              <img src={userimage} className="profile" />
            )}
          </div>
        );
      }

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
 function App() {
        const [chatMessages, setChatMessages] = useState([{
          message: 'hello chatbot',
          sender: 'user',
          id: 'id1'
        }, {
          message: 'Hello!  How can I help you?',
          sender: 'robot',
          id: 'id2'
        }, {
          message: 'can you get me todays date?',
          sender: 'user',
          id: 'id3'
        }, {
          message: 'Today is September 27',
          sender: 'robot',
          id: 'id4'
        }]);
        // const [chatMessages, setChatMessages] = array;
        // const chatMessages = array[0];
        // const setChatMessages = array[1];

        return (
          <div className="app-container">
        
            <ChatMessages
              chatMessages={chatMessages}
            />
                <ChatInput
              chatMessages={chatMessages}
              setChatMessages={setChatMessages}
            />
          </div>
        );
      }

export default App
