import React, {useState} from "react";
import Header from "../components/Header";
import Content from "../components/Content";

import styled from 'styled-components';

import './reset.css';

import configIcon from '../assets/config.svg';

export const EditorWrapper = styled.div`
    width: 300px;
    height: 100vh;
    position: absolute;
    right: 0;
    top: 0;
    background-color: #151515;
    border-left: 5px solid #fff;
`;

export const EditorBtn = styled.button`
    width: 50px;
    height: 50px;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 2;
    background: white;
    border: none;
    outline: none;
    border-radius: 0 0 0 100%;
    padding: 0 0 10px 10px;
`;

const IndexPage = () => {
  const [test, setTest] = useState(true);

  const [pageTitle, setPageTitle] = useState('#fff');
  const [navBar, setNavBar] = useState('#000');
  const [contentBg, setContentBg] = useState('#ddd');

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
      >

      </Content>

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
      </EditorWrapper>}
    </div>
  )
}


export default IndexPage;
