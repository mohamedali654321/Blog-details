import React from 'react'
import styled from 'styled-components'
function AuthorInfo(props) {
    return (
        <AuthorContainer>
        <ImgWrapper>
        <AuthorImg src={props.avatar} alt="author_avatar"/>
        </ImgWrapper>
          <div>
          <Text>{props.authorname}</Text>
          <Text style={{color:"#344b80"}}>{props.publishDate}</Text>
        </div>

        </AuthorContainer>
    )
}

export default AuthorInfo
const AuthorContainer=styled.div`
margin-top: 32px;
display: -moz-box;
    display: flex;
    -moz-box-align: center;
    align-items: center;
`;
const ImgWrapper=styled.div`
position: relative;
    overflow: hidden;
    width: 40px;
    height: 40px;
    margin-right: 18px;
    border-radius: 50%;
    @media (min-width: 992px) {
   
      width: 56px;
      height: 56px;
    
  }
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

const Text=styled.p`
 font-family: Poppins, serif;
    font-size: 15px;
    
    line-height: 22px;
    color: #8c4bff;
    @media (min-width: 992px) {
  
      font-size: 15px;

      
  }

  
    
`;