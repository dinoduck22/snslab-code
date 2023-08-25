import React from 'react';
import styles from './DicuBot.module.scss';

function dicuBot() {
    return(
        <div>
            {/*디쿠봇*/}
            <div className={styles.dicubotBg}>
                <img alt="dicu" src={require('../svg/dicu-botBackground.svg').default} />
            </div>
        </div>
    );
}

export default dicuBot;