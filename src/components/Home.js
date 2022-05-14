import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Home() {
  const [postId, setPostId] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    setPostId(target.value);
  };

  const sendPost = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `https://scalio-post-service.herokuapp.com/posts/${postId}`
      );
      const { title, body } = data.data;
      if (!title) return alert('Post has no title');
      if (!body) return alert('Post has no body');
      navigate(`/posts/${postId}`);
    } catch (error) {
      alert(
        `Error from server: ${error.response?.data.message || error.message}`
      );
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <input
        placeholder="Enter Post ID"
        type="number"
        value={postId}
        onChange={handleChange}
      />
      <button disabled={loading} onClick={sendPost}>
        {loading ? 'Loading...' : 'Send'}
      </button>
    </div>
  );
}

export default Home;
