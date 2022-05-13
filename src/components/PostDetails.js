import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { Link, useParams } from 'react-router-dom';

function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios
      .get(`https://scalio-post-service.herokuapp.com/posts/${id}`)
      .then(({ data }) => {
        setPost(data.data);
      })
      .catch((error) => {
        alert(`Error: ${error.response?.data.message || error.message}`);
      });
  });

  return (
    <>
      <div className="container">
        <Link to={'/'}>
          <button>Back</button>
        </Link>
      </div>
      <div className="post">
        <h1>TITLE: {post?.title}</h1>
        <b>BODY: {post?.body}</b>
      </div>
    </>
  );
}

export default PostDetails;
