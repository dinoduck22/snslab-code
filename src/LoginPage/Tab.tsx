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

                {/* 프로필 */}
                <div className={styles.profileBg}>
                    <img alt="proflie" src={require("../svg/profile.svg").default} />
                    <div className={styles.fontThree}> 프로필 </div>
                </div>

                {/* 강의수강 */}
                <div className={styles.lecture}>
                    <img alt="lecture" src={require("../svg/lecture.svg").default} />
                    <div className={styles.fontFour}> 강의수강 </div>
                </div>

                {/* 문제풀기 */}
                <div className={styles.problem}>
                    <img alt="problemSolving" src={require("../svg/problem.svg").default} />
                    <div className={styles.fontFour}> 문제풀기 </div>
                </div>

                {/* 스킬체크 */}
                <div className={styles.skillcheck}>
                    <img alt="skillCheck" src={require("../svg/skillcheck.svg").default} />
                    <div className={styles.fontFour}> 스킬체크 </div>
                </div>

                {/* 코딩대회 */}
                <div className={styles.contest}>
                    <img alt="codingContest" src={require("../svg/contest.svg").default} />
                    <div className={styles.fontFour}> 코딩대회 </div>
                </div>

                {/* 커뮤니티 */}
                <div className={styles.community}>
                    <img alt="community" src={require("../svg/community.svg").default} />
                    <div className={styles.fontFour}> 커뮤니티 </div>
                </div>

                {/* 다크모드 */}
                <div className={styles.darkmode}>
                    <img alt="darkmode" src={require("../svg/darkmode.svg").default} />
                    <div className={styles.fontDarkmode}> 다크모드 </div>
                </div>
            </div>
        </div>
    );
}

export default Tab;