import { FeatureSection} from '../components/ui/bento'
import Header from '../components/ui/header'
import Hero from '../components/ui/hero'
import { Lamp } from '../components/ui/lamp'
import Layout from '../components/ui/layout'
import Navbar from '../components/ui/navbar'
import Sparkle from '../components/ui/sparkle'
import { Contact } from '../components/ui/contact'

const Index = () => {
  return (
    <>
      <Layout>
        <Navbar />
        <Lamp/>
        <Header />
        <FeatureSection/>
        <Hero />
        <Sparkle/>
        {/* <Pricing/> */}
        <Contact/>
      </Layout>
    </>
  )
}

export default Index
