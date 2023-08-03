import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Input from 'react-bootstrap/InputGroup'
import styled from 'styled-components'
// import { authenticateEmailPassword } from '@/modules/api'
// import { saveToken } from '@/modules/token'
// import {APIAuthenticationResponseData, APIResponse, APIResponseError, InputEventProps, LoginPopupType} from '@/types'

const SigninButton = styled(Button)`
  margin-top: 20px;
  border: 0;

  &.disabled {
    background-color: #d7cccc;
    cursor: not-allowed;
    pointer-events: none;
  }
`

function validateEmail(email: string) {
  return email !== ''
}

function validatePassword(password: string) {
  return password !== ''
}

function validateForm(email: string, password: string) {
  let validity = false
  if (validateEmail(email) && validatePassword(password)) {
    validity = true
  }
  console.log(`Form valid: ${validity}`)
  return validity
}
// const LoginForm = (props: LoginPopupType) => {
const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [formValid, setFormValid] = useState(false)

  // const handleEmailChange = (event: InputEventProps) => {
  //   const value = event.target.value.trim()
  //   setEmail(value)
  //   const validity = validateForm(email, password)
  //   setFormValid(validity)
  // }

  // const handlePasswordChange = (event: InputEventProps) => {
  //   const value = event.target.value.trim()

  //   setPassword(value)
  //   const validity = validateForm(email, password)
  //   setFormValid(validity)
  // }

  const handleSubmit = async (event?: { preventDefault: () => void }) => {
    event?.preventDefault()
    console.log("submit button clicked!!!")
    // const response = await authenticateEmailPassword({ email, password }) as APIResponse
    // const data = response.data as APIAuthenticationResponseData
    // const error = response.error as APIResponseError

    // if (data.token) {
    //   await saveToken(data.token).then(() => props.handleAuthChange('login'))
    // } else if (data.tfa_mode === 'google_authenticator') {
    //   await saveToken(data.token).then(() => props.handleAuthChange('2fa'))
    // } else if (error.code === 'authentication_failed') {
    //   console.log('invalid credentials')
    // }
  }

  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      event.stopPropagation()
      handleSubmit()
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* <Input
        type="email"
        onChange={(event) => handleEmailChange(event)}
        placeholder="Enter your email"
        value={email}
        required
      />
      <Input
        type="password"
        onChange={(event: InputEventProps) => handlePasswordChange(event)}
        onKeyDown={onKeyDown}
        placeholder="Password"
        value={password}
        required
       /> */}

      <SigninButton
        as="button"
        type="submit"
        className={formValid ? '' : 'disabled'}
      >
        Sign In{' '}
      </SigninButton>
    </form>
  )
}

export default LoginForm
