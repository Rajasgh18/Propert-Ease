import axios from 'axios';
import { useState } from 'react'

export default function VR() {

  const [entries, setEntries] = useState("");

  const handleEntries = async () => {
    try {
      const res = await axios.get("https://api.echo3D.com/query?key=odd-scene-3656")
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <section className='p-12 flex flex-col gap-5'>
      <button onClick={handleEntries} className='bg-gradient-to-tr from-[#4971c7] to-[#43b1f1] rounded px-3 opacity-90 hover:opacity-100 transition-opacity p-2 w-fit text-white'>Get Entries</button>
      <section className='rounded grid grid-cols-4 gap-5'>
      <iframe
                    title="Apartment"
                    frameBorder="0"
                    allowFullScreen
                    mozallowfullscreen="true"
                    webkitallowfullscreen="true"
                    allow="autoplay; fullscreen; xr-spatial-tracking"
                    xr-spatial-tracking
                    execution-while-out-of-viewport
                    execution-while-not-rendered
                    className="w-full h-72 rounded"
                    web-share
                    src="https://sketchfab.com/models/d89f5f0bec144c4c9ad9bd3e6157d685/embed"
                />
      <iframe
                    title="Apartment"
                    frameBorder="0"
                    allowFullScreen
                    mozallowfullscreen="true"
                    webkitallowfullscreen="true"
                    allow="autoplay; fullscreen; xr-spatial-tracking"
                    xr-spatial-tracking
                    execution-while-out-of-viewport
                    execution-while-not-rendered
                    className="w-full h-72 rounded"
                    web-share
                    src="https://sketchfab.com/models/d89f5f0bec144c4c9ad9bd3e6157d685/embed"
                />
      <iframe
                    title="Apartment"
                    frameBorder="0"
                    allowFullScreen
                    mozallowfullscreen="true"
                    webkitallowfullscreen="true"
                    allow="autoplay; fullscreen; xr-spatial-tracking"
                    xr-spatial-tracking
                    execution-while-out-of-viewport
                    execution-while-not-rendered
                    className="w-full h-72 rounded"
                    web-share
                    src="https://sketchfab.com/models/d89f5f0bec144c4c9ad9bd3e6157d685/embed"
                />
      <iframe
                    title="Apartment"
                    frameBorder="0"
                    allowFullScreen
                    mozallowfullscreen="true"
                    webkitallowfullscreen="true"
                    allow="autoplay; fullscreen; xr-spatial-tracking"
                    xr-spatial-tracking
                    execution-while-out-of-viewport
                    execution-while-not-rendered
                    className="w-full h-72 rounded"
                    web-share
                    src="https://sketchfab.com/models/d89f5f0bec144c4c9ad9bd3e6157d685/embed"
                />
      </section>
    </section>
  )
}
