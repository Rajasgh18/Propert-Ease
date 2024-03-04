import React from 'react'

export const Option = ({ name, items, handleSelectedOptions, selectedOptions }) => {
    return (
        <>
            {items.map((item, i) => {
                return <span key={i} onClick={() => handleSelectedOptions(name, item)} className={`${selectedOptions[name] === item ? "bg-[#0000aaaa] border-blue-400" : "bg-[#979797]"} bg-opacity-20 p-2 px-4 text-lg hover:bg-[rgba(151,151,151,0.3)] transition-colors cursor-pointer border border-[rgba(151,151,151,0.4)] rounded`}>{item}</span>;
            }
            )}
        </>
    );
};
