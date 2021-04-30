/* eslint-disable react/no-unused-state */
import React from 'react';
// import PropTypes from 'prop-types';
import './Sidebar.css';

export default class SlideFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: sessionStorage.getItem('POST') || '10',
      jsonObj: {},
    };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(post) {
    // const { changePost } = this.props;
    this.setState({ post: post.target.value });
    // changePost(post.target.value);

    // sessionStorage.setItem('newPost', post);
    // this.setState({ jsonObj: post.target.value });
  }

  render() {
    const { post } = this.state;
    console.log('newPost', post);

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

// SlideFilter.propTypes = {
//   changePost: PropTypes.func.isRequired,
// };
