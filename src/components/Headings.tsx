import React from 'react';
import { Text, Box, Button } from 'theme-ui';
import { useTransition, animated } from 'react-spring';

const Heading = ({ active, children }: React.PropsWithChildren<{active ?: boolean}>) => {
    const commonStyles = {
        fontWeight: 'bold',
        fontSize: active ? '150px' : '90px',
        color: 'white',
        letterSpacing: '-1px',
        transition: 'font-size 800ms, opacity 800ms',
    };

    return  <Box sx={{ position: 'relative' }}>
                <Text 
                    sx={{
                        ...commonStyles,
                        opacity: active ? 0 : 1,
                        backgroundImage: 'linear-gradient(rgba(255, 255, 225, 1), rgba(255, 255, 255, 0))',
                        backgroundClip: 'text',
                        textFillColor: 'transparent' as any,
                        '-webkit-background-clip': 'text' as any,
                        '-webkit-text-fill-color': 'transparent' as any,
                    }}
                >
                    {children}
                </Text>   
                <Text 
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        opacity: active ? 1 : 0,
                        ...commonStyles,
                    }}
                >
                    {children}
                </Text>   
            </Box> 
};

export default function Headings(props: {
    data: {
        title: string;
        description ?: string;
        buttonColor: string;
    }[];
    currentIndex: number;
    onExplore ?: (idx: number) => void;
    width ?: string;
    height ?: string;
}) {
    const { data, currentIndex, width='50vw', height='80vh' } = props;
    const fadingTextPropsTransition = useTransition(
        data[currentIndex], (item) => item.title, {
        from: { opacity: -2 },
        enter: { opacity: 1 },
        leave: { opacity: -2 },
        config: { tension: 220, friction: 120, duration: 2000 },
    });

    return  (
                <Box sx={{ position: 'relative', width, height }}>
                    <Text 
                        sx={{
                            position: 'absolute',
                            top: `calc(${height} / 2 + 60px)`,
                            color: 'white',
                            fontSize: 16,
                            lineHeight: 2,
                        }}
                    >
                        {fadingTextPropsTransition.map(({item, props, key}) => 
                            <animated.div  key={key} style={{ ...props, width, position: 'absolute' }}>
                                <Text>{item.description}</Text>
                                <Button 
                                    sx={{
                                        color: 'white', 
                                        background: item.buttonColor,
                                        px: 30,
                                        py: 10,
                                        }}
                                >
                                    Explore <Text sx={{ ml: 80, opacity: 0.6, display: 'inline-block' }}>→</Text>
                                </Button>
                            </animated.div>
                        )}
                    </Text>

                    {data.map((item,idx) => (
                        <Box 
                            key={idx}
                            sx={{ 
                                position: 'absolute', 
                                transition: 'all 800ms',
                                ...(
                                    currentIndex === idx ? {bottom: `calc(${height} / 2)`} 
                                    : currentIndex < idx ? {bottom: 0} 
                                    : {bottom: `calc(${height} - 106px)`}
                                ),
                                opacity: Math.abs(currentIndex - idx) < 2 ? 1 : 0,
                            }}
                        >
                            <Heading active={idx === currentIndex}>{item.title}</Heading>
                        </Box>
                    ))}
                </Box>
            ); 
};
