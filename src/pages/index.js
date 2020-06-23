import React from 'react'
import { Link } from 'gatsby'
import axios from 'axios';

import Layout from '../components/layout'

import Amplify from 'aws-amplify'
import config from '../aws-exports'
Amplify.configure(config)

class IndexPage extends React.Component {

    constructor(props) {
        // Required step: always call the parent class' constructor
        super(props);
        this.state = {value: 'false'};

        this.handleChange = this.handleChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }



    handleSubmit = async event => {
        event.preventDefault();
        let alter = event.target.alter.value;
        let gewicht = event.target.gewicht.value

        alert('Your favorite flavor is: ' + this.state.value);
        let unv =this.state.value;
        const response = await axios.get('https://d8epf4nd75.execute-api.eu-central-1.amazonaws.com/v1/calculator/costpermonth?gewicht='+gewicht+'&alter='+alter+'&unvertraeglich='+unv)
        console.log(response.data);
        alert(response.data);
    }


    render() {
        return (
        <Layout>
            <section id="hero" className="d-flex align-items-center">

                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1">
                            <h1>Bettter digital experience with Ninestars</h1>
                            <h2>We are team of talanted designers making websites with Bootstrap</h2>
                            <a href="#about" className="btn-get-started scrollto">Get Started</a>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 hero-img">
                            <img src="img/hero-img.svg" className="img-fluid animated" alt=""/>
                        </div>
                    </div>
                </div>

            </section>

            <main id="main">
                <section id="about" className="about">
                    <div className="container">

                        <div className="row justify-content-between">
                            <div className="col-lg-5 d-flex align-items-center justify-content-center about-img">
                                <img src="img/about-img.svg" className="img-fluid" alt="" data-aos="zoom-in"/>
                            </div>
                            <div className="col-lg-6 pt-5 pt-lg-0">
                                <h3 data-aos="fade-up">Dein Kosten-Check</h3>
                                <p data-aos="fade-up" data-aos-delay="100">
                                    Finde hier heraus, wie viel dich Barfen im Monat wirklich kostet und wie viel Platz
                                    du dafür in deiner Kühltruhe brauchst.
                                </p><p className="col-xs-12">
                                Hierzu brauchen wir ein paar Infos über deine Hündin / deinen Hund:<br/>
                            </p>
                                <div className="col-lg-12 mt-5 mt-lg-0 d-flex align-items-stretch" data-aos="fade-up"
                                     data-aos-delay="200">

                                    <form onSubmit={this.handleSubmit} role="form" className="php-email-form">
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label htmlFor="alter">Alter in Monaten</label>
                                                <input type="number" name="alter" className="form-control" id="name"
                                                       data-rule="minlen:1" data-msg="Mindestens eine Zahl eintragen"/>
                                                <div className="validate"></div>
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label htmlFor="gewicht">Gewicht in KG</label>
                                                <input type="number" className="form-control" name="gewicht" id="email"
                                                       data-rule="minlen:1"
                                                       data-msg="Bitte ein valides Gewicht eintragen"/>
                                                <div className="validate"></div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Generelle Unveerträglichkeit</label><br/>
                                            <select value={this.state.value} onChange={this.handleChange}>
                                                <option value="false">Nein</option>
                                                <option value="true">Ja</option>
                                            </select>
                                        </div>

                                        <div className="">
                                            <button type="submit">Ergebnis Anfordern</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <section id="services" className="services section-bg">
                    <div className="container">

                        <div className="section-title" data-aos="fade-up">
                            <h2>Services</h2>
                            <p>Check out the great services we offer</p>
                        </div>

                        <div className="row">
                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in"
                                 data-aos-delay="100">
                                <div className="icon-box">
                                    <div className="icon"><i className="bx bxl-dribbble"></i></div>
                                    <h4 className="title"><a href="">Lorem Ipsum</a></h4>
                                    <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas
                                        molestias excepturi sint occaecati cupiditate</p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in"
                                 data-aos-delay="200">
                                <div className="icon-box">
                                    <div className="icon"><i className="bx bx-file"></i></div>
                                    <h4 className="title"><a href="">Sed ut perspiciatis</a></h4>
                                    <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit
                                        esse cillum dolore eu fugiat nulla</p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in"
                                 data-aos-delay="300">
                                <div className="icon-box">
                                    <div className="icon"><i className="bx bx-tachometer"></i></div>
                                    <h4 className="title"><a href="">Magni Dolores</a></h4>
                                    <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim</p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in"
                                 data-aos-delay="400">
                                <div className="icon-box">
                                    <div className="icon"><i className="bx bx-world"></i></div>
                                    <h4 className="title"><a href="">Nemo Enim</a></h4>
                                    <p className="description">At vero eos et accusamus et iusto odio dignissimos
                                        ducimus qui blanditiis praesentium voluptatum</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>
                <section id="portfolio" className="portfolio">
                    <div className="container">

                        <div className="section-title" data-aos="fade-up">
                            <h2>Portfolio</h2>
                            <p>Check out our beautifull portfolio</p>
                        </div>

                        <div className="row" data-aos="fade-up" data-aos-delay="100">
                            <div className="col-lg-12">
                                <ul id="portfolio-flters">
                                    <li data-filter="*" className="filter-active">All</li>
                                    <li data-filter=".filter-app">App</li>
                                    <li data-filter=".filter-card">Card</li>
                                    <li data-filter=".filter-web">Web</li>
                                </ul>
                            </div>
                        </div>

                        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

                            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                <div className="portfolio-wrap">
                                    <img src="img/portfolio/portfolio-1.jpg" className="img-fluid" alt=""/>
                                    <div className="portfolio-links">
                                        <a href="img/portfolio/portfolio-1.jpg" data-gall="portfolioGallery"
                                           className="venobox" title="App 1"><i className="icofont-plus-circle"></i></a>
                                        <a href="#" title="More Details"><i className="icofont-link"></i></a>
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>App 1</h4>
                                        <p>App</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                <div className="portfolio-wrap">
                                    <img src="img/portfolio/portfolio-2.jpg" className="img-fluid" alt=""/>
                                    <div className="portfolio-links">
                                        <a href="img/portfolio/portfolio-2.jpg" data-gall="portfolioGallery"
                                           className="venobox" title="Web 3"><i className="icofont-plus-circle"></i></a>
                                        <a href="#" title="More Details"><i className="icofont-link"></i></a>
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>Web 3</h4>
                                        <p>Web</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                <div className="portfolio-wrap">
                                    <img src="img/portfolio/portfolio-3.jpg" className="img-fluid" alt=""/>
                                    <div className="portfolio-links">
                                        <a href="img/portfolio/portfolio-3.jpg" data-gall="portfolioGallery"
                                           className="venobox" title="App 2"><i className="icofont-plus-circle"></i></a>
                                        <a href="#" title="More Details"><i className="icofont-link"></i></a>
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>App 2</h4>
                                        <p>App</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                <div className="portfolio-wrap">
                                    <img src="img/portfolio/portfolio-4.jpg" className="img-fluid" alt=""/>
                                    <div className="portfolio-links">
                                        <a href="img/portfolio/portfolio-4.jpg" data-gall="portfolioGallery"
                                           className="venobox" title="Card 2"><i
                                            className="icofont-plus-circle"></i></a>
                                        <a href="#" title="More Details"><i className="icofont-link"></i></a>
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>Card 2</h4>
                                        <p>Card</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                <div className="portfolio-wrap">
                                    <img src="img/portfolio/portfolio-5.jpg" className="img-fluid" alt=""/>
                                    <div className="portfolio-links">
                                        <a href="img/portfolio/portfolio-5.jpg" data-gall="portfolioGallery"
                                           className="venobox" title="Web 2"><i className="icofont-plus-circle"></i></a>
                                        <a href="#" title="More Details"><i className="icofont-link"></i></a>
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>Web 2</h4>
                                        <p>Web</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                <div className="portfolio-wrap">
                                    <img src="img/portfolio/portfolio-6.jpg" className="img-fluid" alt=""/>
                                    <div className="portfolio-links">
                                        <a href="img/portfolio/portfolio-6.jpg" data-gall="portfolioGallery"
                                           className="venobox" title="App 3"><i className="icofont-plus-circle"></i></a>
                                        <a href="#" title="More Details"><i className="icofont-link"></i></a>
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>App 3</h4>
                                        <p>App</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                <div className="portfolio-wrap">
                                    <img src="img/portfolio/portfolio-7.jpg" className="img-fluid" alt=""/>
                                    <div className="portfolio-links">
                                        <a href="img/portfolio/portfolio-7.jpg" data-gall="portfolioGallery"
                                           className="venobox" title="Card 1"><i
                                            className="icofont-plus-circle"></i></a>
                                        <a href="#" title="More Details"><i className="icofont-link"></i></a>
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>Card 1</h4>
                                        <p>Card</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                <div className="portfolio-wrap">
                                    <img src="img/portfolio/portfolio-8.jpg" className="img-fluid" alt=""/>
                                    <div className="portfolio-links">
                                        <a href="img/portfolio/portfolio-8.jpg" data-gall="portfolioGallery"
                                           className="venobox" title="Card 3"><i
                                            className="icofont-plus-circle"></i></a>
                                        <a href="#" title="More Details"><i className="icofont-link"></i></a>
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>Card 3</h4>
                                        <p>Card</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                <div className="portfolio-wrap">
                                    <img src="img/portfolio/portfolio-9.jpg" className="img-fluid" alt=""/>
                                    <div className="portfolio-links">
                                        <a href="img/portfolio/portfolio-9.jpg" data-gall="portfolioGallery"
                                           className="venobox" title="Web 3"><i className="icofont-plus-circle"></i></a>
                                        <a href="#" title="More Details"><i className="icofont-link"></i></a>
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>Web 3</h4>
                                        <p>Web</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>
                <section id="faq" className="faq section-bg">
                    <div className="container">

                        <div className="section-title" data-aos="fade-up">
                            <h2>F.A.Q</h2>
                            <p>Frequently Asked Questions</p>
                        </div>

                        <ul className="faq-list">

                            <li data-aos="fade-up" data-aos-delay="100">
                                <a data-toggle="collapse" className="" href="#faq1">Non consectetur a erat nam at lectus
                                    urna duis? <i className="icofont-simple-up"></i></a>
                                <div id="faq1" className="collapse show" data-parent=".faq-list">
                                    <p>
                                        Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus
                                        laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor
                                        rhoncus dolor purus non.
                                    </p>
                                </div>
                            </li>

                            <li data-aos="fade-up" data-aos-delay="200">
                                <a data-toggle="collapse" href="#faq2" className="collapsed">Feugiat scelerisque varius
                                    morbi enim nunc faucibus a pellentesque? <i className="icofont-simple-up"></i></a>
                                <div id="faq2" className="collapse" data-parent=".faq-list">
                                    <p>
                                        Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id
                                        interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus
                                        scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim.
                                        Mauris ultrices eros in cursus turpis massa tincidunt dui.
                                    </p>
                                </div>
                            </li>

                            <li data-aos="fade-up" data-aos-delay="300">
                                <a data-toggle="collapse" href="#faq3" className="collapsed">Dolor sit amet consectetur
                                    adipiscing elit pellentesque habitant morbi? <i
                                        className="icofont-simple-up"></i></a>
                                <div id="faq3" className="collapse" data-parent=".faq-list">
                                    <p>
                                        Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci.
                                        Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl
                                        suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis
                                        convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                                    </p>
                                </div>
                            </li>

                            <li data-aos="fade-up" data-aos-delay="400">
                                <a data-toggle="collapse" href="#faq4" className="collapsed">Ac odio tempor orci
                                    dapibus. Aliquam eleifend mi in nulla? <i className="icofont-simple-up"></i></a>
                                <div id="faq4" className="collapse" data-parent=".faq-list">
                                    <p>
                                        Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id
                                        interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus
                                        scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim.
                                        Mauris ultrices eros in cursus turpis massa tincidunt dui.
                                    </p>
                                </div>
                            </li>

                            <li data-aos="fade-up" data-aos-delay="500">
                                <a data-toggle="collapse" href="#faq5" className="collapsed">Tempus quam pellentesque
                                    nec nam aliquam sem et tortor consequat? <i className="icofont-simple-up"></i></a>
                                <div id="faq5" className="collapse" data-parent=".faq-list">
                                    <p>
                                        Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim
                                        suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan.
                                        Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit
                                        turpis cursus in
                                    </p>
                                </div>
                            </li>

                            <li data-aos="fade-up" data-aos-delay="600">
                                <a data-toggle="collapse" href="#faq6" className="collapsed">Tortor vitae purus faucibus
                                    ornare. Varius vel pharetra vel turpis nunc eget lorem dolor? <i
                                        className="icofont-simple-up"></i></a>
                                <div id="faq6" className="collapse" data-parent=".faq-list">
                                    <p>
                                        Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies
                                        leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet.
                                        Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu
                                        scelerisque. Pellentesque diam volutpat commodo sed egestas egestas fringilla
                                        phasellus faucibus. Nibh tellus molestie nunc non blandit massa enim nec.
                                    </p>
                                </div>
                            </li>

                        </ul>

                    </div>
                </section>
                <section id="team" className="team">
                    <div className="container">

                        <div className="section-title" data-aos="fade-up">
                            <h2>Team</h2>
                            <p>Our team is always here to help</p>
                        </div>

                        <div className="row">

                            <div className="col-xl-3 col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="100">
                                <div className="member">
                                    <img src="img/team/team-1.jpg" className="img-fluid" alt=""/>
                                    <div className="member-info">
                                        <div className="member-info-content">
                                            <h4>Walter White</h4>
                                            <span>Chief Executive Officer</span>
                                        </div>
                                        <div className="social">
                                            <a href=""><i className="icofont-twitter"></i></a>
                                            <a href=""><i className="icofont-facebook"></i></a>
                                            <a href=""><i className="icofont-instagram"></i></a>
                                            <a href=""><i className="icofont-linkedin"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
                                <div className="member">
                                    <img src="img/team/team-2.jpg" className="img-fluid" alt=""/>
                                    <div className="member-info">
                                        <div className="member-info-content">
                                            <h4>Sarah Jhonson</h4>
                                            <span>Product Manager</span>
                                        </div>
                                        <div className="social">
                                            <a href=""><i className="icofont-twitter"></i></a>
                                            <a href=""><i className="icofont-facebook"></i></a>
                                            <a href=""><i className="icofont-instagram"></i></a>
                                            <a href=""><i className="icofont-linkedin"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
                                <div className="member">
                                    <img src="img/team/team-3.jpg" className="img-fluid" alt=""/>
                                    <div className="member-info">
                                        <div className="member-info-content">
                                            <h4>William Anderson</h4>
                                            <span>CTO</span>
                                        </div>
                                        <div className="social">
                                            <a href=""><i className="icofont-twitter"></i></a>
                                            <a href=""><i className="icofont-facebook"></i></a>
                                            <a href=""><i className="icofont-instagram"></i></a>
                                            <a href=""><i className="icofont-linkedin"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="400">
                                <div className="member">
                                    <img src="img/team/team-4.jpg" className="img-fluid" alt=""/>
                                    <div className="member-info">
                                        <div className="member-info-content">
                                            <h4>Amanda Jepson</h4>
                                            <span>Accountant</span>
                                        </div>
                                        <div className="social">
                                            <a href=""><i className="icofont-twitter"></i></a>
                                            <a href=""><i className="icofont-facebook"></i></a>
                                            <a href=""><i className="icofont-instagram"></i></a>
                                            <a href=""><i className="icofont-linkedin"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>
                <section id="clients" className="clients section-bg">
                    <div className="container">

                        <div className="section-title" data-aos="fade-up">
                            <h2>Clients</h2>
                            <p>They trusted us</p>
                        </div>


                    </div>
                </section>
                <section id="contact" className="contact">
                    <div className="container">

                        <div className="section-title" data-aos="fade-up">
                            <h2>Contact Us</h2>
                            <p>Contact us the get started</p>
                        </div>

                        <div className="row">

                            <div className="col-lg-5 d-flex align-items-stretch" data-aos="fade-up"
                                 data-aos-delay="100">
                                <div className="info">
                                    <div className="address">
                                        <i className="icofont-google-map"></i>
                                        <h4>Location:</h4>
                                        <p>A108 Adam Street, New York, NY 535022</p>
                                    </div>

                                    <div className="email">
                                        <i className="icofont-envelope"></i>
                                        <h4>Email:</h4>
                                        <p>info@example.com</p>
                                    </div>

                                    <div className="phone">
                                        <i className="icofont-phone"></i>
                                        <h4>Call:</h4>
                                        <p>+1 5589 55488 55s</p>
                                    </div>

                                </div>

                            </div>

                            <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch" data-aos="fade-up"
                                 data-aos-delay="200">
                                <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="name">Your Name</label>
                                            <input type="text" name="name" className="form-control" id="name"
                                                   data-rule="minlen:4" data-msg="Please enter at least 4 chars"/>
                                            <div className="validate"></div>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="name">Your Email</label>
                                            <input type="email" className="form-control" name="email" id="email"
                                                   data-rule="email" data-msg="Please enter a valid email"/>
                                            <div className="validate"></div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">Subject</label>
                                        <input type="text" className="form-control" name="subject" id="subject"
                                               data-rule="minlen:4"
                                               data-msg="Please enter at least 8 chars of subject"/>
                                        <div className="validate"></div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">Message</label>
                                        <textarea className="form-control" name="message" rows="10" data-rule="required"
                                                  data-msg="Please write something for us"></textarea>
                                        <div className="validate"></div>
                                    </div>
                                    <div className="mb-3">
                                        <div className="loading">Loading</div>
                                        <div className="error-message"></div>
                                        <div className="sent-message">Your message has been sent. Thank you!</div>
                                    </div>
                                    <div className="text-center">
                                        <button type="submit">Send Message</button>
                                    </div>
                                </form>
                            </div>

                        </div>

                    </div>
                </section>

            </main>
        </Layout>);
    }

    /*
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site with multi-user authentication powered by <a href="https://amplify.aws">AWS Amplify</a></p>
    <p>Create a new account: <Link to="/app/signup">Sign Up</Link></p>
    <Link to="/app/login">Sign In</Link><br />
    <Link to="/app/home">Home</Link><br />
    <Link to="/app/profile">Your profile</Link>
  </Layout>*/
}

export default IndexPage
