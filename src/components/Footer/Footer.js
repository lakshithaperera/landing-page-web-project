import React from 'react'
import { Column, ColumnHeader, ColumnItem, FooterSection, Wrapper, H2 } from './Footer.styled'

export const Footer = () => {
  return (
   <FooterSection>
     <Wrapper>
        <H2>Blogr</H2>
        <Column>
            <ColumnHeader>
  Product</ColumnHeader>
            <ColumnItem>  Overview</ColumnItem>
            <ColumnItem>Pricing</ColumnItem>
            <ColumnItem> Marketplace</ColumnItem>
            <ColumnItem> Features</ColumnItem>
            <ColumnItem>  Integrations</ColumnItem>
        </Column>

        <Column>
            <ColumnHeader>  Company</ColumnHeader>
            <ColumnItem>  About</ColumnItem>
            <ColumnItem>TeamTeam</ColumnItem>
            <ColumnItem> Blog</ColumnItem>
            <ColumnItem>  Careers</ColumnItem>
        </Column>

        <Column>
            <ColumnHeader>Connect</ColumnHeader>
            <ColumnItem>Contact</ColumnItem>
            <ColumnItem> Newsletter</ColumnItem>
            <ColumnItem> LinkedIn</ColumnItem>
        </Column>
     </Wrapper>
     <div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a> |
    Coded by <a href="https://www.linkedin.com/in/h-p-lakshitha-perera-b05905217/">H.P Lakshitha Perera</a>
  </div>
   </FooterSection>
  )
}
