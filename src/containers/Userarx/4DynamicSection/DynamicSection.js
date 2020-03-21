import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Box from '../../../components/Box';
import Text from '../../../components/Text';
import Heading from '../../../components/Heading';
import Button from '../../../components/Button';
import Card from '../../../components/Card';
import Image from '../../../components/Image';
import FeatureBlock from '../../../components/FeatureBlock';
import Container from '../../../components/UI/Container';
import CentralizeSectionWrapper, { SectionObject } from './dynamicSection.style';
import GifPlayer from 'react-gif-player';
import GlowUp from '../../../assets/image/glowup.gif';
import ImageBg from '../../../assets/image/flat/visitor_bg.png';
import ServerWoman from '../../../assets/image/flat/server-woman.svg';

const CentralizeSection = ({
  title,
  description,
  textArea,
  imageWrapper,
  btnStyle,
}) => {
  return (
    <CentralizeSectionWrapper id="centralizeSection">
      <SectionObject>
        <Card className="dashboardWrapper" {...imageWrapper}>
          <Zoom>
            <Fade left>
              <GifPlayer
                style={{ width: '650px', margin: '50px', marginTop: '150px' }}
                gif={GlowUp}
                autoplay={true}
              />
            </Fade>
          </Zoom>
        </Card>
      </SectionObject>
      <br /><br />
      <Container>
        <Fade right>
          <Box {...textArea}>
            <FeatureBlock
              title={
                <Heading
                  content="Anticipate issues and make live changes."
                  {...title}
                />
              }
              description={
                <Text
                  style={{ fontSize: "1.25rem" }}
                  content="Parallax uses collected data and ongoing behaviors to anticipate what users will do, and  makes live edits to your interface to help guide them in the right direction if they get off-track."
                  {...description}
                />
              }
            />
          </Box>
        </Fade>
      </Container>
    </CentralizeSectionWrapper>
  );
};

CentralizeSection.propTypes = {
  title: PropTypes.object,
  description: PropTypes.object,
  btnStyle: PropTypes.object,
};

CentralizeSection.defaultProps = {
  textArea: {
    width: ['100%', '100%', '75%'],
    ml: [0, 0, '58%'],
  },
  imageWrapper: {
    boxShadow: 'none',
    ml: [0, 0, '10%'],
  },
  title: {
    fontSize: ['20px', '26px', '26px', '36px', '40px'],
    fontWeight: '400',
    color: '#082b6e',
    letterSpacing: '-0.010em',
    mb: '20px',
    maxWidth: ['100%', '100%', '100%', '440px', '440px'],
    lineHeight: '1.3',
    textAlign: 'left',
    marginTop: "100px"
  },
  description: {
    fontSize: '16px',
    color: '#343d48cc',
    lineHeight: '1.75',
    mb: '33px',
    maxWidth: ['100%', '100%', '100%', '440px', '440px'],
    textAlign: 'left',
  },
  btnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#fff',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'primaryWithBg',
  },
};

export default CentralizeSection;
