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
                <iframe className="min-h-[calc(100vh-3.5rem)] w-full" src="https://my.matterport.com/show?m=QGRPbYbvPLR&play=1&applicationKey=6gqc4925umxqxqn8rwib7893c" frameborder='0' allowfullscreen allow='xr-spatial-tracking'></iframe>            </div>
        </>
    )
}
