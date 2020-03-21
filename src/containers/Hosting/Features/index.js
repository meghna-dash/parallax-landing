import React from 'react';
import PropTypes from 'prop-types';
import { Fade } from 'react-reveal';
import Box from '../../../components/Box';
import Text from '../../../components/Text';
import Heading from '../../../components/Heading';
import Container from '../../../components/UI/Container';
import { FeatureItem } from '../hosting.style';
import { Link } from 'react-router-dom';
import { FEATURES_DATA } from '../../../data/Hosting/data';

import ShapeOne from '../../../assets/image/hosting/shape-1.svg';
import ShapeTwo from '../../../assets/image/hosting/shape-2.svg';
import ShapeThree from '../../../assets/image/hosting/shape-3.svg';
import ShapeFour from '../../../assets/image/hosting/shape-4.svg';
import ShapeFive from '../../../assets/image/hosting/shape-5.svg';

const FeatureSection = ({
  sectionWrapper,
  row,
  col,
  secTitleWrapper,
  secHeading,
  secText,
  featureItemHeading,
  featureItemDes,
}) => {
  return (
    <Box {...sectionWrapper}>
      <Container>
        <Box {...secTitleWrapper}>
          <Fade bottom cascade>
            <Text {...secText} content="FEATURES" />
            <Heading
              {...secHeading}
              content="Userarx is dedicated to user-centered, data-driven growth."
            />
          </Fade>
        </Box>

        <Box {...row}>
          {FEATURES_DATA.map((featureItem, index) => (
            <Box {...col} key={`feature-${index}`}>
              {featureItem.animation ? (
                <Fade bottom delay={index * 120}>
                  <FeatureItem
                    title={
                      <Heading
                        {...featureItemHeading}
                        content={featureItem.title}
                      />
                    }
                    description={
                      <Text
                        {...featureItemDes}
                        content={featureItem.description}
                      />
                    }
                    icon={<i className={featureItem.icon} />}
                    additionalContent={
                      <>
                        <img
                          className="hover-shape-1 hover-shape"
                          src={ShapeOne}
                          alt="Shape One"
                        />
                        <img
                          className="hover-shape-2 hover-shape"
                          src={ShapeTwo}
                          alt="Shape Two"
                        />
                        <img
                          className="hover-shape-3 hover-shape"
                          src={ShapeThree}
                          alt="Shape Three"
                        />
                        <img
                          className="hover-shape-4 hover-shape"
                          src={ShapeFour}
                          alt="Shape Four"
                        />
                        <img
                          className="hover-shape-5 hover-shape"
                          src={ShapeFive}
                          alt="Shape Five"
                        />
                      </>
                    }
                  />
                </Fade>
              ) : (
                <FeatureItem
                  title={
                    <Heading
                      {...featureItemHeading}
                      content={featureItem.title}
                    />
                  }
                  description={
                    <Text
                      {...featureItemDes}
                      content={featureItem.description}
                    />
                  }
                  icon={<i className={featureItem.icon} />}
                  additionalContent={
                    <>
                      <img
                        className="hover-shape-1 hover-shape"
                        src={ShapeOne}
                        alt="Shape One"
                      />
                      <img
                        className="hover-shape-2 hover-shape"
                        src={ShapeTwo}
                        alt="Shape Two"
                      />
                      <img
                        className="hover-shape-3 hover-shape"
                        src={ShapeThree}
                        alt="Shape Three"
                      />
                      <img
                        className="hover-shape-4 hover-shape"
                        src={ShapeFour}
                        alt="Shape Four"
                      />
                      <img
                        className="hover-shape-5 hover-shape"
                        src={ShapeFive}
                        alt="Shape Five"
                      />
                    </>
                  }
                  button={
                    <Link href="#">
                      <a aria-label={`link-${index}`}>
                        <i className="flaticon-next" />
                      </a>
                    </Link>
                  }
                />
              )}
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

FeatureSection.propTypes = {
  sectionWrapper: PropTypes.object,
  secTitleWrapper: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  secHeading: PropTypes.object,
  secText: PropTypes.object,
  featureItemHeading: PropTypes.object,
  featureItemDes: PropTypes.object,
};

FeatureSection.defaultProps = {
  sectionWrapper: {
    id: 'features',
    as: 'section',
    pt: ['60px', '80px', '80px', '80px'],
    pb: ['60px', '80px', '80px', '80px'],
  },
  secTitleWrapper: {
    mb: ['45px', '50px', '60px'],
  },
  secText: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: `${2}`,
    letterSpacing: '0.15em',
    fontWeight: `${6}`,
    color: 'primary',
    mb: `${3}`,
  },
  secHeading: {
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
  },
  col: {
    className: 'col',
    width: [1, 1 / 2, 1 / 3, 1 / 3],
    pr: '15px',
    pl: '15px',
    mb: '30px',
  },
  featureItemHeading: {
    fontSize: ['18px', '18px', '16px', '20px'],
    textAlign: 'center',
    fontWeight: '400',
    color: '#0f2137',
    lineHeight: '1.5',
    mb: ['10px', '10px', '10px', '10px'],
    letterSpacing: '-0.020em',
    maxWidth: ['auto', 'auto', 'auto', 'auto'],
  },
  featureItemDes: {
    fontSize: ['14px', '14px', '14px', '15px'],
    lineHeight: '1.75',
    color: '#343d48cc',
    mb: ['20px', '20px', '20px', '20px'],
  },
};

export default FeatureSection;
