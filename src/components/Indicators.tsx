/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import { Flex, Box, Text } from 'theme-ui';

// // Color
// const WHITES = 'rgba(255, 255, 255, 0.5)';
// const WIDTH = 62;

const Dot = (props: {active ?: boolean, size: string}) => {
    //active kich co hinh tron slide 
    // const size = props.active ? 62 : 8;

    return  <Flex 
                sx={{ 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    width: props.size, 
                    height: props.size, 
                }}
            >
                <Flex
                    sx={{ 
                        width: props.active ? '100%' : 8,
                        height: props.active ? '100%' : 8,
                        borderRadius: 100, 
                        backgroundColor: 'white', 
                        transition: '400ms',
                        boxShadow: '0px 0px 4px 2px rgba(0, 0, 0, 0.1)',
                    }} 
                >
                </Flex>
            </Flex>;
};

const Pagination = (props: {current: number, total: number}) => ( 
    <Flex sx={{ alignItems: 'center', color: 'white', transform: 'rotate(-90deg)', height: 80, fontSize: 14,  }}>
        <Text>{props.current.toString().padStart(2, '0')}</Text>
        <Text sx={{ opacity:0.5, mx: '8px' }}>/</Text>
        <Text>{props.total.toString().padStart(2, '0')}</Text>
    </Flex>
);

export default function Indicators(props: {
    total: number;
    currentIndex: number;
    onSelect ?: (idx: number) => void;
    width ?: string;
    height ?: string;
    maxDisplayingDots ?: number;
}) {
    const { height = '85vh', width = '62px', maxDisplayingDots = 6 } = props;
    const [hoverIdx, setHoverIdx] = React.useState<number | null>(null);
    return  (
            <Flex sx={{ width, height, flexDirection: 'column' }}>
               <Flex 
                    css={{ 
                        flex: 1,
                        width,
                        position: 'relative', 
                        justifyContent: 'center', 
                        overflow: 'hidden',
                        }}
                >
                    <Box sx={{ opacity: 0.5, }}>
                        <div 
                            css={{
                                width: '2px',
                                height: '100%',
                                ml: '50%',
                                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                                boxShadow: '0px 0px 4px 2px rgba(0, 0, 0, 0.1)',
                                }}
                        ></div>
                        {Array.from({ length: props.total}).map((_, idx) => (
                            <Box 
                                sx={{ 
                                    position: 'absolute', 
                                    left: 0, 
                                    top: `calc(${height} / 2 + ${height} / ${maxDisplayingDots + 1} * ${idx - props.currentIndex})`,
                                    transition: 'top 400ms',
                                }}
                            >
                                <Dot key={idx} size={width} active={idx === props.currentIndex || idx === hoverIdx}/>
                            </Box>
                        ))}
                    </Box>

                    <Box>
                        {Array.from({ length: props.total}).map((_, idx) => (
                            <Flex 
                                sx={{ 
                                    alignItems: 'center', 
                                    justifyContent: 'center',
                                    position: 'absolute', 
                                    left: 0, 
                                    top: `calc(${height} / 2 + ${height} / ${maxDisplayingDots + 1} * ${idx - props.currentIndex})`, 
                                    width, 
                                    height: width, 
                                    fontSize: 16, 
                                    color: 'white',
                                    fontWeight: 'bold', 
                                    cursor: 'pointer',
                                    transition: 'top 400ms',
                                }}
                                onMouseEnter={() => setHoverIdx(idx)}
                                onMouseLeave={() => setHoverIdx(null)}
                                onClick={() => props.onSelect?.(idx)}
                            >
                                <Box
                                    sx={{
                                        transition: 'transform 400ms',
                                        transform: `scale(${idx === props.currentIndex || idx === hoverIdx ? '1,1' : '0,0'})`, 
                                    }}
                                >
                                    {`${idx + 1}`}
                                </Box>
                            </Flex>
                        ))}
                    </Box>
                </Flex>
                <Pagination current={props.currentIndex + 1} total={props.total}/>
            </Flex>
    );
}
