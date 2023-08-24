import React from 'react';
import styles from './Login.module.scss';
import Tab from './Tab';
import Monitor from "./Monitor";

function Login() {

    return(
        <div className={styles.background}>
            <Monitor></Monitor>
            <Tab></Tab>
            {/*키보드*/}
            <div className={styles.keybdBg}>
                {/*힌지*/}
                <div className={styles.hinge}></div>
                {/*한영 선택버튼*/}
                <div className={styles.hanBttn}> {/*위치*/}
                    <div className={styles.langBttn}> 한 </div> {/*스타일*/}
                </div>
                <div className={styles.enBttn}> {/*위치*/}
                    <div className={styles.langBttn}> EN </div> {/*스타일*/}
                </div>
                {/*키보드 상단 탭*/}
                <div className={styles.keybdTab}>
                    <div className={styles.tabIconLight}>
                        <img alt="light" src={require('../svg/tabIconLight.svg').default} />
                    </div>
                    <div className={styles.tabIconDefault}>
                        <img alt="default" src={require('../svg/tabIconDefault.svg').default}/>
                    </div>
                    <div className={styles.tabIconSound}>
                        <img alt="sound" src={require('../svg/tabIconSound.svg').default} />
                    </div>
                </div>
                {/*불빛 디자인*/}
                <div className={styles.keybdLight}>
                    <img alt="design" src={require('../svg/keyboardLight.svg').default} />
                </div>
                {/*키보드 버튼*/}
                <div className={styles.backBttn}>
                    <div className={styles.backBttnArr}>
                        <img alt="back" src={require('../svg/leftArrw.svg').default}/>
                    </div>
                </div>
                <div className={styles.signupBttn}>
                    <div className={styles.signupBttnArr}>
                        <img alt="signUp" src={require('../svg/rightArrw.svg').default}/>
                    </div>
                </div>
                <div className={styles.findID}>
                    <div className={styles.keybdBttnSmall}>
                        <div className={styles.findIDArr}>
                            <img alt="findID" src={require('../svg/upArrw.svg').default}/>
                        </div>
                    </div>
                </div>
                <div className={styles.findPW}>
                    <div className={styles.keybdBttnSmall}>
                        <div className={styles.findPWArr}>
                            <img alt="findPW" src={require('../svg/downArrw.svg').default}/>
                        </div>
                    </div>
                </div>
                <div className={styles.enter}></div>
            </div>

            {/*디쿠봇*/}
            <div className={styles.dicubotBg}>
                <img alt="dicu" src={require('../svg/dicu-botBackground.svg').default} />
            </div>


        </div>
    );
}

export default Login;