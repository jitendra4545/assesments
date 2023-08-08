import React, { useRef, useState } from 'react'
import QRCode from 'qrcode'
export const Input = () => {

    const [Name, setName] = useState("")
    const [WebsiteName, setWebsiteName] = useState("")
    const [url, seturl] = useState("")
    const qrCodeRef = useRef(null);
    const [showQRCode, setShowQRCode] = useState("");


// console.log(data)
const GenerateQR=()=>{
    if(Name==""||WebsiteName==""||url==""){
alert('fill all the blanks')
    }else{
        // const linkName=WebsiteName
        // const link=linkName.link(url)
        const textToDisplay = 'Welcome to Example Website!';
        let opt=[
            { data: Name.toUpperCase()+WebsiteName.toUpperCase(), mode: 'alphanumeric'},
            { data:url , mode: 'byte' }
          ]

          
          
        try{
           let res= QRCode.toDataURL(opt, function (err, url) {
          
            console.log(url)
                setShowQRCode(url)
              
              })
        }catch(err){
            console.log(err)
        }
        
    }
 
}



// const downloadQRCode = () => {
//     const link = document.createElement('a');
//     link.download = 'qr_code.png';
//     link.href = qrCodeRef.current.querySelector('img').src;
//     link.click();
//   };

    return (
        <div>
        <div style={{display:'flex',justifyContent:'center',marginTop:'40px'}}>
            <div style={{ display: "grid", width: "40%" }}>
                <input placeholder='enter name' type="text" onChange={(e) => setName(e.target.value)} />
                <input placeholder='enter website name' type="text" onChange={(e) => setWebsiteName(e.target.value)} />
                <input placeholder='enter url' type="text" onChange={(e) => seturl(e.target.value)} />
                <button onClick={GenerateQR}>Generate</button>
                
            {
               
                showQRCode &&
                <>
                <img src={showQRCode} />
<a href={showQRCode} download><button >download</button></a>
                </>

            } 

             
            </div>

        </div>
        </div>
    )
}
