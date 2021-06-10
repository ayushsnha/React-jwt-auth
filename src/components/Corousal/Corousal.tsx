import React, { useState, useEffect } from 'react';

import Icon from '../Icon';

import CorousalStyle, { Arrow, ArrowWrapper } from './Corousal.Styled';

interface CorousalProp {
    data: any;
    isObject? : boolean;
    Objkey? : any;
}

const mapImage = ({ data, isObject, Objkey }:CorousalProp) => {
    let finalData:any = ['https://picsum.photos/200/300'];

    if (Array.isArray(data) && data.length > 0) {
        if (isObject && Objkey) {
            finalData = data.map((obj) => {
                if (Object.keys(obj).includes(Objkey)) return obj[Objkey];
                return 'https://picsum.photos/id/200';
            });
        } else if (!Objkey && !isObject) { finalData = [...data]; }
    }
    return finalData;
};

const Corousal = ({ data, isObject = true, Objkey = null }:CorousalProp) => {
    const [index, setIndex] = useState(0);
    const [imgData, setImgData] = useState([]);

    useEffect(() => {
        setImgData(mapImage({ data, isObject, Objkey }));
    }, []);
    return (
        <CorousalStyle imageData={imgData[index]}>
            <ArrowWrapper>
                <Arrow>
                    {index > 0 ? <Icon onClick={() => index > 0 && setIndex((prev) => prev - 1)} iconClass="zmdi zmdi-chevron-left" /> : <></>}
                </Arrow>
                <Arrow>
                    {index < imgData.length - 1 ? <Icon onClick={() => index < imgData.length - 1 && setIndex((prev) => prev + 1)} iconClass="zmdi zmdi-chevron-right" /> : <></>}
                </Arrow>
            </ArrowWrapper>
        </CorousalStyle>
    );
};

export default Corousal;
