import { useState } from 'react'
import AgGridTable from '../../components/Table/AgGrid/AgGrid'
import { IUserDetailsData } from '../../components/Table/types'
import { UserData } from '../../data/user.data'
import { Box } from '@mui/material'
// import 'ag-grid-community/styles/ag-theme-material.css'


const User = () => {
    const [list] = useState<IUserDetailsData[]>(UserData)

  return (
    <Box className='ag-alpine-material'>
        <AgGridTable list={list}  handleOpenDialog={() => {}}  isLoading={false} />
    </Box>
  )
}

export default User