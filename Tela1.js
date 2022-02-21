import React from 'react';
import {View,Text,TouchableOpacity,StyleSheet,Image} from 'react-native';



const tela1 = ({navigation}) => {
  return(
    <View style={Estilos.ConteinerPrincipal}>
            
    <View style={Estilos.ConteinerTextoCabeçalho}>
        <Text style={Estilos.TextoInicial}>Configurações</Text>
    </View>

    <View style={Estilos.ConteinerBtn}>
        <Image source={require('../imgs/sync.png')} style={{width: 15, height: 15, marginTop:9, marginRight: 9}}/>     
        <TouchableOpacity onPress={() => {navigation.navigate('Tela2')}}>
        <Text style={Estilos.TextoBtn}>Faça upgrade agora !</Text>
        </TouchableOpacity>
    </View>







</View>
 )
}


export default tela1;


const Estilos = StyleSheet.create({

ConteinerPrincipal:{
flex: 1
},
ConteinerTextoCabeçalho:{

marginTop: 45,
marginLeft: 15,

}, 
ConteinerBtn:{

flexDirection: 'row',
marginTop: 35,
marginLeft: 15


},
TextoInicial:{
fontSize: 30,
fontWeight: 'bold',
textShadowColor: 'black',
textShadowOffset: { width: 5,height: 5}
},
TextoBtn:{
fontSize: 25,
textShadowColor: 'black',
textShadowOffset: {width: 5, height: 5},

}


});
