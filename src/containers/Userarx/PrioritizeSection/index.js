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
import PrioritizeSectionWrapper, { SectionObject } from './prioritize.style';

import ImageBg from '../../../assets/image/flat/analyze.png';
import Prioritize from '../../../assets/image/flat/prioritize.svg';

const PrioritizeSection = ({
  title,
  description,
  textArea,
  imageWrapper,
  btnStyle,
}) => {
  return (
    <PrioritizeSectionWrapper id="prioritizeSection">
      <Fade left>
        <Box {...textArea}>
          <FeatureBlock
            title={
              <Heading
                content="Prioritize your development efforts."
                {...title}
              />
            }
            description={
              <Text
                content="Deciding what to work on next? Provide your users with the value they want by making decisions based on their feedback."
                {...description}
              />
            }
          />
        </Box>
      </Fade>
      <br />
      <Container>
        <SectionObject>
          <Card className="objectWrapper" {...imageWrapper}>
            <Zoom>
              <Image src={ImageBg} alt="PrioritizeBG" width="800" />
            </Zoom>
            <Card className="dashboardWrapper" {...imageWrapper}>
              <Fade right>
                <Image src={Prioritize} alt="Prioritize" width="1000" />
              </Fade>
            </Card>
          </Card>
        </SectionObject>
        </Container>
    </PrioritizeSectionWrapper>
  );
};

PrioritizeSection.propTypes = {
  title: PropTypes.object,
  description: PropTypes.object,
  btnStyle: PropTypes.object,
};

PrioritizeSection.defaultProps = {
  textArea: {
    width: ['100%', '100%', '85%'],
    ml: [0, 0, '58%'],
  },
  imageWrapper: {
    boxShadow: 'none',
    ml: [0, 0, '20%'],
  },
  title: {
    fontSize: ['20px', '26px', '26px', '36px', '40px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.010em',
    mb: '20px',
    maxWidth: ['100%', '100%', '100%', '440px', '440px'],
    lineHeight: '1.5',
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

export default PrioritizeSection;
