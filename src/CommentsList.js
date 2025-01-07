import CommentsListRow from "./CommentsListRow.js";
import { useState } from "react";

function CommentsList() {

    const [comments, setcomments] = useState([
        { id: 1, text: "Это первый комментарий" },
        { id: 2, text: "Это второй комментарий" },
        { id: 3, text: "Это третий комментарий" }
    ]);

    const [text, settext] = useState();

    const onDelete = (event) => {
        event.preventDefault();
        let currentId;
        for (let index = 0; index < comments.length; index++) {
            const element = comments[index];
            if (event.target.id == element.id) {
                currentId = index;
            }
        };
        let newComments = [...comments];
        newComments.splice(currentId, 1);
        setcomments(newComments);
    };

    const onAdd = (event) => {
        event.preventDefault();
        let maxId = -1;
        comments.forEach(element => {
            if (element.id > maxId) {
                maxId = element.id;
            }
        });
        setcomments([...comments, {id: maxId + 1, text: text}]);
    };

    const onChange = (event) => {
        settext(event.target.value);
    };


    return (
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Текст</th>
                    <th>Действие</th>
                </tr>
            </thead>
            <tbody>
                {comments.map((comment) => <CommentsListRow key={comment.id} comment={comment} onDelete={onDelete} />)}
            </tbody>
            <tfoot>
                <tr>
                    <td></td>
                    <td><input type="text" onChange={onChange}/></td>
                    <td><input type="button" value="Add" onClick={onAdd}/></td>
                </tr>
            </tfoot>
        </table>
    );
}

export default CommentsList;