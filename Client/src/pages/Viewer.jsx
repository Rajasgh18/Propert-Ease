import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Viewer() {

    // useEffect(() => {
    //     let iframe = document.getElementById('api-frame');
    //     let uid = '7w7pAfrCfjovwykkEeRFLGw5SXS';
    //     let client = new Sketchfab(iframe);
    //     client.init(uid, {
    //         success: function onSuccess(api) {
    //             api.start();
    //             api.addEventListener('viewerready', function () {

    //                 // API is ready to use
    //                 // Insert your code here
    //                 console.log('Viewer is ready');

    //             });
    //         },
    //         error: function onError() {
    //             console.log('Viewer error');
    //         }
    //     }, []);
    // })

    const location = useLocation();
    const query = new URLSearchParams(location.search).get('q');
    const [hide, setHide] = useState(false);
    const [url, setUrl] = useState("");

    useEffect(() => {

        switch (query) {
            case '3bhk':
                setUrl("https://3dwarehouse.sketchup.com/embed/b2fa21f4-62df-4a31-acd2-6003fdcbf1f1?token=eYKz7WfDlx0=&binaryName=s21");
                break;
            case '1bhk':
                setUrl("https://3dwarehouse.sketchup.com/embed/5fb15dc72df054eaeffb32a827158a85?token=EG9YknLDs20=&binaryName=s21");
                break;
            case 'villa':
                setUrl("https://3dwarehouse.sketchup.com/embed/30cc94c4319abfcfa7618c37f7ead62e?token=sbo8IjlWfII=&binaryName=s21");
                break;
        }
    }, [])

    const handleClick = (e) => {
        switch(e){
            case "vr":
                setUrl("https://my.matterport.com/show/?m=AUqxaJcbmZd&sr=-1.9%2C.87&ss=3&note=kcriz537iz3e1dbwzzsm2h0pd&pin-pos=3.39%2C.26%2C-3.23")
                break;
            case "kitchen":
                setUrl("https://my.matterport.com/show/?m=GcepsuwfPCG&sr=-1.26%2C-.52&ss=1&note=cq62xy9dd41ua0w6fgm8tpe9a&pin-pos=.74%2C.87%2C-.38")
                break;
            case "lab":
                setUrl('https://my.matterport.com/show/?m=GrvsU1UWfkD' )
                break;
            case "room":
                setUrl("https://my.matterport.com/show/?m=QGRPbYbvPLR&sr=-1.57%2C1.43&ss=1&note=iy54ifnbhcds1sq8d7kb4y3rb&pin-pos=-1.54%2C.21%2C-1.38")
                break;
        }
    }

    return (
        <>
            {/* <iframe className="min-h-[calc(100vh-3.5rem)] w-full" src="" id="api-frame" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true"></iframe> */}
            <div className="sketchfab-embed-wrapper text-white flex flex-col gap-4">
                <iframe className="min-h-[calc(100vh-9rem)] w-full" src={url}></iframe>
                <div className='w-full flex justify-between px-5'>
                    <div className="flex gap-3">
                        <span onClick={() => handleClick("vr")} className='bg-[#979797] bg-opacity-20 p-2 px-4 text-lg hover:bg-[rgba(151,151,151,0.2)] cursor-pointer border border-[rgba(151,151,151,0.4)] rounded'>View In VR</span>
                        <span onClick={() => handleClick("kitchen")} className='bg-[#979797] bg-opacity-20 p-2 px-4 text-lg hover:bg-[rgba(151,151,151,0.2)] cursor-pointer border border-[rgba(151,151,151,0.4)] rounded'>Kitchen</span>
                        <span onClick={() => handleClick("room")} className='bg-[#979797] bg-opacity-20 p-2 px-4 text-lg hover:bg-[rgba(151,151,151,0.2)] cursor-pointer border border-[rgba(151,151,151,0.4)] rounded'>Room</span>
                        <span onClick={() => handleClick("lab")} className='bg-[#979797] bg-opacity-20 p-2 px-4 text-lg hover:bg-[rgba(151,151,151,0.2)] cursor-pointer border border-[rgba(151,151,151,0.4)] rounded'>Lab</span>
                    </div>
                    <div className="relative flex items-center">
                        <span onClick={() => setHide(hide ? false : true)} className='bg-[#979797] bg-opacity-20 p-2 px-4 text-lg hover:bg-[rgba(151,151,151,0.2)] cursor-pointer border border-[rgba(151,151,151,0.4)] rounded'>View In AR</span>
                        {hide && <img src="resources/qr.png" className="w-full p-2 bg-slate-100 border border-slate-300 rounded object-contain absolute right-0 mb-3 bottom-[100%]" />}
                    </div>
                </div>
            </div>
        </>
    )
}
