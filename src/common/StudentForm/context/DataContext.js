import React, {createContext, useState, useContext} from 'react'

const localstorageValue = localStorage.getItem('resume')

const initialValues = localstorageValue ? JSON.parse(localstorageValue) : {
    firstName: '',
    lastName: '',
    email: '',
    hasPhone: false,
    phoneNumber: '',
    files: [],
}

const DataContext = createContext(initialValues)

export const DataProvider = ({children}) => {
    const [studentData, setStudentData] = useState(initialValues);

    const resetData = () => {
        setStudentData(initialValues)
    }

    const setValues = (values) => {
        setStudentData(prevData => ({
            ...prevData,
            ...values
        }))
    }

    return <DataContext.Provider value={{studentData, setValues, resetData}}>
        {children}
    </DataContext.Provider>
}

export const useData = () => useContext(DataContext)