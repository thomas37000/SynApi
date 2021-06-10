import React, { createContext, useState, useMemo } from 'react';
import PropTypes from 'prop-types';

export const ColorContext = createContext(null);

const ColorContextProvider = (props) => {
  // ---------------------------------------------------------------------------
  // callback function pour les fonctions restore ( boutons annuler )
  // dans sidebar.jsx à partir de la ligne 123
  // ---------------------------------------------------------------------------
  const unmutabledColors = {
    txtColor: '#fff',
    black: '#000',
    // facebook default colors
    fk_babgroundColor: '#4267b2',
    fk_hashtagColor: '#4267b2',
    fk_mentionColor: '#4267b2',
    // facebook hashtag et mention sans image
    fk_hashtagColor_txt: '#000',
    fk_mentionColor_txt: '#000',
    // instagram default colors
    im_backgroundColor: '#e1306c',
    im_hashtagColor: '#e1306c',
    im_mentionColor: '#e1306c',
    // instagram hashtag et mention sans image
    im_hashtagColor_txt: '#000',
    im_mentionColor_txt: '#000',
    // twitter default colors
    tr_backgroundColor: '#1da1f2',
    tr_hashtagColor: '#1da1f2',
    tr_mentionColor: '#1da1f2',
    // twitter hashtag et mention sans image
    tr_hashtagColor_txt: '#000',
    tr_mentionColor_txt: '#000',
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
