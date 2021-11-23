import React from 'react';
import AnimateHeight from 'react-animate-height';
//import { Transition } from 'react-transition-group';

import { IoIosArrowDown } from 'react-icons/io';

const itemsCSS: React.CSSProperties = {
    width: "100%",
    margin: 0,
    listStyleType: "none",
    display: "inline-flex",
    gap: "0.5em",
    flexDirection: "column",
    marginTop: "0.8em"
}

const categoryTitleCSS: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    cursor: "pointer",
    fontSize: "1.17em",
    fontWeight: "bold",
    marginTop: "1em"
}

const categoryIconStyle: React.CSSProperties = {
    paddingLeft: "0.3em"
}

interface SideMenuProps {
    title: string;
    children: React.ReactNode
}

export default function SideMenuCategory({ title, children }: SideMenuProps) {
    const [hidden, setHidden] = React.useState(false);

    const titleComponent = (
        <div style={{ ...categoryTitleCSS }} onClick={() => setHidden(!hidden)}>
            {title} {<IoIosArrowDown size="0.8em" style={categoryIconStyle} />}
        </div>
    );

    const itemsComponent = (
        <div style={itemsCSS}>
            {children}
        </div>
    );

    return (
        <div>
            {titleComponent}

            <AnimateHeight
                id='example-panel'
                duration={ 500 }
                height={hidden ? 0 : "auto"}
                animateOpacity={true}
            >
                {itemsComponent}
            </AnimateHeight>
        </div>
    );
}