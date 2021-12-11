import {AppBar, Button, Toolbar, Typography} from "@mui/material";
import {myTheme} from "../assets/customTheme";

const Header = () => {
    return (
        <AppBar position='sticky' sx={{m: 0}} aria-setsize={10}>

            <Toolbar variant={'regular'}>

                <Typography variant="p" component="div" sx={{flexGrow: 1}}>
                    Lokirel
                </Typography>
                <Button variant="text" sx={{color:myTheme.palette.primary.contrastText}}>Контакты</Button>
            </Toolbar>
        </AppBar>
    )
}

export default Header