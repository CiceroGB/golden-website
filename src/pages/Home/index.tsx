import { InfoSection } from "../../components/InfoSection";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';


export function Home() {
    return (
        <>
        <InfoSection {...homeObjOne} />
        <InfoSection {...homeObjTwo} />
        <InfoSection {...homeObjThree} />
        <InfoSection {...homeObjFour} />
        </>
    )
}


