import React from "react";

import Box from '@mui/material/Box';

import { StudentForm } from '$common/StudentForm'
import { Footer } from '$common/Footer'

import './styles.css';

const App = () => {
  return (
    <div className="App">
      <Box
        display='flex'
        alignItems='center'
        justifyContent='center'
        flex='1 0 auto'
      >
        <StudentForm />
      </Box>


      <Footer />
    </div>
  );
}

export default App;