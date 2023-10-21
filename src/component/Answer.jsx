import React from 'react';
import Classes from '../styles/Answer.module.css';
import Option from './Option';

export default function Answer({ options = [], input, handleChecked }) {
    return (
        <div className={Classes.answers}>
            {options?.map((option, index) =>
                input ? (
                    <Option
                        onChange={(e) => handleChecked(e, index)}
                        checked={option.checked}
                        text={option.title}
                        id={index}
                        key={Math.random()}
                    />
                ) : (
                    <Option
                        defaultChecked={option.checked}
                        className={`${option.correct && 'correctAnswer'} ${
                            option.checked ? 'wrong' : null
                        }`}
                        disabled
                        text={option.title}
                        id={index}
                        key={Math.random()}
                    />
                )
            )}
        </div>
    );
}
