import React from 'react';

import video from "../assets/video/highlights.mp4";
import extendedLogo from "../assets/images/extendedlogo.png";
import logo from "../assets/images/logo2.png";

import { Link } from 'react-router-dom';
import Button from './Button';

interface HomepageProps {
    next: string,
    mobile: boolean
}

const videoStyle: React.CSSProperties = {
    filter: "grayscale(0.9) brightness(50%)",
    opacity: 0.7,
    objectFit: "cover",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -999,
    minWidth: "100%",
    minHeight: "100%"
}

const logoStyle: React.CSSProperties = {
    height: "auto",
    width: "80%",
    top: "30%",
    left: "50%",
    position: "absolute",
    animation: "MoveUpDown 3s ease-in-out infinite"
}

const logoStyleMobile: React.CSSProperties = {
    height: "auto",
    width: "50%",
    top: "35%",
    left: "50%",
    position: "absolute",
    animation: "MoveUpDown 3s ease-in-out infinite"
}

const tutorialButtonStyle: React.CSSProperties = {
    backgroundColor: "#09ab16",
    marginRight: "15px"
}

const discordButtonStyle: React.CSSProperties = {
    backgroundColor: "#1961d4",
    marginLeft: "15px"
}

const buttonsStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    top: "70%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute"
}

export default function Homepage({ next, mobile }: HomepageProps) {
    return (
        <div>
            <img draggable="false" style={mobile ? logoStyleMobile : logoStyle} src={mobile ? logo : extendedLogo} />

            <video style={videoStyle} autoPlay width="100%" height="100%" muted loop>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            
            <div style={buttonsStyle}>
                <Link to={next}><Button style={tutorialButtonStyle}>Aprenda a jogar</Button></Link>
                <Button style={discordButtonStyle} onClick={() => window.location.href = "https://discord.gg/Q6tJG2GQHZ"}>Acessar Discord</Button>
            </div>
        </div>
    );
}