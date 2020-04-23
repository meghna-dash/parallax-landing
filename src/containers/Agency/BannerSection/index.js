import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Box from '../../../components/Box';
import Text from '../../../components/Text';
import Image from '../../../components/Image';
import Heading from '../../../components/Heading';
import Button from '../../../components/Button';
import FeatureBlock from '../../../components/FeatureBlock';
import Container from '../../../components/UI/Container';
import Particles from '../../Agency/Particle';
import BannerWrapper, { DiscountLabel, BannerObject } from './bannerSection.style';
import ReactTypingEffect from 'react-typing-effect';
import NatureMan from '../../../assets/image/flat/nature-man.svg';
import GifPlayer from 'react-gif-player';
// import GlowUp from '../../../assets/image/glowup.gif';
const BannerSection = ({
  row,
  col,
  title,
  btnStyle,
  description,
  discountText,
  discountAmount,
  outlineBtnStyle,
}) => {
  const ButtonGroup = () => (
    <Fragment>
      <p style={{ textAlign: 'left '}}>
        <a href="#contact_us">
          <Button
            href="#contact_us"
            title="FREE DEMO"
            {...btnStyle}
          />
        </a>
        <a href="#valueSection">
          <Button
            title="LEARN MORE"
            variant="textButton"
            icon={<i className="flaticon-next" />}
            {...outlineBtnStyle}
          />
        </a>
      </p>
    </Fragment>
  );
  return (
    <BannerWrapper style={{ marginTop: '-90px'}}>
      <Particles />
      <Container>
        <Box className="row" {...row}>
          <Box className="col placement" {...col} style={{ marginTop: '72px'}}>
            <FeatureBlock
              title={
                <>
                  <ReactTypingEffect
                    className="strong"
                    speed='80'
                    eraseDelay='800'
                    text={["Personalized", "Dynamic","Adaptable"]}
                  />
                  <div style={{height: "160px"}}>
                  <Heading
                    content="User Experiences"
                    {...title}
                  />
                  </div>
                </>
              }
              description={
                <Text
                  content="Userarx helps you understand what your users really want from your product. Deliver satisfying, intuitive customer experiences."
                  {...description}
                />
              }
              button={<ButtonGroup />}
            />
          </Box>
        </Box>
      </Container>
      <BannerObject>
        <div >

        </div>
      </BannerObject>
    </BannerWrapper>
  );
};

BannerSection.propTypes = {
  title: PropTypes.object,
  btnStyle: PropTypes.object,
  description: PropTypes.object,
  contentStyle: PropTypes.object,
  discountText: PropTypes.object,
  discountAmount: PropTypes.object,
  outlineBtnStyle: PropTypes.object,
};

BannerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
    alignItems: 'center',
  },
  col: {
    pr: '15px',
    pl: '15px',
    width: ['100%', '70%', '60%', '50%'],
  },
  title: {
    fontSize: ['32px', '34px', '42px', '55px'],
    fontWeight: '300',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: ['20px', '25px'],
    lineHeight: '1.31',
    textAlign: 'left'
  },
  description: {
    fontSize: '16px',
    color: '#343d48cc',
    lineHeight: '2.1',
    mb: '0',
    textAlign: 'left'
  },
  btnStyle: {
    minWidth: ['120px', '156px'],
    fontSize: '14px',
    fontWeight: '500',
    borderRadius: '4px',
    backgroundColor: '#e8699a',
  },
  outlineBtnStyle: {
    minWidth: ['130px', '156px'],
    fontSize: '14px',
    fontWeight: '500',
    color: '#0f2137',
    p: '5px 10px',
    borderRadius: '4px'
  },
  discountAmount: {
    fontSize: '14px',
    color: '#54a0c6',
    mb: 0,
    as: 'span',
    mr: '0.4em',
  },
  discountText: {
    fontSize: '14px',
    color: '#0f2137',
    mb: 0,
    as: 'span',
  },
};

export default BannerSection;
