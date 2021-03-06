import React from 'react';

import Indicators from './Indicators';

export default {
  title: 'Indicators',
  component: Indicators,
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
};

export const DefaultIndicator = () => {
  const [currentIdx, setCurrentIdx] = React.useState(0);
  
  return <div style={{backgroundColor: '#4cd137', width: '100vw', height: '100vh'}}>
          <Indicators total={6} currentIndex={currentIdx} onSelect={setCurrentIdx}/>
        </div>
};