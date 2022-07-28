import styled from "styled-components"

export const Container = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
justify-content: center;
margin-top: 4rem;
  
@media (max-width: ${({theme}) => theme.tab}){
   margin-top:6rem;
  }

  @media (max-width: ${({theme}) => theme.mobile}){
   
  }


`
export const Wrapper = styled.div`
width: 80%;
height: 105vh;
display: flex;
flex-direction: column;
align-items: center;
position: relative;


@media (max-width: ${({theme}) => theme.tab}){
   width: 90%;
  }

  @media (max-width: ${({theme}) => theme.mobile}){
   text-align: center;
  }



`
export const HeaderContainer = styled.h2`
font-size: 36px;
position: absolute;
top: 90px;
color: ${({theme}) => theme.colors.headingsTextColor};
font-weight: 600;


@media (max-width: ${({theme}) => theme.tab}){
   top: 60px;
   font-size: 32px;
  }

  @media (max-width: ${({theme}) => theme.mobile}){
   top: 10px;
   font-size: 27px;
   margin-bottom: 40px;
  }

`

export const BodySection = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 4rem;
width: 100%;

@media (max-width: ${({theme}) => theme.tab}){
   gap: 2rem;
  }

  @media (max-width: ${({theme}) => theme.mobile}){
   flex-direction: column-reverse;
  }


`
export const LeftContainer = styled.div`
text-align: left;
display: flex;
flex-direction: column;
gap: 4rem;

@media (max-width: ${({theme}) => theme.tab}){
   gap: 2rem;
  }

  @media (max-width: ${({theme}) => theme.mobile}){
   
  }

`
export const LeftContainerTextSection = styled.div`

@media (max-width: ${({theme}) => theme.mobile}){
   text-align: center;
  }
`
export const TextHeader = styled.h3`
font-size: 27px;
  color:  ${({theme}) => theme.colors.headingsTextColor};
  margin-bottom: 2rem;

  @media (max-width: ${({theme}) => theme.tab}){
   font-size: 25px;
  }

  @media (max-width: ${({theme}) => theme.mobile}){
   
  }

`
export const Text = styled.p`
 color: ${({theme}) => theme.colors.bodyTextColor};
 line-height:1.6rem;
 font-weight: 300;

 @media (max-width: ${({theme}) => theme.tab}){
   line-height: 1.3rem;
   font-size: 14px;
  }

  @media (max-width: ${({theme}) => theme.mobile}){
   
  }

`

export const RightContainer= styled.div`
width: 47%;
>.mobile-img{
  display: none;
}

@media (max-width: ${({theme}) => theme.tab}){
   width: 45%;
  }

  @media (max-width: ${({theme}) => theme.mobile}){
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 70px;
    >.desktop-img{
      display: none;
    }
    >.mobile-img{
      display: block;
    }
  }

`

export const MiddleSection = styled.div`
width: 100%;
height: 400px;
background: ${({theme}) => theme.colors.bodyBackgroundGradient};
margin-top: 15rem;
border-radius: 0 90px 0 90px;
display: flex;
align-items: center;
justify-content: center;
overflow: hidden;

@media (max-width: ${({theme}) => theme.mobile}){
   flex-direction: column;
   height: 600px;
   margin-top: 20rem;
  }
`

export const MiddleSectionBackground = styled.img`
  position: relative;
  width: 80%;
  left: -390px;
  top: -200px;

  @media (max-width: ${({theme}) => theme.tab}){
   width: 90%;
   left: -200px;
  }

  @media (max-width: ${({theme}) => theme.mobile}){
   width:550px ;
   height: 550px;
   left: 0;
   top: -150px;;
  }

`
export const MiddleSectionWrapper = styled.div`
 width: 80%;
 display: flex;
 align-items: center;
 justify-content: space-between;
 z-index: 1;
 position: absolute;

 @media (max-width: ${({theme}) => theme.tab}){
   width: 90%;
  }

  @media (max-width: ${({theme}) => theme.mobile}){
   flex-direction: column;
   text-align: center;
  }

`
export const MiddleSectionLeftContainer = styled.div`
margin-top: 2rem;
@media (max-width: ${({theme}) => theme.tab}){
   >img{
    width: 430px;
   }
  }

  @media (max-width: ${({theme}) => theme.mobile}){
   >img{
    margin-top: -200px;
   }
  }

`
export const  MiddleSectionRightContainer = styled.div``
export const BottomContainer = styled.div`
width: 100vw;
display: flex;
align-items: center;
justify-content: center;
`


