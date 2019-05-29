import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import cx from 'classnames';
import history from './history';
import Message from './Message.js'
const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);



export default class LoginPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      showError: '',
      message: '',
      hits: new Array(),
      isRegistere: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.signUp= this.signUp.bind(this);
  }


  handleEmailChange = event => {


    this.setState({ email: event.target.value }, () => {

    });
  };




  validatePassword = () => {
    let isValid = false;
    let validPassword = 'BV-API-Challenge';
    let value = this.state.password;

    if (validPassword == value) {
      isValid = true;
    } else {
      isValid = false;
    }

    return isValid;

  }

  handlePasswordChange = event => {
    this.setState({ password: event.target.value }, () => {

    });
  }
  
  signUp = event =>{
    history.push('/SignUp');
  }


  validateEmail = () => {
    let isValid = false;
    let value = this.state.email;
    let testEmail = emailRegex.test(value);
    if (testEmail) {

      isValid = true;
    } else {
      isValid = false;
    }
    return isValid;
  }


  componentDidMount() {
    this.setState({ hits: [] });

    fetch('https://www.beenverified.com/hk/dd/teaser/email?email=' + localStorage.getItem('myEmail')).
      then((Response) => Response.json()).
      then((findresponse) => {

        console.log(findresponse.names)
        localStorage.setItem('myArray', findresponse.names.length);
        localStorage.setItem('myEmails', JSON.stringify(findresponse.emails));
        localStorage.setItem('SocialData', JSON.stringify(findresponse.social));
        localStorage.setItem('PhoneData', JSON.stringify(findresponse.phones));
        this.setState({ hits: findresponse.names })
      })


  }

  handleSubmit = e => {
    e.preventDefault();


    if (this.validateEmail() && this.validatePassword()) {

      this.componentDidMount();

      localStorage.setItem('myEmail', this.state.email);

      localStorage.setItem('myPassword', this.state.password);




      let arrayLength = JSON.parse(localStorage.getItem('myArray'));
      console.log(arrayLength);
      if (arrayLength == 0) {


        this.setMessage();


      } else {
        this.setState({ isRegistere: true }, () => { });

        // this.props.history.push('/');
        // this.context.router.push('/');
        history.push("/MainPage");

      }


    } else {
      this.setState({ showError: true }, () => { });
      this.setState({ message: 'The email is invalid or the password is wrong' });
    }

  }

  setMessage = () => {
    this.setState({ showError: true }, () => { });

    this.setState({ message: 'The user is not registere' });
  }





  render() {
    localStorage.clear();
    return (
      <div className="limiter">

        <div className="container-login100">

          <div className="wrap-login100">

            <form className="login100-form validate-form" onSubmit={this.handleSubmit} noValidate>

              {(() => {
                if (this.state.showError) {
                  return (
                    <div>
                      <Message message={this.state.message} />

                    </div>

                  )
                }
              })()}


              <span className="login100-form-title p-b-34" >
                Account Login
              </span>


              <div className="form-group col-md-12" data-validate="Type user email">
                <input className={cx('form-control ')} value={this.state.email} onChange={this.handleEmailChange} type="text" placeholder="Email " />

              </div>
              <div className="form-group  col-md-12" data-validate="Type password">
                <input className="form-control"
                  value={this.state.password} onChange={this.handlePasswordChange} type="password" placeholder="Password" />
              </div>

              <div className="container-login100-form-btn">
                <button type='submit' className="login100-form-btn" >
                  Sign in
              </button  >
              </div>

              <div className="w-full text-center p-t-27 p-b-239">
                <span className="txt1">
                  Forgot
              </span>

                <a href="#" className="txt2">
                  User name / password?
              </a>
              </div>

              <div className="w-full text-center">
                <button onClick={this.signUp}>
                  <a href="" className="txt3">
                    Sign Up
                 </a>
                </button>

              </div>
            </form>

            <div className="login100-more" >

            </div>
          </div>
        </div>
      </div >
    );
  }
}





