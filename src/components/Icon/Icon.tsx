import React from 'react';

import IconStyle from './Icon.Styled';

interface IconProp {
    iconClass: string;
    onClick? : Function;
}

const Icon = ({ iconClass, onClick }:IconProp) => (
    <IconStyle onClick={() => onClick && onClick()}>
        <i className={iconClass} />
    </IconStyle>
);

export default Icon;
