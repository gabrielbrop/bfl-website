import React from 'react';

import loadingImg from "../assets/images/loading.gif";

export default function ResizableImage({ alt, src, title }: { alt?: string, src?: string, title?: string; }) {
    const [scaled, setScaled] = React.useState(false);
    const [zoomed, setZoomed] = React.useState(false);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        return () => {
            setScaled(false);
            setZoomed(false);
        };
    }, []);

    const style: React.CSSProperties = {
        maxWidth: scaled ? "100%" : "80%",
        maxHeight: scaled ? "100%" : "50%",
        borderRadius: "10px",
        transform: scaled ? "translate(-50%, -50%) " + (zoomed ? "scale(1.5)" : "") : "",
        position: scaled ? "fixed" : "relative",
        zIndex: scaled ? "999" : "auto",
        top: scaled ? "50%" : "auto",
        left: scaled ? "50%" : "auto",
        marginRight: scaled ? "-50%" : "auto",
        cursor: scaled ? zoomed ? "zoom-out" : "zoom-in" : "pointer",
        transition: scaled ? "transform 1s ease" : "",
        userSelect: "none"
    }

    const divStyle: React.CSSProperties = {
        backgroundColor: scaled ? "rgba(0,0,0,.8)" : "initial",
        width: scaled ? "100%" : "auto",
        height: scaled ? "100%" : "auto",
        zIndex: scaled ? "999" : "auto",
        position: scaled ? "fixed" : "relative",
        transform: scaled ? "translate(-50%, -50%)" : "",
        top: scaled ? "50%" : "auto",
        left: scaled ? "50%" : "auto",
        cursor: scaled ? "pointer" : "auto"
    }

    return (
        <div style={divStyle} onClick={() => scaled && setScaled(false) }>
            <img 
                alt={alt} 
                src={loading ? loadingImg : src} 
                title={title} 
                style={style}
                onLoad={() => setLoading(false)}
                onClick={(event) => {
                    if (!scaled) {
                        setScaled(true);
                    } else {
                        if (event.ctrlKey) {
                            window.open(src);
                        } else {
                            setZoomed(!zoomed);
                        }

                        event.stopPropagation();
                    }
                } } />
        </div>
    )
}