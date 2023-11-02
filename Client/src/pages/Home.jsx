import React from 'react'

export default function Home() {
    return (
        <section className='text-white'>
            <section className='flex min-h-[calc(100vh-3.5rem)] px-20 items-center'>
                <aside className='min-h-[calc(100vh-3.5rem)] w-1/2 flex gap-5 flex-col justify-center'>
                    <h1 className='text-6xl font-viga'>PropertEase</h1>
                    <h3 className='text-4xl'>Discover Your Dream Home, Virtually</h3>
                    <p className='text-xl'>Explore, Experience, and Engage with your Ideal Living Space Virtually</p>
                    <button className='p-3 px-4 w-fit text-lg bg-[#0F59CB] rounded-lg'>Start Your Virtual House Hunt Today!</button>
                </aside>
                <img src="resources/vr.png" className='w-1/2 h-full' alt="" />
            </section>
            <section className='px-10 flex flex-col gap-10'>
                <h1 className='text-6xl text-center font-viga'>PropertEase</h1>
                <article className='flex'>
                    <img src="resources/bg2.png" className='w-1/2 h-[500px] object-contain' alt="" />
                    <div className='w-1/2 flex flex-col items-center gap-4 px-20 justify-center'>
                        <p className='text-slate-100 text-lg'>PropertEASE is revolutionizing the way people search for their ideal homes. With the help of cutting-edge AR/VR platform, we are dedicated to bridging the gap between the digital and physical realms, offering an immersive and insightful experience for home buyers and real estate professionals alike.<br />

                            Our team of passionate innovators and technology enthusiasts is committed to reshaping the landscape of online house hunting. By leveraging the latest advancements in augmented reality, virtual reality, artificial intelligence, and machine learning, we aim to provide an unparalleled virtual house exploration journey that helps you visualize your future home as if you were already there.
                            With a focus on user experience and technological excellence, we strive to empower real estate agents to showcase properties in the most engaging and informative manner, enabling potential buyers to make informed decisions with confidence</p>
                        <button className='p-2 px-3 w-fit bg-[#0F59CB] rounded-lg'>Learn more</button>
                    </div>
                </article>
            </section>
        </section>
    )
}
