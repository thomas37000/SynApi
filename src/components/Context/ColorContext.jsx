/* eslint-disable react/require-default-props */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { createContext, useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';

export const ColorContext = createContext(null);

const ColorContextProvider = (props) => {
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

  const defaultTypo = {
    typo: sessionStorage.getItem('activeFontFamily') || 'Arial',
  };

  const [activeFontFamily, setActiveFontFamily] = useState(defaultTypo.typo);
  const [bgColor, setBgColor] = useState(
    defaultColors.trBackgroundNoImg || defaultColors.fkBackgroundNoImg
  );
  const [hashtagColor, setHashtagColor] = useState(
    defaultColors.fkRegexColor ||
      defaultColors.imRegexColor ||
      defaultColors.trRegexColor
  );
  const [mentionColor, setMentionColor] = useState(
    defaultColors.fkRegexColor ||
      defaultColors.imRegexColor ||
      defaultColors.trRegexColor
  );
  const [txtColor, setTxtColor] = useState(defaultColors.txt);

  const restoreBg = () => {
    setBgColor(!bgColor);
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
        setBgColor,
        setHashtagColor,
        setMentionColor,
        setTxtColor,
        restoreBg,
        restoreHashtagAndMention,
        restoreTxt,
      },
      activeFontFamily,
      bgColor,
      mentionColor,
      hashtagColor,
      txtColor,
    }),
    [activeFontFamily, bgColor, mentionColor, hashtagColor, txtColor]
  );

  useEffect(() => {
    setActiveFontFamily(activeFontFamily);
    setBgColor(bgColor);
    setHashtagColor(hashtagColor);
    setMentionColor(mentionColor);
    setTxtColor(txtColor);
  }, [activeFontFamily, bgColor, mentionColor, hashtagColor, txtColor]);

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
