import React, { createContext, useState, useMemo } from 'react';
import PropTypes from 'prop-types';

export const ColorContext = createContext(null);

const ColorContextProvider = (props) => {
  const unmutabledColors = {
    txt: '#fff',
    txtColor: '#fff',
    black: '#000',
    im: '#e1306c',
    fk: '#4267b2',
    tr: '#1da1f2',
    hashtagColor: '#000',
    mentionColor: '#000',
    backgroundColor: '#1da1f2',
  };

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

  const BgColor =
    defaultColors.trBackgroundNoImg || defaultColors.fkBackgroundNoImg;
  const [backgroundColor, setBackgroundColor] = useState(BgColor);

  const [hashtagColor, setHashtagColor] = useState(
    defaultColors.fkRegexColor &&
      defaultColors.imRegexColor &&
      defaultColors.trRegexColor
  );
  const [mentionColor, setMentionColor] = useState(
    defaultColors.imRegexColor &&
      defaultColors.fkRegexColor &&
      defaultColors.trRegexColor
  );
  const [txtColor, setTxtColor] = useState(defaultColors.txt);

  const states = useMemo(
    () => ({
      function: {
        setActiveFontFamily,
        setBackgroundColor,
        setHashtagColor,
        setMentionColor,
        setTxtColor,
      },
      activeFontFamily,
      backgroundColor,
      mentionColor,
      hashtagColor,
      txtColor,
      unmutabledColors,
    }),
    [
      activeFontFamily,
      backgroundColor,
      mentionColor,
      hashtagColor,
      txtColor,
      unmutabledColors,
    ]
  );

  const { children } = props;

  return (
    <ColorContext.Provider value={{ states }}>{children}</ColorContext.Provider>
  );
};

ColorContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ColorContextProvider;
