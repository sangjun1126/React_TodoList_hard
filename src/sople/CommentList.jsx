import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name : '상준',
        comment : '댓글 컴포넌트 만들기 성공!',
    },
    {
        name : '유재석',
        comment : '리액트 재밌긴 해요',
    },
    {
        name : '페이커',
        comment : 'ㅇㅈ'
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name = {comment.name} comment = {comment.comment} />
                )
            })}
        </div>
    )
}

export default CommentList;