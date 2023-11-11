import Editor from "./Editor"
import {Box,styled} from '@mui/material'
import { useContext } from "react"
import { DataContext } from "../context/DataProvider"


const Container=styled(Box)`
    display:flex;
    background:#023047;
`
const Code=()=>{
    const {html,setHtml,css,setCss,js,setJs}=useContext(DataContext)
    return (<Container>
        <Editor
         heading='HTML'
         icon='/'
         color='#FF3C41'
         value={html}
         onChange={setHtml}
         />
        <Editor 
        heading='CSS'
        icon='*'
        color='#FCD009'
        value={css}
        onChange={setCss}
        />
        <Editor 
        heading='JAVASCRIPT'
        icon='{}'
        color='#0EBEFF'
        value={js}
        onChange={setJs}
        />

    </Container>
        )
}

export default Code