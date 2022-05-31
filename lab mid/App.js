
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import RadioForm from 'react-native-radio-form';
import CalendarPicker from 'react-native-calendar-picker';
import { Hoverable, Pressable, } from 'react-native-web-hover'
const mockData = [
  {
      label: '',
      value: 'fi'
  },
  
];
export default class App extends Component {
  
  constructor(props) {
    
    super(props);
    this.state = {
      selectedStartDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }
  render() {
    
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    return (
      
      <View style={styles.container}>
         <View style={styles.heading}>SALAH TRACKER {"\n"}{"\n"} </View>
        <CalendarPicker
          onDateChange={this.onDateChange}
        />

        <View>
          <Text>SELECTED DATE:{ startDate }</Text>
        </View>
        



        <View>


          
<View style ={styles.child1}>
          
<View style = {styles.FlexContainer}>




         <View style = {styles.redbox}>
         
         <View style ={styles.child1}>
        
          <Image
  source={require('./assets/fajr.png' )}
  style={{ width: 40, height: 40 }}/> 
  
  </View>
         </View>
         
         <View style = {styles.bluebox}>
         
         <View style ={styles.namzaindivi}>
          <Image
  source={require('./assets/namzaindivi.png' )}
  style={{ width: 40, height: 40 }}/> 
  </View>
  <View style={{ marginVertical: 10 }} >
          <RadioForm
              style={{ width: 350 - 30 }}
              dataSource={mockData}
              // itemShowKey=""
              // itemRealKey="value"
              circleSize={16}
              initial={1}
              formHorizontal={true}
              labelHorizontal={true}
              onPress={(item) => this._onSelect(item)}
          />
        </View>
         </View>

         <View style ={styles.namzaindivi}>
          <Image></Image>
  source={require('./assets/jammat.png' )}
  style={{ width: 40, height: 40 }}/> 
  </View>
  <View style={{ marginVertical: 10 }} >
          <RadioForm
              style={{ width: 350 - 30 }}
              dataSource={mockData}
              // itemShowKey=""
              // itemRealKey="value"
              circleSize={16}
              initial={1}
              formHorizontal={true}
              labelHorizontal={true}
              onPress={(item) => this._onSelect(item)}
          />
        </View>
         </View>


         
  


  
  </View>

 <View style ={styles.child2}>
          
          <Image
  source={require('./assets/zuhr.png' )}
  style={{ width: 40, height: 40 }}/> 
  
  </View>
  <View style ={styles.child3}>
          
          <Image
  source={require('./assets/asr.png' )}
  style={{ width: 40, height: 40 }}/> 
  
  </View>

  <View style ={styles.child4}>
          
          <Image
  source={require('./assets/magrib.png' )}
  style={{ width: 40, height: 40 }}/> 
  
  </View>

  <View style ={styles.child5}>
          
          <Image
  source={require('./assets/eisha.png' )}
  style={{ width: 40, height: 40 }}/> 
  
  </View>
          

           </View>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 100,
  },
  
  parentView:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    marginTop: 100,
    borderRadius:100,
    width: 100 * 10,
    padding: 120,
    height: 100,
    margin: 30,
    fontSize: 15,
    backgroundColor: 'skyblue',
  
   

    
  },
  FlexContainer:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  redbox: {
    margin:5,
    width: 450,
    height: 100,
    backgroundColor: 'red'
 },
 bluebox: {
    width: 450,
    margin:5,
    height: 100,
    backgroundColor: 'blue'
 },
 blackbox: {
    width: 450,
    margin:5,
    height: 100,
    backgroundColor: 'green'
 },
  heading:{
    flex:1,
    color:'black',
  fontSize:30,
    justifyContent:'center',
    alignItems:'center',
    paddingTop:30,
    
  },
  child1:{
    
    paddingVertical:20,
    
    textAlign:'center',
    borderWidth:5,
    marginBottom:30,
    marginHorizontal:50,
    
  },
  child2:{
   
    paddingVertical:20,
   textAlign:'center',
   borderWidth:5,
   marginBottom:30,
   marginHorizontal:50,
  },
  child3:{
    // backgroundColor:'red',
    paddingVertical:100,
   textAlign:'center',
   borderWidth:5,
   marginBottom:30,
   marginHorizontal:50,
  },
  child4:{
    // backgroundColor:'purple',
    paddingVertical:100,
    textAlign:'center',
    borderWidth:5,
    marginBottom:30,
    marginHorizontal:50,
  },
  child5:{
    // backgroundColor:'indigo',
    paddingVertical:100,
    textAlign:'center',
    borderWidth:5,
    marginBottom:50,
    marginHorizontal:50,
  },
  
});