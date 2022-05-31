import { Box } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Github = () => {

    const [loading, seLoading] = useState(false);
    const [error, setError] = useState(false)

    const [data, setData] = useState([])
useEffect(()=>{
    axios.get({
        // url:"https://api.github.com/search/users"

        method:"Get"
    })
})

  return (
    <Box>

        

    </Box>
  )
}

export default Github