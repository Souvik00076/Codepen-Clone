import { useState } from 'react';
import {Box,styled} from '@mui/material'
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import {Controlled as CodeMirrorEditor} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'


const Heading=styled(Box)`
    background:#1d1e22;
    display:flex;
    padding: 9px 12px;
`
const Header=styled(Box)`
    display:flex;
    color:white;
    background:#023047;
    justify-content:space-between;
`
const Container=styled(Box)`
    flex-grow:1;
    flex-basic:0;
    display:flex;
    flex-direction:column;
    padding: 0 8px 8px;
    transition : flex-grow 2s;
`
const Editor=({heading,icon,color, value, onChange})=>{
    const handleChange=(Editor,data,value)=>{
        onChange(value)
    }
    const [open, setOpen]=useState(true)
    return (
    <Container style={ open ? null : {flexGrow:0}}>
        <Header>
            <Heading>
                <Box 
                    component="span"
                   style={{
                        background:color, 
                        height:20,
                        width:20,
                        display:'flex',
                        placeContent:'center',
                        borderRadius:5,
                        marginRight:5,
                        paddingBottom:2
                   }}
                >
                    {icon}
                </Box>
                {heading}
            </Heading>
            <CloseFullscreenIcon
                fontSize='small'
                style={{alignSelf:'center'}}
                onClick={()=>{ setOpen(prevState => !prevState)}}
            />
        </Header>
        <CodeMirrorEditor 
            className='controlled-editor'
            value={value}
            onBeforeChange={handleChange}
            options= {{
                theme:'material',
                lineNumbers:true
            }}
        />
    </Container>
    )
        }                  

export default Editor