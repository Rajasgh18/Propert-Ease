import { useEffect } from "react";

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

    return (
        <>
            {/* <iframe className="min-h-[calc(100vh-3.5rem)] w-full" src="" id="api-frame" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true"></iframe> */}
            <div className="sketchfab-embed-wrapper">
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
                    className="w-full min-h-[calc(100vh-3.5rem)]"
                    web-share
                    src="https://sketchfab.com/models/d89f5f0bec144c4c9ad9bd3e6157d685/embed"
                />
            </div>
        </>
    )
}
