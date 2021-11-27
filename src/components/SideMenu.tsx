import React from 'react';

import { GoThreeBars } from 'react-icons/go';

const sideNav: React.CSSProperties = {
    width: "20vw",
    minWidth: "20vw",
    position: "absolute",
    zIndex: 20,
    top: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "#f5f5f5",
    borderRight: "1px solid",
    borderColor: "#f0f0f0",
    overflowX: "hidden",
    margin: 0,
    paddingTop: "2%",
    userSelect: "none"
}

const sideNavContent: React.CSSProperties = {
    width: "80%",
    marginLeft: "10%",
    marginRight: "10%",
    padding: 0,
    listStyleType: "none"
}

const showBarStyle: React.CSSProperties = {
    width: "12%",
    height: "12%",
    margin: "0.5em",
    zIndex: "999"
}

interface SideMenuProps {
    children: React.ReactNode,
    mobile: boolean,
    full: boolean,
    onClickShowButton?: (event?: React.MouseEvent<SVGElement, MouseEvent>) => void
}

export default function SideMenu({ children, mobile, full, onClickShowButton }: SideMenuProps) {
    if (!mobile) {
        return (
            <div style={sideNav}>
                <ul style={sideNavContent}>
                    {children}
                </ul>
            </div>
        );
    } else {
        return (
            <>
                <GoThreeBars style={showBarStyle} onClick={(event) => {
                    onClickShowButton(event);

                    event.preventDefault();
                }} />

                <div style={{ ...sideNav, width: full ? "100%" : "0", display: full ? sideNav.display : "none" }}>
                    <ul style={sideNavContent}>
                        {children}
                    </ul>
                </div>
            </>
        )
    }
}