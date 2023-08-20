import React, {ChangeEvent, useState} from 'react';
import {Counter} from '../Counter/Counter';
import s from './SetCounter.module.css'
import {Button} from '../Button/Button';


const SetCounter = () => {
    return (
        <>
           <div className={s.containerCounter}>
               <div className={s.containerValue}>
                   <div className={s.value}>
                       <p>max value:</p>
                       <input type="number" />
                   </div>
                   <div className={s.value}>
                       <p>start value:</p>
                       <input type="number" />
                   </div>
               </div>
               <div className={s.setBtn}>
                   <Button name={'set'} callBack={() => {}}/>
               </div>
           </div>


        </>
    );
};

export default SetCounter;