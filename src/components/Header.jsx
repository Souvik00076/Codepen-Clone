

import { AppBar,Toolbar,styled } from "@mui/material";

const AppBarContainer=styled(AppBar)`
        background: #023047;
        height:9vh;
`
const Header=()=>(
    <AppBarContainer position="static">
        <Toolbar>
        </Toolbar>
    </AppBarContainer>
)

export default Header