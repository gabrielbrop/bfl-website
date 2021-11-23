import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm'

import BottomButtom from './BottomButton';
import ResizableImage from './ResizebleImage';

import { IoIosArrowDroprightCircle } from 'react-icons/io';
import { IoIosCheckmarkCircle } from 'react-icons/io';

const articleStyle: React.CSSProperties = {
    paddingTop: "5%",
    top: "0",
    right: "0",
    bottom: "0",
    left: "20vw",
    paddingLeft: "5%",
    position: "absolute",
    wordBreak: "break-word",
    maxHeight: "96%",
    overflowY: "auto"
}

const contentStyle: React.CSSProperties = {
    paddingRight: "5%",
}

const contentStyleMobile: React.CSSProperties = {
    ...contentStyle,
    paddingLeft: "5%"
}

const mobileStyle: React.CSSProperties = {
    left: "0",
    paddingLeft: "0",
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
}

interface SideMenuProps {
    content?: string;
    title?: string;
    next?: string;
    mobile: boolean;
}

const components = {
    img: ResizableImage,
    p: (props: any) => {
        if (props.node.children[0].tagName === "img") {
            const newProps = { ...props }
            
            newProps.style = { ...newProps.style, marginBlockStart: "1em", marginBlockEnd: "1em" } as React.CSSProperties;
           
            return (<div {...newProps} />);
        } else {
            return (<p {...props} />);
        }
    }
};

export default function Article({ title, content, next, mobile }: SideMenuProps) {
    return (
        <div style={mobile ? { ...articleStyle, ...mobileStyle } : articleStyle}>
            <h1 style={mobile ? { paddingTop: "10%" } : null}>{title}</h1>
            <div style={mobile ? contentStyleMobile : contentStyle}><ReactMarkdown components={components} remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>{content}</ReactMarkdown></div>
            { 
                next ?
                <BottomButtom path={next} Icon={IoIosArrowDroprightCircle} /> :
                <BottomButtom path={"/"} Icon={IoIosCheckmarkCircle} /> 
            }
        </div>
    );
}