import { useDispatch } from "react-redux";
import {incrementNum,decrementNum, resetNum,setText,five,minus, minusNum, fiveNum} from "./redux/reducer"
import { useSelector } from "react-redux";
import { useState } from "react";

const Buttons = () =>{
    const dispatch = useDispatch()
    const [inputText,setInputText] = useState('');
    return(
        <div>
        <button onClick={()=>{
            dispatch(incrementNum())
        }}>+</button>


<button onClick={()=>{
            dispatch(decrementNum())
        }}>-</button>

<button onClick={()=>{
            dispatch(resetNum())
        }}>reset</button>
        <br />
        <input type="text" value={inputText}
         onChange={e =>setInputText(e.target.value)} />
         <button onClick={()=>{
            dispatch(setText(inputText))
         }}>Change</button>

    

<button onClick={()=>{
            dispatch(fiveNum())
        }}>+5</button>

        
<button onClick={()=>{
            dispatch(minusNum())
        }}>-5</button>




        </div>
    )
}
export default Buttons;