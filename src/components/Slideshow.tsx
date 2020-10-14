import React, { useEffect, useRef, useState } from "react";
import { LinearCopy } from "gl-react";
import { Surface } from "gl-react-dom";
import GLTransition from "react-gl-transition";
import GLTransitions from "gl-transitions";
import GLImage from 'gl-react-image';

function usePrevious<T>(value: T) {
    const [temp, setTemp] = useState<T | null>(null);
    const [previous, setPrevious] = useState<T | null>(null);

    useEffect(() => {
        setTemp(value);
        setPrevious(temp);
    }, [value]);

    return previous;
}

export const Slideshow = (props: { slides: {image: string}[], duration ?: number, currentIndex: number }) => {
    
    const {duration = 1500} = props;
    const previousIndex = usePrevious(props.currentIndex);
    const to = props.slides[props.currentIndex].image;
    const from = previousIndex !== null && props.slides[previousIndex].image || null;

    const transition = GLTransitions[10];
    const [progress, setProgress] = useState(0);
    const Interval = 1000/60

    useEffect(() => {
        setProgress(0);
    }, [props.currentIndex]);

    useEffect(() => {
        if(progress < 1)
        {
            setTimeout(() => {
                setProgress(progress + Interval / duration);
            }, Interval);
        }
    }, [progress]);

    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

    return  <Surface width={vw} height={vh}>
                {progress < 1 && from ? (
                <GLTransition
                    from={<GLImage source={from} resizeMode='cover' />}
                    to={<GLImage source={to} resizeMode='cover' />}
                    progress={progress}
                    transition={transition}
                />) : (<GLImage source={to} resizeMode='cover'/>)
                };
            </Surface>
  };