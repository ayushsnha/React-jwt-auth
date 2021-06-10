import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components';

import { Sidebar, Corousal } from './components';

const StyledButton = styled.button`
  background-color: black;
  font-size: 32px;
  color: white;
  width: 100%;
`;

const CorousalStyle = {
    marginTop: '50px',
    display: 'flex',
    height: '60vh',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
};

// const data = [
//     'https://i.picsum.photos/id/1/5616/3744.jpg?hmac=kKHwwU8s46oNettHKwJ24qOlIAsWN9d2TtsXDoCWWsQ',
//     'https://i.picsum.photos/id/1001/5616/3744.jpg?hmac=38lkvX7tHXmlNbI0HzZbtkJ6_wpWyqvkX4Ty6vYElZE',
//     'https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk',
// ];
const data = [
    { img: 'https://i.picsum.photos/id/1/5616/3744.jpg?hmac=kKHwwU8s46oNettHKwJ24qOlIAsWN9d2TtsXDoCWWsQ' },
    { img: 'https://i.picsum.photos/id/1001/5616/3744.jpg?hmac=38lkvX7tHXmlNbI0HzZbtkJ6_wpWyqvkX4Ty6vYElZE' },
    { img: 'https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk' },
];

const App = () => {
    const [sidebar, setSidebar] = useState(false);

    return (
        <div className="App">
            React boilerPlate
            <StyledButton onClick={() => setSidebar(true)}>OpenSideBar</StyledButton>
            {sidebar ? <Sidebar setIsOpen={(val:any) => setSidebar(val)} /> : <></>}
            <div style={CorousalStyle}>
                <Corousal data={data} isObject Objkey="img" />
            </div>
        </div>
    );
};

export default App;
