import './ButtonBox.css';
/*
  This component will house the actual buttons in the calculator
*/
const ButtonBox = ({ children }) => {
  return (
    <div className='buttonBox'>{children}</div>
  )
};

export default ButtonBox;