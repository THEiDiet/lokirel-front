import {MyBGBox} from "../assets/FirstPageComponents";
import {myTheme} from "../assets/customTheme";
import {FlexBox} from "../assets/SecondPageComponents";
import {Box, Container, Grid, Paper} from "@mui/material";
import {FourStepsSubTitle, FourStepsTitle, Number, Step} from "../assets/FourthPageComponents";

const FourthPage = () => {
    const title = 'Озеленение пространств с Lokirel - просто, быстро и эффективно'
    const subTitle = 'Этапы разработки и внедрения проекта'
    const step1 = 'Разработка проекта озеленения, подбор растений'
    const step2 = 'Согласование проекта и договора с Заказчиком'
    const step3 = 'Реализация проекта'
    const step4 = 'Сервисное гарантийное обслуживание растений'
    return (
        <MyBGBox sx={{background:myTheme.palette.primary.contrastText}}>
            <Container maxWidth='xl' sx={{
                [myTheme.breakpoints.up('xl')]: {

                },
                [myTheme.breakpoints.down('xl')]: {
                    padding:'0 2rem'
                },
                [myTheme.breakpoints.down('md')]: {
                    maxWidth:myTheme.breakpoints.values.sm,
                    padding:'0 1rem'
                },
                [myTheme.breakpoints.down('sm')]: {
                },
            }}>
                <FlexBox sx={{flexDirection:'column', alignItems:'flex-start !important', }}>
                    <FourStepsTitle>{title}</FourStepsTitle>
                    <FourStepsSubTitle>{subTitle}</FourStepsSubTitle>
                    <Paper elevation={6} sx={{
                        borderRadius:'0.7rem', backgroundColor:myTheme.palette.primary.contrastText
                    }}>
                        <Grid container  >
                            <Grid item xs={12} md={6} lg={6}>
                                <Step><Number elevation={5}>1</Number><Box sx={{paddingLeft:'1rem'}}>{step1}</Box></Step>
                            </Grid>
                            <Grid item xs={12} md={6} lg={6}>
                                <Step><Number elevation={5}>2</Number><Box sx={{paddingLeft:'1rem'}}>{step2}</Box></Step>
                            </Grid>
                            <Grid item xs={12} md={6} lg={6}>
                                <Step><Number elevation={5}>3</Number><Box sx={{paddingLeft:'1rem'}}>{step3}</Box></Step>
                            </Grid>
                            <Grid item xs={12} md={6} lg={6}>
                                <Step><Number elevation={5}>4</Number><Box sx={{paddingLeft:'1rem'}}>{step4}</Box></Step>
                            </Grid>
                        </Grid>
                    </Paper>
                </FlexBox>
            </Container>
        </MyBGBox>
    )
}
export default FourthPage