import React from 'react'
import axios from 'axios'
import styles from './task1.module.css'

export default class Task1 extends React.Component {

    state = {
        curInfo: []
    }

    componentDidMount() {
        axios.get('https://www.nbrb.by/api/exrates/rates?periodicity=0')
            .then(response => {
                const curData = response.data
                this.setState({
                    curInfo: curData
                })
            })
    }

    render() {

        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0');
        let yyyy = today.getFullYear();

        today = dd + '.' + mm + '.' + yyyy;

        return(
            <div className = {styles.wrapper}>
                task 1 <br/>
                Официальный курс белорусского рубля по отношению к иностранным валютам, устанавливаемый НБ РБ на {today}

                <table>
                    <tbody>
                        <tr><th>Аббревиатура</th><th>Название валюты</th><th>Официальный курс</th></tr>
                        {this.state.curInfo.map( (cur, index) =>
                            <tr key = {index}>
                                <td>{cur.Cur_Abbreviation}</td>
                                <td>{cur.Cur_Name}</td>
                                <td>{cur.Cur_OfficialRate}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}