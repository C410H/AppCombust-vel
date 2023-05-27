import { StatusBar, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';

export default function App() {
	const [gasolina, setGasolina] = useState();
	const [alcool, setAlcool] = useState();
	const [resultado, setResultado] = useState(0);
	const [texto, setTexto] = useState("");
	
	function calcular(){
		let resultado = alcool / gasolina;
		let texto = "";
		if(resultado > 0.7){
			texto = ("Utilize a Gasolina!");
			setTexto(texto);
		}
		else{
			texto = ("Utilize o Álcool")
		}
		setResultado(resultado);
		setTexto(texto)
	}
	
	function limpar(){
		setResultado("");
		setAltura("");
		setPeso("");
	}
  return (
    <View style={styles.container}>
		<View style={styles.titulo}>
			  <Text style={styles.txtTitulo}>Diferença de Combustível</Text>
		</View>
		  
		<View style={styles.blocoImg}>
			<Image style={styles.Img} source={require('./assets/posto.jpg',)}/>
		</View>
		  
		<View style={styles.bloco}>
			<Text style={styles.Label}>Preço da Gasolina:</Text>
			<TextInput maxLength={6} style={styles.txtInput} placeholder="Insire o Preço da Gasolina" keyboardType="numeric" value={gasolina} onChangeText={(value)=>setGasolina(value)}/>
			
			<Text style={styles.Label}>Preço do Alcool:</Text>
			<TextInput maxLength={4} style={styles.txtInput} placeholder="Insire o Preço do Alcool" keyboardType="numeric" value={alcool} onChangeText={(value)=>setAlcool(value)}/>
		</View>
		  
		<View style={styles.bloco1}>
			<TouchableOpacity style={styles.button} onPress={calcular} >
        		<Text>Calcular</Text>
      		</TouchableOpacity>
			
			<TouchableOpacity style={styles.button} onPress={limpar}>
        		<Text>Limpar</Text>
      		</TouchableOpacity>
		</View>
		  
		<View style={styles.blocoX}>
			<Text  style={styles.Label}>
				Resultado: {resultado}
			</Text>
			<Text  style={styles.Label}>
				{texto}
			</Text>
		</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   	backgroundColor:'#fff'
  },
	titulo: {
		backgroundColor: '#000000',
		height:'10%',
		justifyContent:'center',
		textAlign:'center',
		justifyContent:'center'
	},
	txtTitulo: {
		fontSize: 20,
		textAlign:'center',
		color:'#fff',
		borderWidth: 2,
		borderRadius:5,
		borderColor: '#fff',
		marginLeft: '15%',
		marginRight: '15%'
	},
	Img: {
		width: 200,
		height: 200,
		borderRadius:10
	},
	blocoImg: {
		alignItems: 'center',
		marginTop: 30
	},
	bloco: {
		marginTop: 10,
		textAlign:'center',
		justifyContent:'center',
		alignItems: 'center' 
	},
	txtInput:{
		backgroundColor:'#fff',
		marginTop: 10,
		width: 200,
		borderRadius:5,
		borderWidth:1,
		fontSize: 20,
		marginBottom: 15,
	},
	Label: {
		backgroundColor:'#fff',
		marginTop: 10,
		marginBotton: 10,
		width: 300,
		fontSize: 20
	},
	bloco1: {
		flexDirection: 'row',
		backgroundColor: '#000000',
		textAlign:'center',
		justifyContent:'center',
	},
	button:{
		backgroundColor:'#fff',
		marginTop: 10,
		marginLeft: 10,
		marginBottom: 15,
		width: 150,
		borderRadius:5,
		borderWidth:1,
	},
	blocoX:{
		marginTop: 10,
		borderWidth: 2,
		borderRadius:5,
		borderColor: '#000000',
		textAlign:'center',
		justifyContent:'center',
		alignItems: 'center' ,
		marginLeft: '15%',
		marginRight: '15%'
	}
});
