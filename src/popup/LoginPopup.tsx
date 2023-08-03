import React from 'react'
//import Container from '@/components/Container'
import LoginForm from './LoginForm'
import styled, { createGlobalStyle } from 'styled-components'
//import { LoginPopupType } from "@/types";

const GlobalSyle = createGlobalStyle` 
  body {
    background: none;
    min-height: 600px;
    min-width: 370px;
  }
`

const Text = styled.div`
  color: white;
  text-align: center;
`
const Title = styled(Text)`
  text-transform: uppercase;
  font-size: 22px;
  letter-spacing: 2px;
`
const Product = styled(Text)`
  font-size: 33px;
  font-weight: 700;
  letter-spacing: 1px;
  margin-top: 5px;
`

const Subtitle = styled(Text)`
  margin-top: 20px;
  font-weight: 600;
  font-size: 15px;
  width: 230px;
  line-height: 21px;
  margin-bottom: 10px;
`

const CreateAccountLink = styled.a`
  margin-top: 35px;
  color: white;
  text-underline-offset: 5px;
`

const LoginLogo = styled.img`
  height: 110px;
  margin-top: 10px;
`
//const LoginPopup = (props: LoginPopupType)
const LoginPopup = () => (
  <React.Fragment>
    <GlobalSyle />
  
      <LoginLogo alt="Boundless Digital" src="logo-transparent.svg" />
      <Title>Boundless</Title>
      <Product>Access Control</Product>
      <Subtitle>Automation tools for your Meraki organization</Subtitle>
      {/* <LoginForm handleAuthChange={props.handleAuthChange} /> */}
      <CreateAccountLink
        href="https://dashboard.boundlessdigital.com/sign-up"
        target="_blank"
        className="link_create_account"
      >
        or create a new account
      </CreateAccountLink>
   
  </React.Fragment>
)

export default LoginPopup
