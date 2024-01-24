// ConfirmButton은 클래스형 컴포넌트 이기에 이를 함수형 컴포넌트로 변경해주었다.

import React , {useState} from "react";

function SFC_ConfirmButton(props) {
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleConfirm = () => {
        setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
    };

    return (
        <button onClick={handleConfirm} dlsabled = {isConfirmed}>
            {isConfirmed ? "확인됨" : "확인하기"}
        </button>
    )
}

export default SFC_ConfirmButton;