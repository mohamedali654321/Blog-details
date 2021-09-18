import React from 'react'
import styled from 'styled-components';
function ArticleContent(props) {
    return (
       <Container dangerouslySetInnerHTML={{__html: props.body}}/>
    )
}

export default ArticleContent

const Container=styled.div`
 overflow: hidden;
    color: #344b80;
    background-color: #fff;
    font-family: Poppins, serif;
    font-size: 17px;
    font-weight: 400;
    line-height: 28px;
    position: relative;
    /* background-color: #e6e0ff; */
    color: #344b80;
    /* word-break: break-word; */
    white-space: pre-line;


    strong {
    font-weight: 600;
  }
  h1,
   h2,
   h3,
   h4,
 h5,
  h6 {
    color: #2f2e8b;
    font-weight: 700;
    line-height: 1.25;
    margin-bottom: 26px;
  }
  h1 strong,
  h2 strong,
   h3 strong,
 h4 strong,
   h5 strong,
 h6 strong {
    font-weight: 700;
  }
  @media (min-width: 992px) {
     h1,
     h2,
     h3,
     h4,
     h5,
    h6 {
      /* margin-bottom: 28px; */
    }
  }
   li {
    /* margin-bottom: 10px; */
  }
   li:last-child {
    margin-bottom: 0;
  }
   li,
   p {
    line-height: 1.6;
  }
  ol,
   p,
  ul {
    /* margin-bottom: 25px; */
  }
  @media (min-width: 992px) {
     ol,
     p,
     ul {
      /* margin-bottom: 31px; */
    }
  }
   ol:last-child,
   p:last-child,
   ul:last-child {
    margin-bottom: 0;
  }
   h1 {
    font-size: 33px;
  }
  @media (min-width: 992px) {
    h1 {
      font-size: 53px;
    }
  }
 h2 {
    font-size: 21px;
    margin-top: 15px;
  }
  @media (min-width: 992px) {
     h2 {
      font-size: 33px;
      margin-top: 70px;
    }
  }
   h3 {
    font-size: 17px;
  }
  @media (min-width: 992px) {
     h3 {
      font-size: 21px;
    }
  }
   p {
    font-size: 15px;
  }
  @media (min-width: 992px) {
     p {
      font-size: 19px;
    }
  }
  em {
    font-style: italic;
  }
   a {
    color: #7e43e6;
    text-decoration: none;
    -webkit-transition: color 0.1s linear;
    -moz-transition: color 0.1s linear;
    transition: color 0.1s linear;
  }
   a:hover {
    color: #4e26e0;
  }
  a {
    position: relative;
    background-color: #e6e0ff;
  }
  
 
 
  
 
   img {
    width: 100%;
  }
   ul {
    list-style: disc inside;
  }
   ul p {
    display: inline;
  }
   ol {
    list-style: decimal inside;
  }
  code,
   pre {
    border-radius: 3px;
    color: #fff !important;
    background-color: #2f2e8b !important;
    font-size: 15px !important;
  }
   code {
    padding: 3px 6px;
  }
   pre {
    overflow: auto;
    padding: 16px;
    margin: 35px 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
   pre code {
    padding: 0;
    background: none;
  }
  code {
    font-family: monospace;
    margin: 0;
    /* word-break: break-word; */
  }
   blockquote {
    padding: 20px;
    background-color: #f6fafe;
    border: 1px solid #e9f0f8;
    /* margin-bottom: 35px; */
    border-radius: 4px;
  }
  @media (min-width: 992px) {
     blockquote {
      padding: 32px;
    }
  }
   blockquote p {
    line-height: 1.7;
    font-size: 13px;
  }
  @media (min-width: 992px) {
    blockquote p {
      line-height: inherit;
      font-size: 17px;
    }
  }
   blockquote p:last-child {
    margin-bottom: 0;
  }
   img[src*="#small"] {
    display: block;
    max-width: 250px;
    margin: 0 auto 35px;
    width: 80%;
  }
   iframe {
    max-width: 100%;
  }

`;