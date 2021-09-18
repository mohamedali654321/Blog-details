import React from 'react'
import styled from 'styled-components'
function Separator() {
    return (
        <>
          <SeparatorWrapper/>  
        </>
    )
}

export default Separator

const SeparatorWrapper=styled.div`
margin: 16px 0 40px;
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