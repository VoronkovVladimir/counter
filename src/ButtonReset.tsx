import React from "react";
import './Button.css';

type ButtonResetType = {
    reset: () => void
    count: number
    minValue: number
}

function ButtonReset(props: ButtonResetType) {

    const disabledReset = props.count === props.minValue ? true : false

    const buttonResetClassName = disabledReset === false ? 'button' : 'buttonDisabled'

    return (
        <button
            className={buttonResetClassName}
            onClick={props.reset}
            disabled={disabledReset}
        >
            RESET
        </button>
    )
}

export default ButtonReset