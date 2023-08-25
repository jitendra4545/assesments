import React, { useEffect, useRef, useState } from 'react'
import { useReactMediaRecorder } from "react-media-recorder";
// import VideoRecorder from './VideoPermission';
import { Box, Button } from '@chakra-ui/react';
import RecordRTC, {

    RecordRTCPromisesHandler,
} from 'recordrtc'
import VideoRecorder from './VideoPermission';
export const HomePage = () => {
    const [stream, setStream] = useState(null)
    const [recorder, setRecorder] = useState(null)
    const [videoBlob, setVideoUrlBlob] = useState(null)
    const [Video, setVideo] = useState(null)
    // const [WebCam,setWebCam]=useState(0)
    const videoRef = useRef(null);
    const [Loading, setLoading] = useState(false)
    const [toggle, settoggle] = useState(false)

    const startWebcam = async () => {
        try {
            const vid = await navigator.mediaDevices.getUserMedia({ video: true });
            videoRef.current.srcObject = vid;
        } catch (error) {
            console.error('Error accessing webcam:', error);
        }
    };




    const startRecord = async () => {
        try {
            const mediaDevices = navigator.mediaDevices
            const stream =


                await mediaDevices.getDisplayMedia({
                    video: true,
                    audio: false,
                })
            setStream(stream)
            setLoading(true)
        } catch (err) {
            console.log(err)
        }
    }


    useEffect(() => {
         startRecord()
          startWebcam()
    }, [])


    console.log(Loading,stream,videoBlob)

    const sRec = async () => {
if(stream==null){
    startRecord()
}
        const recorder = new RecordRTCPromisesHandler(stream, {
            type: 'video',
        })

        await recorder.startRecording()
        setRecorder(recorder)
        settoggle(true)
        setVideoUrlBlob(null)
    }



    const stopRecording = async () => {
      
        if (recorder) {
            await recorder.stopRecording()
            const blob = await recorder.getBlob()
            stream.stop()
            setVideoUrlBlob(blob)
            setStream(null)
            setRecorder(null)
            settoggle(false)
             localStorage.setItem("video",JSON.stringify())
        }
    }
    return (
        <Box>


            <Box display={'flex'} mt={'50px'} alignItems={'center'} justifyContent={'center'}>
                {/* <Button onClick={startWebcam}>webcam</Button> */}
                {
                    Loading ? <Box>
                        {toggle ? <Button onClick={stopRecording}>Stop Recording</Button> : <Button onClick={sRec}>Start Recording</Button>}
                    </Box>
                        : null
                }


                {/* <Button onClick={sRec}>Rec</Button> */}
            </Box>
            <Box borderRadius={'20px'} w={'250px'} h={'200px'}>
                <video ref={videoRef} autoPlay playsInline />
            </Box>
        </Box>
    )
}
