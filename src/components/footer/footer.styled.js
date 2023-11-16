import styled from "styled-components";
import { Link } from "react-router-dom";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 56px;
`;

export const TitleLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  transition: all 0.9s;
  display: block;
  text-align: center;
  align-items: center;

  color: #fcfcfc;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  &:hover {
    color: grey;
  }
  &.active {
    font-weight: 700;
  }
`;

export const LinkToPrivacy = styled(Link)`
  color: var(--grey-C, #cfcfcf);
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  transition: all 0.9s;
  &:hover {
    color: grey;
  }
  &.active {
    font-weight: 700;
  }
`;

export const Context = styled.p`
  color: var(--grey-C, #cfcfcf);
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

export const List = styled.ul`
  display: flex;
  gap: 48px;
  margin-top: 48px;
`;

export const SecondList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 48px;
  align-items: center;
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
