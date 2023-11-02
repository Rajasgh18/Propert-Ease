import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import Home from '@pages/Home.jsx'
import Navbar from '@components/Navbar';
import VR from '@pages/VR';
import Viewer from '@pages/Viewer';
import Search from '@pages/Search';
import Footer from '@components/Footer';
import Post from '@pages/Post';
import { UserContext } from '@context/UserState'
import Form from '@pages/Form';

export default function App() {
  const { mode } = useContext(UserContext);
  const location = useLocation().pathname;
  const Navigate = useNavigate();
  useEffect(() => {
    if (mode !== 'Seller' && location.includes('post'))
      Navigate('/');
    if (mode !== 'Buyer' && location.includes('search'))
      Navigate('/');
  }, [mode])

  return (
    <section className='bg-gradient-to-tr from-[#07214A] via-[#0B3E8E] to-[#0163D3] min-h-screen'>
      <Navbar />
      <section className='min-h-screen flex flex-col gap-5'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/virtual-reality' element={<VR />} />
          <Route path='/viewer' element={<Viewer />} />
          <Route path='/search' element={<Search />} />
          <Route path='/post' element={<Post />} />
          <Route path='/post/form' element={<Form />} />
        </Routes>
      </section>
      <Footer />
    </section>
  )
}
