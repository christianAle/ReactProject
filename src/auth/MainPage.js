import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { slide as Menu } from "react-burger-menu";
import Layout from './Layout'
export default class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: JSON.parse(localStorage.getItem('myEmails')),

        }
    }



    setData = () => {
        this.setState({ data: JSON.parse(localStorage.getItem('MyEmails')) });
    }

    
    renderTableData() {



        let emails = JSON.parse(localStorage.getItem('myEmails'));
        if (  emails.length == 0 ||emails.email_address == null)  {
            return this.renderLoading();
        } else {
            return this.state.data.map((data, index) => {
                const { email_address, type } = data
                return (
                    <tr key={index}>
                        <td>{email_address}</td>
                        <td>{type}</td>
                        <td></td>
                    </tr>
                )
            })
        }
    }


    renderTableHeader() {
        let header = Object.keys(this.state.data[0])
        const { email_address, type } = this.state.data

        return (
            <tr>
                <th key={email_address}></th>

            </tr>
        )
    }



    renderLoading() {
        return (
            <div>Loading...</div>

        )
    }



    render() {


        return ([


            <div id="myPage">
                <Layout pageCards={"card"} outerContainerId={"myPage"} />
            </div>



            ,
            <div id="card" className="card">
                <h1 id='title'>Emails</h1>
                <table id='emails'>
                    <tbody>

                        {this.renderTableData()}
                    </tbody>
                </table>
            </div>



        ]
        )
    }


}