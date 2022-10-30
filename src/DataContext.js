import React, { createContext, useState, useContext } from 'react'

const DataContext = createContext()

const initData = {
  firstName: '',
  lastName: '',
  email: '',
  hasPhone: false,
  phoneNumber: '',
  files: [],
}

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(initData);

  const resetData = () => {
    setData(initData)
  }

  const setValues = (values) => {
    setData(prevData => ({
      ...prevData,
      ...values
    }))
  }

  return <DataContext.Provider value={{ data, setValues, resetData }}>
    {children}
  </DataContext.Provider>
}

export const useData = () => useContext(DataContext)