import './Button.css';
/* 
  This component will handle the buttons for numbers 0 - 9, add, subtract, divide, multiply,
  equals, and clear.
*/
const Button = ({ className, value, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;