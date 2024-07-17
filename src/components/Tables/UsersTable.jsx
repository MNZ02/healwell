import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  Button
} from '@mui/material'
import { styled } from '@mui/system'
import { Edit, Delete } from '@mui/icons-material'
import AddIcon from '@mui/icons-material/Add'

import { readUserdata } from '../../firebase/utils/readUserData'
import { getAuth, deleteUser } from 'firebase/auth'
import { getDatabase, ref, remove } from 'firebase/database'
import app from '../../firebase/firebase'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontWeight: 'bold'
}))

const UsersTable = () => {
  const navigate = useNavigate()

  const [data, setData] = useState([])
  const [page, setPage] = useState(0)
  const rowsPerPage = 5

  const fetchData = async () => {
    const userData = await readUserdata()
    setData(userData)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleCreate = () => {
    navigate('/create-user')
  }

  const handleEdit = user => {
    navigate('/create-user', { state: { user } })
  }

  const handleDelete = async userId => {
    try {
      const auth = getAuth(app)
      const db = getDatabase(app)

      // Remove user data from Realtime Database
      const userRef = ref(db, `users/${userId}`)
      await remove(userRef)
      console.log('User data removed from Realtime Database')

      // Get user by ID and delete from Firebase Authentication
      const user = await auth.getUser(userId)
      if (user) {
        await deleteUser(user)
        console.log('User deleted from Firebase Authentication')
      }

      // Refresh the user list
      fetchData()
    } catch (error) {
      console.error('Error deleting user:', error.message)
    }
  }

  return (
    <>
      <h2>User Information</h2>
      <div
        style={{ marginBottom: '16px', display: 'flex', justifyContent: 'end' }}
      >
        <Button
          onClick={handleCreate}
          variant='contained'
          color='primary'
          startIcon={<AddIcon />}
        >
          Create
        </Button>
      </div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Email</StyledTableCell>
              <StyledTableCell>Phone</StyledTableCell>
              <StyledTableCell>Role</StyledTableCell>
              <StyledTableCell>Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((user, index) => (
                <TableRow key={index}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>
                    <Edit
                      onClick={() => {
                        handleEdit(user)
                      }}
                      className='cursor-pointer'
                    />
                    <Button onClick={() => handleDelete(index)}>
                      <Delete className='cursor-pointer' />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component='div'
        count={data.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[rowsPerPage]}
      />
    </>
  )
}

export default UsersTable
