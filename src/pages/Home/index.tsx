import { InfoSection } from "../../components/InfoSection";
import { Pricing } from "../../components/Pricing";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';


export function Home() {
    return (
        <>
        <InfoSection {...homeObjOne} />
        <InfoSection {...homeObjTwo} />
        <InfoSection {...homeObjThree} />
        <Pricing />
        <InfoSection {...homeObjFour} />
        </>
    )
}


