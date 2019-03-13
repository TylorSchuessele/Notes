import React, { Component } from 'react';
import { AppRegistry, View, TextInput, StyleSheet, Text, Image,ScrollView, AsyncStorage, Button,
    Alert, Navigator } from 'react-native';

import CameraRollPicker from 'react-native-camera-roll-picker';
import {StackNavigator} from 'react-navigation';

class LoginPage extends Component {

    constructor(props) {
        super(props);
        this.state = {usernameText: "", passwordText: "", loadingJSON: true};
    }

    componentDidMount(){
        return fetch('http://schuesse.dev.fast.sheridanc.on.ca/accounts.json')
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    loadingJSON: false,
                    jsonData: responseJson.Users,
                }, function(){

                });

            })
            .catch((error) =>{
                console.error(error);
            });
    }

    checkIfUsernameCorrect() {
        for (var i = 0; i < this.state.jsonData.length; i++) {
            if (this.state.usernameText == this.state.jsonData[i].UserName) {
                if (this.state.passwordText == this.state.jsonData[i].Password) {
                    return "YES";
                }
            }
        }
        return "NO";
    }
    onUsernameType(text) {
        this.state.usernameText = text;
    }

    onPasswordType(text) {
        this.state.passwordText = text;
    }

    async saveClientInformation(userName, passWord) {
        try {
            await AsyncStorage.setItem('@Username:key', userName);
            await AsyncStorage.setItem('@Password:key', passWord);
        } catch (error) {

        }
    }

    render() {

        const {navigate} = this.props.navigation;

        return(
          <View>
              <Text>Login</Text>
              <TextInput
                placeholder={"Username"}
                onChangeText={(text) => this.onUsernameType(text)}
              />
              <TextInput
                  placeholder={"Password"}
                  onChangeText={(text) => this.onPasswordType(text)}
              />
              <Button
                  title="Login"
                  onPress={() => {
                      if (this.checkIfUsernameCorrect() == "YES") {
                          this.saveClientInformation(this.state.usernameText, this.state.passwordText);
                          navigate('HomePage');
                      } else {
                        console.log("");
                      }
                  }}
              />
          </View>

        );
    }
}
class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {username: ""}
        this.loadClientInfo();
    }

    async loadClientInfo() {
        try {
            const usr = await AsyncStorage.getItem('@Username:key');
            this.setState({username: usr});
        } catch (error) {
        }
    }
    render() {

        return (
            <View style={{

                paddingTop: 10,
                backgroundColor: "#ffffff",
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}>
                <Text>Welcome, {this.state.username}</Text>
                <ScrollView>
                    <View style = {styles.container}  >
                        <TextInput  placeholder= {"Title"} style = {styles.noteTitle}/>
                        <TextInput  place holder= {"New Note"} multiline={true} numberoflines={1} style = {styles.noteContent} {...this.props} />
                    </View>

                    <View style = {styles.container}backgroundColor= {'lightgreen'} borderColor={'lightgreen'}>
                        <TextInput  placeholder= {"Title"} style = {styles.noteTitle}  />
                        <TextInput  placeholder= {"New Note"} multiline={true} numberoflines={1} style = {styles.noteContent} {...this.props} />
                    </View>

                    <View style = {styles.container}backgroundColor= {'pink'} borderColor={'pink'}>
                        <TextInput  placeholder= {"Title"} style = {styles.noteTitle} />
                        <TextInput  placeholder= {"New Note"} multiline={true} numberoflines={1} style = {styles.noteContent} {...this.props} />
                    </View>

                    <View style = {styles.container}backgroundColor= {'lightyellow'} borderColor={'lightyellow'}>
                        <TextInput  placeholder= {"Title"} style = {styles.noteTitle} />
                        <TextInput  placeholder= {"New Note"} multiline={true} numberoflines={1} style = {styles.noteContent} {...this.props} />
                    </View>
                </ScrollView>

                <Button
                    style = {styles.footer}
                    title={'Add Picture'}
                    onPress={() => {
                        this.props.navigation.navigate('ImagePage');
                    }}
                />


            </View>
        );
    }
}

class ImagePage extends Component {
    render(){
        return(
            <View>
                <Text> Pick a Photo </Text>

                <CameraRollPicker
                    callback={this.getSelectedImages}
                    height={500}
                />


            </View>
        );
    }
}



export default class App extends Component {
    render(){
        return <RootStack/>;
    }
}

const RootStack = StackNavigator(
    {
        LoginPage: {
        screen:LoginPage
        },
        HomePage:{
            screen:HomePage
        },
        ImagePage:{
            screen: ImagePage
        },
    },
    {
        initialRouteName:'LoginPage'
    }
)

const styles = StyleSheet.create ({
    container: {

        padding: 10,
        margin: 5,
        borderWidth: 2,
        borderColor: 'lightblue',
        borderRadius: 5,
        backgroundColor: 'lightblue',
        shadowColor: "#111111",
        shadowOpacity: 0.8,
        shadowRadius: 3,
        shadowOffset: {
            height:10,
            width: 5
        }

    },

    textInput: {
        flex: 1,
        padding: 5,
    },

    footer: {
        height: 50,

    },

    noteContent: {
        fontSize: 20

    },

    noteTitle: {

    }
})

AppRegistry.registerComponent('AwesomeProject', () => TylorProject);
