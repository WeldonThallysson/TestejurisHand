
import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity,Image, TextInput} from 'react-native';
import Modal from 'react-native-modal';







const tela2 = ({navigation}) => {
    return(
    <View style={Estilos.ConteinerPrincipal2}>

            <View style={Estilos.ConteinerConteudo}>
                
                <View style={Estilos.ContainerBtnSair}>
                    <TouchableOpacity style={Estilos.BtnSair}onPress={() => {}}>
                        <Image source={require('../imgs/close.png')} style={{width: 20, height: 20}}/>
                    </TouchableOpacity>
                </View>

                <View style={Estilos.ConteinerBotoes_textos_imagem} >
                   <Text style={Estilos.TextoPrincipal}>Faça upgrade no JurisHand e Seja Feliz</Text> 
                   <Image source={require('../imgs/Jobs.png')} style={Estilos.ImagemPrincipal}/>
                   <Text style={Estilos.TextodaAssinatura}> Assine por R$ 299,90 por ano</Text>
                   <Text style={Estilos.TextoPreco}> (R$ 24,90 por mês)</Text>
                </View>

                <View style={Estilos.ConteinerBtnAssinar}>
                    <Modal isVisible={visible}>
                        <View>
                            <TextInput
                            placeholder='Email'
                            onChangeText={() => {}}
                            ></TextInput>
                            <TextInput
                            placeholder='senha'
                            onChangeText={() => {}}
                            ></TextInput>
                        </View>
                    </Modal>
                    <TouchableOpacity style={Estilos.BtnAssinar} onPress={() => {}}>
                        <Text style={Estilos.TxtAssinar}>Assine Agora</Text>
                    </TouchableOpacity>
                </View>

    
            </View>


  <View style={Estilos.rodape}>
    <Text style={Estilos.TextoRodape}>Você será cobrado imediatamente</Text>
    <Text style={Estilos.TextoRodape}>Sem período trial</Text>
   </View>



    </View> 
        
    )
}

export default tela2;

const Estilos = StyleSheet.create({
 ConteinerPrincipal2:{
  flex: 1,
 
 },
 ConteinerConteudo:{
  
  margin: 30,
   padding: 50,
   paddingBottom: 10,
   marginTop: 75,
   backgroundColor: '#F5EEEE',
   borderRadius: 5,
   elevation: 10
  
 },
 ImagemPrincipal:{
   width: 150,
   height: 150,
   marginLeft: 25
 },
 TextoPrincipal:{
   fontSize: 22,
   padding:2,
   textAlign: 'center',
   fontWeight: 'bold',
    
 },
 TextoPreco:{
    
 },
 TextodaAssinatura:{
  fontSize: 15,
  textAlign: 'justify'
 },
 ConteinerBtnAssinar:{
  justifyContent: 'center',
  marginTop: 10,
  padding: 10,
  elevation: 10

 },
 TextoPreco:{
  textAlign: 'center'
 }, 
  BtnAssinar:{
    backgroundColor:'white',
    padding: 10,
    borderColor: '#FF9CD4',
    borderWidth: 1,
    borderRadius: 4

  },
  BtnSair:{
    marginLeft: 200 ,
  
  },
  TxtAssinar: {
    color:'#FF9CD4',
    textAlign: 'center',
    fontSize: 15,
    fontWeight:'bold'
  },
  rodape:{
    alignItems: 'center',
   justifyContent: 'center' 
  },

  TextoRodape:{
    fontWeight: '800',
    color: 'black'
  }
})
