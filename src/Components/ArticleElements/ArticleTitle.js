import React from 'react'
import styled from 'styled-components'
function ArticleTitle() {
    return (
        <ArticleTitlestyle>Announcing the End of the Strapi Academy</ArticleTitlestyle>
    )
}

export default ArticleTitle
const ArticleTitlestyle=styled.h1`
font-family: Poppins, serif;
    font-size: 23px;
    font-weight: 700;
    line-height: 140%;
    line-height: 1.35;
    color: #2f2e8b;
    @media (min-width: 992px) {
    
        font-size: 53px;
      line-height: 1.17;
    
  }
`;