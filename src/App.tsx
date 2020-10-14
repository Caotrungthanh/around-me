import React from 'react';
import './App.css';
import { Flex, Box, Text } from 'theme-ui';
import Indicators from './components/Indicators';
import Headings from './components/Headings';
import CardLists from './components/CardLists';
import { Slideshow } from './components/Slideshow';

const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
const data = [
  {title: 'VietNam', description: `1 ${description}`, buttonColor: '#e74c3c', image: '/image/vn-wall.jpg', items: [
    {
        title: '11',
        rate: 4,
        image: '/image/vn-1.jpg'
    },
    {
        title: '12',
        rate: 4,
        image: '/image/vn-2.jpg'
    },
    {
        title: '13',
        rate: 4,
        image: '/image/vn-3.jpg'
    },
    {
        title: '14',
        rate: 4,
        image: '/image/vn-4.jpg'
    },
    {
        title: '15',
        rate: 4,
        image: '/image/vn-6.jpg'
    },
  ]},
  {title: 'Japan', description: `2 ${description}`,  buttonColor: '#ff9ff3', image: 'https://via.placeholder.com/1920x1080?text=2222', items: [
    {
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
    },
  ]},
  {title: 'Canada', description: `3 ${description}`, buttonColor: '#48dbfb', image: 'https://via.placeholder.com/1920x1080?text=3333', items: [
    {
        title: '31',
        rate: 4,
        image: 'https://via.placeholder.com/468x600?text=31'
    },
    {
        title: '32',
        rate: 4,
        image: 'https://via.placeholder.com/468x600?text=32'
    },
    {
        title: '33',
        rate: 4,
        image: 'https://via.placeholder.com/468x600?text=33'
    },
    {
        title: '34',
        rate: 4,
        image: 'https://via.placeholder.com/468x600?text=34'
    },
    {
        title: '35',
        rate: 4,
        image: 'https://via.placeholder.com/468x600?text=35'
    },
  ]},
  {title: 'Iceland', description: `4 ${description}`, buttonColor: '#2ed573', image: 'https://via.placeholder.com/1920x1080?text=4444', items: [
    {
        title: '41',
        rate: 4,
        image: 'https://via.placeholder.com/468x600?text=41'
    },
    {
        title: '42',
        rate: 4,
        image: 'https://via.placeholder.com/468x600?text=42'
    },
    {
        title: '43',
        rate: 4,
        image: 'https://via.placeholder.com/468x600?text=43'
    },
    {
        title: '44',
        rate: 4,
        image: 'https://via.placeholder.com/468x600?text=44'
    },
    {
        title: '45',
        rate: 4,
        image: 'https://via.placeholder.com/468x600?text=45'
    },
  ]},
  {title: 'Australia', description: `5 ${description}`, buttonColor: '#ff4757', image: 'https://via.placeholder.com/1920x1080?text=5555', items: [
    {
        title: '51',
        rate: 4,
        image: 'https://via.placeholder.com/468x600?text=51'
    },
    {
        title: '52',
        rate: 4,
        image: 'https://via.placeholder.com/468x600?text=52'
    },
    {
        title: '53',
        rate: 4,
        image: 'https://via.placeholder.com/468x600?text=53'
    },
    {
        title: '54',
        rate: 4,
        image: 'https://via.placeholder.com/468x600?text=54'
    },
    {
        title: '55',
        rate: 4,
        image: 'https://via.placeholder.com/468x600?text=55'
    },
  ]},
  {title: 'France', description: `6 ${description}`, buttonColor: '#5352ed', image: 'https://via.placeholder.com/1920x1080?text=6666', items: [
    {
        title: '61',
        rate: 4,
        image: 'https://via.placeholder.com/468x600?text=61'
    },
    {
        title: '62',
        rate: 4,
        image: 'https://via.placeholder.com/468x600?text=62'
    },
    {
        title: '63',
        rate: 4,
        image: 'https://via.placeholder.com/468x600?text=63'
    },
    {
        title: '64',
        rate: 4,
        image: 'https://via.placeholder.com/468x600?text=64'
    },
    {
        title: '65',
        rate: 4,
        image: 'https://via.placeholder.com/468x600?text=65'
    },
  ]},
];

function App() {
  const [currentIndex, setCurrentIdx] = React.useState(0);

  return (
    <Flex sx={{ justifyContent: 'space-around',flexDirection: 'column', bg: '#333', minHeight: '100vh',  }}>
        <Box sx={{ width: '100vw', height: '100vh', position: 'absolute', top: 0, left: 0, backgroundColor: '#4cd137' }}>
            <Slideshow slides={data} currentIndex={currentIndex}/>
        </Box>
        <Flex />
        <Flex sx={{ justifyContent: 'space-between', ml: 40, mb: 40 }}>
            <Indicators total={data.length} currentIndex={currentIndex} onSelect={setCurrentIdx}/>
            <Headings data={data} currentIndex={currentIndex} width='26vw'/>
            <CardLists list={data[currentIndex].items} width='54vw'/>
        </Flex>
    </Flex>
  );
}

export default App;
