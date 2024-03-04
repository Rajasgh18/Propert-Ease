import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { Option } from '../components/Option';

export default function Form() {

    const location = useLocation();
    const query = new URLSearchParams(location.search).get('t');
    const [selectedOptions, setSelectedOptions] = useState({ bedrooms: "", bathrooms: "", furnishing: "", constructionStatus: "", listedBy: "" });
    let type;

    switch (query) {
        case 'sale-house':
            type = "Sale - Houses & Apartments"
            break;
        case 'rent-house':
            type = "Rent - Houses & Apartments"
            break;
        case 'rent-house':
            type = "Sale - Shop & Offices"
            break;
        case 'rent-house':
            type = "Rent - Shop & Offices"
            break;
        case 'rent-house':
            type = "PG & Guest Houses"
            break;
    }

    const handleSelectedOptions = (name, value) => {
        setSelectedOptions({ ...selectedOptions, [name]: value });
    }

    return (
        <section className='p-14 text-white flex flex-col items-center gap-10'>
            <h1 className='font-viga text-5xl'>Post Your Ad</h1>
            <section className='rounded flex flex-col gap-5 w-[50%]'>
                <div className='bg-[#979797] bg-opacity-20 p-3 rounded flex flex-col gap-2'>
                    <h2 className='text-2xl'>SELECTED CATEGORY</h2>
                    <h3 className='text-xl text-slate-300'>{type}</h3>
                </div>
                <h2 className='text-2xl'>INCLUDE SOME DETAILS</h2>
                <div className='flex flex-col gap-2'>
                    <h3 className='text-xl text-slate-200'>Bedrooms</h3>
                    <div className='w-full flex gap-3'>
                        <Option name="bedrooms" selectedOptions={selectedOptions} handleSelectedOptions={handleSelectedOptions} items={["1", "2", "3", "4"]} />
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <h3 className='text-xl text-slate-200'>Bathrooms</h3>
                    <div className='w-full flex gap-3'>
                        <Option name="bathrooms" selectedOptions={selectedOptions} handleSelectedOptions={handleSelectedOptions} items={["1", "2", "3", "4"]} />
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <h3 className='text-xl text-slate-200'>Furnishing</h3>
                    <div className='w-full flex gap-3'>
                        <Option name="furnishing" selectedOptions={selectedOptions} handleSelectedOptions={handleSelectedOptions} items={["Furnished", "Semi-Furnished", "Unfurnished"]} />
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <h3 className='text-xl text-slate-200'>Construction Status</h3>
                    <div className='w-full flex gap-3'>
                        <Option name="constructionStatus" selectedOptions={selectedOptions} handleSelectedOptions={handleSelectedOptions} items={["Newly Launched", "Ready to move", "Under construction"]} />
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <h3 className='text-xl text-slate-200'>Listed By</h3>
                    <div className='w-full flex gap-3'>
                        <Option name="listedBy" selectedOptions={selectedOptions} handleSelectedOptions={handleSelectedOptions} items={["Builder", "Owner", "Dealer"]} />
                    </div>
                </div>
            </section>
        </section>
    )
}
