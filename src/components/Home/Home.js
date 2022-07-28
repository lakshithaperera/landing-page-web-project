import React,{useState} from 'react'
import { HomeContainer, HeaderBackgroundImg, Wrapper, NavBar, NavLogo, NavLeftContainer, Ul, NavLink, NavRightContainer, ButtonWhite, HameBodySection, H2, H6, ButtonSection, ButtonTransparent,  DropDownItem, Li, DropDownMenu, MobileMenu, MobileMenuSection, MobileMenuTop, MobileMenuBottom, MobileMenuItem, MobileMenuButtonSection, NavRightContainerButons, MobileDropDownMenu, MoileDropDownItem } from './Home.styled'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"
import { VscMenu, VscClose } from "react-icons/vsc"









export  const Home = () => {
  
  const [showMobileMenu, setShowMobileMenu] = useState(true);

  const handleMobileMenu = () =>{
      if(showMobileMenu){
        document.getElementById("mobile-menu-section").style.display = "flex";
        document.getElementById("menu").style.display =  "none";
        document.getElementById("close").style.display =  "block";

        setShowMobileMenu(false);
      }else{
        document.getElementById("mobile-menu-section").style.display = "none";
        document.getElementById("menu").style.display =  "block";
        document.getElementById("close").style.display =  "none";

        setShowMobileMenu(true);
      }
  }

 
  const handleMobileMenuBottom01 = () =>{
   document.getElementById("mobile-drop-down-menu-01").style.display = "flex";
   document.getElementById("mobile-drop-down-menu-02").style.display = "none";
   document.getElementById("mobile-drop-down-menu-03").style.display = "none";
  }

  const handleMobileMenuBottom02 = () =>{
    document.getElementById("mobile-drop-down-menu-01").style.display = "none";
    document.getElementById("mobile-drop-down-menu-02").style.display = "flex";
    document.getElementById("mobile-drop-down-menu-03").style.display = "none";
   }

   const handleMobileMenuBottom03 = () =>{
    document.getElementById("mobile-drop-down-menu-01").style.display = "none";
    document.getElementById("mobile-drop-down-menu-02").style.display = "none";
    document.getElementById("mobile-drop-down-menu-03").style.display = "flex";
   }

 

  return (
    <HomeContainer>
      <HeaderBackgroundImg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3175 3174" ><defs><linearGradient id="a" x1=".639%" x2="99.361%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FF8F71" /><stop offset="100%" stop-color="#FF3E55" /></linearGradient></defs><path fill="url(#a)" fill-rule="evenodd" d="M1973.15 1193.185v788.41h-786.766v-688.41c0-55.228 44.772-100 100-100h686.767zm-1310.445-1.171c217.26 0 393.383 176.124 393.383 393.383v1.645c0 217.26-176.123 393.383-393.383 393.383S269.322 1804.3 269.322 1587.042v-1.645c0-217.26 176.124-393.383 393.383-393.383zm392.212-926.418v688.41c0 55.23-44.771 100-100 100H268.151v-788.41h786.766zm918.234 0v788.41h-686.767c-55.228 0-100-44.771-100-100v-688.41h786.767z" transform="rotate(22 162.072 2556.164)" /></HeaderBackgroundImg>

      <Wrapper>
        <NavBar>
          <NavLeftContainer>
            <NavLogo>Blogr</NavLogo>
            <Ul>
              <Li className='list'>
                <NavLink >Product<IoIosArrowDown className='down' /><IoIosArrowUp className='up'/></NavLink>
                <DropDownMenu  className='drop-down-menu'>
                  <DropDownItem>Overview</DropDownItem>
                  <DropDownItem>Pricing</DropDownItem>
                  <DropDownItem>Marketplace</DropDownItem>
                  <DropDownItem>Features</DropDownItem>
                </DropDownMenu>
              </Li>

              <Li className='list'>
                <NavLink >Company<IoIosArrowDown className='down'  /><IoIosArrowUp className='up' /></NavLink>
                <DropDownMenu className='drop-down-menu'>
                  <DropDownItem>About</DropDownItem>
                  <DropDownItem>Team</DropDownItem>
                  <DropDownItem>Blog</DropDownItem>
                  <DropDownItem>Careers</DropDownItem>
                </DropDownMenu>
              </Li>

              <Li className='list'>
                <NavLink >Connect<IoIosArrowDown className='down' /><IoIosArrowUp className='up' /></NavLink>
                <DropDownMenu  className='drop-down-menu'>
                  <DropDownItem>Newsletter</DropDownItem>
                  <DropDownItem>LinkedIn</DropDownItem>
                </DropDownMenu>
              </Li>
            </Ul>
          </NavLeftContainer>

          <NavRightContainer>
            <NavRightContainerButons>
            <NavLink>Login</NavLink>
            <ButtonWhite>Sign Up</ButtonWhite>
            </NavRightContainerButons>
          
            <MobileMenu onClick={handleMobileMenu}><VscMenu id='menu' className="mobile-menu-icon"/>
            <VscClose id='close' className="mobile-menu-icon" />
            </MobileMenu>
            <MobileMenuSection id='mobile-menu-section'>
              <MobileMenuTop>
                 <MobileMenuItem onClick={handleMobileMenuBottom01}>Product</MobileMenuItem>
                 <MobileMenuItem  onClick={handleMobileMenuBottom02}>Company</MobileMenuItem>
                 <MobileMenuItem  onClick={handleMobileMenuBottom03}>Connect</MobileMenuItem>
              </MobileMenuTop>

              <MobileMenuBottom id='mobile-menu-bottom'>
              <MobileDropDownMenu id='mobile-drop-down-menu-01' >
                  <MoileDropDownItem>Overview</MoileDropDownItem>
                  <MoileDropDownItem>Pricing</MoileDropDownItem>
                  <MoileDropDownItem>Marketplace</MoileDropDownItem>
                  <MoileDropDownItem>Features</MoileDropDownItem>
                </MobileDropDownMenu>

                <MobileDropDownMenu id='mobile-drop-down-menu-02' >
                  <MoileDropDownItem>About</MoileDropDownItem>
                  <MoileDropDownItem>Team</MoileDropDownItem>
                  <MoileDropDownItem>Blog</MoileDropDownItem>
                  <MoileDropDownItem>Careers</MoileDropDownItem>
                </MobileDropDownMenu>

                <MobileDropDownMenu id='mobile-drop-down-menu-03'>
                  <MoileDropDownItem>Newsletter</MoileDropDownItem>
                  <MoileDropDownItem>LinkedIn</MoileDropDownItem>
                </MobileDropDownMenu>

              </MobileMenuBottom>
              <MobileMenuButtonSection>
               <NavLink style={{color: "hsl(208, 49%, 24%)", padding: "0" }}>Login</NavLink>
               <ButtonWhite className='grediant-btn'>Sign Up</ButtonWhite>
              </MobileMenuButtonSection>
            </MobileMenuSection>
          </NavRightContainer>

        </NavBar>

        <HameBodySection>
          <H2>A modern publishing platform</H2>
          <H6>  Grow your audience and build your online brand</H6>
          <ButtonSection>
            <ButtonWhite>Start for Free</ButtonWhite>
            <ButtonTransparent>Learn More</ButtonTransparent>
          </ButtonSection>
        </HameBodySection>
      </Wrapper>
    </HomeContainer>
  )
}
