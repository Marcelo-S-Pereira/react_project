import { AppBar, MenuItem, Toolbar, styled} from "@mui/material"


const NaviBar = () => {

    const StyledToolbar = styled(Toolbar)(({ theme }) => ({
        display: "flex",
        justifyContent:"space-evenly"
    

    }))

    return (
        <>
            <AppBar position="absolute">
                <StyledToolbar>
                <MenuItem>About</MenuItem>
                <MenuItem>Skills</MenuItem>
                <MenuItem>Project</MenuItem>
                </StyledToolbar>

                
            </AppBar>

        </>
    )
}

export default NaviBar