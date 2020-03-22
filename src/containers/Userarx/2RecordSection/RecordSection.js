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
import ValueSectionWrapper, { SectionObject } from './recordSection.style';

import ImageBg from '../../../assets/image/flat/visitor_bg.png';
import Error404Colour from '../../../assets/image/flat/error-404-colour.svg';

const ValueSection = ({
  title,
  description,
  textArea,
  imageWrapper,
  btnStyle,
}) => {
  return (
    <ValueSectionWrapper id="recordSection">
      <SectionObject>
        <Card className="objectWrapper" {...imageWrapper}>
          <Fade left>
            <Image src={Error404Colour} alt="Error404" width="500"/>
          </Fade>
        </Card>
      </SectionObject>
      <br /><br />
      <Container>
        <Fade right>
          <Box {...textArea}>
            <FeatureBlock
              title={
                <Heading
                  content="Stop struggling with unexpected user behavior."
                  {...title}
                />
              }
              description={
                <Text
                  style={{ fontSize: "1.25rem" }}
                  content="Users almost never think about your product the way you want them to, which causes significant drops in conversion, retention, and purchases. Parallax helps you avoid this with non-invasive, comprehensive product guides."
                  {...description}
                />
              }
            />
          </Box>
        </Fade>
      </Container>
    </ValueSectionWrapper>
  );
};

ValueSection.propTypes = {
  title: PropTypes.object,
  description: PropTypes.object,
  btnStyle: PropTypes.object,
};

ValueSection.defaultProps = {
  textArea: {
    width: ['100%', '100%', '65%'],
    ml: [0, 0, '58%'],
  },
  imageWrapper: {
    boxShadow: 'none',
    ml: [0, 0, '35%'],
  },
  title: {
    fontSize: ['20px', '26px', '26px', '36px', '40px'],
    fontWeight: '400',
    color: '#082b6e',
    letterSpacing: '-0.010em',
    mb: '20px',
    maxWidth: ['100%', '100%', '100%', '440px', '480px'],
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

export default ValueSection;
