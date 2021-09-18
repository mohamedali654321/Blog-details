import React from 'react'
import styled from 'styled-components'

function ArticleFooter(props) {
    return (
        <Container>
        <Separator/>
        <Wrapper>
        <ImgWrapper>
       <AuthorImg src={props.image} alt="author_avatar"/>
        
        </ImgWrapper>
        <Description>
        <AuthorName>{props.AuthorName}</AuthorName>
        <AuthorJob>{props.AuthorJob}</AuthorJob>

        </Description>
       

        </Wrapper>
        <AuthorText>{props.AuthorText}</AuthorText>

        <Separator style={{marginTop:"20px"}}/>

        </Container>
    )
}

export default ArticleFooter


const Container=styled.div`
margin-top: 30px;
    margin-bottom: 30px;

    @media (min-width: 992px) {
   
      margin-top: 70px;
      margin-bottom: 70px;
    
  }


`;

const Separator=styled.div`
width: 100%;
    position: relative;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    height: 1px;
    margin-left: auto;
    margin-right: auto;
    background-color: #e7edf1;
`;

const Wrapper=styled.div`
-webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding-top: 35px;
    padding-bottom: 35px;
    display: -moz-box;
    display: flex;
    -moz-box-orient: vertical;
    -moz-box-direction: normal;
    flex-direction: column;
    @media (min-width: 992px) {
   
      -moz-box-align: center;
      align-items: center;
      -moz-box-orient: horizontal;
      -moz-box-direction: normal;
      flex-direction: row;
      padding-top: 32px;
      padding-bottom: 40px;
    
  }
`;

const ImgWrapper=styled.div`
 margin-right: 28px;
    flex-shrink: 0;
    position: relative;
    border-radius: 50%;
    width: 64px;
    height: 64px;
    display: block;
    overflow: hidden;
    margin-bottom: 15px;

    
    @media (min-width: 992px) {
   
      margin-bottom: 0;
    
  }

`;

const Description= styled.div`
  width: 100%;
    display: -moz-box;
    display: flex;
    margin-bottom: 13px;
    -moz-box-orient: vertical;
    -moz-box-direction: normal;
    flex-direction: column;

    @media (min-width: 992px) {
    
      -moz-box-pack: justify;
      justify-content: space-between;
      -moz-box-align: center;
      align-items: center;
      -moz-box-orient: horizontal;
      -moz-box-direction: normal;
      flex-direction: row;
    
  }
`;


const AuthorName=styled.p`
font-family: Poppins, serif;
    
    
    line-height: 28px;
    color: #344b80;
    font-size: 15px;
    font-weight: 500;
    @media (min-width: 992px) {
   
      font-size: 15px;
    
  }
`;

const AuthorJob=styled.div`
  font-family: Poppins, serif;
    font-size: 17px;
    font-weight: 400;
    line-height: 28px;
    color: #7e43e6;
    font-weight: 500;
    font-size: 11px;

    @media (min-width: 992px) {
    
      font-size: 17px;
      font-size: 15px;
    
  }

  font-size: 15px;
    line-height: 22px;
`;

const AuthorText=styled.p`
 font-family: Poppins, serif;
    
    font-weight: 400;
    /* line-height: 28px; */
    color: #344b80;
    @media (min-width: 992px) {
   
      
      font-size: 13px;
    
  }

  font-size: 13px;
    line-height: 19px;
`;


const AuthorImg=styled.img`
position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position:center;
`;