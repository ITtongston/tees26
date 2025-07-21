import React from 'react';

const ReusableDiv = ({
  backgroundImage = "/assets/images/bg2.png",
  gradientColors = ["rgba(255,255,255, 0.8)", "rgba(255,255,255, 0.8)"],
  children,
  className = '',
  style = {},
}) => {
  const combinedStyle = {
    background: `linear-gradient(${gradientColors[0]}, ${gradientColors[1]}), url("${backgroundImage}")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    ...style,
  };

  return (
    <div
      className={`w-full relative flex flex-col justify-center items-center p-2 gap-y-[30px] ${className}`}
      style={combinedStyle}
    >
      {children}
    </div>
  );
};

export default ReusableDiv;
