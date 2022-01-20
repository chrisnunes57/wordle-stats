import Head from 'next/head'

function DefaultHead() {
    return (
        <Head>
            <title>Wordle Stats</title>
            <meta property="og:title" content="Wordle Stats" key="title" />

            <meta charSet="utf-8" />
            <meta name="description" content="Check out the most common letter positions in Wordle" />
            <meta name="author" content="Chris Nunes" />
            <meta name="keywords" content="wordle letter position chris nunes" />

            <meta property="og:url" content="https://wordle-stats-delta.vercel.app/" />
            <meta property="og:image" content="/img/screencap.png" />
        </Head>
    )
}

export default DefaultHead;
