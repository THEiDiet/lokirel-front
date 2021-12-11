import {MyBGBox, MyH1, MyH2, TypographyWrapper} from "../assets/FirstPageComponents";
import bg_image from "../../images/backgrounds/001.jpg";

const FirstPage = () => {
    const header    = "Lokirel";
    const subheader = "Профессиональное озеленение и квалифицированная забота о растениях";
    return (
        <MyBGBox sx={{background: `url(${bg_image})`}}>
            <TypographyWrapper>
                <MyH1 variant="h1" component="h1">{header}</MyH1>
                <MyH2 variant="h2" component="h4">{subheader}</MyH2>
            </TypographyWrapper>

        </MyBGBox>
    )
}
export default FirstPage