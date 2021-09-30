import React, {useState, useContext, useEffect} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView, Button } from 'react-native';
import ElementTitle from './ElementTitle';


import {GlobalContext} from "../contexts/GlobalContext"
import { uuid } from 'uuidv4';


 function Home({navigation}) {

  const [project, setProject] = useState();
  const {addProject, projects} = useContext(GlobalContext)
  const [projectsArray, setProjectsArray] = useState([])



  useEffect(() => {

    const projectsArrayAux =  []
   
    for (const key in projects) {
       
        projectsArrayAux.push(projects[key])
        
    }


    setProjectsArray(projectsArrayAux)

  },[ projects ])

  const handleAddProject = () => {
    Keyboard.dismiss();

    let newProject = {
      id: uuid(),
      title: project,
      notes: [],
      createdAt: new Date().toISOString()
    }

    addProject(newProject)
    setProject(null);
  }

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >
        {/* Today's Tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Projects</Text>
        <View style={styles.items}>
          {projectsArray.map(item => 

              
                (
                <TouchableOpacity key={item.id} onPress={() => navigation.navigate('Project', {id: item.id})}>
                    <ElementTitle  text={item.title} />
                </TouchableOpacity>
                )

          )}
        </View>
      </View>
      </ScrollView>

      {/* Write a task */}
      {/* Uses a keyboard avoiding view which ensures the keyboard does not cover the items on screen */}
      <KeyboardAvoidingView 
        behavior={"height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Add a Project'} value={project} onChangeText={text => setProject(text)} />
        <TouchableOpacity onPress={() => handleAddProject()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {},
})

// export default withAuthenticator(App)
export default Home