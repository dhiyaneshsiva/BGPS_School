import React from 'react'
import "./Login.css"
import { useHistory } from 'react-router-dom'

// Mantine
import { Button, Center, Input, Title } from '@mantine/core'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'



const Login = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  })

  const history = useHistory()

  const emailAPI = {
    email: userData.email
  }


  // const formSubmit = (e) => {
  //   e.preventDefault()
  //   axios?.post('http://localhost:5000/login', {
  //     ...emailAPI
  //   })
  //     ?.then(result => {
  //       if (userData.email === '' || userData.password === '') {
  //         alert('Please Fill All Inputs')
  //       }
  //       else if (result.data.length <= 0) {
  //         alert("Email Not Found")
  //       }
  //       else if (result.data[0].password !== userData.password) {
  //         alert('Wrong Password')
  //       }
  //       else {
  //         alert("Login Sucessfull")
  //         localStorage.setItem('UserName', userData.email)
  //       }
  //     })?.catch(e => {
  //       alert(e,"Error Occured")
  //     })
  //     ?.finally(() => {
  //       setUserData({ ...userData, email: ' ' })
  //       setUserData({ ...userData, password: ' ' })
  //       window.location.reload()
  //     })
  // }

  useEffect(() => {
    if (localStorage.getItem('UserName')) {
      history.push('/dsHome')
    }
  })

  return (
    <div>
      <div className='ds-login-page'>
        <div className='ds-login-form'>
          <form >
            <Center style={{ paddingBottom: '1rem', textTransform: "uppercase", color: "#120D3B" }}>
              <Title>
                Login
              </Title>
            </Center>
            <Input.Wrapper className='form-input' label="User Name" required maw={320} mx="auto" withAsterisk>
              <Input
                placeholder="User Name"
                onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                name="email"
              />
            </Input.Wrapper>
            <Input.Wrapper className='form-input' label="Password" required maw={320} mx="auto" withAsterisk>
              <Input
                placeholder="Password"
                onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                name='password'
              />
            </Input.Wrapper>
            <Center>
              <Button
              // onClick={(e) => formSubmit(e)}
              >
                Login
              </Button>
            </Center>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
