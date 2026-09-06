 import './ChatMessage.css' 
import Robotimage from '../assets/robot.png'
import userimage from '../assets/user.png'
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
export default ChatMessage