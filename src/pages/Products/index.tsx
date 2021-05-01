import { InfoSection } from '../../components/InfoSection';
import { homeObjOne, homeObjTwo } from './Data';

export function Products() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
    </>
  );
}