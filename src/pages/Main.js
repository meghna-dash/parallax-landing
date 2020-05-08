import React, { Component, Fragment } from 'react';
import Head from 'next/head';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { agencyTheme } from '../assets/theme/agency';
import { ResetCSS } from '../assets/css/style';
import { GlobalStyle, AgencyWrapper } from '../containers/Agency/agency.style';
// import Navbar from '../containers/Agency/Navbar';

// NAVBAR
import Navbar from '../containers/Userarx/0Navbar/Navbar';

// SECTIONS
import BannerSection from '../containers/Userarx/1BannerSection/BannerSection';
import LosingUsersSection from '../containers/Userarx/2LosingUsersSection/LosingUsersSection';
import HelpUsersSection from '../containers/Userarx/3HelpUsersSection/HelpUsersSection';
import AhaMomentSection from '../containers/Userarx/4AhaMomentSection/AhaMomentSection';
import GetStarted from '../containers/Userarx/5GetStartedSection/GetStartedSection';
import ContactSection from '../containers/Hosting/Contact';

import Footer from '../containers/Agency/Footer';
import { DrawerProvider } from '../contexts/DrawerContext';


class Main extends Component {
  render() {
    return(
      <ThemeProvider theme={agencyTheme}>
        {/* Start agency head section */}
        <Head>
          <title>userarx</title>
          <meta name="Description" content="userarx" />
          <meta name="theme-color" content="#10ac84" />

          {/* Load google fonts */}
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"
            rel="stylesheet"
          />
        </Head>
        <ResetCSS />
        <GlobalStyle />
        {/* End of agency head section */}
        {/* Start agency wrapper section */}
        <AgencyWrapper className="mountain-background">
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <BannerSection />
          <LosingUsersSection />
          <HelpUsersSection />
          <AhaMomentSection />
          <GetStarted />
          <br />
        </AgencyWrapper>
        {/* End of agency wrapper section */}
      </ThemeProvider>
    )
  }
}

export default Main;
