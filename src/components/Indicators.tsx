/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import { Flex } from 'theme-ui';

// Color
const WHITES = 'rgba(255, 255, 255, 0.5)';

const Dot = (props: {label: string; active ?: boolean}) => {
    return  <Flex sx={{ alignItems: 'center', justifyContent: 'center', width: 62, height: 62, borderRadius: 100, backgroundColor: WHITES, transition: '2ms' }}>
                <span>{props.label}</span>
            </Flex>;
}



export default function Indicators(props: {
    total: number;
    currentIndex: number;
    onSelect ?: (idx: number) => void;
}) {
    return  <div css={{ position: 'relative' }}>
                <div css={{
                    width: '2px',
                    height: '100%',
                    backgroundColor: WHITES,
                }}></div>
                {Array.from({ length: props.total}).map((_, idx) => (
                    <Dot label={`${idx}`} key={idx}/>
                ))}
            </div>;
}
