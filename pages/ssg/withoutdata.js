import React from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Display from '@/components/display'
import Pricing from '@/components/pricing'
import Meta from '@/components/meta'
export default function SSGPage() {
   
    return (<div className='flexi-w'>
        <Meta />
        <Header/>
        <Display/>
        <Pricing />
        <Footer/>
    </div>)
}
