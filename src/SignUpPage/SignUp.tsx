import styles from "../SignUpPage/SignUp.module.scss";
import Tab from "../LoginPage/Tab";
import React from "react";

function SignUp() {
    let agreement = "회원가입 시 SnSLAB의 서비스 약관 및 개인정보 처리방침을 확인하였으며, 이에 동의합니다.";
    return (
        <div className={styles.background}>
            <Tab></Tab>
            {/*Monitor*/}
            <div className={styles.monitor}>
                {/*MonitorLine1*/}
                <div className={styles.monitorLine1}>
                    {/*Monitor 브랜드*/}
                    <div className={styles.brand}> SnSLAB </div>
                    {/*power*/}
                    <div className={styles.powerBx}></div>
                    <div className={styles.power}> power </div>
                    {/*한영 선택버튼*/}
                    <div className={styles.hanBttn}> {/*위치*/}
                        <div className={styles.langBttn}> 한 </div> {/*스타일*/}
                    </div>
                    <div className={styles.enBttn}> {/*위치*/}
                        <div className={styles.langBttn}> EN </div> {/*스타일*/}
                    </div>
                    {/*monitorLine2*/}
                    <div className={styles.monitorLine2}>
                        {/*Screen*/}
                        <div className={styles.screen}>
                            {/*Screen 상단 바*/}
                            <div className={styles.upperBar}>
                                <div className={styles.upperBarPlus}> + </div>
                                <div className={styles.upperBarTitle}> snslab@user:~ </div>
                                <div className={styles.upperBarBttn}>
                                    <img alt="Button" src={require("../svg/upperBarBttn.svg").default} />
                                </div>
                            </div>
                            {/*Screen Number Tab*/}
                            <div className={styles.NbrTab}>
                                <div className={styles.NbrTabNbr}>
                                    <div className={styles.NbrTabNbr1}> 1 </div>
                                    <div className={styles.NbrTabNbr2}> 2 </div>
                                    <div className={styles.NbrTabNbr3}> 3 </div>
                                </div>
                            </div>
                            {/*Screen 불투명 흰색*/}
                            <div className={styles.inputBgWht}>
                                {/*연동 로그인 문구*/}
                                <div className={styles.linkLoginTxt}> 하나의 아이디로 서비스 이용하기 </div>
                                {/*화살표*/}
                                <div className={[styles.linkLoginArr, styles.linkLoginArrLeft].join(" ")}>
                                    <img alt = "arrowL" src={require('../svg/doubleArrwL.svg').default}/>
                                </div>
                                <div className={[styles.linkLoginArr, styles.linkLoginArrRight].join(" ")}>
                                    <img alt = "arrowR" src={require('../svg/doubleArrwR.svg').default}/>
                                </div>
                                {/*브랜드 아이콘*/}
                                <div className={styles.icon}>
                                    <div className={styles.googleIcon}>
                                        <img alt = "GoogleLogin" src={require('../svg/googleIcon.svg').default}/>
                                    </div>
                                    <div className={styles.githubIcon}>
                                        <img alt = "GithubLogin" src={require('../svg/githubIcon.svg').default}/>
                                    </div>
                                    <div className={styles.dcuIcon}>
                                        <img alt = "DcuLogin" src={require('../svg/dcuIcon.svg').default}/>
                                    </div>
                                </div>
                                {/*정보 입력란*/}
                                <div className={styles.inputGroup}>
                                    <div className={styles.inputBoxShadow}></div>
                                    <div className={styles.signUpBttn}> 회원가입 </div>
                                </div>
                                <div className={styles.input}>
                                    <div className={styles.inputBox}>
                                        <div className={styles.inputBoxTxt}> 이메일 </div>
                                    </div>
                                    <div className={styles.inputBox}>
                                        <div className={styles.inputBoxTxt}> 비밀번호 (영문, 숫자, 특수문자 8-30자) </div>
                                    </div>
                                    <div className={styles.inputBox}>
                                        <div className={styles.inputBoxTxt}> 비밀번호 확인 </div>
                                    </div>
                                    <div className={styles.inputBox}>
                                        <div className={styles.inputBoxTxt}> 이름 (2-15자) </div>
                                    </div>
                                </div>
                                {/*기존 아이디 존재유무 확인*/}
                                <div className={styles.checkLogin}>
                                    <div className={styles.checkLoginPlainTxt}> 이미 계정이 있으세요? </div>
                                    <div className={styles.checkLoginBttnTxt}> 로그인 </div>
                                </div>
                                {/*약관 동의*/}
                                <div className={styles.agreementBg}>
                                    <div className={styles.agreementTxt}> {agreement} </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;