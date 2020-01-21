import React from 'react'
import { UncontrolledCollapse,} from 'reactstrap'
 function Comments({comments , post }) {
    return (
        comments
            .filter(comment => comment.postId === post.id)
            .map(comment => (
       
<div>
<UncontrolledCollapse toggler={`#${post.title.split("").filter(x=> x!==" ").join("")}`}>
                <blockquote className="blockquote  rounded-pill bg-light text-dark">
                <p className="mb-0">  {comment.name}</p>
                <p className="mb-0">   {comment.body}        </p>
                <footer className="blockquote-footer">User : <cite title="Source Title">{comment.email}</cite></footer>
              </blockquote>
              </UncontrolledCollapse>


</div>


            //   <div
            //     key={comment.id}
            //     className="row-12  rounded-pill bg-light text-dark text-left display-flex aling-items-column"
            //     style={{ margin: "2rem" }}
            //   >
            //     <h3 className="comment-name">
            //       {comment.name}
            //     </h3>
            //     <p className="comment-email  text-muted">{comment.email}</p>
            //   </div>
            ))
    )
}

export default Comments