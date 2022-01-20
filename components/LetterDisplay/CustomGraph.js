import styles from './LetterDisplay.module.scss';
const colors = ["#004c6d", "#0f6081", "#1e7595", "#2d8ba8", "#3da1bb", "#4eb8cd", "#61d0de", "#76e7ef", "#8cffff"];

function getBarColor(positions, i) {
    const totalOccurences = positions.reduce((a, b) => a + b)

    // get percentage of occurences at this spot compared to all
    const percent = positions[i] / totalOccurences * 100;
    
    if (percent > 65) {
        return colors[0];
    } else if (percent > 50) {
        return colors [1];
    } else if (percent > 40) {
        return colors[2];
    } else if (percent > 30) {
        return colors[3];
    } else if (percent > 20) {
        return colors[4];
    } else if (percent > 15) {
        return colors[5];
    } else if (percent > 10) {
        return colors[6];
    } else if (percent > 5) {
        return colors[7];
    } else {
        return colors[8];
    }
}

function CustomGraph({ letterData }) {

    const BAR_HEIGHT = 70;
    const maxVal = Math.max(...letterData.positions);
    const bars = letterData.positions.map( (val, i) => {
        return {
            height: BAR_HEIGHT * val / maxVal,
            color: getBarColor(letterData.positions, i)
        }
    })

    return (
        <div className={styles['graph-wrapper']}>
            <svg viewBox={"0 0 150 " + BAR_HEIGHT}>
                {bars.map( (data, i) => {
                    return <rect 
                            width="20" 
                            height={data.height} 
                            x={22 * i}
                            y={BAR_HEIGHT - data.height}
                            fill={data.color} 
                            key={i} >
                    </rect>
                })}
            </svg>
        </div>
    )
}


export default CustomGraph
