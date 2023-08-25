import React from 'react';
import styles from './Keyboard.module.scss';

function keyboard() {
    return(
        <div className={styles.background}>
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
                    <div className={[styles.BttnTxtBig, styles.backTxt].join(" ")}> 돌아가기 </div>
                    <div className={styles.backBttnArr}>
                        <img alt="back" src={require('../svg/leftArrw.svg').default}/>
                    </div>
                </div>
                <div className={styles.signupBttn}>
                    <div className={[styles.BttnTxtBig, styles.signupTxt].join(" ")}> 회원가입 </div>
                    <div className={styles.signupBttnArr}>
                        <img alt="signUp" src={require('../svg/rightArrw.svg').default}/>
                    </div>
                </div>
                <div className={[styles.findID, styles.keybdBttnSmall].join(" ")}>
                    <div className={styles.BttnTxtsmall}> ID찾기 </div>
                    <div className={styles.findIDArr}>
                        <img alt="findID" src={require('../svg/upArrw.svg').default}/>
                    </div>
                </div>
                <div className={[styles.findPW, styles.keybdBttnSmall].join(" ")}>
                    <div className={styles.BttnTxtsmall}> PW찾기 </div>
                    <div className={styles.findPWArr}>
                        <img alt="findPW" src={require('../svg/downArrw.svg').default}/>
                    </div>
                </div>
                <div className={styles.enter}>
                    <div className={styles.enterTxt}> ENTER </div>
                    <div className={styles.enterArr}>
                        <img alt="enter" src={require('../svg/enterArrw.svg').default}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default keyboard;