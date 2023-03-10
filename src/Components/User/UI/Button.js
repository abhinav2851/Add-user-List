import { type } from '@testing-library/user-event/dist/type';
import Classes from './Button.module.css';

const Button =(props) =>{
    return(
        <button
         className ={Classes.button} 
         type={props.type || "button"}
          onClick = {props.onClick}
          >
            {props.children}
          </button>
    )
}


export default Button;