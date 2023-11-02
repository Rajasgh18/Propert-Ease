import React from 'react'
import { useLocation } from 'react-router-dom';

export default function Form() {

    const location = useLocation();
    const query = new URLSearchParams(location.search).get('t');
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
                        <span className='bg-[#979797] bg-opacity-20 p-2 px-4 text-lg hover:bg-[rgba(151,151,151,0.2)] cursor-pointer border border-[rgba(151,151,151,0.4)] rounded'>1</span>
                        <span className='bg-[#979797] bg-opacity-20 p-2 px-4 text-lg hover:bg-[rgba(151,151,151,0.2)] cursor-pointer border border-[rgba(151,151,151,0.4)] rounded'>2</span>
                        <span className='bg-[#979797] bg-opacity-20 p-2 px-4 text-lg hover:bg-[rgba(151,151,151,0.2)] cursor-pointer border border-[rgba(151,151,151,0.4)] rounded'>3</span>
                        <span className='bg-[#979797] bg-opacity-20 p-2 px-4 text-lg hover:bg-[rgba(151,151,151,0.2)] cursor-pointer border border-[rgba(151,151,151,0.4)] rounded'>4</span>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <h3 className='text-xl text-slate-200'>Bathrooms</h3>
                    <div className='w-full flex gap-3'>
                        <span className='bg-[#979797] bg-opacity-20 p-2 px-4 text-lg hover:bg-[rgba(151,151,151,0.2)] cursor-pointer border border-[rgba(151,151,151,0.4)] rounded'>1</span>
                        <span className='bg-[#979797] bg-opacity-20 p-2 px-4 text-lg hover:bg-[rgba(151,151,151,0.2)] cursor-pointer border border-[rgba(151,151,151,0.4)] rounded'>2</span>
                        <span className='bg-[#979797] bg-opacity-20 p-2 px-4 text-lg hover:bg-[rgba(151,151,151,0.2)] cursor-pointer border border-[rgba(151,151,151,0.4)] rounded'>3</span>
                        <span className='bg-[#979797] bg-opacity-20 p-2 px-4 text-lg hover:bg-[rgba(151,151,151,0.2)] cursor-pointer border border-[rgba(151,151,151,0.4)] rounded'>4</span>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <h3 className='text-xl text-slate-200'>Furnishing</h3>
                    <div className='w-full flex gap-3'>
                        <span className='bg-[#979797] bg-opacity-20 p-2 px-4 text-lg hover:bg-[rgba(151,151,151,0.2)] cursor-pointer border border-[rgba(151,151,151,0.4)] rounded'>Furnishing</span>
                        <span className='bg-[#979797] bg-opacity-20 p-2 px-4 text-lg hover:bg-[rgba(151,151,151,0.2)] cursor-pointer border border-[rgba(151,151,151,0.4)] rounded'>Semi-Furnished</span>
                        <span className='bg-[#979797] bg-opacity-20 p-2 px-4 text-lg hover:bg-[rgba(151,151,151,0.2)] cursor-pointer border border-[rgba(151,151,151,0.4)] rounded'>Unfurnished</span>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <h3 className='text-xl text-slate-200'>Construction Status</h3>
                    <div className='w-full flex gap-3'>
                        <span className='bg-[#979797] bg-opacity-20 p-2 px-4 text-lg hover:bg-[rgba(151,151,151,0.2)] cursor-pointer border border-[rgba(151,151,151,0.4)] rounded'>Newly Launched</span>
                        <span className='bg-[#979797] bg-opacity-20 p-2 px-4 text-lg hover:bg-[rgba(151,151,151,0.2)] cursor-pointer border border-[rgba(151,151,151,0.4)] rounded'>Ready to Move</span>
                        <span className='bg-[#979797] bg-opacity-20 p-2 px-4 text-lg hover:bg-[rgba(151,151,151,0.2)] cursor-pointer border border-[rgba(151,151,151,0.4)] rounded'>Under Construction</span>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <h3 className='text-xl text-slate-200'>Listed By</h3>
                    <div className='w-full flex gap-3'>
                        <span className='bg-[#979797] bg-opacity-20 p-2 px-4 text-lg hover:bg-[rgba(151,151,151,0.2)] cursor-pointer border border-[rgba(151,151,151,0.4)] rounded'>Builder</span>
                        <span className='bg-[#979797] bg-opacity-20 p-2 px-4 text-lg hover:bg-[rgba(151,151,151,0.2)] cursor-pointer border border-[rgba(151,151,151,0.4)] rounded'>Owner</span>
                        <span className='bg-[#979797] bg-opacity-20 p-2 px-4 text-lg hover:bg-[rgba(151,151,151,0.2)] cursor-pointer border border-[rgba(151,151,151,0.4)] rounded'>Dealer</span>
                    </div>
                </div>
            </section>
        </section>
    )
}
