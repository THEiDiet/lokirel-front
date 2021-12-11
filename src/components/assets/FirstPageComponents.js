import styled from "@emotion/styled";
import {Box, Typography} from "@mui/material";
import bg_image from "../../images/backgrounds/001.jpg";
import {myTheme} from "./customTheme";

export const MyBGBox = styled(Box)(({theme}) => ({
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // background: `url(${bg_image})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
}))

export const MyH1 = styled(Typography)(({theme})=>  ({
        letterSpacing:'0.2rem',
        fontWeight: myTheme.typography.fontWeightBold,
        color: myTheme.palette.primary.contrastText,
        [theme.breakpoints.up('lg')]: {
            fontSize:'6rem',
        },
        [theme.breakpoints.down('lg')]: {
            fontSize:'5rem',
        },
        [theme.breakpoints.down('md')]: {
            fontSize:'3.5rem',
            letterSpacing:'0.1rem',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize:'3rem',
        },
    })
)
export const MyH2 = styled(Typography)(({theme})=>  ({
        fontWeight: myTheme.typography.fontWeightMedium,
        color: myTheme.palette.primary.contrastText,
        [theme.breakpoints.up('lg')]: {
            fontSize:'1.5rem',
        },
        [theme.breakpoints.down('lg')]: {
            fontSize:'1.2rem',
        },
        [theme.breakpoints.down('md')]: {
            fontSize:'1rem',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize:'0.9rem',
        },
    })
)
export const TypographyWrapper = styled('div')(({theme}) => (
    {   marginTop:'-10vh',
        textAlign: 'center',
        padding: '0 1rem',
        [theme.breakpoints.up('lg')]: {
            width: '60%',
        },
        [theme.breakpoints.down('lg')]: {
            width: '70%',
        },
        [theme.breakpoints.down('md')]: {
            width: '90%',
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
    }));