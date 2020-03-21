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
import InsightsSectionWrapper, { SectionObject } from './insights.style';

import ImageBg from '../../../assets/image/flat/analyze.png';
import Unlock from '../../../assets/image/flat/unlock.svg';

const InsightsSection = ({
  title,
  description,
  textArea,
  imageWrapper,
  btnStyle,
}) => {
  return (
    <InsightsSectionWrapper id="valueSection">
      <SectionObject>
        <Card className="dashboardWrapper" {...imageWrapper}>
          <Zoom>
            <Fade left>
              <Image src={Unlock} alt="Unlock" width="500" />
            </Fade>
          </Zoom>
        </Card>
      </SectionObject>
      <br />
      <Container>
        <Fade right>
          <Box {...textArea}>
            <FeatureBlock
              title={
                <Heading
                  content="Unlock key insights about your users."
                  {...title}
                />
              }
              description={
                <Text
                  content="Get the most out of your data by uncovering trends in your customers' experiences. Turn your user research process into a treasure trove of information."
                  {...description}
                />
              }
            />
          </Box>
        </Fade>
      </Container>
    </InsightsSectionWrapper>
  );
};

InsightsSection.propTypes = {
  title: PropTypes.object,
  description: PropTypes.object,
  btnStyle: PropTypes.object,
};

InsightsSection.defaultProps = {
  textArea: {
    width: ['100%', '100%', '65%'],
    ml: [0, 0, '58%'],
  },
  imageWrapper: {
    boxShadow: 'none',
    ml: [0, 0, '15%'],
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

export default InsightsSection;
