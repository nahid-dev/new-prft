import { cn } from '@/lib/utils';
import React from 'react';

const TextInputField = ({id, label, placeholder, onChange, className, type="text", value}) => {
    return (
        <div className={`flex flex-col ${label ? "gap-2":""}`}>
            <label htmlFor={id}>{label}</label>
            <input className={cn("bg-gray-50 p-5 rounded-md focus:outline-none", className)} type={type} value={value} onChange={onChange} placeholder={ placeholder} />
        </div>
    );
};

export default TextInputField;