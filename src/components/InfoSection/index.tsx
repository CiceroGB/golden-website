import { Link } from 'react-router-dom';
import { Button, Container } from '../../styles/global';
import {
    InfoSec,
    InfoRow,
    InfoColumn,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    ImgWrapper,
    Img
} from './styles';

interface IData {
    homeObj: {
        primary: boolean;
        lightBg: boolean;
        lightTopLine: boolean;
        lightText: boolean;
        lightTextDesc: boolean;
        topLine: string;
        headline: string;
        description: string;
        buttonLabel: string;
        imgStart: string;
        img: string;
        alt: string;
        start: string;
    }
}


export function InfoSection({ homeObj }: IData) {
    return (
        <>
            <InfoSec lightBg={homeObj.lightBg}>
                <Container>
                    <InfoRow imgStart={!!homeObj.imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine lightTopLine={homeObj.lightTopLine}>{homeObj.topLine}</TopLine>
                                <Heading lightText={homeObj.lightText}>{homeObj.headline}</Heading>
                                <Subtitle lightTextDesc={homeObj.lightTextDesc}>{homeObj.description}</Subtitle>
                                <Link to='/sign-up'>
                                    <Button big fontBig primary={homeObj.primary}>
                                        {homeObj.buttonLabel}
                                    </Button>
                                </Link>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper start={!!homeObj.start}>
                                <Img src={homeObj.img} alt={homeObj.alt} />
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
}


