import React from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Hero from '@/components/hero'
import Posts from '@/components/posts'
import usePosts from '@/queries/usePosts'
export default function SSGPage() {
  let hero ={
    title:"SSG With Data ",
    description:"This is a SSG page with data and incremental build",
  }
  const  post= usePosts(10)
  return (<div className='flexi-w'>
    <Header/>
    <Hero {...hero}/>
    <Posts posts={post}/>
    <Footer/>
  </div>
  
  )
}
