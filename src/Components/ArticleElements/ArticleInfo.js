import React from 'react'
import styled from 'styled-components'
function ArticleInfo() {
    return (
        <>
        <InfoList>
            <ListItem>Company</ListItem>
            <ListItem>Last updated: September 15, 2021</ListItem>
            <ListItem>3 minutes read</ListItem>
        </InfoList>
            
        </>
    )
}

export default ArticleInfo
const InfoList=styled.ul`
font-family: Poppins, serif;
    /* font-size: 17px; */
    font-weight: 400;
    line-height: 28px;
    color: #344b80;
    @media (min-width: 992px) {
    
      font-size: 17px;
    
  }

  font-size: 13px;
    line-height: 1.5;
    margin-bottom: 28px;
    li {
    color: inherit;
    display: inline-block;
  }
  li {
    color: inherit;
    display: inline-block;
  }
  li:after {
    content: "•";
    margin-left: 0.55em;
    margin-right: 0.55em;
  }
  li:last-child:after {
    display: none;
  }
  
  li:first-child{
    color:#7e43e6
  }
  

`;
const ListItem=styled.li``;