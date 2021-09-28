import React from 'react';
import { View,Text,Image,StyleSheet,Button } from 'react-native';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import colors from '../constants/colors';

const GameOverScreen  = props => {
     return ( <View style={styles.screen}>
         <TitleText>The game is over! </TitleText>
         <View style={styles.imageContainer}><Image style={styles.image} 
         fadeDuration={300}
         //source={require('../assets/success.png')}
         source={{uri:'https://cdn.pixabay.com/photo/2016/05/05/23/52/mountain-summit-1375015_1280.jpg'}}
         resizeMode='cover' 
         /></View>
         <View style={styles.resultContainer}>
         <BodyText style={styles.resultText}>Your phone needed <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to guess the number <Text  style={styles.highlight}>{props.userNumber}</Text></BodyText>
         </View>
     </View> );
};

const styles=StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    resultText:{
        textAlign:'center',
        fontSize:20
    }
    ,highlight:{
      color:colors.primary,
      fontFamily:'open-sans-bold'

    },
    resultContainer:{
        marginHorizontal:30,
        marginVertical:15
    }
    ,
    imageContainer:{
        width:300,
        height:300,
        borderRadius:150,
        borderWidth:3,
        borderColor:'black',
        overflow:'hidden',
        marginVertical:30,
    },
    image:{
        width:'100%',
        height:'100%',
      }
});

export default GameOverScreen;