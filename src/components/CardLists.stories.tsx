import React from 'react';

import CardLists from './CardLists';

export default {
    title: 'CardLists',
    component: CardLists,
    //   argTypes: {
    //     backgroundColor: { control: 'color' },
    //   },
};

export const DefaultCardList = () => {
    const [currentIdx, setCurrentIdx] = React.useState(0);
    const data = [
        [{
            title: '1',
            rate: 4,
            image: 'https://via.placeholder.com/468x600?text=1'
        },
        {
            title: '2',
            rate: 4,
            image: 'https://via.placeholder.com/468x600?text=2'
        },
        {
            title: '3',
            rate: 4,
            image: 'https://via.placeholder.com/468x600?text=3'
        },
        {
            title: '4',
            rate: 4,
            image: 'https://via.placeholder.com/468x600?text=4'
        },
        {
            title: '5',
            rate: 4,
            image: 'https://via.placeholder.com/468x600?text=5'
        }],
        [{
                title: '21',
                rate: 4,
                image: 'https://via.placeholder.com/468x600?text=21'
            },
            {
                title: '22',
                rate: 4,
                image: 'https://via.placeholder.com/468x600?text=22'
            },
            {
                title: '23',
                rate: 4,
                image: 'https://via.placeholder.com/468x600?text=23'
            },
            {
                title: '24',
                rate: 4,
                image: 'https://via.placeholder.com/468x600?text=24'
            },
            {
                title: '5',
                rate: 4,
                image: 'https://via.placeholder.com/468x600?text=25'
        }],
    ];


    return (
        <div>
            <button onClick={() => setCurrentIdx(1 - currentIdx)}>Flip</button>
            <div style={{backgroundColor: '#4cd137', width: '100vw', height: '100vh'}}>
                <CardLists list={data[currentIdx]}/>
            </div>;
        </div>
    );
};
