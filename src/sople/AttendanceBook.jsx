// id가 없으면 eslint 경고문이 발생함
// 해당 컴포넌트는 리스트를 렌더링하는 방법을 구현하기 위한 컴포넌트

import React from "react";

const students = [
    {
        id : 1,
        name : '상준'
    },
    {
        id : 2,
        name : '스티브'
    },
    {
        id : 3,
        name : '빌'
    },
    {
        id : 4,
        name : '제프'
    },
];

function AttendanceBook(props) {
    return (
        <ul>
            {students.map((student) => {
                return <li key={student.id}>{student.name}</li>
            })}
        </ul>
    )
}

export default AttendanceBook;