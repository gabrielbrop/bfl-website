import React from 'react';

import Logo from './Logo';

import SideMenu from './SideMenu';
import SideMenuCategory from './SideMenuCategory';
import SideMenuItem from './SideMenuItem';

interface SideMenuGroupProps {
    data: any,
    mobile: boolean
}

export default function SideMenuGroup({ data, mobile }: SideMenuGroupProps) {
    const [full, setFull] = React.useState(false);

    if (!mobile && full) setFull(false);

    return (
        <SideMenu mobile={mobile} full={full} onClickShowButton={() => setFull(!full)} >
            <Logo onClick={() => setFull(false)} />
            {data.categories.map((category: any) => 
                <SideMenuCategory title={category.title} key={category.name} >
                    {data.content.filter((item: any) => item.category === category.name).map((item: any) =>
                        <SideMenuItem onClickLink={() => setFull(false)} title={item.title} path={`/${category.route}/${item.route}`} key={item.title} />    
                    )}
                </SideMenuCategory>
            )}
        </SideMenu>
    );
}