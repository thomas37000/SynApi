/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
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

import 'react-accessible-accordion/dist/fancy-example.css';
import 'font-awesome/css/font-awesome.min.css';
import './Sidebar.css';

import PropTypes from 'prop-types';
import SlideFilter from './SlideFilter';

const SidebarTool = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeFontFamily, setActiveFontFamily] = useState();
  const [bgColor, setBgColor] = useState();
  const [hashtagColor, setHashtagColor] = useState();
  const [mentionColor, setMentionColor] = useState();
  const [txtColor, setTxtColor] = useState();

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

  const changePost = (post, props) => {
    const { postUpdate } = props;
    postUpdate(post);
  };

  return (
    <Sidebar
      sidebar={
        <div className="sidebarContainer">
          <button
            className="close"
            type="button"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            close
            {/* <a href="#" className="close" /> */}
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
                  {' '}
                  <div className="sidebarCategory">
                    <div className="dropdown">
                      <SlideFilter changePost={changePost} />
                    </div>
                    <div className="dropdown">
                      <div className="tri">
                        <input type="checkbox" />
                        Tri par ordre Alphabétique
                      </div>
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
        <i className="fa fa-cog" />
      </button>
    </Sidebar>
  );
};

Sidebar.propTypes = {
  postUpdate: PropTypes.func.isRequired,
};

export default SidebarTool;
