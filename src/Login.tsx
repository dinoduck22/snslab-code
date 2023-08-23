import React from 'react';
import styles from './Login.module.scss';
import Tab from './Tab';

function Login() {
    return(
        <div className={styles.background}>

            {/*모니터*/}
            <div className={styles.monitor}>
                <div className={styles.monitorLine1}>
                    {/*SnSLAB 상호*/}
                    <div className={styles.snslab}> SnSLAB </div>
                    {/*power*/}
                    <div className={styles.powerBx}></div>
                    <div className={styles.power}> power </div>
                    {/*monitor-line 2*/}
                    <div className={styles.monitorLine2}>
                        <div className={styles.screen}>
                        </div>
                    </div>
                </div>
            </div>

            {/*키보드*/}
            <div className={styles.keyboardBg}>
                {/*힌지*/}
                <div className={styles.hinge}></div>
                {/*한영 선택버튼*/}
                <div className={styles.hanBttn}> 한 </div>
                <div className={styles.enBttn}> EN </div>
            </div>

            <Tab></Tab>
        </div>
    );
}

export default Login;