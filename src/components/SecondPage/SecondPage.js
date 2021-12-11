import {Box, Container, Paper, Typography} from "@mui/material";
import {myTheme} from "../assets/customTheme";
import {MyBGBox} from "../assets/FirstPageComponents";
import bg_image from "../../images/backgrounds/01.jpg";
import {FlexBox, ImageContainer, InfoContainer, MyCardTitle, MySuperTitle} from "../assets/SecondPageComponents";

const SecondPage =() => {
    const infoSuperTitle = "Фитодизайн. Озеленение интерьеров и пространств";
    const infoTitle = "Lokirel";
    const infoText = "Lokirel это команда специалистов с большим опытом работы с растениями. У нас общие цели, стремления и философия. Мы - профессионалы своего дела и знаем, как работать с растениями, делать качественный фитодизайн и создавать впечатляющие зеленые пространства.";

    return (
        <MyBGBox sx={{    background: `url(${bg_image})`}}>
            <Container maxWidth='xl' sx={{
                [myTheme.breakpoints.up('xl')]: {

                },
                [myTheme.breakpoints.down('xl')]: {

                },
                [myTheme.breakpoints.down('md')]: {
                    maxWidth:'100vw',
                    width: '100vw',
                    height:'100vh',
                    padding: '0'
                },
                [myTheme.breakpoints.down('sm')]: {
                },
            }}>
            <FlexBox>
                    <ImageContainer><Box
                        sx={{
                            width: '100%',
                            height: '100%',
                            position: 'absolute',
                            boxShadow: ' inset 10px 10px 20px rgba(0, 0, 0, 0.6)'
                        }}
                    /></ImageContainer>
                    <InfoContainer elevation={10}>
                        <MySuperTitle>{infoSuperTitle}</MySuperTitle>
                        <MyCardTitle variant='h4' component='h2'>{infoTitle}</MyCardTitle>
                        <Typography variant='body1' component='div' sx={{color: myTheme.palette.primary.contrastText,
                            [myTheme.breakpoints.up('xl')]: {

                            },
                            [myTheme.breakpoints.down('lg')]: {
                                fontSize:'0.9rem',
                            },
                            [myTheme.breakpoints.down('md')]: {
                                padding:'1rem 0 0 0'
                            },
                            [myTheme.breakpoints.down('sm')]: {
                            },}}>{infoText}</Typography>
                    </InfoContainer>
            </FlexBox>
            </Container>
        </MyBGBox>

    )
}
export default SecondPage