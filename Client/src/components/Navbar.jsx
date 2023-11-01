import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className='flex h-14 justify-between items-center border-b border-orange-400 px-10 w-full'>
            <h2 className='text-3xl font-viga bg-gradient-to-tr from-[#4971c7] via-[#43b1f1] to-[#f473b7] bg-clip-text text-transparent'>Propert Ease</h2>
            <section className='flex gap-10'>
                <Link to="/">Home</Link>
                <Link to="/virtual-reality">Virtual Reality</Link>
                <Link to="/viewer">Viewer</Link>
            </section>
            <section></section>
        </nav>
    )
}
