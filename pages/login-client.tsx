

import React, { FormEvent } from 'react'
import { NextPage } from 'next/types'
import { AuthResult } from './types/auth-result'

interface LoginFormElements extends HTMLCollection {
  username: HTMLInputElement,
  password: HTMLInputElement
}

const LoginForm: NextPage = () => {

  const goSignIn = async (event:FormEvent<HTMLFormElement>) => {

    event.preventDefault();
    const loginForm =  (event.currentTarget as HTMLFormElement).elements as LoginFormElements
    
    const response = await fetch('/api/auth', {
      body: JSON.stringify({
        username: loginForm.username.value,
        password: loginForm.password.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })

    const result:AuthResult = await response.json()
    console.log(result.message)
  }
  return (
    <form onSubmit={goSignIn}>
      <label data-for="username">username:</label>
      <input type="text" id="username" name="username" />
      <label data-for="password">password:</label>
      <input type="password" id="password" name="password" />
      <button type="submit">Sign in</button>
    </form>
  )
}

// LoginForm.getLayout = function getLayout(page: ReactElement) {
//   return (
//     Layout
//   )
// }

export default LoginForm;