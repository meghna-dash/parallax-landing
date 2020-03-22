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
import AnalyzeSectionWrapper, { SectionObject } from './learnSection.style';

import ImageBg from '../../../assets/image/flat/analyze.png';
import ContentMan from '../../../assets/image/flat/content-man.svg';

const AnalyzeSection = ({
  title,
  description,
  textArea,
  imageWrapper,
  bgWrapper,
  btnStyle,
}) => {
  return (
    <AnalyzeSectionWrapper id="analyzeSection">
      <Fade left>
        <Box {...textArea}>
          <FeatureBlock
            title={
              <Heading
                content="Help your users with simple guides."
                {...title}
              />
            }
            description={
              <Text
                style={{ fontSize: "1.25rem" }}
                content="Parallax lets you easily upload video guides that teach your users how to use your software. Identify what you want to teach your users, upload guides, and we will handle engaging your user."
                {...description}
              />
            }
          />
        </Box>
      </Fade>
      <br />
      <Container>
        <SectionObject>
          <Card className="objectWrapper" {...bgWrapper}>
            <Zoom>
              <Image src={ImageBg} alt="AnalyzeBG" width="600" />
            </Zoom>
            <Card className="dashboardWrapper" {...imageWrapper}>
              <Fade right>
                <Image src={ContentMan} alt="ContentMan" width="600" />
              </Fade>
            </Card>
          </Card>
        </SectionObject>
        </Container>
    </AnalyzeSectionWrapper>
  );
};

AnalyzeSection.propTypes = {
  title: PropTypes.object,
  description: PropTypes.object,
  btnStyle: PropTypes.object,
};

AnalyzeSection.defaultProps = {
  textArea: {
    width: ['100%', '100%', '85%'],
    ml: [15, 0, '85%'],
  },
  imageWrapper: {
    boxShadow: 'none',
    ml: [0, 0, '0%'],
  },
  bgWrapper: {
    boxShadow: 'none',
    ml: [0, 0, '45%'],
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

export default AnalyzeSection;
