import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

export default class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            names: '',
            phones: ''


        };



        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePhone = this.handleChangePhone.bind(this);
    }


    handleChangeName = event => {
        this.setState({ names: event.target.value });
    };

    handleChangeEmail = event => {
        this.setState({ email: event.target.value });
    }

    handleChangePhone = event => {
        this.setState({ phones: event.target.value });
    }

   
    postData = event=> {
        let url = 'https://www.beenverified.com/hk/dd/teaser/email?email=' + this.state.email;
        
        let body ={
            "emails":this.state.email,
            "names": this.state.names,
            "phones": this.state.phones
        }
        axios.post(url, body)
          .then(function(response){
            console.log(response);
            //Perform action based on response
        })
          .catch(function(error){
            console.log(error);
            //Perform action based on error
          });
       }
  

    render() {
        return (


            <div className="page-wrapper bg-blue p-t-100 p-b-100 font-robo">
                <div className="wrapper wrapper--w680">
                    <div className="card card-1">
                        <div className="card-heading"></div>
                        <div className="card-body">
                            <h2 className="title">Registration Info</h2>
                            <form onSubmit={this.postData} noValidate>
                                <div className="input-group">
                                    <input className="input--style-1" type="text" onChange={this.handleChangeName} value={this.state.names} placeholder="NAME" name="name" />
                                </div>
                                <div className="input-group">

                                    <input className="input--style-1" type="number" onChange={this.handleChangePhone} value={this.state.phones} placeholder="Phone" />



                                </div>

                                <div className="input-group">
                                    <input className="input--style-1" type="email" onChange={this.handleChangeEmail} value={this.state.email} placeholder="Email" name="res_code" />
                                </div>

                                <div className="p-t-20">
                                    <button className="btn btn--radius btn--green" type="submit">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}