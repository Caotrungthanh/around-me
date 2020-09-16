import React from 'react';

import Indicators from './Indicators';

export default {
  title: 'Indicators',
  component: Indicators,
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
};

export const DefaultIndicator = () => (
  <div style={{backgroundColor: '#4cd137', width: '100vw', height: '100vh'}}>
    <Indicators total={6} currentIndex={3}/>
  </div>
);