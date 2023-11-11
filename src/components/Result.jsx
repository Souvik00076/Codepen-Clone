import {Box,styled} from '@mui/material'
import { useContext,useState, useEffect } from 'react'
import { DataContext } from '../context/DataProvider'


const Result=()=>{

    const [src,setSrc]=useState('')
    const {html,css,js}=useContext(DataContext)
    const srcCode=`
        <html>
            <body>${html}</body>
            <style> ${css}</style>
            <script> ${js}</script>
        </html>
    `
    useEffect(()=>{
            const timeOut=setTimeout(()=> {
                setSrc(srcCode)
            },2000)
            return ()=>{clearTimeout(timeOut)}
    },[html,css,js])
    return (
        <div>
            <iframe  
            srcDoc={src}
            sandbox='allow-scripts'
            frameborder="0"
            title='Output'
            ></iframe>
        </div>
    )
}

export default Result