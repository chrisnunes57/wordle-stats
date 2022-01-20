import Head from 'next/head'

function DefaultHead() {
    return (
        <Head>
            <title>Wordle Stats</title>
            <meta property="og:title" content="Wordle Stats" key="title" />
        </Head>
    )
}

export default DefaultHead;
