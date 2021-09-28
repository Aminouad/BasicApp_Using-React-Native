import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput,
    Alert, TouchableWithoutFeedback,Keyboard } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import colors from '../constants/colors';
import NumberContainer from '../components/NumberConatiner';
import Card from '../components/card'
import Input from '../components/Input';
import TitleText from '../components/TitleText';
import BodyText from '../components/BodyText';
const StartGameScreen = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed,setConfiremed] =useState(false);
    const [selectedNumber,setSelectedNumber] =useState();

    const numberInputHandler = inputText => { 
        setEnteredValue(inputText.replace(/[^0-9]/g,''));
    };
    
const resetInputHandler = () => {
    setEnteredValue('');
    setConfiremed(false);
};

const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (chosenNumber === NaN || chosenNumber <= 0 || chosenNumber>99) {
        Alert.alert('Invalid number','Number has to be a number between 1 and 99',[{text:'Okay',style:'destructive',onPress:resetInputHandler}])
        return;
    }
    setConfiremed(true);
    setSelectedNumber(chosenNumber);   
    setEnteredValue('');
    Keyboard.dismiss();

};

  let confirmedOutput;
    if (confirmed) {
     confirmedOutput = (
     <Card style={styles.summaryContainer}><BodyText>You Selected</BodyText>
    <NumberContainer>{selectedNumber}</NumberContainer>
    <Button title="START GAME" onPress={() => props.onStartGame(selectedNumber)}/>
     </Card> );
    }

    return (
           <TouchableWithoutFeedback onPress={() => {
               Keyboard.dismiss();
           }}>
        <View style={styles.screen}>
            <TitleText style={styles.title}>Start a new game</TitleText>

            <Card style={styles.inputContainer}>
                <BodyText>Select a Number</BodyText>
                <Input style={styles.input} blurOnSubmit autoCapitalize='none'
                 autoCorrect={false} keyboardType='number-pad' maxLength={2} 
                 onChangeText={numberInputHandler}
                 value={enteredValue}
                 />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}><Button title="Reset" onPress={resetInputHandler} color={colors.accent} /></View>
                    <View style={styles.button}><Button title="Confirm" onPress={confirmInputHandler} color={colors.primary} /></View>

                </View>
            </Card>

            {confirmedOutput}


        </View></TouchableWithoutFeedback>

    );
};


const styles = StyleSheet.create({

    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
        fontFamily:'open-sans-bold'

    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    button: {
        width: 100
    },
    input: {
        width: 50,
        textAlign: 'center'
    },
    summaryContainer:{
        marginTop:20,
        alignItems:'center'
    },
    
});

export default StartGameScreen;
