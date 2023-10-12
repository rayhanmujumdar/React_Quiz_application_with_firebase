import React from 'react';
import classes from '../styles/form.module.css';

export default function Form({ children, className, ...rest }) {
    return (
        <form {...rest} className={`${className} ${classes.form}`}>
            {children}
        </form>
    );
}
