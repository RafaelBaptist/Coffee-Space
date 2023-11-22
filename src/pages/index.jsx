import Head from 'next/head'
import Header from '@/Components/Header/Header'
import About from '../Components/About/About'
import Products from '@/Components/Products/Products'
import Details from '@/Components/Details/Details'
import Footer from '@/Components/Footer/Footer'
import Navbar from '@/Components/Navbar/Navbar'
import Social from '../Components/social/Social'
import Reviews from '../Components/Reviews/Reviews'

export default function Home() {
  return (
    <>
      <Head>
      <title>Coffee Space</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

      </Head>
       <main>
       
           <Navbar/>
            <Header/>
            <Details/>
            <Products/>
            <About/>
            <Social />
            <Reviews/>
            <Footer/>
           
       </main>
    </>
  );
}
