import * as React from "react";

interface ButtonProps {
    labelName: string,
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({ labelName, onClick }) => {
    return <button onClick={onClick}>{labelName}</button>
}

export default Button;
