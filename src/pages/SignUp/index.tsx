import { InfoSection } from '../../components/InfoSection';
import { homeObjOne, homeObjThree } from './Data';

export function SignUp() {
    return (
        <>
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjThree} />
        </>
    );
}

