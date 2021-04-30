/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Sidebar from 'react-sidebar';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import { SketchPicker } from 'react-color';
import FontPicker from 'font-picker-react';
import PropTypes from 'prop-types';
import SlideFilter from './SlideFilter';
import 'react-accessible-accordion/dist/fancy-example.css';
import 'font-awesome/css/font-awesome.min.css';
import './Sidebar.css';

const SidebarTool = () => {
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

  const [hashtagColor, setHashtagColor] = useState(
    defaultColors.fkRegexColor ||
      defaultColors.imRegexColor ||
      defaultColors.trRegexColor
  );
  const [bgColor, setBgColor] = useState(defaultColors.trBackgroundNoImg);
  const [txtColor, setTxtColor] = useState(defaultColors.txt);
  const [mentionColor, setMentionColor] = useState(defaultColors.black);
  const [activeFontFamily, setActiveFontFamily] = useState(defaultTypo.typo);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [postUpdate, setPostUpdate] = useState();
  const [jsonObj, setJsonObj] = useState({});

  const onSetSidebarOpen = (open) => {
    setSidebarOpen({ sidebarOpen: open });
  };

  // restore color background / text / # or @ by default
  const restorehashtagColor = () => {
    setHashtagColor(!hashtagColor);
  };

  const restoreBg = () => {
    setBgColor(!bgColor);
  };

  const restoreTxt = () => {
    setTxtColor(!txtColor);
  };

  const restoreMention = () => {
    setMentionColor(!mentionColor);
  };

  const restoreFontFamily = () => {
    setActiveFontFamily(!activeFontFamily);
  };

  const changePost = () => {
    setPostUpdate(postUpdate);
  };

  const upDatePost = (e) => {
    setPostUpdate({ value: e.target.value });
  };

  const submitColor = () => {
    const jsonColor = JSON.stringify(jsonObj);
    // console.log('JSON', jsonColor);
  };

  useEffect(() => {
    sessionStorage.setItem('bgColor', bgColor);
    sessionStorage.setItem('mentionColor', mentionColor);
    sessionStorage.setItem('hashtagColor', hashtagColor);
    sessionStorage.setItem('txtColor', txtColor);
    sessionStorage.setItem('fontFamily', activeFontFamily);
    // console.log('json', sessionStorage);
    setJsonObj({
      bgColor,
      mentionColor,
      hashtagColor,
      txtColor,
      activeFontFamily,
    });
  }, [activeFontFamily, bgColor, mentionColor, hashtagColor, txtColor]);

  return (
    <Sidebar
      sidebar={
        <div className="sidebarContainer">
          <button
            className="close"
            type="button"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            X
          </button>

          <div className="sidebarCategory">
            <span>Couleurs et Typographie</span>
            <Accordion allowZeroExpanded>
              <AccordionItem key="">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    changer la couleur du Background
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <SketchPicker
                    onChange={(color) => setBgColor(color.hex)}
                    className="sketchPicker"
                  />
                  <button
                    id="btn"
                    className="cancel"
                    type="submit"
                    onClick={() => restoreBg()}
                  >
                    Annuler
                  </button>
                  <button
                    id="btn"
                    className="submit"
                    type="submit"
                    onClick={() => submitColor()}
                  >
                    Valider
                  </button>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
            <Accordion allowZeroExpanded>
              <AccordionItem key="">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    changer la couleur du Texte
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <SketchPicker
                    onChange={(color) => setTxtColor(color.hex)}
                    className="sketchPicker"
                  />
                  <button
                    id="btn"
                    className="cancel"
                    type="submit"
                    onClick={() => restoreTxt()}
                  >
                    Annuler
                  </button>
                  <button
                    id="btn"
                    className="submit"
                    type="submit"
                    onClick={() => submitColor()}
                  >
                    Valider
                  </button>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
            <Accordion allowZeroExpanded>
              <AccordionItem key="">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    changer la couleur des # et @
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <SketchPicker
                    onChange={(color) =>
                      setHashtagColor(color.hex) || setMentionColor(color.hex)
                    }
                    className="sketchPicker"
                  />
                  <button
                    id="btn"
                    className="cancel"
                    type="submit"
                    onClick={() => {
                      restorehashtagColor();
                      restoreMention();
                    }}
                  >
                    Annuler
                  </button>
                  <button
                    id="btn"
                    className="submit"
                    type="submit"
                    onClick={() => submitColor()}
                  >
                    Valider
                  </button>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
            <Accordion allowZeroExpanded>
              <AccordionItem key="">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    changer la Typographie
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <FontPicker
                    apiKey="AIzaSyBqmdg2e_R-b0vz6xutdlonOrfWUuQ0Tas"
                    activeFontFamily={activeFontFamily}
                    onChange={(nextFont) =>
                      setActiveFontFamily(nextFont.family)
                    }
                    className="typo"
                  />
                  <button
                    id="btn"
                    className="cancel"
                    type="submit"
                    onClick={() => restoreBg()}
                  >
                    Annuler
                  </button>
                  <button
                    id="btn"
                    className="submit"
                    type="submit"
                    onClick={() => submitColor()}
                  >
                    Valider
                  </button>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="sidebarCategory">
            <span>Tri et nombre de posts</span>
            <Accordion allowZeroExpanded>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <span>Tri et nombre de posts</span>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className="sidebarCategory">
                    <div className="dropdown">
                      <SlideFilter
                        changePost={changePost}
                        onChange={upDatePost}
                      />
                    </div>
                    <div className="dropdown">
                      <div className="tri">
                        <input type="checkbox" />
                        Tri par date de publication
                      </div>
                    </div>
                    <div className="dropdown">
                      <div className="tri">
                        <input type="checkbox" />
                        Tri par ordre de contenus
                      </div>
                    </div>
                    <div className="dropdown">
                      <div className="tri">
                        <input type="checkbox" />
                        Tri par ordre croissant
                      </div>
                    </div>
                    <div className="dropdown">
                      <div className="tri">
                        <input type="checkbox" />
                        Tri par ordre décroissant
                      </div>
                    </div>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      }
      open={sidebarOpen}
      onSetOpen={onSetSidebarOpen}
      styles={{ sidebar: { background: 'white', width: 350 } }}
      onClick={() => onSetSidebarOpen(true)}
    >
      <button
        className="btnSidebar"
        type="button"
        onClick={() => onSetSidebarOpen(true)}
      >
        <i className="fa fa-cog fa-2x" />
      </button>
    </Sidebar>
  );
};

Sidebar.propTypes = {
  postUpdate: PropTypes.func.isRequired,
};

export default SidebarTool;
