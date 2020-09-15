import React from 'react';

const Dot = (props: {label: string; active ?: boolean}) => {
    return <div style={{ width: 62, height: 62, borderRadius: 100 }}></div>
}

export default function Indicators(props: {
    total: number;
    currentIndex: number;
    onSelect ?: (idx: number) => void;
}) {
    return <div>
        {Array.from({ length: props.total}).map((_, idx) => (
            <Dot label={`${idx}`} key={idx}/>
        ))}
    </div>;
}
