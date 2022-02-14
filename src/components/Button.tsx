import React from 'react';

const buttonStyle: React.CSSProperties = {
    border: "solid transparent",
    borderRadius: "16px",
    borderWidth: "0 0 4px",
    boxSizing: "border-box",
    borderColor: "rgba(0,0,0,.2)",

    appearance: "button",
    fontFamily: "din-round,sans-serif",
    fontSize: "15px",
    fontWeight: 700,
    letterSpacing: ".8px",
    lineHeight: "20px",
    outline: "none",
    textTransform: "uppercase",
    touchAction: "manipulation",

    color: "white",
    padding: "15px 32px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    margin: "0",
    cursor: "pointer",
}

interface ButtonProps {
    children?: any,
    style?: React.CSSProperties,
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export default function Button({ children, style, onClick }: ButtonProps) {
    return (
        <button className={"grow"} style={{ ...buttonStyle, ...style }} onClick={onClick}>{children}</button>
    );
}