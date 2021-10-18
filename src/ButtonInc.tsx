import React from "react";
import './Button.css';

type ButtonIncType = {
    inc: () => void
    count: number
    maxValue: number
}

function ButtonInc(props: ButtonIncType) {

    const disabledInc = props.count === props.maxValue ? true : false

    const buttonIncClassName = disabledInc === false ? 'button' : 'buttonDisabled'

    return (
        <button
            className={buttonIncClassName}
            onClick={props.inc}
            disabled={disabledInc}
        >
            INC
        </button>
    )
}

export default ButtonInc