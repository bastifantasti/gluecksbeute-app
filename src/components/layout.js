import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'
import Footer from "./footer";

const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
            { name: 'charset', content: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
          ]}
          link={[
              { rel: 'icon', href: 'assets/img/favicon.png'},
              { rel: 'apple-touch-icon', href: 'assets/img/apple-touch-icon.png'},
              { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,600,600i,700,700i'},
              { rel: 'stylesheet', href: 'vendor/bootstrap/css/bootstrap.min.css'},
              { rel: 'stylesheet', href: 'vendor/icofont/icofont.min.css'},
              { rel: 'stylesheet', href: 'vendor/boxicons/css/boxicons.min.css'},
              { rel: 'stylesheet', href: 'vendor/venobox/venobox.css'},
              { rel: 'stylesheet', href: 'vendor/owl.carousel/assets/owl.carousel.min.css'}
          ]   }
          script={[{
              src: 'vendor/jquery/jquery.min.js'
          }]}

          >
          <html lang="de" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
          {children}
          <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
