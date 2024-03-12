import React, { useState } from 'react'
import { Button, Flex, Input, Stack } from '@chakra-ui/react'

const RegistrationPage: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    passwordConfirmation: '',
  })

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    try {
      const response = await fetch('http://127.0.0.1:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: {
            email: formData.email,
            password: formData.password,
            password_confirmation: formData.passwordConfirmation,
          },
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to register')
      }

      alert('Registration successful!')
      // redirect the user to another page upon successful registration
    } catch (error) {
      console.error('Error during registration:', error)
      alert('Registration failed. Please try again.')
    }
  }

  return (
    <Flex align='center' minH='100vh' justify='center' w='100%'>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <Input
            type='email'
            name='email'
            placeholder='Email'
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Input
            type='password'
            name='password'
            placeholder='Password'
            value={formData.password}
            onChange={handleChange}
            required
          />
          <Input
            type='password'
            name='passwordConfirmation'
            placeholder='Confirm Password'
            value={formData.passwordConfirmation}
            onChange={handleChange}
            required
          />
          <Button type='submit' colorScheme='blue'>
            Register
          </Button>
        </Stack>
      </form>
    </Flex>
  )
}

export default RegistrationPage
