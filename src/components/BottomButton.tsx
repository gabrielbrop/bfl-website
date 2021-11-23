import React from 'react';

import { IconType } from 'react-icons/lib';
import { Link } from 'react-router-dom';

const buttonStyle: React.CSSProperties = {
    width: "60px",
    height: "60px",
    position: "fixed",
    bottom: "5%",
    right: "5%",
    cursor: "pointer"
}

interface NextButtonProps {
    path: string,
    Icon: IconType
}

export default function BottomButton({ path, Icon }: NextButtonProps) {
    return (
        <Link to={path ?? "#"}><Icon style={buttonStyle} /></Link>
    );
}