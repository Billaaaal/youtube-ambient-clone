import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { ActionButton } from './actionbutton';

export const LikeButton = () => {
    return (
        <TouchableOpacity
            onPress={()=>{alert("You clicked the button !")}} activeOpacity={0.8} 
            style={{backgroundColor: '#1a1a1a', borderRadius:99, paddingTop:6, paddingBottom:6, paddingLeft:10, paddingRight:10, maxHeight: 32.5, justifyContent: 'center', alignItems: 'center', marginRight: 10}}
            >
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Image source={{uri:'https://i.ibb.co/WcmY9c1/like.png'}} style={{width: 20, height: 20, marginRight: 10}} />
                <Text style={{color: 'white', marginRight: 10}}>157 k</Text>
                <View style={{ width: 1, height: 17.5, backgroundColor: '#313131', marginRight: 10, alignSelf:'center' }} />
                <Image source={{uri:'https://i.ibb.co/WcmY9c1/like.png'}} style={{width: 20, height: 20,transform: [{ rotate: '180deg'}]}} />

            </View>
  
 
        </TouchableOpacity>
        


    )
}