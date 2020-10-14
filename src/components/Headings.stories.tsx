import React from 'react';

import Headings from './Headings';

export default {
    title: 'Headings',
    component: Headings,
  //   argTypes: {
  //     backgroundColor: { control: 'color' },
  //   },
};

export const DefaultHeading = () => {
    const [currentIdx, setCurrentIdx] = React.useState(0);
    const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
    const data = [
        {title: 'VietNam', description: `1 ${description}`, buttonColor: '#e74c3c'},
        {title: 'Japan', description: `2 ${description}`,  buttonColor: '#ff9ff3'},
        {title: 'Switzerland', description: `3 ${description}`, buttonColor: '#48dbfb'},
        {title: 'Iceland', description: `4 ${description}`, buttonColor: '#2ed573'},
        {title: 'Singapore', description: `5 ${description}`, buttonColor: '#ff4757'},
        {title: 'France', description: `6 ${description}`, buttonColor: '#5352ed'},
    ];

    //Cho list chữ chạy liên tục
    React.useEffect(() => {
        setTimeout(() => {
            setCurrentIdx((currentIdx + 1) % data.length);
        }, 5000);
    }, [currentIdx]);

    return  <div style={{backgroundColor: '#4cd137', width: '100vw', height: '100vh'}}>
                <Headings data={data} currentIndex={currentIdx}/>
            </div>;
};