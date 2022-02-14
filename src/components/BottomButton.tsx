import React from 'react';

import { IconType } from 'react-icons/lib';
import { Link } from 'react-router-dom';
import Button from './Button';

const buttonStyle: React.CSSProperties = {
    position: "fixed",
    bottom: "3%",
    right: "3%",
    cursor: "pointer",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    background: "#09ab16",
    wordBreak: "keep-all",
    height: "10%"
}

const iconStyle: React.CSSProperties = {
    width: "3em",
    height: "3em",
    paddingRight: "1em",
    paddingLeft: "-2em"
}

interface NextButtonProps {
    path: string,
    Icon: IconType
}

export default function BottomButton({ path, Icon }: NextButtonProps) {
    return (
        <Link to={path ?? "#"}>
            <Button style={buttonStyle}>
                <Icon style={iconStyle} />
                <p>Próximo</p>
            </Button>
        </Link>
    );
}