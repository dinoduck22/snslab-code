import styles from "../SignUpPage/SignUp.module.scss";
import Tab from "../LoginPage/Tab";
import React from "react";
import DicuBot from "../LoginPage/DicuBot";
import Monitor from "./Monitor";

function SignUp() {
    return (
        <div className={styles.background}>
            <Tab></Tab>
            <Monitor></Monitor>
            <DicuBot></DicuBot>
        </div>
    );
}

export default SignUp;