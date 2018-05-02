import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { FormInput, Button} from 'react-native-elements';
class App extends Component {
  constructor(){ 
    super();
     this.state={brt:0,hg:0,imt:0,diag:'',tampilan:false} 
    } 

    hitung=()=>{
      var berat = parseInt(this.state.brt);
      var tinggi = parseInt(this.state.hg)/100;
      var indeks = berat/Math.pow(tinggi,2);
      var diagnosa ='';
      if(indeks<18.5){
        diagnosa='KURUS AMAT';
      }else if(indeks>=18.5 && indeks<=24.9){
        diagnosa='Berat badan SUDAH PAS';
      }else if(indeks>=25.0 && indeks<=29.9){
        diagnosa ='OVERWEIGHT';
      }else if(indeks>=30.0 && indeks<=39.9){
        diagnosa='You are very overweight';
      }else{
        diagnosa='You got obesity';
      }
      this.setState({
        brt:berat,
        hg:tinggi,
        imt:indeks,
        diag:diagnosa,
        tampilan:true
      })
    }
    render() {
      console.disableYellowBox=true;
      return (
<View style={{backgroundColor:'pink',flex: 1,flexDirection:'column'}}>
<Text style={gaya.judul}>
INDEKS MASSA TUBUH
</Text>

<View style={{flexDirection: 'row',
justifyContent: 'center'}}>
<FormInput onFocus={()=>{
          var st = this.state.tampilan
          if(st){
            this.setState({tampilan:!this.state.tampilan})
          }
        }} containerStyle={{ width:170}} placeholder='berat (kg)' onChangeText={(input1)=>this.setState({brt:input1})} value={this.state.brt}  />
<FormInput onFocus={()=>{
          var st = this.state.tampilan
          if(st){
            this.setState({tampilan:!this.state.tampilan})
          }
        }} 
containerStyle={{ width:170}} placeholder='Tinggi(cm)' onChangeText={(input2)=>this.setState({hg:input2})}value={this.state.hg} />
</View>



<Button buttonStyle={{ backgroundColor:'red'}} title='HITUNG IMT'
onPress={()=>{this.hitung();}}
/> 
{this.state.tampilan &&
<View>
<Text>{'\n'}</Text>
<Text style={{textAlign:'center'}}> Massa Tubuh (kg):</Text>
<Text style={{fontSize:30, textAlign:'center',fontWeight:'bold', color:'black'}}>{this.state.brt} </Text> 

<Text style={{textAlign:'center'}}> Tinggi Badan (cm):</Text>
<Text style={{fontSize:30, textAlign:'center',fontWeight:'bold',color:'black'}}>{this.state.hg} </Text> 

<Text style={{textAlign:'center'}}> Indeks Massa Tubuh:</Text>
<Text style={{fontSize:30, textAlign:'center',fontWeight:'bold',color:'black'}}> {this.state.imt} </Text> 

<Text style={{textAlign:'center'}}> Diagnosa:</Text>
<Text style={{fontSize:30, textAlign:'center',fontWeight:'bold',color:'black'}}>{this.state.diag} </Text> 
</View>
}
</View>
);
}
}

const gaya = StyleSheet.create({
  judul: {
  color:'white',
  backgroundColor:'red',
  fontSize:30,
  fontWeight:'bold',
  textAlign:'center',
  },
  });
  export default App;
  
