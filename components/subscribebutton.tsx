import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { ActionButton } from './actionbutton';

export const SubscribeButton = () => {
    return (
        <TouchableOpacity
            onPress={()=>{alert("You clicked the button !")}} activeOpacity={0.8} 
            style={{backgroundColor: 'white', borderRadius:99, paddingTop:6, paddingBottom:6, paddingLeft:12.5, paddingRight:12.5, height: 30, justifyContent: 'center', alignItems: 'center',  }}
            >
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Text style={{color: 'black', fontWeight:'500', fontSize:12}}>S'abonner</Text>
            </View>
  
 
        </TouchableOpacity>
        


    )
}