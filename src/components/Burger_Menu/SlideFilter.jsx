// import React, { useState } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import './Sidebar.css';

// export default function SlideFilter() {
//   const [post, setPost] = useState(10);

//   const handleChange = (event) => {
//     setPost({ ...post, post: event.target.value });
//   };

//   return (
//     <div>
//       <div className="postFilter">
//         <div className="label-slider">
//           <div>Nombre de post {post}</div>
//         </div>
//         <input
//           type="range"
//           min={0}
//           max={50}
//           value={post}
//           className="SlideFilter"
//           onChange={(e) => handleChange(e)}
//         />
//       </div>
//     </div>
//   );
// }

export default class SlideFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: '5',
    };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(post) {
    const { changePost } = this.props;
    this.setState({ post: post.target.value });
    changePost(post.target.value);
  }

  render() {
    const { post } = this.state;
    return (
      <div className="postFilter">
        <div className="label-slider">
          <div>Nombre de post</div>
        </div>
        <input
          type="range"
          min={0}
          max={50}
          value={post}
          className="SlideFilter"
          onChange={this.handleOnChange}
        />
        <div>{post}</div>
      </div>
    );
  }
}

SlideFilter.propTypes = {
  changePost: PropTypes.func.isRequired,
};
