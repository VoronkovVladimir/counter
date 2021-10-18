import React from 'react';
import './Display.css'

type DisplayType = {
    count: number
    maxValue: number
}

function Display(props: DisplayType) {
    return (
        <div className={'displayBox'}>
            <div className={props.count === props.maxValue ? 'displayTextRed' : 'displayText'}>
                {props.count}
            </div>
        </div>
    );
}

export default Display