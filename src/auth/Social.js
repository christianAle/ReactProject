import React from 'react';
import Layout from './Layout'
import { slide as Menu } from "react-burger-menu";



export default class Social extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],

        }
    }


    renderTableData() {
        let socialData = JSON.parse(localStorage.getItem('SocialData'));
        if(socialData.length==0 || socialData==null){
           return this.renderLoading();
        }else{
            return socialData.map((data, index) => {
                const { item, type } = data 
                return (
                    <tr key={index}>
                        <td>{item}</td>
                        <td>{type}</td>
                        <td></td>
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
                <h1 id='title'>Social Data</h1>
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