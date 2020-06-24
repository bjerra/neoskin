import React from 'react'
import SEO from '../components/SEO'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import useSiteMetadata from './SiteMetadata'
import './all.sass'

const TemplateWrapper = ({ pageTitle, pageDescription, children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <SEO title={pageTitle || title} description={pageDescription || description}/>      
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default TemplateWrapper
