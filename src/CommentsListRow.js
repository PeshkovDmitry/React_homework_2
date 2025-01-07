function CommentsListRow({ comment, onDelete }) {
    return (
        <tr>
            <td>{comment.id}</td>
            <td>{comment.text}</td>
            <td><input type="button" value="Delete" onClick={onDelete} id={comment.id}/></td>
        </tr>
    )
}

export default CommentsListRow;