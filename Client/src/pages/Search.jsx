import { BsChevronDown } from "react-icons/bs";
import Map from "@components/Map";
import { useState } from "react";
import axios from 'axios';

export default function Search() {
    const [search, setSearch] = useState('');
    const [queries, setQueries] = useState([]);
    const handleChange = async (e) => {
        setSearch(e.target.value);
        console.log(e.target.value)
        try {
            const res = await axios.get(`https://api.mapbox.com/search/searchbox/v1/suggest?q=${e.target.value}&access_token=pk.eyJ1Ijoic2VhcmNoLW1hY2hpbmUtdXNlci0xIiwiYSI6ImNrNnJ6bDdzdzA5cnAza3F4aTVwcWxqdWEifQ.RFF7CVFKrUsZVrJsFzhRvQ&session_token=67de16b7-9cdb-42cd-bad7-57a1dd2701e7`)
            setQueries(res.data.suggestions);
            console.log(res.data)
            console.log(e.target.value)
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <section className='p-10 min-h-[calc(100vh-3.5rem)] flex flex-col items-center text-white gap-10'>
            <h1 className='text-3xl tracking-wider'>Find Property for Sale/Rent in your City!</h1>
            <section className='flex flex-col w-[80%] bg-black bg-opacity-40 relative rounded-[36px] pt-5 gap-4'>
                <div className='h-1/2 flex gap-5 text-lg mx-10 items-start'>
                    <button>BUY</button>
                    <button>RENT</button>
                    <button>PG/CO-LIVING</button>
                </div>
                <div className="flex flex-col relative">
                    <div className='rounded-full text-xl w-full gap-2 flex bg-white text-slate-700'>
                        <p className='h-full p-5 px-4 border-r border-slate-400 flex items-center gap-4'><span className="px-4">Raipur</span><BsChevronDown /></p>
                        <input value={search} onChange={handleChange} className='bg-transparent w-full focus:outline-none' type="text" />
                        <button className='rounded-full p-4 px-8 text-white m-1 bg-[#0F59CB]'>Search</button>
                    </div>
                    {search.length !== 0 && <div className="absolute w-[60%] rounded max-h-60 overflow-y-auto text-slate-700 bg-white left-[12%] top-[100%] my-4 z-10">
                        {queries.length !== 0 ? queries.map(q => {
                            return <div className="p-2 cursor-pointer border-b border-slate-300 hover:bg-blue-50 rounded">
                                <h2>{q.name}</h2>
                                <p className="text-slate-500 text-sm">{q.full_address || q.place_formatted}</p>
                            </div>;
                        })
                            : <p className="text-center p-3 shadow-lg text-slate-700">No Items Founds</p>}

                    </div>}
                </div>
            </section>
            <section className="h-[400px] w-[80%] flex justify-center">
                <Map />
            </section>
            <section className="grid grid-cols-3 w-[80%] gap-10">
                <div className="w-full h-72 rounded">
                    <iframe className="w-full h-full" src="https://3dwarehouse.sketchup.com/embed/30cc94c4319abfcfa7618c37f7ead62e?token=sbo8IjlWfII=&binaryName=s21" width="580" height="326"></iframe>
                </div>
                <div className="w-full h-72 rounded">
                    <iframe className="w-full h-full" src="https://3dwarehouse.sketchup.com/embed/5fb15dc72df054eaeffb32a827158a85?token=EG9YknLDs20=&binaryName=s21" width="580" height="326"></iframe>
                </div>
                <div className="w-full h-72 rounded">
                    <iframe className="w-full h-full" src="https://3dwarehouse.sketchup.com/embed/b2fa21f4-62df-4a31-acd2-6003fdcbf1f1?token=eYKz7WfDlx0=&binaryName=s21" width="580" height="326"></iframe>
                </div>
            </section>
        </section>
    )
}
