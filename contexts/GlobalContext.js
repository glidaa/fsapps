import React, { createContext, useContext, useState, useMemo, useCallback, useEffect}  from "react";
import API from "@aws-amplify/api";
import { graphqlOperation } from "@aws-amplify/api-graphql";

import AsyncStorage from "@react-native-async-storage/async-storage";

export const GlobalContext = createContext()


const storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem('@storage_Key', value)
    } catch (e) {
      // saving error
    }
  }

export const GlobalContextProvider = ({children}) => {

    const [projects, setState] = useState()

    useEffect(() => {

        (async () => {
            try {
                let value = await AsyncStorage.getItem('projects')
               
                if(value) {
                    setState(JSON.parse(value))
                }else {
                    setState({})
                }

              } catch (e) {
                console.log(e)
              }
        })()

    }, [])

    useEffect(() => {
    if(projects) {
        (async () => {
            try {
                await AsyncStorage.setItem('projects', JSON.stringify(projects))
              } catch (e) {
                console.log(e)
              }
        })()

    }

    }, [projects])


    const addProject = useCallback((project) => {

            setState((data) => ({...data, [project.id]: project}))

    }, []) 

    const addNote = useCallback((projectId, note) => {


        setState((data) => {

          let index = data[projectId].notes.map(note => note.id).indexOf(note.id)

          console.log(index)

          if(index < 0) {
              
            return  ({
            ...data, [projectId]: {...data[projectId], notes: [...data[projectId]["notes"], note]}
            })

          }

          let newNotes = [...data[projectId]["notes"]]

          newNotes[index] = note

          return  ({
            ...data,[projectId]: {...data[projectId], notes: [...newNotes]}
            })
          

    })

}, []) 


    const value = useMemo(
        () => ({
            projects,
            addProject,
            addNote
        }), [projects, addProject])
    

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )


}


