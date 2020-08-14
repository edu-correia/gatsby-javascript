import React, {useState} from "react";
import Header from "../components/Header";
import Content from "../components/Content";
import {EditorWrapper, EditorBtn} from './styled';

import './reset.css';

import configIcon from '../assets/config.svg';

const IndexPage = () => {
  const [test, setTest] = useState(true);

  const [pageTitle, setPageTitle] = useState('#fff');
  const [navBar, setNavBar] = useState('#000');
  const [contentBg, setContentBg] = useState('#ddd');
  const [pageText, setPageText] = useState('#303030');

  const handleShowClick = () => {
      setTest(!test);
  }

  return (
    <div>
      <Header 
        pageTitle={pageTitle}
        navBar={navBar}
      />

      <Content 
        contentBg={contentBg} 
        pageText={pageText}
      />

      <EditorBtn onClick={handleShowClick}>
        <img src={configIcon} alt="Configurações"/>
      </EditorBtn>

      {test && <EditorWrapper>
        <h1>Configurações</h1>

        <div className="input-block">
          <label htmlFor="pageTitle">Título da página:</label>
          <input type="color" id="pageTitle" value={pageTitle} onChange={e => setPageTitle(e.target.value)}/>
        </div>

        <div className="input-block">
          <label htmlFor="navBar">Fundo do menu:</label>
          <input type="color" id="navBar" value={navBar} onChange={e => setNavBar(e.target.value)}/>
        </div>

        <div className="input-block">
          <label htmlFor="contentBg">Background da página:</label>
          <input type="color" id="contentBg" value={contentBg} onChange={e => setContentBg(e.target.value)}/>
        </div>

        <div className="input-block">
          <label htmlFor="pageText">Texto da página:</label>
          <input type="color" id="pageText" value={pageText} onChange={e => setPageText(e.target.value)}/>
        </div>

      </EditorWrapper>}
    </div>
  )
}


export default IndexPage;
