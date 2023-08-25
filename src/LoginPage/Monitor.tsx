import styles from "./Monitor.module.scss";
import React from "react";

function monitor() {
    let codes = "#include <stdio.h>\n" +
        "\n" +
        "int main(void) {\n" +
        "    char ID[100] = “ “;\n" +
        "    char PW[100] = “ “;\n" +
        "    scanf_s(“%s %s”, ID, PW);\n" +
        "    return 0;\n" +
        "}"
    let IDConsoleTabTxt = ">_Console"
    let runTxt = "> Run"
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
                        {/*screen*/}
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
                            {/*Screen 좌측 코드*/}
                            <div className={styles.screenCode}>{codes}</div>
                            {/*Screen 우측 인풋*/}
                            <div className={styles.inputBgWht}>
                                <div className={styles.inputInnerBg}>
                                    {/*Console Tab*/}
                                    <div className={styles.IDConsoleTabBg}>
                                        <div className={styles.IDConsoleTxt}> {IDConsoleTabTxt} </div>
                                    </div>
                                    <div className={styles.IDConsoleBg}>
                                        {/*꺽쇄*/}
                                        <div className={styles.rightBrk}>
                                            <div className={styles.IDRightBrk}>
                                                <img alt="pointer" src={require("../svg/rightAngleBracket.svg").default} />
                                            </div>
                                            <div className={styles.PWRightBrk}>
                                                <img alt="pointer" src={require("../svg/rightAngleBracket.svg").default} />
                                            </div>
                                        </div>
                                        {/*ID, PW 명시 텍스트*/}
                                        <div className={styles.IDPWTxt}>
                                            <div className={styles.IDTxt}> ID : </div>
                                            <div className={styles.PWTxt}> PW : </div>
                                        </div>
                                        {/*인풋 박스*/}
                                        <div className={[styles.IDBox, styles.inputBox].join(" ")}>
                                            <div className={[styles.inputTxt, styles.blink].join(" ")}> _ </div>
                                        </div>
                                        <div className={[styles.PWBox, styles.inputBox].join(" ")}>
                                            <div className={[styles.inputTxt, styles.blink].join(" ")}> _ </div>
                                        </div>
                                        {/*실행버튼 Run*/}
                                        <div className={styles.runBg}>
                                            <div className={styles.runTxt}> {runTxt} </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default monitor;