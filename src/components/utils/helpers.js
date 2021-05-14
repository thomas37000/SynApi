/* eslint-disable no-unused-vars */

// pas de hooks
// les helpers pas de states, sinon context

const helpers = (props) => {
  const {
    setToken,
    setUserName,
    setUserNameToken,
    userName,
    userNameToken,
  } = props;

  const handleChange = (e) => {
    setUserName(e.target.value);
  };

  const handleChangeUserToken = (e) => {
    setUserNameToken(e.target.value);
  };

  const handleChangeToken = (e) => {
    setToken(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log(`Bienvenue ${userName}`);
    e.preventDefault();
    setUserName('');
  };

  const handleSubmitToken = (e) => {
    console.log(`Bienvenue ${userNameToken}`);
    e.preventDefault();
    setToken('');
  };
};

export default helpers;

// const handleChange = (e, setUserName) => {
//   setUserName(e.target.value);
// };

// const handleChangeUserToken = (e, setUserNameToken) => {
//   setUserNameToken(e.target.value);
// };

// const handleChangeToken = (e, setToken) => {
//   setToken(e.target.value);
// };

// const handleSubmit = (e, setUserName, userName) => {
//   console.log(`Bienvenue ${userName}`);
//   e.preventDefault();
//   setUserName('');
// };

// const handleSubmitToken = (e, setToken, userNameToken) => {
//   console.log(`Bienvenue ${userNameToken}`);
//   e.preventDefault();
//   setToken('');
// };

// export {
//   handleChange,
//   handleChangeToken,
//   handleChangeUserToken,
//   handleSubmit,
//   handleSubmitToken,
// };
