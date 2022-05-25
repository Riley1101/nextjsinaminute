import React from 'react';
import Head from 'next/head';

let defaultMeta = {
    title: 'NextJS in a minute',
    description: 'A brief introduction to NextJS and its features ',
    url: 'https://nextjsinaminute.vercel.app/',
    image: 'https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/nPMxj0ZWRcCpunwvlYiA',
}

const Meta = ({ meta = defaultMeta }) => {
    return (<Head>
        <title>{meta.title}</title>
        <meta name="title" content={meta.title} />
        <meta name="description" content={meta.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={meta.url} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.image} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={meta.url} />
        <meta property="twitter:title" content={meta.title} />
        <meta property="twitter:description" content={meta.description} />
        <meta property="twitter:image" content={meta.image} />
    </Head>
    )
}

export default Meta;

