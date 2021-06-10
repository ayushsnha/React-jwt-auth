import React from 'react';

import SidebarStyled, { SiderbarParent, SidebarTitle, CloseButton } from './Sidebar.Styled';

const Sidebar = ({ setIsOpen }:any) => (
    <SiderbarParent>
        <SidebarStyled>
            <SidebarTitle>
                <h4>Title</h4>
                <CloseButton onClick={() => setIsOpen(false)}>
                    <i className="zmdi zmdi-close" />
                </CloseButton>
            </SidebarTitle>
        </SidebarStyled>
    </SiderbarParent>

);

export default Sidebar;
