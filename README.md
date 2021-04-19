# API Slide Your Net 
  ## params de l' api
  [https://slideyour.net/api.html](https://slideyour.net/api.html)

# Dictionnaire des variables colors
  ### couleur du texte
    txt === texte === #fff

  ### couleur des @ et #
    rx === Regex  ( @ || #)
    mention = @ 

    rxNoImg === #000
      couleur des @ et # quand background-color sans image

  ### couleur des réseaux sociaux
    tr === Twitter  
      hashtagColor || mentionColor === #1da1f2
    
    im === Instagram
      hashtagColor || mentionColor === #e1306c
    
    fb === Facebook
      hashtagColor || mentionColor === #4267b2

  ### couleur des backgrounds
    bg === background-color
    bgNoImgTr === background-color sans image Twitter === #1da1f2
    bgNoImgFb === background-color sans image Facebook === #4267b2

## defaults colors (dans CardProfile.jsx ou index.css)
 const defaultColors = {
    txt: '#fff',
    tr: '#1da1f2',
    fb: '#4267b2',
    im: '#e1306c',
    bgNoImgTr:'#1da1f2',
    bgNoImgFb: '#4267b2',
    rxTr: '#1da1f2',
    rxFb: '#4267b2',
    rxIm: '#e1306c',
    rxNoImg: '#000',
    hashtagColor: '#1da1f2',
  };

## noms des states
 ### bgColor
    bgColor correspond au background-color
  ### hashtagColor
    hashtagColor correspond à la couleur des hashtags #
  ### mentionColor
    mentionColor correspond à la couleur des arobases @
  ### txtColor
    txtColor correspond à la couleur du texte