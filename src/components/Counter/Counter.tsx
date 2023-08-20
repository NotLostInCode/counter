import React, {useState} from 'react';
import s from './Counter.module.css'
import {Button} from '../Button/Button';


export const Counter = () => {
    let [counter, setCounter] = useState<number>(0)

    const onClickIncrHandler = () => setCounter(counter + 1)

    const onClickResetHandler = () => setCounter(0)


    return (
        <div className={s.container}>
            <div className={counter === 5 ? s.counterRed : s.counter}>{counter}</div>
            <div className={s.containerCounter}>
                <Button disabled={counter >= 5} name={'inc'} callBack={onClickIncrHandler}/>
                <Button disabled={counter <= 0} name={'reset'} callBack={onClickResetHandler}/>
            </div>
        </div>
    );
};

