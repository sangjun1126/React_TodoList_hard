// 사용자의 로그인 여부를 나타내는 컴포넌트
// 삼항연산자를 이용한 조건문 구현

import React from "react";

const styles = {
    wrapper : {
        padding : 16,
        display : 'flex',
        flexDirection : 'row',
        borderRadius : '1px solid grey',
    },
    greeting : {
        marginRight : 8,
    },
};

function Toolbar(props) {
    const {isLoggedIn, onClickLogin, onClickLogout} = props;

    return (
        <div style={styles.wrapper}>
            {isLoggedIn && <span style={styles.greeting}>환영합니다.</span>}

            {isLoggedIn ? (
                <button onClick={onClickLogout}>로그아웃</button>
            ) : (<button onClick={onClickLogin}>로그인</button>)}
        </div>
    )
}

export default Toolbar