import { Textfit } from "react-textfit";
import "./Screen.css";
/* 
  This component is used to display the result of the calculation.
*/
const Screen = ({ value }) => {
  return (
    <Textfit className="screen" mode="single" max={70}>
      {value}
    </Textfit>
  )
}

export default Screen;