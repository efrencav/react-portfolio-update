import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import Sticky from 'react-stickynode';
// import Head from 'next/head';

import { DrawerProvider } from './contexts/DrawerContext';
import { portfolioTheme } from './theme';
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
import ClientSection from './containers/Clients';
import ContactSection from './containers/Contact';
import Footer from './containers/Footer';

import logo from './assets/image/logo.png';
import './App.css';

export default () => {
  return (
    <ThemeProvider theme={portfolioTheme}>
      <Fragment>
        {/* <Head> */}
          <title>Portfolio | A react next landing page</title>
          <meta name="Description" content="React next landing page" />
          <meta name="theme-color" content="#ec5555" />
          {/* Load google fonts */}
          <link
            href="https://fonts.googleapis.com/css?family=Raleway:300,400,400i,500,600,700,800|Roboto:300,400,400i,500,700,900"
            rel="stylesheet"
          />
        {/* </Head> */}

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
          <ClientSection />
          <ContactSection />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};


