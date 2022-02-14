import React from 'react';

import { Link } from 'react-router-dom';
import { MdArrowForwardIos } from 'react-icons/md';

const textCSS = {
    textDecoration: "none",
    color: "#cdcdcd",
    display: "inline-flex",
    alignItems: "center",
    fontSize: "0.8em"
}

interface SideMenuProps {
    path: string;
    title: string;
    onClickLink?: (event?: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

const itemIconStyle: React.CSSProperties = {
    paddingRight: "0.3em"
}

export default function SideMenuItem({ path, title, onClickLink }: SideMenuProps) {
    return (
        <div>
            <Link onClick={(event) => onClickLink(event)} to={path} style={textCSS}><MdArrowForwardIos size="0.7em" style={itemIconStyle} />{title}</Link>
        </div>
    );
}