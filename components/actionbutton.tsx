import { Children } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';


export const ActionButton = (props: { icon:String ; text: String; }) => {
    const { icon, text } = props;
    const iconPath = './' + icon
    return (
    <TouchableOpacity
     onPress={()=>{alert(`You clicked the button ${text} !`)}} activeOpacity={0.8} 
     style={{backgroundColor: '#1a1a1a', borderRadius:99, paddingTop:6, paddingBottom:6, paddingLeft:10, paddingRight:10, maxHeight: 32.5, justifyContent: 'center', alignItems: 'center', marginRight:10}}
     >
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>

            <Image source={{uri:icon}} style={{width: 20, height: 20, marginRight: 10}} />
            <Text style={{color: 'white', marginRight: 10}}>{text}</Text>
                
        </View>
       
      
    </TouchableOpacity>
    )
}