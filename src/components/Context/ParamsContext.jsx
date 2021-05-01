/* eslint-disable react/require-default-props */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { createContext, useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';

export const ParamsContext = createContext(null);

const ParamsContextProvider = (props) => {
  const defaultColors = {
    txt: sessionStorage.getItem('txtColor') || '#fff',
    black: sessionStorage.getItem('mentionColor') || '#000',
    im: sessionStorage.getItem('mentionColor') || '#e1306c',
    fk: sessionStorage.getItem('mentionColor') || '#4267b2',
    fkBackgroundNoImg: sessionStorage.getItem('bgColor') || '#4267b2',
    fkRegexColor: sessionStorage.getItem('hashtagColor') || '#4267b2',
    tr: sessionStorage.getItem('mentionColor') || '#1da1f2',
    trBackgroundNoImg: sessionStorage.getItem('bgColor') || '#1da1f2',
    trRegexColor: sessionStorage.getItem('hashtagColor') || '#1da1f2',
  };

  const [bgColor, setBgColor] = useState(defaultColors.trBackgroundNoImg);

  const states = useMemo(
    () => ({
      function: { setBgColor },
      bgColor,
    }),
    [bgColor]
  );

  useEffect(() => {
    console.log('useEffetc', bgColor);
  }, [bgColor]);

  return (
    <ParamsContext.Provider value={{ states }}>
      {props.children}
    </ParamsContext.Provider>
  );
};

ParamsContextProvider.propTypes = {
  children: PropTypes.node,
};

export default ParamsContextProvider;
