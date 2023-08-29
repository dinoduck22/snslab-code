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