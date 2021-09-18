import React from "react";
import styled from "styled-components";

function BackArrow() {
  return (
    <Link href="/blog">
      <Container>
        <Label>Back To Articles</Label>

        <svg
          
         
          viewBox="0 0 11 12"
          fill="#8c4bff"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 9.4l3.2-3.8L5 1.8a1 1 0 01-.2-.7c0-.3 0-.6.2-.7.4-.4.9-.4 1.2 0L10 4.9c.3.4.3 1 0 1.4L6 10.8c-.3.4-.8.4-1.2 0-.3-.4-.3-1 0-1.4z"
            fill="#8c4bff"
          ></path>
          <path
            d="M1 4.7a.9.9 0 100 1.8V4.7zm7.4 0H1v1.8h7.4V4.7z"
            fill="#8c4bff"
          ></path>
        </svg>
      </Container>
    </Link>
  );
}

export default BackArrow;

const Link = styled.a`
  display: inline-block;
  font-weight: 700;
  text-transform: uppercase;
  color: #8c4bff;
  text-decoration: none;
  font-size: 13px;
  letter-spacing: 1.2px;
  margin-bottom: 16px;
`;

const Container = styled.div`
  text-decoration: none;
  display: flex;
  align-items: center;
  /* display: inline-block; */
  font-weight: 700;
  text-transform: uppercase;
  color: #8c4bff;
  text-decoration: none;
  font-size: 13px;
  letter-spacing: 1.2px;
  margin-bottom: 16px;

  display: flex;
  align-items: center;
  flex-direction: row-reverse;

  svg {
   

    height: 12px;
    transform-origin: center;

    margin-right: 14px;
    margin-left: 0;
    transform: scaleX(-1);

    &:hover {
      transform: scaleX(-1) translateX(5px) translateZ(0);
    }

    margin-left: 14px;
    transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
    will-change: transform;
  }
`;

const Label = styled.span`
  font-family: Effra-ar;
  font-size: 11px;
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;
  color: #8c4bff;

  @media (min-width: 992px) {
    font-size: 13px;
  }
`;
