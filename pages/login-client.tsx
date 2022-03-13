

import React, { FormEvent } from 'react'
import { NextPage } from 'next/types'


const LoginForm: NextPage = () => {

  const goSignIn = async (event:FormEvent<HTMLFormElement>) => {
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