import React,{useState} from 'react'
import styles from "./userInfo.module.scss";

const UserInfo = (props) => {
  //const {userName, greeting}=props;

    //!REACT-HOOK 
const [initialGreeting,setGreeting]=useState("bonjour");

const [isToggle,setToggle]=useState(false)


const changeNameHandler=(e)=>{
  
  //?assinging regular variable to the props?
  // let greeting=props.greeting;
  // greeting="bonjour";

        // console.log("clicked",greeting);
  
        if(!isToggle){

          setGreeting(props.greeting);
          setToggle(true)
        }else{
          setGreeting("bonjour");
          setToggle(false)
        }
    }

  return (
    <div className={styles.UserInfo} >



         <h5> UserName: {props.userName}</h5>
        <p id='paraf'>Greeting:{initialGreeting }  </p>
        <button onClick={changeNameHandler}>Click Me</button>


    </div>
  )
}

export default UserInfo;