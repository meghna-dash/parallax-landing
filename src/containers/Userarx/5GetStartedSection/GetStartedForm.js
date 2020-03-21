import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from 'reactstrap';
import Box from '../../../components/Box';
import Card from '../../../components/Card';
import Container from '../../../components/UI/Container';
import Text from '../../../components/Text';
import DirectionsColour from '../../../assets/image/flat/directions-colour.svg';
import { Input } from 'reactstrap';
import mountains from "../../../assets/image/mountains.png";

class GetStartedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: {
        name: "",
        organization: "",
        email: "",
      },
      hasBeenSubmitted: false,
      warning: "",
    }
    // this.handleChange = this.handleChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleOrganizationChange = this.handleOrganizationChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.sendEmail = this.sendEmail.bind(this);
  }

  handleNameChange = (event) => {
    const contact = {
      name: event.target.value,
      organization: this.state.contact.organization,
      email: this.state.contact.email
    };
    this.setState({
      contact: contact
    });
  }

  handleOrganizationChange = (event) => {
    const contact = {
      name: this.state.contact.name,
      organization: event.target.value,
      email: this.state.contact.email
    };
    this.setState({
      contact: contact
    });
  }

  handleEmailChange = (event) => {
    const contact = {
      name: this.state.contact.name,
      organization: this.state.contact.organization,
      email: event.target.value
    };
    this.setState({
      contact: contact
    });
  }

  sendEmail = () => {
    if (this.state.contact.name === "" || this.state.contact.email === "") {
      this.setState({
        warning: "Name and email fields are required",
      });
      return;
    }
    this.setState({
      hasBeenSubmitted: true,
    })
    console.log("sendEmail() function called")
    console.log(this.state.contact.name)
    console.log(this.state.contact.organization)
    console.log(this.state.contact.email)

    fetch('https://api.userarx.com/signups', {
      method: 'post',
      body: JSON.stringify(this.state.contact)
    }).then(function(response) {
      this.setState({
        name: "",
        organization: "",
        email: "",
      })
    })
  }

  render() {
    if (this.state.hasBeenSubmitted) {
      return (
        <Box>
          <Card
            style={{
              backgroundColor: 'white',
              width: '500px',
              padding: '20px',
            }}
          >
            <CardImg
              top
              width="100%"
              src={DirectionsColour}
              alt="Get started with Parallax."
            />
            <CardBody>
              <Text
                style={{ fontSize: "1.25rem" }}
                content="A member of our team will reach out to you shortly."
              />
            </CardBody>
          </Card>
        </Box>
      )
    }
    else {
      return (
        <Box>
          <Card
            style={{
              backgroundColor: 'white',
              width: '500px',
              padding: '20px',
              borderRadius: '4px',
            }}
          >
            <CardImg
              top
              width="80%"
              src={DirectionsColour}
              alt="Get started with Parallax"
            />
            <CardBody>
              <Box>
                <Text
                  style={{ fontSize: "1.25rem" }}
                  content={this.state.warning}
                />
                <input
                  id="name"
                  name="name"
                  onChange={this.handleNameChange}
                  inputType="text"
                  placeholder="Name"
                  isMaterial={false}
                  className="floating_input enter_email"
                  aria-label="name"
                  style={{ fontSize: "1.25rem" }}
                />
                <input
                  id="organization"
                  name="organization"
                  onChange={this.handleOrganizationChange}
                  inputType="text"
                  placeholder="Organization"
                  isMaterial={false}
                  className="floating_input enter_email"
                  aria-label="organization"
                  style={{ fontSize: "1.25rem" }}
                />
                <input
                  id="email"
                  name="email"
                  onChange={this.handleEmailChange}
                  inputType="email"
                  placeholder="Email"
                  isMaterial={false}
                  className="floating_input enter_email"
                  aria-label="email"
                  style={{ fontSize: "1.25rem" }}
                />
                <Button
                  className="call-to-action"
                  href=""
                  onClick={this.sendEmail}
                  style={{ margin: '20px'}}
                >
                  REGISTER
                </Button>
              </Box>
            </CardBody>
          </Card>
        </Box>
      );
    }
  }
}

GetStartedForm.propTypes = {
  sectionWrapper: PropTypes.object,
  secTitleWrapper: PropTypes.object,
  row: PropTypes.object,
  contactForm: PropTypes.object,
  secHeading: PropTypes.object,
  secText: PropTypes.object,
  button: PropTypes.object,
  note: PropTypes.object,
};

GetStartedForm.defaultProps = {
  sectionWrapper: {
    id: 'get_started',
    as: 'section',
    pt: ['0px', '10px', '20px', '80px'],
    pb: ['0px', '0px', '0px', '0px', '80px'],
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
    justifyContent: 'center',
  },
  contactForm: {
    width: [1, 1, 1, 1 / 2],
  },
  button: {
    type: 'button',
    fontSize: `${2}`,
    fontWeight: '500',
    borderRadius: '4px',
    marginTop: '50px',
    pl: '22px',
    pr: '22px',
    colors: 'primarywithbg',
    height: `${4}`,
  },
  note: {
    fontSize: ['13px', '14px', '15px', '15px', '15px'],
    color: '#5d646d',
    lineHeight: '1.87',
    textAlign: 'center',
  },
};

export default GetStartedForm;
