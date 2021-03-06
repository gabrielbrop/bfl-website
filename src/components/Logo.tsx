import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const logoStyle: React.CSSProperties = {
    width: "16vmin",
    height: "50%",
    display: "block",
    margin: "auto"
}

interface LogoProps {
    onClick: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void,
    style?: React.CSSProperties
}

export default function Logo({ onClick, style }: LogoProps) {
    return (
        <Link onClick={(event) => onClick(event)} to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}>
            <img src={logo} alt="Logo" style={{...style, ...logoStyle}} />
        </Link>
    );
}