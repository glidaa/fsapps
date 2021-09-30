import React, {useState, useContext} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, Keyboard } from 'react-native';
import ElementTitle from './ElementTitle';


import {GlobalContext} from "../contexts/GlobalContext"
import { uuid } from 'uuidv4';

const Project = ({route, navigation}) => {


  const { id } = route.params;
  const [note, setNote] = useState();
  const {addNote, projects} = useContext(GlobalContext)

  const handleAddNote = () => {
    Keyboard.dismiss();

    let newNote = {
      id: uuid(),
      projectId: id,
      isDone: false,
      note: note,
      task: "",
      description: "",
      steps: "",
      due: "",
      watcher: "",
      tag: [],
      sprint: "",
      status: "TODO",
      owner: null,
      assignee: null,
      createdAt: new Date().toISOString()
    }

    addNote(id, newNote)
    setNote(null);
  }


  return (
      <View style={styles.container}>

        <ScrollView
                contentContainerStyle={{
                flexGrow: 1
                }}
                keyboardShouldPersistTaps='handled'
            >

        <View style={styles.item}>
        
            
            <Text style={styles.itemText}>{projects[id].title}</Text>

        
        </View>
        <View style={styles.tasksWrapper}>

        {projects[id].notes.map(item => 

                (
                 <TouchableOpacity key={item.id} onPress={() => navigation.navigate('Note', {projectId: id, noteId: item.id})}>
                    <ElementTitle  text={item.note} />
                 </TouchableOpacity>
                )

                )}
        </View>
       
            <KeyboardAvoidingView 
                behavior={"height"}
                style={styles.writeTaskWrapper}
            >
                <TextInput style={styles.input} placeholder={'Note'} value={note} onChangeText={text => setNote(text)} />
                <TouchableOpacity onPress={() => handleAddNote()}>
                    <View style={styles.addWrapper}>
                        <Text style={styles.addText}>+</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </ScrollView >
        
      </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: '80%',
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 5,
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 200,
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
});

export default Project;