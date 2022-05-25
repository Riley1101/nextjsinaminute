import React from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Markdown from '@/components/markdown'
import getPosts from '@/queries/getPosts'
import PostHero from '../../components/postHero'
import Meta from '@/components/meta'
export default function PostDetail({post}) {
    let {content,coverImage,excerpt,title} = post;
    let meta = {
        title: title,
        description: excerpt,
        url: `https://nextjsinaminute.vercel.app/post/${post.id}`,
        image: coverImage.url,
    }
    return (<div className='flexi-w'>
        <Meta meta={meta}/>
        <Header />
        <PostHero coverImage={coverImage} excerpt={excerpt} title={title}/>
        <Markdown content={content}/>
        <Footer />
    </div>)
}

export async function getStaticProps({params}) {
    const data = await getPosts();
    const post = data.posts.find(post => post.id === params.id);
    return {
        props: {
            post: post
        }
    }
}

export async function getStaticPaths() {
    const data = await getPosts()
    return {
        paths: data.posts.map(post => ({
            params: {
                id: post.id
            }
        })),
        fallback: false
    }
}
