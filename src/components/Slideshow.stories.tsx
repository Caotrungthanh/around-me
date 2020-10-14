import React from 'react';

import { Slideshow } from './Slideshow';

export default {
    title: 'Slideshow',
    component: Slideshow,
    //   argTypes: {
    //     backgroundColor: { control: 'color' },
    //   },
};

export const DefaultSlidesShow = () => {
    const [currentIdx, setCurrentIdx] = React.useState(0);  
    const data = [
        {
            image: 'https://via.placeholder.com/468x600?text=1'
        },
        {
            image: 'https://via.placeholder.com/468x600?text=2'
        },
        {
            image: 'https://via.placeholder.com/468x600?text=3'
        },
        {
            image: 'https://via.placeholder.com/468x600?text=4'
        },
        {
            image: 'https://via.placeholder.com/468x600?text=5'
        },
        {
            image: 'https://via.placeholder.com/468x600?text=6'
        },
    ];

    return (
            <div style={{backgroundColor: '#4cd137', width: '100vw', height: '100vh'}}>
                <Slideshow slides={data} currentIndex={currentIdx}/>
                <button onClick={() => setCurrentIdx((currentIdx + 1) % data.length)}>next</button>
            </div>
    );
};
