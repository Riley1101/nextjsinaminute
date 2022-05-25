import Header from '@/components/header'
import Footer from '@/components/footer'
import Overview from '@/components/overview'
import Hero from '@/components/hero'
import getCourses from '@/queries/getCourses'
let hero = {
  title: "Next in a minute",
  description: "This is a SSG page with data and incremental build",
}
export default function Home({data}) {

  return (
    <div className='flexi-w'>
     <Header/>
      <Hero {...hero} />
      <Overview data={data}/>
     <Footer/>
    </div>
  )
}
export async function getStaticProps() {
  const data = await getCourses();
  return {
    props: {
      data: data,
    },
    revalidate: 60,
  }
}
