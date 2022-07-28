import React from 'react'
import { BodySection, Container, HeaderContainer, LeftContainer, LeftContainerTextSection, MiddleSection, MiddleSectionBackground, MiddleSectionLeftContainer, MiddleSectionRightContainer, MiddleSectionWrapper, RightContainer, Text, TextHeader, Wrapper } from './Product.styled'

export const Product = () => {
  return (
    <Container>
      <Wrapper>
        <HeaderContainer>Designed for the future</HeaderContainer>
        <BodySection>
          <LeftContainer>
            <LeftContainerTextSection>
              <TextHeader>  Introducing an extensible editor</TextHeader>
              <Text> Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content.
                The editor supports management of multiple blogs and allows easy manipulation of embeds such as images,
                videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or
                change the looks of a blog.</Text>
            </LeftContainerTextSection>

            <LeftContainerTextSection>
              <TextHeader>Robust content management</TextHeader>
              <Text> Flexible content management enables users to easily move through posts. Increase the usability of your blog
                by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.</Text>
            </LeftContainerTextSection>

          </LeftContainer>

          <RightContainer>
            <img className='desktop-img' src="./images/illustration-editor-desktop.png" alt="" />
            <img className='mobile-img' src="./images/illustration-editor-mobile.png" alt="" />
            
          </RightContainer>

        </BodySection>
      </Wrapper>
      <MiddleSection>
        <MiddleSectionBackground src='./images/bg-pattern-circles.png' />
        <MiddleSectionWrapper>
          <MiddleSectionLeftContainer>

            <img src="./images/illustration-phones.png" alt="" />
          </MiddleSectionLeftContainer>

          <MiddleSectionRightContainer>
            <TextHeader style={{ color: "white" }}>State of the Art Infrastructure</TextHeader>
            <Text style={{ color: "white" }}>  With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity.
              This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.</Text>
          </MiddleSectionRightContainer>
        </MiddleSectionWrapper>
      </MiddleSection>



      <Wrapper style={{ marginTop: "3rem" }}>

        <BodySection>
          <LeftContainer>
            <LeftContainerTextSection>
              <TextHeader>    Free, open, simple</TextHeader>
              <Text>   Blogr is a free and open source application backed by a large community of helpful developers. It supports
                features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools,
                and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.</Text>
            </LeftContainerTextSection>

            <LeftContainerTextSection>
              <TextHeader>Powerful tooling</TextHeader>
              <Text> Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
                capable of producing even the most complicated sites.</Text>
            </LeftContainerTextSection>

          </LeftContainer>

          <RightContainer className='bottom-container-img' >
            <img className='desktop-img' src="./images/illustration-laptop-desktop.png" alt="" />
            <img className='mobile-img' src="./images/illustration-laptop-mobile.png" alt="" />
          </RightContainer>

        </BodySection>
      </Wrapper>



    </Container>
  )
}
