import React from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Display from '@/components/display'
import Pricing from '@/components/pricing'
export default function SSGPage() {
    return (<div className='flexi-w'>
        <Header/>
        <Display/>
        <Pricing />
        <Footer/>
    </div>)
}
