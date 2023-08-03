import React, { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Container from '@/components/Container'
import Button from "react-bootstrap/Button"
import styled, { createGlobalStyle } from 'styled-components'
import { IoOpenOutline, IoPowerOutline } from 'react-icons/io5'

// import {
//   retrieveSAMLUserOrganizations,
// } from '@/modules/api'
// import {InputEventProps, LoginPopupType, SAMLUserOrganization} from "@/types";

const GlobalSyle = createGlobalStyle` 
  body {
    background: none;
    min-height: 400px;
    min-width: 370px;
  }
`

const Text = styled.div`
  margin-top: 55px;
  width: 270px;
  line-height: 20px;
  font-size: 12px;
  text-align: center;
  color: #393b3d;
  font-weight: 700;
`

const SigninButton = styled(Button)`
  margin-top: 25px;
`

const OrganizationSelect = styled.select`
  margin-top: 40px;
  border: 4px solid #e2e8f1;
  height: 36px;
  width: 58vh;

  &:focus-visible {
    outline: none;
  }
`

const HeaderLogo = styled.img`
  position: absolute;
  top: 6px;
  left: 8px;
  height: 57px;
`

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  margin-top: auto;
  margin-bottom: 20px;
  width: 80%;
`

const FooterLink = styled.a`
  color: #8896b1;
  display: flex;
  align-items: center;
  font-size: 15px;
  text-decoration: none;

  svg {
    margin-right: 8px;
    vertical-align: middle;
  }
`
//const OrganizationSelectPopup = (props: LoginPopupType) => {
const OrganizationSelectPopup = () => {
  // const initOrganizationOptionsState : SAMLUserOrganization[] = []
  //const [organizationOptions, setOrganizationOptions] = useState(initOrganizationOptionsState)
  const [selectedOrg, setSelectedOrg] = useState('default')

  useEffect(() => {
    // retrieveSAMLUserOrganizations().then((organizations: SAMLUserOrganization[]) => {
    //   setOrganizationOptions(organizations)
    // })
  }, [])

  // function handleOrganizationSelect(event: InputEventProps) {
  //   const selectedOrgId = event.target.value
  //   setSelectedOrg(selectedOrgId)
  // }

  async function loginViaSAML() {
    // executeSamlLogin(selectedOrg)
    // requestSamlLogin({ organizationId: selectedOrg }).then((text) => {
    //   console.log(text)
    //   getCurrentTab().then((tab) => {
    //     console.log(tab)
    //     browser.scripting.executeScript(
    //       {
    //         target: { tabId: tab.id },
    //         // @ts-ignore
    //         func: (text) => document.write(text),
    //         args: [text],
    //       }
    //       // (injectionResults) => {
    //       //   console.log(' Injection results:')
    //       //   console.log(injectionResults)
    //       // }
    //     )
    //   })
    //   chrome.windows.create(
    //     {
    //       type: 'normal',
    //       focused: true,
    //       url: 'blank.html',
    //     },
    //     function (window) {
    //       console.log(window)
    //       console.log('tabs')
    //       console.log(window.tabs)

    //       chrome.scripting.executeScript(
    //         {
    //           target: { tabId: window.tabs[0].id },
    //           // @ts-ignore
    //           func: (text) => document.write(text),
    //           args: [text],
    //         },
    //         (injectionResults) => {
    //           console.log(' Injection results:')
    //           console.log(injectionResults)
    //         }
    //       )
    //     }
    //   )
    // })

    // const html = await requestSamlLogin({
    //   organizationId: selectedOrg,
    // }) as string

    // const parser = new DOMParser()
    // const htmlDoc = parser.parseFromString(html, 'text/html')
    // const form = htmlDoc.forms[0]
    // const inputs = htmlDoc.getElementsByTagName('input')
    // console.log(htmlDoc)
    // console.log(form)
    // const action = form.action
    // const input = inputs[0]
    // console.log(action)
    // console.log(input.name)
    // console.log(input.value)
    // console.log('tried to parse form')
    // await fetch(action, {
    //   method: 'POST',
    //   body: JSON.stringify({ SAMLResponse: input.value }),
    // }).then((response) => {
    //   console.log(response)
    //   console.log(
    //     response.text().then((data) => {
    //       console.log(data)
    //     })
    //   )
    // })
    // window.open(
    //   URL.createObjectURL(new Blob([html], { type: 'text/html' })),
    //   '_blank'
    // )

    // window.open('', '_blank')
    // getCurrentTab().then((tab) => {
    //   chrome.scripting.executeScript(
    //     {
    //       // @ts-ignore
    //       target: { tabId: window.tabs[0].id },
    //       // @ts-ignore
    //       func: (text) => document.write(text),
    //       args: [html],
    //     },
    //     (injectionResults) => {
    //       console.log(' Injection results:')
    //       console.log(injectionResults)
    //     }
    //   )
    // })
  }

  return (
    <React.Fragment>
      <GlobalSyle />

        {/* <Header>
          <HeaderLogo alt="Boundless Digital" src="logo-transparent.svg" />
        </Header> */}
        <Text>
          Select the Meraki oganization you would like to access by clicking the
          dropdown list
        </Text>
        {/* <OrganizationSelect
          onChange={handleOrganizationSelect}
          value={selectedOrg}
          name="organization"
          id="org_selector"
        >
          <option value="default" disabled>
            Select Organization
          </option>
          {organizationOptions.map((option: SAMLUserOrganization) => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </OrganizationSelect> */}
        <SigninButton css="margin-top: 25px" onClick={loginViaSAML}>
          Access Organization
        </SigninButton>

        <Footer>
          <FooterLink
            href="https://dashboard.boundlessdigital.com"
            target="_blank"
          >
            <IoOpenOutline />
            <span>Go to Boundless</span>
          </FooterLink>

          {/* <FooterLink href="#" onClick={() => props.handleAuthChange('logout')}>
            <IoPowerOutline />
            <span>Log out</span>
          </FooterLink> */}
        </Footer>
      
    </React.Fragment>
  )
}

export default OrganizationSelectPopup
