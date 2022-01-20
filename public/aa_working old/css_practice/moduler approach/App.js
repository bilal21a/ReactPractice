import React, { Component } from 'react'
import appStyles from'./App.module.css'
import Custom from './Custom';
export default class App extends Component {
    render() {
        const cond = true;
        return (
            <div>
                <h1 className={appStyles.headings}>Hello</h1>
                <p className={cond ? appStyles.body2 : appStyles.body1}>hello its body</p>
                <Custom stylename={cond ? appStyles.body1 : appStyles.body2}/>
            </div>
        )
    }
}
