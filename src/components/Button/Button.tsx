import React from 'react';
import s from '../Counter/Counter.module.css';

type PropsType = {
    name: string
    callBack: () => void
    disabled?: boolean
}


export const Button = ({name, callBack, disabled}:PropsType) => {
    const onClickHandler = () => callBack()

    return (
        <button disabled={disabled} onClick={onClickHandler} className={s.btn}>{name}</button>
    );
};

