import React from 'react'
import {Helmet} from 'react-helmet'
import Navigation from './Navigation'
import HeadshotImg from './headshot.png'
import Footer from './Footer'
import {Link} from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap'

export default class extends React.Component {
  state = {
    data: {
      fields: {
        customer_logos: []
      }
    }
  }

  render() {
    const {fields} = this.state.data

    return (<div>
      <Helmet>
        <title>{fields.seo_title}</title>
        <meta property='og:title' content={fields.facebook_open_graph_title}/>
      </Helmet>
      <Navigation/>
      <div className="container-fluid content">
        <div className="row text-center">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <div id="logo">Colby Hemond.</div>
            <div className="typewriter">
              <h2>Developer.</h2>
            </div>
            <div className="py-5">
            <Nav.Link href="#about" className="ml-auto">
              <Link to="/about">
                <button className="btn btn-warning align-content-center">Learn more about me.</button>
              </Link>
            </Nav.Link>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <img id="headshot-img" src={HeadshotImg} alt=""></img>
          </div>

        </div>
      </div>
      <Footer/>
    </div>)
  }
}
