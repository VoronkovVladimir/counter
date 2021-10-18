import React, {useState} from 'react';
import ButtonInc from "./ButtonInc";
import ButtonReset from "./ButtonReset";
import Display from "./Display";
import './App.css'

function App() {
    const [count, setCount] = useState<number>(0)
    const maxValue = 5
    const minValue = 0

    function reset() {
        setCount(minValue)
    }

    function inc() {
        setCount(count + 1)
    }

    return (
        <div className={'bodyCounter'}>
            <Display
                count={count}
                maxValue={maxValue}
            />
            <div className={'buttonsBox'}>
                <ButtonInc
                    count={count}
                    inc={inc}
                    maxValue={maxValue}
                />
                <ButtonReset
                    count={count}
                    reset={reset}
                    minValue={minValue}
                />
            </div>
        </div>
    );
}

export default App;
