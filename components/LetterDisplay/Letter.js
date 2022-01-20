import CustomGraph from './CustomGraph';
import styles from './LetterDisplay.module.scss';
const colors = ["#004c6d", "#1e7595", "#3da1bb", "#61d0de"];


function getTextColor(percentage) {

    if (percentage > 35) {
        return colors[0];
    } else if (percentage > 25) {
        return colors[1];
    } else if (percentage > 15) {
        return colors[2];
    } else {
        return colors[3];
    }
}

function Letter({ letterData }) {

    return (
        <div className={styles['letter-wrapper']} style={{"color": getTextColor(letterData.percentage)}} >
            <h1 className={styles['big-letter']} data-percentage={letterData.percentage.toFixed(2) + "%"}>{letterData ? letterData.letter : ""}</h1>
            <CustomGraph letterData={letterData} />
        </div>
    )
}


export default Letter
