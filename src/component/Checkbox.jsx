import React from 'react';

export default function Checkbox({ text, ...props }) {
    return (
        <label htmlFor="check">
            <input type="checkbox" name="check" {...props} />
            <span>{text}</span>
        </label>
    );
}
