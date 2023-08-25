import React from 'react';
import styles from './Login.module.scss';
import Tab from './Tab';
import Monitor from "./Monitor";
import Keyboard from "./Keyboard";
import DicuBot from "./DicuBot";

function Login() {
    return(
        <div className={styles.background}>
            <Tab></Tab>
            <Monitor></Monitor>
            <Keyboard></Keyboard>
            <DicuBot></DicuBot>
        </div>
    );
}

export default Login;