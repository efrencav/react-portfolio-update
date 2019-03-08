// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import registerServiceWorker from "./registerServiceWorker";

// ReactDOM.render(<App />, document.getElementById("root"));
// registerServiceWorker();

import React, { Fragment } from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import Sticky from 'react-stickynode';
import { DrawerProvider } from './contexts/DrawerContext'; 
import { portfolioTheme } from './portfolio'; 
import { ResetCSS } from './assets/css/style'; 
import {
  GlobalStyle,
  ContentWrapper,
} from './containers/portfolio.style';

import BannerSection from './containers/Banner'; 
import Navbar from './containers/Navbar';
import AwardsSection from './containers/Awards';
import PortfolioShowcase from './containers/PortfolioShowcase';
import ProcessSection from './containers/Process';
import SkillSection from './containers/Skill';
import CallToAction from './containers/CallToAction';
import TestimonialSection from './containers/Testimonial';
import ClientsSection from './containers/Clients';
import ContactSection from './containers/Contact';
import Footer from './containers/Footer';

export default () => {
  return (
    <ThemeProvider theme={portfolioTheme}>
      <Fragment>
        <Head>
          <title>Portfolio | A react next landing page</title>
          <meta name="Description" content="React next landing page" />
          <meta name="theme-color" content="#ec5555" />
          {/* Load google fonts */}
          <link
            href="https://fonts.googleapis.com/css?family=Raleway:300,400,400i,500,600,700,800|Roboto:300,400,400i,500,700,900"
            rel="stylesheet"
          />
        </Head>

        <ResetCSS />
        <GlobalStyle />

        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <BannerSection />
          <PortfolioShowcase />
          <AwardsSection />
          <ProcessSection />
          <SkillSection />
          <CallToAction />
          <TestimonialSection />
          <ClientsSection />
          <ContactSection />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
