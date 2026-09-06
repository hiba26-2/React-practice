import {useState} from 'react'
import{ Chatbot } from 'supersimpledev';
 import './ChatInput.css' 
function ChatInput({ chatMessages, setChatMessages }) {
        const [inputText, setInputText] = useState('');
   const [isLoading, setIsLoading] = useState(false);
        function saveInputText(event) {
          setInputText(event.target.value);
        }

    async function sendMessage() {

  // Don't send if loading or input is empty
  if (isLoading || inputText === '') {
    return;
  }

  // Start loading
  setIsLoading(true);

  // Clear input
  setInputText('');

  // Add user's message
  const newChatMessages = [
    ...chatMessages,
    {
      message: inputText,
      sender: 'user',
      id: crypto.randomUUID()
    }
  ];

  // Show loading message
  setChatMessages([
    ...newChatMessages,
    {
      message: 'loading...',
      sender: 'robot',
      id: crypto.randomUUID()
    }
  ]);

  // Wait for chatbot
  const response = await Chatbot.getResponseAsync(inputText);

  // Stop loading
  setIsLoading(false);

  // Show chatbot response
  setChatMessages([
    ...newChatMessages,
    {
      message: response,
      sender: 'robot',
      id: crypto.randomUUID()
    }
  ]);
}           
       function KeyDown(event){
        if(event.key==="Enter"){
          sendMessage();
          setInputText('');
         
        }
        if(event.key==="Escape"){
           setInputText('');
        }
       }

        return (
          <div className="chat-input-container">
            <input
            className="chat-input"
              placeholder="Send a message to Chatbot"
              size="30"
              onChange={saveInputText}
              value={inputText}
              onKeyDown={KeyDown }
              disabled={isLoading}
            />
            <button
              onClick={sendMessage}
              className="send-button"
              disabled={isLoading}
            >Send</button>
          </div>
        );
      }

export default ChatInput