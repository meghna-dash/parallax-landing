import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Box from '../../../components/Box';
import Text from '../../../components/Text';
import Image from '../../../components/Image';
import Heading from '../../../components/Heading';
import Button from '../../../components/Button';
import { Button as ReactStrapButton} from 'reactstrap';
import FeatureBlock from '../../../components/FeatureBlock';
import Container from '../../../components/UI/Container';
import Particles from '../../Agency/Particle';
import BannerWrapper, { DiscountLabel, BannerObject } from './bannerSection.style';
import ReactTypingEffect from 'react-typing-effect';
import NatureMan from '../../../assets/image/flat/nature-man.svg';

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
        <a href="#get_started">
          <ReactStrapButton
            className="call-to-action"
            href="#get_started"
          >
            REGISTER
          </ReactStrapButton>
        </a>
        <a href="#recordSection">
          <Button
            title="LEARN MORE"
            variant="textButton"
            icon={<i className="flaticon-next" />}
            {...outlineBtnStyle}
            style={{
              boxShadow: 'none'
            }}
          />
        </a>
      </p>
    </Fragment>
  );
  return (
    <BannerWrapper style={{ marginTop: '-40px'}}>
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
                    content="user experiences."
                    {...title}
                  />
                  </div>
                </>
              }
              description={
                <Text
                  style={{ fontSize: "1.3rem" }}
                  content="Boost conversions and retention by providing guides to your users when they need it, where they need it. Parallax makes it easy to teach new users how to use your software product. Keep your users engaged by providing them with helpful information."
                  {...description}
                />
              }
              button={<ButtonGroup />}
            />
          </Box>
        </Box>
      </Container>
      <BannerObject>
        <Image src={NatureMan} alt="NatureMan" width="700" style= {{ transform: "scaleX(-1)"}}/>
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
    lineHeight: '0.9',
    textAlign: 'left'
  },
  description: {
    fontSize: '16px',
    color: '#343d48cc',
    lineHeight: '1.9',
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
    borderRadius: '4px',
    boxShadow: '0px',
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
