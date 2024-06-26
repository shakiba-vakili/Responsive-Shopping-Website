const Button = ({ text, bgColor, textColor, handeler = () => {} }) => {
  return (
    <button
    onClick={handeler}
      className={`${bgColor} ${textColor} cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10`}
    >
      {text}
    </button>
  );
};

export default Button;
