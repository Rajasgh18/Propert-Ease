import { Routes, Route } from 'react-router-dom';
import Home from '@pages/Home.jsx'
import Navbar from '@components/Navbar';
import VR from '@pages/VR';
import Viewer from '@pages/Viewer';

export default function App() {
  return (
    <>
      <Navbar />
      {/* <section className='min-h-screen flex flex-col'> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/virtual-reality' element={<VR />} />
          <Route path='/viewer' element={<Viewer />} />
        </Routes>
      {/* </section> */}
    </>
  )
}
