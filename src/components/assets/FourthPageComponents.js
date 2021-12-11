import styled from "@emotion/styled";
import {Box, Paper, Typography} from "@mui/material";
import {myTheme} from "./customTheme";

export const Step = styled(Box)(({theme})=> ({
    padding:'2rem',
    display:'flex',
    justifyContent:'flex-start',
    [myTheme.breakpoints.up('xl')]: {

    },
    [myTheme.breakpoints.down('xl')]: {

    },
    [myTheme.breakpoints.down('lg')]: {
        padding:'1.5rem'
    },
    [myTheme.breakpoints.down('md')]: {
        padding:'0.7rem',
        fontSize:'0.9rem',
        lineHeight:'1rem'
    },
}))
export const Number = styled(Paper)(({theme})=>({
    fontSize:'3rem',
    textAlign:'center',
    lineHeight:'4.8rem',
    width:'5rem',
    minWidth:'5rem',
    height:'5rem',
    borderRadius:'5rem',
    color:myTheme.palette.primary.light,
    border: '3px solid'+ myTheme.palette.primary.light,
    backgroundColor:myTheme.palette.primary.contrastText,
    [myTheme.breakpoints.up('xl')]: {

    },
    [myTheme.breakpoints.down('lg')]: {

    },
    [myTheme.breakpoints.down('md')]: {
        fontSize:'2rem',
        lineHeight:'3.8rem',
        width:'4rem',
        minWidth:'4rem',
        height:'4rem',
    },
    [myTheme.breakpoints.down('sm')]: {
        fontSize:'1.4rem',
        lineHeight:'2.8rem',
        width:'3rem',
        minWidth:'3rem',
        height:'3rem',
    },

}))

export const FourStepsTitle = styled(Typography)(({theme})=>({
    fontSize:'2.25rem',
    paddingBottom: '3.1rem',
    maxWidth:'44rem',
    fontWeight:myTheme.typography.fontWeightBold,
    position:'relative',
    ':after': {
        content:'""',
        position:'absolute',
        bottom: '1.5rem',
        left: '0',
        background:myTheme.palette.secondary.main,
        width: '100%',
        height:'0.25rem',
        zIndex:5,
    },
    [myTheme.breakpoints.up('xl')]: {

    },
    [myTheme.breakpoints.down('lg')]: {
        fontSize:'1.8rem',
        paddingBottom: '2rem',
        ':after': {
            bottom: '1rem',
        }
    },
    [myTheme.breakpoints.down('md')]: {
        fontSize:'1.3rem',
        lineHeight:'1.5rem',
        paddingBottom: '1.4rem',
        ':after': {
            bottom: '0.7rem',
        }
    },
    [myTheme.breakpoints.down('sm')]: {
    },
}))
export const FourStepsSubTitle = styled(Typography)(({theme})=> ({
    fontSize:'1.2rem',
    paddingBottom: '3.1rem',
    maxWidth:'36rem',
    fontWeight:myTheme.typography.fontWeightMedium,
    color:myTheme.palette.primary.light,
    [myTheme.breakpoints.up('xl')]: {

    },
    [myTheme.breakpoints.down('lg')]: {
        paddingBottom: '2rem',
    },
    [myTheme.breakpoints.down('md')]: {
        fontSize:'1rem',
        lineHeight:'1.2rem',
        paddingBottom: '1.4rem',
    },
    [myTheme.breakpoints.down('sm')]: {
        paddingBottom: '1rem',
    },
}))