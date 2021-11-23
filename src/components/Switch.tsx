import React from 'react';

import { Routes, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

interface SideMenuProps {
    children: React.ReactNode
}

export default function Switch({ children }: SideMenuProps) {
    const location = useLocation();

    return (
        <TransitionGroup>
            <CSSTransition key={location.key} classNames="slide" timeout={{ enter: 2000, exit: 0 }}>
                <Routes>{children}</Routes>
            </CSSTransition>
        </TransitionGroup>
    )
}