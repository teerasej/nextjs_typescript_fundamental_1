

import React, { FormEvent } from 'react'
import { NextPage } from 'next/types'

interface LoginFormElements extends HTMLCollection {
  username: HTMLInputElement,
  password: HTMLInputElement
}

const LoginForm: NextPage = () => {

  const goSignIn = async (event:FormEvent<HTMLFormElement>) => {

    event.preventDefault();
    const loginForm =  (event.currentTarget as HTMLFormElement).elements as LoginFormElements
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


export default LoginForm;