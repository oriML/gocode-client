import React from 'react'
import { useForm } from 'react-hook-form'
import { Card, Button } from '@mui/material'
import ControllerTextInput from '../components/ControllerTextInput';

function Login() {

  const { handleSubmit, watch, formState: { errors } } = useForm();


  const onSubmit = (data) => {
    console.log(data)
  };

  return (
    <Card style={{
      padding: '10%',
      width: '30vw',
      height: '20vw'
    }}>

    

    <form style={{
      display: 'flex',
      flexDirection: 'column'
    }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <label htmlFor="email">Enter email</label>
      <ControllerTextInput
        name="email"
        rules={{
          required: true,
          pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        }}
      />
      {errors?.email && <span style={{ color: 'red', fontWeight: 'bold' }}>Email pattern is wrong</span>}

      <label htmlFor="password">Enter password</label>
      <ControllerTextInput
        name="password"
        rules={{
          required: true,
          minLength: 4
        }}
      />
      {errors?.password && <span style={{ color: 'red', fontWeight: 'bold' }}>Password must be min 4 length</span>}

      <Button variant="contained" color="secondary">Submit</Button>

    </form>
    </Card>
  )
}

export default Login