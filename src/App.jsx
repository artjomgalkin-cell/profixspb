import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import Contacts from './pages/Contacts'
import ThankYou from './pages/ThankYou'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </Layout>
  )
}
