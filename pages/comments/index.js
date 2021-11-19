import React, { useState } from 'react'

function Index() {
    const [comments, setComments] = useState([])
    const [comment, setComment] = useState('')

    const fetchComments = async () =>{
        const response = await fetch('/api/comments')
        const data = await response.json()
        setComments(data)

    }

    const submitComment = async () =>{
        const response = await fetch('/api/comments',{
            method:'POST',
            body: JSON.stringify({comment}),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const data = await response.json()
        console.log(data);

    }

    const deletecomment = async commentId =>{
        const response = await fetch(`/api/comments/${commentId}`,{
            method:'DELETE'
        })
        const data = await response.json()
        console.log(data);
        fetchComments()

    }

    return (
        <div className='m-5'>
            <input type="text" value={comment} onChange={e => setComment(e.target.value)} />
            <br />
            <div className="mt-3">
            <button onClick={submitComment} className="btn btn-primary">Submit Comment</button>
            </div>
<br />


            <button onClick={fetchComments} className="btn btn-primary">Show Comments</button>
            {
                comments.map(hit =>{
                    return <div key={hit.id}>
                        {hit.text}
                        <button onClick={() => deletecomment(hit.id)} className='btn btn-primary' >Delete</button>

                    </div>
                })
            }
            
        </div>
    )
}

export default Index
