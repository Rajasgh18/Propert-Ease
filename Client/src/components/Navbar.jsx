import { useContext } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { UserContext } from '@context/UserState'

export default function Navbar() {

    const { mode, setMode } = useContext(UserContext);

    return (
        <nav className='flex h-14 justify-between items-center border-b border-white text-white px-10 w-full'>
            <h2 className='text-3xl font-viga bg-gradient-to-tr from-[#4971c7] via-[#43b1f1] to-[#f473b7] bg-clip-text text-transparent'>Propert Ease</h2>
            <section className='flex gap-10'>
                <Link to="/">Home</Link>
                <Link to="/virtual-reality">Virtual Reality</Link>
                <Link to="/viewer">Viewer</Link>
                {mode === "Buyer" && <Link to="/search">Search</Link>}
                {mode === "Seller" && <Link to="/post">Post</Link>}
            </section>
            <button onClick={() => setMode(mode === "Buyer" ? "Seller" : "Buyer")} className={`border  px-3 p-1 rounded ${mode === "Buyer" ? "border-blue-700 bg-blue-400" : "border-green-700 bg-green-400"} text-white`}>{mode}</button>
        </nav>
    )
}
