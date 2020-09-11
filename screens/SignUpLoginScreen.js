import * as React from 'react';
import {Text,View, TextInput, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import {Header} from 'react-native-elements';

export default class SignUpLoginScreen extends React.Component {
    constructor(){
        super();
        this.state = {
            emailId: '',
            password: ''
        }
    }

    signUp=(emailID,password)=>{
        firebase.auth().createUserWithEmailAndPassword(emailID,password)
        .then((response)=>{
            return Alert.alert("Your account has been created successfully!!");
        })
        .catch(function(error){
            var errorCode = error.code;
            var errorMessage = error.message;
            return Alert.alert(errorMessage);
        })
    }

    login=(emailID,password)=>{
        firebase.auth().signInWithEmailAndPassword(emailID,password)
        .then(()=>{
            return Alert.alert("You have successfully logged in!!");
        })
        .catch(function(error){
            var errorCode = error.code;
            var errorMessage = error.message;
            return Alert.alert(errorMessage);
        })
    }

    render(){
        return(
            <View style={styles.container}>
                <Header
                    padding = {-30}
                    backgroundColor={'#00cc00'}
                    centerComponent={{
                        text: 'BARTER SYSTEM APP',
                        style: { color: '#fff', fontSize: 20, fontWeight: "bold", margin: 10 },
                    }}
                />

                

                <View style={styles.container}>
                    <TextInput 
                        style={styles.inputBox}
                        placeholder='Enter your emailID'
                        keyboardType = 'email-address'
                        onChangeText={(text)=>{
                            this.setState({emailId: text})
                        }}
                    />

                    <TextInput 
                        style={styles.inputBox}
                        placeholder='Enter your password'
                        secureTextEntry = {true}
                        onChangeText={(text)=>{
                            this.setState({password: text})
                        }}
                    />

                    <TouchableOpacity
                        style={styles.buttons}
                        onPress={()=>{
                            this.login(this.state.emailId,this.state.password);
                            this.setState({emailID: "", password: ""});
                        }}
                    >
                        <Text style={styles.buttonText}>LOGIN</Text>
                    </TouchableOpacity>

                    

                    <TouchableOpacity
                        style={styles.buttons}
                        onPress={()=>{
                            this.signUp(this.state.emailId,this.state.password);
                            this.setState({emailID: "", password: ""});
                        }}
                    >
                        <Text style={styles.buttonText}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "orange"
    },
    inputBox: { 
        width: 300,
        height: 40,
        borderBottomWidth:3,
        borderColor : '#00cc00',
        fontSize: 20,
        margin: 10,
        paddingLeft: 10,
        color: "#00cc00",
        fontWeight: "bold",
        textAlign: "center"
    },
    buttons: {
        backgroundColor: "#00cc00",
        marginTop: 20,
        width: 350,
        height: 50,
        borderWidth: 1.5,
        marginBottom: 10,
        borderRadius: 15,
        alignSelf: 'center',
    },
    buttonText: {
        fontSize: 25,
        textAlign: 'center',
        marginTop: 7,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    info: {
        color: "#00cc00",
        fontWeight: "bold",
        textAlign: 'center',
        fontSize: 25,
        marginTop: 20
    },
    info1: {
        color: "#00cc00",
        fontWeight: "bold",
        textAlign: 'center',
        fontSize: 30,
        margin: 1
    },
    
})