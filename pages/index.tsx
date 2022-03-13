import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css' 
import { AuthResult } from './types/auth-result'


const Home: NextPage = () => {

  const [loading, setLoading] = useState<boolean>(true)
  const [authResult, setAuthResult] = useState<AuthResult>()

  useEffect(() => {
    
    const initApp = async () => {
      const response = await fetch('api/auth')
      const json = await response.json()
      console.log(json)
      setLoading(false)
      // const authResult = Convert.toAuthResult(json)
      // setAuthResult(authResult);  
    }
 
    initApp();

    
  }, [])
  
  if(loading) return <p>loading</p>
  // if(!authResult) return <p>fail to init data</p>


  return (
    <div>
      <Link href={'/login-client'}>Sign in</Link>
      {/* <p>{authResult.result} {authResult.message}</p> */}
    </div>
  )
}

export default Home
