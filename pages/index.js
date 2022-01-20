import DefaultHead from '../components/DefaultHead';
import LetterDisplay from '../components/LetterDisplay';
import { getLetterData } from '../lib/letter-data';

function HomePage( {data} ) {

  return (
    <>
      <DefaultHead />

      <h3>Wordle Letter Distributions</h3>

      <LetterDisplay data={data} />
    </>
  )
}

export async function getStaticProps(context) {

  const letterData = getLetterData();

  return {
    props: {
      "data": letterData
    }
  }
}

export default HomePage
