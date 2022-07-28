import styled from "styled-components";

export const FooterSection = styled.footer`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 100%;
background: ${({theme}) => theme.colors.footerBackgroundColor};
height: 380px;
border-radius: 0 90px 0 0;
margin-top: 10rem;

@media (max-width: ${({theme}) => theme.mobile}){
 height: 800px;
 margin-top: 5rem;
 }
`

export const Wrapper  = styled.div`
width: 80%;
display: flex;
align-items: flex-start;
justify-content: space-between;
@media (max-width: ${({theme}) => theme.mobile}){
 flex-direction: column;
 align-items: center;
 justify-content: center;
 text-align: center;
 gap: 2rem;
 }
`
export const H2 = styled.h2`
  color: ${({theme}) => theme.colors.whiteColor};
  font-family: 'Ubuntu', sans-serif;
  font-size: 35px;
  cursor: pointer;

  @media (max-width: ${({theme}) => theme.mobile}){
 margin-bottom: 30px;
 }
  
  
`
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;
  @media (max-width: ${({theme}) => theme.mobile}){
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
 }
`
export const ColumnHeader = styled.h6`
 color: ${({theme}) => theme.colors.whiteColor};
 font-size: 16px;
 font-weight: 500;
 margin-bottom: 1rem;
 font-family: 'Ubuntu', sans-serif;
 

`
export const ColumnItem = styled.a`
  color: ${({theme}) => theme.colors.liteGrayColor};
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  :hover{
    color: ${({theme}) => theme.colors.whiteColor};
  }
  @media (max-width: ${({theme}) => theme.mobile}){
  font-size: 14px;
 }
`