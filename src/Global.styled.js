import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
      *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Overpass', sans-serif;
    @keyframes fadeVisibility {
  0% {
    opacity: 0;
  }
 


  100% {
    opacity: 1;
    transform: opacity linear;
  }


}

   }
   p{
    font-size: 16px;
   }

   a{
    font-family: 'Ubuntu', sans-serif;
   }

   .up{
    display: none;
   }

  html{
    max-width: 100%;
    overflow-x: hidden;
   }
.attribution{
  color: ${({theme}) => theme.colors.liteGrayColor};
  font-size: 14px;
  font-family: Georgia, 'Times New Roman', Times, serif;
  margin-top: 50px;
   >a{
    text-decoration: none;
    color: #FF4C59;
   }

   @media (max-width: ${({theme}) => theme.mobile}){
  margin: 50px 20px;
  text-align: center;
 }
  
}

.mobile-menu-icon{
     color: ${({theme}) => theme.colors.whiteColor};
     cursor: pointer;
     height: 30px;
     width: 30px;
   }

  .grediant-btn{
    background: ${({theme}) => theme.colors.headerBackgroundGradient} !important;
    color: ${({theme}) => theme.colors.whiteColor} !important;
    border: 1px solid  transparent !important;
    :hover{
      color: ${({theme}) => theme.colors.headingsTextColor} !important;
      background: transparent !important;
      border: 1px solid  ${({theme}) => theme.colors.headingsTextColor} !important;
    }
  }

#close{
  display: none;
}

.list:hover .drop-down-menu{
  display: flex;
}
.list:hover .down{
  display: none;
}

.list:hover .up{
  display: block;
}

.bottom-container-img{
  width: "45%";

  >.mobile-img{
    display: none;
  }
  @media (max-width: ${({theme}) => theme.mobile}){
    width: 100%;
    margin-top: 1rem;
   >.desktop-img{
    display: none;
   }
   >.mobile-img{
    display: block;
   }
  }
}


`
export  default GlobalStyles