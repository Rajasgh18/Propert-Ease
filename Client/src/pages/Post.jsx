import { Link } from 'react-router-dom';

export default function Post() {
  return (
    <section className='p-14 text-white flex flex-col items-center gap-10'>
      <h1 className='font-viga text-5xl'>Post Your Ad</h1>
      <section className='rounded flex flex-col gap-2 w-[50%]'>
        <Link to="/post/form?t=sale-house" className='text-center p-4 text-xl bg-[rgba(151,151,151,0.13)] hover:bg-[rgba(151,151,151,0.2)] border border-[rgba(151,151,151,0.4)] '>FOR SALE : Houses & Apartment</Link>
        <Link to="/post/form?t=rent-house" className='text-center p-4 text-xl bg-[rgba(151,151,151,0.13)] hover:bg-[rgba(151,151,151,0.2)] border border-[rgba(151,151,151,0.4)] '>FOR RENT : Houses & Apartment</Link>
        <Link to="/post/form?t=sale-shop" className='text-center p-4 text-xl bg-[rgba(151,151,151,0.13)] hover:bg-[rgba(151,151,151,0.2)] border border-[rgba(151,151,151,0.4)] '>FOR RENT : Shop & Offices</Link>
        <Link to="/post/form?t=rent-shop" className='text-center p-4 text-xl bg-[rgba(151,151,151,0.13)] hover:bg-[rgba(151,151,151,0.2)] border border-[rgba(151,151,151,0.4)] '>FOR SALE : Shop & Offices</Link>
        <Link to="/post/form?t=pg" className='text-center p-4 text-xl bg-[rgba(151,151,151,0.13)] hover:bg-[rgba(151,151,151,0.2)] border border-[rgba(151,151,151,0.4)] '>PG & Guest Houses</Link>
      </section>
    </section>
  )
}
