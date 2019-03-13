import React, { Component } from 'react';
import { AppRegistry, View, TextInput, StyleSheet, Text, Image,ScrollView, AsyncStorage, Button,
Alert } from 'react-native';

import CameraRollPicker from 'react-native-camera-roll-picker';



class UselessTextInput extends Component {

  _onPressButton() {
    Alert.alert('You tapped the Add Picture button!')
    
  }

  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
        <ScrollView>
          <View style = {styles.container}>
            <TextInput  placeholder= {"Title"} style = {styles.noteTitle}/>
            <TextInput  place holder= {"New Note"} style = {styles.noteContent} {...this.props} />
          </View>

          <View style = {styles.container}backgroundColor= {'lightgreen'} borderColor={'lightgreen'}>
            <TextInput  placeholder= {"Title"} style = {styles.noteTitle}  />
            <TextInput  placeholder= {"New Note"} style = {styles.noteContent} {...this.props} />
          </View>

          <View style = {styles.container}backgroundColor= {'pink'} borderColor={'pink'}>
            <TextInput  placeholder= {"Title"} style = {styles.noteTitle} /> 
            <TextInput  placeholder= {"New Note"} style = {styles.noteContent} {...this.props} />
          </View>

          <View style = {styles.container}backgroundColor= {'lightyellow'} borderColor={'lightyellow'}>
            <TextInput  placeholder= {"Title"} style = {styles.noteTitle} /> 
            <TextInput  placeholder= {"New Note"} style = {styles.noteContent} {...this.props} />
          </View>

        </ScrollView>
          
        <Button 
          style = {styles.footer} 
          title={'Add Picture'}
          onPress={this._onPressButton
            

          }
        />

       
      </View>
    );
  }
}


export default class UselessTextInputMultiline extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }

  render() {
    return (
     <View style={{
       

       //marginTop: 20,
       paddingTop: 10,
       backgroundColor: "#222222",
       flex: 1      
      }}   
     >
       <UselessTextInput
         multiline = {true}
         numberOfLines = {1} 
       />
     </View>


    );
  }
}


const styles = StyleSheet.create ({
  container: {
     
     padding: 10,
     margin: 5,
     borderWidth: 2,
     borderColor: 'lightblue',
     borderRadius: 5,
     backgroundColor: 'lightblue',
     shadowColor: "#777777",
     shadowOpacity: 0.8,
     shadowRadius: 3,
     shadowOffset: {
       height:2,
       width: 1
     }
     
  },
  footer: {
   height: 50,
   backgroundColor: 'white'

  },

  noteContent: {
    fontSize: 20
 },
 noteTitle: {

 }
})


AppRegistry.registerComponent(
 'AwesomeProject',
 () => UselessTextInputMultiline
);






















/*
import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

class List extends Component {
   state = {
      names: [
         {
            id: 0,
            name: 'Ben',
         },
         {
            id: 1,
            name: 'Susan',
         },
         {
            id: 2,
            name: 'Robert',
         },
         {
            id: 3,
            name: 'Mary',
         },
         {
          id: 3,
          name: 'Mary',
        }
      ]
   }
   alertItemName = (item) => {
      alert(item.name)
   }
   render() {
      return (
         <View style={{paddingTop: 20, backgroundColor : "#eeeeee"}}> 
            {
               this.state.names.map((item, index) => (
                  <TouchableOpacity
                     key = {item.id}
                     style = {styles.container}
                     onPress = {() => this.alertItemName(item)}>
                     
                     <Text style = {styles.text}>
                        {item.name}
                     </Text>
                  </TouchableOpacity>
               ))
            }
         </View>
      )
   }
}
export default List

const styles = StyleSheet.create ({
   container: {
      padding: 10,
      marginTop: 3,
      backgroundColor: '#d9f9b1',
      alignItems: 'center',
   },
   text: {
      color: '#4f603c'
   }
})



*/



















/*
import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View, StyleSheet } from 'react-native';

export default class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (

      <View multiline={true} style={{paddingTop: 20, backgroundColor : "#eeeeee"}}>
        <TextInput
          style={styles.inputBlocks}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <TextInput
          style={styles.inputBlocks}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <TextInput
          style={styles.inputBlocks}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />

        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    );
  }
}




const styles = StyleSheet.create({
  inputBlocks: {
    backgroundColor: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
    paddingTop: 10,
    paddingBottom: 10,
    margin: 2,
    textAlign: 'center',
    

 

 borderWidth: 2,
 
 // Set border Hex Color Code Here.
 borderColor: 'blue',
 
// Set border Radius.
 borderRadius: 10 

 
  },
  red: {
    color: 'red',
  },
});
*/
// skip this line if using Create React Native App
//AppRegistry.registerComponent('AwesomeProject', () => PizzaTranslator);
