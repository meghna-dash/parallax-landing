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
import GetStartedSectionWrapper, { SectionObject } from './getStartedSection.style';
import GetStartedForm from './GetStartedForm';

const GetStartedSection = ({
  title,
  description,
  textArea,
  imageWrapper,
  btnStyle,
  getStartedCard
}) => {
  return (
    <GetStartedSectionWrapper id="get_started">
      <Card className="dashboardWrapper" {...imageWrapper}>
        <Fade left>
          <Card {...getStartedCard}>
            <GetStartedForm/>
          </Card>
        </Fade>
      </Card>
      <br /><br />
      <Container>
        <Fade right>
          <Box {...textArea}>
            <FeatureBlock
              title={
                <Heading
                  content="Get started with Parallax."
                  {...title}
                />
              }
              description={
                <Text
                  style={{ fontSize: "1.25rem" }}
                  content="Stop losing users to frustrating experiences. Sign up to get early access to Parallax today."
                  {...description}
                />
              }
            />
          </Box>
        </Fade>
      </Container>
    </GetStartedSectionWrapper>
  );
};

GetStartedSection.propTypes = {
  title: PropTypes.object,
  description: PropTypes.object,
  btnStyle: PropTypes.object,
};

GetStartedSection.defaultProps = {
  textArea: {
    width: ['100%', '100%', '65%'],
    ml: [0, 0, '5%'],
  },
  imageWrapper: {
    boxShadow: 'none',
    ml: [0, 0, '20%'],
  },
  getStartedCard: {
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

export default GetStartedSection;
