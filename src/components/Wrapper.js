import "./Wrapper.css";
/* 
  This component will house the entire calculator
  Specifically the Screen and the ButtonBox components (which will hold the buttons)
*/
const Wrapper = ({ children }) => {
  return (
    <div className="wrapper">{children}</div>
  )
}

export default Wrapper;