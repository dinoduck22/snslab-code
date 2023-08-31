import React from 'react';
import styles from './Tab.module.scss';

function Tab() {
    return (
        <div>
            {/* 탭 */}
            <div className={styles.tab}>
                {/* 로고 */}
                <div className={styles.logo}>
                    <img alt="proflie" src={require("../svg/dcuLogo.svg").default} />
                </div>
                <div className={styles.iconGroup}>
                    <div className={styles.icon}>
                        {/* 프로필 */}
                        <img alt="proflie" src={require("../svg/profile.svg").default} />
                    </div>
                    <div className={styles.fontThree}> 프로필 </div>
                    <div className={styles.icon}>
                        {/* 강의수강 */}
                        <img alt="lecture" src={require("../svg/lecture.svg").default} />
                    </div>
                    <div className={styles.fontFour}> 강의수강 </div>
                    <div className={styles.icon}>
                        {/* 문제풀기 */}
                        <img alt="problemSolving" src={require("../svg/problem.svg").default} />
                    </div>
                    <div className={styles.fontFour}> 문제풀기 </div>
                    <div className={styles.icon}>
                        {/* 스킬체크 */}
                        <img alt="skillCheck" src={require("../svg/skillcheck.svg").default} />
                    </div>
                    <div className={styles.fontFour}> 스킬체크 </div>
                    <div className={styles.icon}>
                        {/* 코딩대회 */}
                        <img alt="codingContest" src={require("../svg/contest.svg").default} />
                    </div>
                    <div className={styles.fontFour}> 코딩대회 </div>
                    <div className={styles.icon}>
                        {/* 커뮤니티 */}
                        <img alt="community" src={require("../svg/community.svg").default} />
                    </div>
                    <div className={styles.fontFour}> 커뮤니티 </div>
                    <div className={styles.icon}>
                        {/* 다크모드 */}
                        <img alt="darkmode" src={require("../svg/darkmode.svg").default} />
                    </div>
                    <div className={styles.fontFour}> 다크모드 </div>
                </div>
            </div>
        </div>
    );
}

export default Tab;