import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios'
import Message from './Message.js'



export default class FetchData extends React.Component {
  constructor(props) {
    super(props);
    let userEmail = localStorage.getItem('myEmail');
    let userPassword = localStorage.getItem('myPassword');

    this.state = {
      email: userEmail,
      password: userPassword,
      isLoading: false,
      hits: [],
      error: null,
      message: ''
    };
  }

  verifyUserData() {

    /// set specific  data , to avoid loop hits
    axios.get('https://www.beenverified.com/hk/dd/teaser/email?email=' + this.state.email)
      .then(response => this.setState({ hits: response.data }))
      .catch(err => this.setState({ error: err }))

    console.log(this.state.hits);

    if (this.state.hits[0] > 0 && this.state.error == null) {

      this.setState({ isLoading: true });
    } else {
      this.setState({ isLoading: false });
      this.setState({ message: 'The user is not registere' });
    }


  }
  componentDidMount = () => {

    this.verifyUserData();

  }
  render() {
    return (
      <div>
        {(() => {
          if (!this.state.isLoading) {
            return (
              <div>
               

              </div>

            )
          }

        })()}
      </div>
    )
  }

}


