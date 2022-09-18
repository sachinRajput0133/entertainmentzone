import { createTheme, Pagination, ThemeProvider } from '@mui/material'
import React from 'react'
import './CustomPagination.css'

const CustomPagination = ( {  setpage, totalPages=10}) => {

    const darkTheme=createTheme({
        palette:{
            mode:'dark',
        }
    })


const onChangeHanel=(e)=>{
    //  console.log(e.target.textContent)
     setpage(e.target.textContent)
     window.scroll(0,0)
}


  return (
    <div className='pagination'>
     <ThemeProvider theme={darkTheme}  >
      <Pagination count={totalPages} onChange={onChangeHanel}  hideNextButton hidePrevButton color='primary' />
           
     </ThemeProvider>
    </div>
  )
}

export default CustomPagination
