import React from 'react'
import { BiLogoInstagramAlt, BiLogoFacebookCircle, BiLogoPinterest } from 'react-icons/bi';

export default function Footer() {
    const footer = [
        {
            title: "About the Shop",
            desc: "A trusted fashion brand that focuses on ethnic designer apparel with everyday essentials a blend of comfort and innovative designing."
        },
        {
            title: "Support",
            items: ["About Us", "Blogs", "Refund Policy", "Careers", "Shipping and Delivery"]
        },
        {
            title: "Contact",
            items: ["FAQs", "Terms of Service", "Privacy Policy", "Contact Us"]
        },
        {
            title: "Newsletter",
            desc: "Subscribe to receive updates, access to exclusive deals, and more.",
        }
    ]
    return (
        <footer className='min-h-96 text-slate-100 flex-col flex justify-between relative w-full lg:p-14 md:p-10 overflow-hidden sm:p-8 p-4 py-10 text-secondary font-light'>
            <img src="resources/footer.jpg" className='absolute top-0 w-full left-0 opacity-10' alt="" />
            <section className='w-full grid lg:grid-cols-4 z-[2] md:grid-cols-2 gap-10'>
                {footer.map((item, index) => {
                    return <div key={index} className='w-full flex flex-col gap-2 text-sm'>
                        <h3 className='text-lg font-bold text-white'>{item.title}</h3>
                        {(index === 0 || index === 3)
                            ? <p className='cursor-default'>{item.desc}</p>
                            : <ul className='flex flex-col gap-2'>{item.items.map((i, index) => {
                                return <li key={index} className='hover:underline w-fit cursor-default'>{i}</li>;
                            })}</ul>}
                        {index === 0 && <div className='flex gap-2'>
                            <BiLogoFacebookCircle className='w-6 h-6 hover:text-[#0F59CB] cursor-pointer' />
                            <BiLogoInstagramAlt className='w-6 h-6 hover:text-[#0F59CB] cursor-pointer' />
                            <BiLogoPinterest className='w-6 h-6 hover:text-[#0F59CB] cursor-pointer' />
                        </div>}
                        {index === 3 && <div className='flex flex-col gap-2'>
                            <input type="text" placeholder='Enter Your Email Address' className='w-fit p-2 rounded border border-[#0F59CB] focus:outline-none text-slate-700 placeholder-[#7A7A7A]' />
                            <button className='p-3 px-4 bg-[#0F59CB] rounded hover:bg-primaryHover text-white w-fit my-2'>SUBSCRIBE</button>
                        </div>}
                    </div>;
                })}
            </section>
            <section className='text-sm z-[2]'>
                <p className='cursor-default'>&#x24B8; PropertEase</p>
                <p className='font-normal hover:underline cursor-pointer'>Created By Coding Wizards</p>
            </section>
        </footer>
    )
}
