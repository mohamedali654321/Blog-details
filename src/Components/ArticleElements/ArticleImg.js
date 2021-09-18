import React from 'react'
import styled from 'styled-components'
function ArticleImg(props) {
    return (
        <ImgContainer>
        <ImgWrapper>
        <Img src={props.image} alt="article_img"/>
        </ImgWrapper>
              
        </ImgContainer>
    )
}

export default ArticleImg

const ImgContainer=styled.div`
 padding-left: 0;
    padding-right: 0;
    @media (min-width: 992px) {
   
      padding-left: 18px;
      padding-right: 18px;
    
  }

  position: relative;
    max-width: 820px;
    margin-left: auto;
    margin-right: auto;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding-left: 30px;
    padding-right: 30px;



`;

const ImgWrapper=styled.div`
 position: relative;
    width: 100%;
    overflow: hidden;
    margin-bottom: 32px;
    padding-bottom: 52.356%;
    @media (min-width: 992px) {
   
      margin-bottom: 50px;
    
  }

`;

const Img=styled.img`
 position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    opacity: 1;
    visibility: inherit;
    border-radius: 20px;

`;