import React from 'react'
import DefaultLayout from '../layout/DefaultLayout'
import UsersTable from '../components/Tables/UsersTable'

const AdminDashboard = () => {
  return (
    <DefaultLayout>
      <div className='col-span-12 xl:col-span-8'>
        <UsersTable />
      </div>
    </DefaultLayout>
  )
}

export default AdminDashboard
