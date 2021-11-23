import React from 'react';

import './App.css';

import data from '../content/data';

import { HashRouter, Route } from "react-router-dom";

import Article from './Article';
import Switch from './Switch';
import SideMenuGroup from './SideMenuGroup';

const getRoute = (it: typeof data.content[0]) => {
    if (it) {
        return `/${data.categories.find(c => it.category === c.name).route}/${it.route}`;
    }
}

export default function App() {
    const [width, setWindowWidth] = React.useState(0);
    
    const updateDimensions = () => {
        const width = window.innerWidth;

        setWindowWidth(width);
    }

    React.useEffect(() => { 
        updateDimensions();
   
        window.addEventListener("resize", updateDimensions);

        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    const isMobile = width < 500;

    return (
        <HashRouter>
            <div className="main">
                <SideMenuGroup mobile={isMobile} data={data} />
                <Switch>
                    <Route path="/" element={<Article mobile={isMobile} content={data.mainPage.text} next={getRoute(data.content[0])} />} />
                    {
                        data.content.map((item, index, elements) => {
                            return <Route
                                key={item.route}
                                path={getRoute(item)}
                                element={<Article mobile={isMobile} title={item.title} content={item.text} next={getRoute(elements[index+1])} />}
                            />
                        })
                    }
                </Switch>
            </div>
        </HashRouter>
    );
}