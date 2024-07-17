import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useForm, Controller } from 'react-hook-form'

import DefaultLayout from '../../layout/DefaultLayout'

import { auth } from '../../firebase/firebase'
import app from '../../firebase/firebase'
import { getDatabase, ref, set, child } from 'firebase/database'
import {
  createUserWithEmailAndPassword,
  updateProfile,
  updateEmail,
  updatePassword,
  updatePhoneNumber,
  updateCurrentUser
} from 'firebase/auth'

import {
  Button,
  TextField,
  Box,
  Typography,
  Paper,
  Grid,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

function CreateUser () {
  const navigate = useNavigate()
  const location = useLocation()

  const [isEdit, setIsEdit] = useState(false)

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors }
  } = useForm()

  useEffect(() => {
    if (location.state && location.state.user) {
      const { name, email, phone, password, role } = location.state.user
      setValue('name', name)
      setValue('email', email)
      setValue('phone', phone)
      setValue('password', password)
      setValue('role', role)
      setIsEdit(true)
    }
  }, [location.state, setValue])

  const onSubmit = async data => {
    const { name, email, phone, password, role } = data
    try {
      if (isEdit) {
        const user = auth.currentUser

        if (user) {
          await updateCurrentUser(user, {
            displayName: name,
            email: email,
            phoneNumber: phone,
            password: password
          })
          updateCurrentUser()
        }
      } else {
        const userCredentials = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        )
        const user = userCredentials.user
        writeUserData(user.uid, name, email, phone, password, role)
        console.log('User signed up:', user)
        if (user) {
          navigate('/')
        }
      }
    } catch (error) {
      console.error('Error submitting form', error.message)
    }
  }

  function writeUserData (userId, name, email, phone, password, role) {
    const db = getDatabase(app)
    const usersRef = ref(db, 'users')
    set(child(usersRef, userId), {
      name: name,
      email: email,
      phone: phone,
      password: password,
      role: role
    })
      .then(() => {
        console.log('Data saved successfully')
      })
      .catch(error => {
        console.error('Error saving data: ', error)
      })
  }

  return (
    <DefaultLayout>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh'
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: '30px',
            width: '100%',
            maxWidth: '900px',
            borderRadius: '10px'
          }}
        >
          <div className='flex justify-between items-center'>
            <Typography variant='h5' gutterBottom>
              {location.state && location.state.user
                ? 'Edit User'
                : 'Create User'}
            </Typography>
            <IconButton onClick={() => navigate('/')} aria-label='Close'>
              <CloseIcon />
            </IconButton>
          </div>
          <Box
            className='my-2 mx-2 py-2 px-1'
            component='form'
            onSubmit={handleSubmit(onSubmit)}
            sx={{
              '& .MuiTextField-root': { marginBottom: '20px' }
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  {...register('name', { required: true })}
                  label='Name'
                  variant='outlined'
                  fullWidth
                  error={!!errors.name}
                  helperText={errors.name ? 'Name is required' : ''}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  {...register('email', { required: true })}
                  label='Email'
                  type='email'
                  variant='outlined'
                  fullWidth
                  error={!!errors.email}
                  helperText={errors.email ? 'Email is required' : ''}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  {...register('password', {
                    required: true,
                    minLength: 6,
                    maxLength: 16
                  })}
                  label='Password'
                  type='password'
                  variant='outlined'
                  fullWidth
                  error={!!errors.password}
                  helperText={
                    errors.password
                      ? 'Password is required and must be between 6 and 16 characters'
                      : ''
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  {...register('phone', { required: true })}
                  label='Phone'
                  variant='outlined'
                  fullWidth
                  error={!!errors.phone}
                  helperText={errors.phone ? 'Phone is required' : ''}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id='role-select-label'>Role</InputLabel>
                  <Controller
                    name='role'
                    control={control}
                    defaultValue=''
                    render={({ field }) => (
                      <Select
                        labelId='role-select-label'
                        id='role-select'
                        label='Role'
                        {...field}
                      >
                        <MenuItem value='admin'>Admin</MenuItem>
                        <MenuItem value='user'>User</MenuItem>
                      </Select>
                    )}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Button
              type='submit'
              color='primary'
              variant='contained'
              sx={{ alignSelf: 'flex-end', mt: 2 }}
            >
              Create
            </Button>
          </Box>
        </Paper>
      </Box>
    </DefaultLayout>
  )
}

export default CreateUser
