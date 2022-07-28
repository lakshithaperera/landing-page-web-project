import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  border-radius: 0 0 0 90px;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: ${({theme}) => theme.colors.headerBackgroundGradient};
  flex-direction: column;
`
export const HeaderBackgroundImg =styled.svg`
  position: absolute;
  width: 2340px;
  left: -300px;
  
  @media (max-width: ${({theme}) => theme.tab}){
   width: 1800px;
  }

  @media (max-width: ${({theme}) => theme.mobile}){
   width: 1400px;
  }
  
`
export const Wrapper = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (max-width: ${({theme}) => theme.tab}){
  width: 90%;
  }
`
export const NavBar = styled.nav`
  display: flex;
  width: 80%;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 0;
  height: 80px;
  user-select: none;
  @media (max-width: ${({theme}) => theme.tab}){
  width: 90%;
  }
`

export const NavLeftContainer = styled.div`
   display: flex;
   align-items:center;
   justify-content: space-between;
   gap: 50px;
   @media (max-width: ${({theme}) => theme.tab}){
   gap:30px
  }
`
  

export const NavLogo = styled.h2`
  color: ${({theme}) => theme.colors.whiteColor};
  font-family: 'Ubuntu', sans-serif;
  font-size: 35px;
  cursor: pointer;
  @media (max-width: ${({theme}) => theme.tab}){
  font-size: 30px;
  }
`
export const Ul = styled.div`
   display: flex;
   gap:40px;
   @media (max-width: ${({theme}) => theme.tab}){
  gap: 25px;
   }
   @media (max-width: ${({theme}) => theme.mobile}){
   display: none;
  }
`
export const Li = styled.div`
position: relative;

`
export const DropDownMenu = styled.div`
   position: absolute;
   padding: 20px;
   flex-direction: column;
   background: ${({theme}) => theme.colors.whiteColor};
   transition: 0.4px;
   z-index: 3;
   gap: 10px;
   animation: fadeVisibility 0.4s;
   display: none;
   box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
   @media (max-width: ${({theme}) => theme.tab}){
  padding: 15px;
  gap: 8px;
  }
`
export const DropDownItem = styled.a`
   text-decoration: none;
   font-size: 13px;
   cursor: pointer;
   color: ${({theme}) => theme.colors.bodyTextColor};
   :hover{
    color: #000;
   }
   @media (max-width: ${({theme}) => theme.tab}){
  font-size: 12px;
  }
`

export const NavLink = styled.a`
   color: ${({theme}) => theme.colors.whiteColor};
   text-decoration: none;
   font-size: 16px;
   font-family: 'Ubuntu', sans-serif;
   cursor: pointer;
   display: flex;
   align-items: flex-end;
   gap: 5px;
   font-weight: 700;
   @media (max-width: ${({theme}) => theme.tab}){
  font-size: 14px;
  font-weight: 500;
  }

  
`
export const NavRightContainerButons = styled.div`
   display: flex;
   align-items: center;
   gap: 30px;
  
  @media (max-width: ${({theme}) => theme.mobile}){
   display: none;
  }
`
export const NavRightContainer = styled.div`
display: flex;
align-items: center;
@media (max-width: ${({theme}) => theme.tab}){
  gap: 25px;
  }
  
`
export const ButtonWhite = styled.button`
   color: ${({theme}) => theme.colors.buttonTextColor};
   padding: 12px 25px;
   border-radius: 20px;
   border: none;
   font-size: 15px;
   font-weight: 500;
   font-family: 'Ubuntu', sans-serif;
   cursor: pointer;
   transition: 0.4s;
   background: ${({theme}) => theme.colors.whiteColor};
   :hover{
    color: ${({theme}) => theme.colors.whiteColor};
    background: ${({theme}) => theme.colors.buttonHoverBackground};
   };
   @media (max-width: ${({theme}) => theme.tab}){
  font-size: 13px;
  padding: 10px 23px;
  }
`
/************MobileMenu Section*************** */
export const MobileMenu = styled.div`
display: none;
@media (max-width: ${({theme}) => theme.mobile}){
   display: block;
  }
`
export const MobileMenuSection = styled.div`
position: absolute;
z-index: 4;
text-align: center;
width: 100%;
top: 100%;
left: 50%;
padding: 10px;
transform: translate(-50%, -50%);
margin-top: 230px !important;
align-items: center;
justify-content: center;
flex-direction: column;
background: ${({theme}) => theme.colors.whiteColor};
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
border-radius: 5px;
gap: 1rem;
animation: fadeVisibility 0.4s;

transition: 0.4s all ease-in-out;
display: none;

`
export const MobileMenuTop = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
padding: 10px;
gap: 1rem;
`
export const MobileMenuItem = styled.p`

font-size: 14px;
cursor: pointer;
font-weight: 500;
font-family: 'ubuntu', sans-serif;
:hover{
   color: #000;
}
`
export const MobileDropDownMenu = styled.div`
display: none;
width: 100%;
flex-direction: column;
text-align: center;
justify-content: center;
gap: 1rem;
border-radius: 5px;
background: ${({theme}) => theme.colors.liteGrayColor};
padding: 1rem;
`
export  const MoileDropDownItem = styled.a` 
color: ${({theme}) => theme.colors.headingsTextColor};
font-size: 14px;
font-weight: 500;
cursor: pointer;
:hover{
   color: #000;
}
`

export  const MobileMenuBottom = styled.div`
display: flex;
width: 100%;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 1rem;
background: transparent;
border-radius: 5px;

`
export const MobileMenuButtonSection = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 20px;
gap: 1rem;
border-top: 1px solid ${({theme}) => theme.colors.liteGrayColor};


`
export const HameBodySection = styled.div`
   text-align: center;
   z-index: 2;
   margin-top: 60px;
   @media (max-width: ${({theme}) => theme.tab}){
  margin-top: 50px;
  }
  @media (max-width: ${({theme}) => theme.mobile}){
   margin-top: 0;
  }
`

 export const H2 = styled.h2`
  color: ${({theme}) => theme.colors.whiteColor};
  font-size: 50px;
  font-weight: 700;
  letter-spacing: 0.01rem;
  @media (max-width: ${({theme}) => theme.tab}){
  font-size: 40px;
  }
  @media (max-width: ${({theme}) => theme.mobile}){
   font-size: 35px;
  }
 ` 
 export const H6 = styled.h6`
  font-size: 16px;
  font-weight: 300;
  color: ${({theme}) => theme.colors.whiteColor};
  @media (max-width: ${({theme}) => theme.tab}){
  font-size: 16px;
  margin-top: 1rem;
  }
 `
export const ButtonSection = styled.div`
  display: flex;
  gap:20px;
  justify-content: center;
  margin-top: 50px;
  @media (max-width: ${({theme}) => theme.tab}){
  margin-top: 40px;
  }

`
export const ButtonTransparent = styled.button`
color: ${({theme}) => theme.colors.whiteColor};
padding: 12px 25px;
border-radius: 20px;
border: 1px solid  ${({theme}) => theme.colors.whiteColor};
font-size: 15px;
font-weight: 500;
font-family: 'Ubuntu', sans-serif;
cursor: pointer;
transition: 0.4s;
background: transparent;

:hover{
  color: ${({theme}) => theme.colors.buttonTextColor};
  background: ${({theme}) => theme.colors.whiteColor};
};

@media (max-width: ${({theme}) => theme.tab}){
  font-size: 13px;
  padding: 10px 23px;
  }
`