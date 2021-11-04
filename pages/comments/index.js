import { useEffect, useState } from "react"

export default function CommentsList(){
  const [index, setIndex] = useState(0);
  const [comments, setComments] = useState([]);
  const [text, setText] = useState('');

  const submitComments = async () => {
    const response = await fetch('/api/comments', {
      method: "POST",
      body: JSON.stringify({text}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json();
    setIndex(index + 1);
    console.log(data);
  }
  
  const deleteComments = async (commentId) => {
    const response = await fetch(`/api/comments/${commentId}`, {
      method : 'DELETE'
    });
    const data = await response.json();
    setIndex(index + 1);
    console.log(data);
  }
  
  useEffect(() => {
    async function fetchComments(){
      const response = await fetch('/api/comments');
      const data = await response.json();
      setComments(data);
    }

    fetchComments();
    console.log(comments);
  }, [index])

  return(
    <>
      <h2>Comment List Group</h2>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={submitComments}>Add Comments</button>
      {comments.map(item => (
        <div key={item.id}>
          {item.id} {item.text}
          <button onClick={() => deleteComments(item.id)}>Delete</button>
        </div>
      ))}
    </>
  )
}