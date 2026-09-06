 import {useState} from 'react'
 import './App.css'
 function App(){
            const [showPassword, setShowpassword]= useState(false);
function Show(){
(showPassword===false?setShowpassword(true):setShowpassword(false));
}
function Password(){
  if(showPassword===false){
  return "password"
  }else{
  return "text"
}}
            return(
                <div className="container">
                <h1>Hello,welcome to my website</h1>
                <input type="Email" placeholder="Email" /><br />
                <input type={Password()} placeholder=" Password"/>
                <button onClick={Show}> Show</button><br/>
                <button>Login</button>
                <button>Sign-up</button>
                </div>
            );
        }
export default App