/* eslint-disable react/require-default-props */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { createContext, useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';

export const ColorContext = createContext(null);

const ColorContextProvider = (props) => {
  const defaultColors = {
    txt: sessionStorage.getItem('text') || '#fff',
    black: sessionStorage.getItem('mention') || '#000',
    im: sessionStorage.getItem('mention') || '#e1306c',
    fk: sessionStorage.getItem('mention') || '#4267b2',
    fkBackgroundNoImg: sessionStorage.getItem('background') || '#4267b2',
    fkRegexColor: sessionStorage.getItem('hashtag') || '#4267b2',
    tr: sessionStorage.getItem('mention') || '#1da1f2',
    trBackgroundNoImg: sessionStorage.getItem('background') || '#1da1f2',
    trRegexColor: sessionStorage.getItem('hashtag') || '#1da1f2',
  };

  const defaultTypo = {
    typo: sessionStorage.getItem('font_family') || 'Arial',
  };

  const [activeFontFamily, setActiveFontFamily] = useState(defaultTypo.typo);

  const backgroundColor =
    defaultColors.trBackgroundNoImg || defaultColors.fkBackgroundNoImg;
  const [background, setBackground] = useState(backgroundColor);

  const [hashtagColor, setHashtagColor] = useState(
    defaultColors.fkRegexColor ||
      defaultColors.imRegexColor ||
      defaultColors.trRegexColor
  );
  const [mentionColor, setMentionColor] = useState(
    defaultColors.imRegexColor ||
      defaultColors.fkRegexColor ||
      defaultColors.trRegexColor
  );
  const [txtColor, setTxtColor] = useState(defaultColors.txt);

  const restoreBackground = () => {
    setBackground(!background);
    sessionStorage.setItem('background', background);
  };

  const restoreHashtagAndMention = () => {
    setHashtagColor(!hashtagColor);
    setMentionColor(!mentionColor);
  };

  const restoreTxt = () => {
    setTxtColor(!txtColor);
  };

  const states = useMemo(
    () => ({
      function: {
        setActiveFontFamily,
        setBackground,
        setHashtagColor,
        setMentionColor,
        setTxtColor,
        restoreBackground,
        restoreHashtagAndMention,
        restoreTxt,
      },
      activeFontFamily,
      background,
      mentionColor,
      hashtagColor,
      txtColor,
    }),
    [activeFontFamily, background, mentionColor, hashtagColor, txtColor]
  );

  return (
    <ColorContext.Provider value={{ states }}>
      {props.children}
    </ColorContext.Provider>
  );
};

ColorContextProvider.propTypes = {
  children: PropTypes.node,
};

export default ColorContextProvider;
