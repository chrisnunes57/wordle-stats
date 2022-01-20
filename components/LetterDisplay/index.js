import styles from './LetterDisplay.module.scss';
import Letter from './Letter';

function LetterDisplay({data}) {

    return (
        <section className={styles['letter-display-wrapper']}>
            {data.map((letterData, i) => {
                return <Letter letterData={letterData} key={i} />
            })}
        </section>
    )
}


export default LetterDisplay
