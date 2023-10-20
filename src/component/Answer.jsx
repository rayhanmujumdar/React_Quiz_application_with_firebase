import React from 'react';
import Classes from '../styles/Answer.module.css';
import Option from './Option';

export default function Answer({ options, handleChecked }) {
    return (
        <div className={Classes.answers}>
            {options?.map((option, index) => (
                <Option
                    onChange={(e) => handleChecked(e, index)}
                    checked={option.checked}
                    text={option.title}
                    id={index}
                    key={Math.random()}
                />
            ))}
        </div>
    );
}
