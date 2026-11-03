import Nav from './components/Nav';
import Hero from './components/Hero';
import Platform from './components/Platform';
import { Features } from './components/Features';
import { Trust, Proof, CTA, Footer } from './components/Sections';
import { Operations, HowItWorks, Blog, FAQ } from './components/More';

export default function App() {
  return (<>
    <Nav />
    <main><Hero /><Trust /><Features /><Platform /><Operations /><HowItWorks /><Proof /><Blog /><FAQ /><CTA /></main>
    <Footer />
  </>);
}
