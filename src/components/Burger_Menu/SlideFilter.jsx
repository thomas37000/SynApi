import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import './Sidebar.css';

export default function SlideFilter() {
  const [post, setPost] = useState(10);

  // const handleOnChange = (props) => {
  //   const { changePost } = props;
  //   setPost({post: post.target.value});
  //   changePost(post.target.value);
  // };

  const handleChange = (e) => {
    setPost({ ...post, [e.target.post]: e.target.value });
  };

  return (
    <div>
      {' '}
      <div className="postFilter">
        <div className="label-slider">
          <div>Nombre de post {post}</div>
        </div>
        <input
          type="range"
          min={0}
          max={50}
          value={post}
          className="SlideFilter"
          onChange={(e) => handleChange(e)}
        />
      </div>
    </div>
  );
}

// SlideFilter.propTypes = {

// };
