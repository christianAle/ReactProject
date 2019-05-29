import React from 'react';
import Layout from './Layout'

export default class Phone extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],

        }
    }


    renderTableData() {
        let phoneData = JSON.parse(localStorage.getItem('PhoneData'));
        if(phoneData.length==0 || phoneData==null){
           return this.renderLoading();
        }else{
            return phoneData.map((data, index) => {
                const { number,type,first_seen ,last_seen,country_code } = data 
                return (
                    <tr key={index}>
                        <td>{number}</td>
                        <td>{type}</td>
                        <td>{first_seen}</td>
                        <td>{last_seen}</td>
                        <td>{country_code}</td>
                    </tr>
                )
            })
        }   




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
                <h1 id='title'>Phone Data</h1>
                <table id='emails'>
                    <tbody>

                        {this.renderTableData()
                        }
                    </tbody>
                </table>
            </div>



        ]
        )
    }


}