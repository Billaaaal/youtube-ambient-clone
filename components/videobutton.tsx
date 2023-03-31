import { Children } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';


export const VideoButton = () => {
    return (
    <TouchableOpacity
     onPress={()=>{alert(`You clicked the button !`)}} activeOpacity={0.8} 
     style={{width: '100%', height:290, alignItems: 'center', alignSelf:'center', marginBottom:5}}
     >
        {/*will contain a column with two rows inside */}

        <View style={{flex:1, width:'100%', flexDirection:'column'}}>

            <Image source={{uri:'https://img.youtube.com/vi/OmmbQRSuNys/maxresdefault.jpg'}}  style={{aspectRatio: 16/9, width:'100%'}} ></Image>
            
            <View style={{flex:1, width:'92.5%', flexDirection:'column'}}>

            

                <View style={{width:'95%', flexDirection:'row', alignItems:'center', marginStart:15, height:50, marginTop:7}}>
                    
                    <Image style={{height:35, width:35, borderRadius:50}} source={{uri:'https://yt3.googleusercontent.com/Ikb1C4ih2VMvfjma8OO5b39JnHL2CQcQgksB_I7TM-gGA3ERTY589OeLKCYyRQQO0nkE54-f=s900-c-k-c0x00ffffff-no-rj'}}></Image>
                    
                    <View style={{flex:1, width:'100%', height:'100%', alignItems:'center', justifyContent:'center'}}>
                        <Text numberOfLines={1} style={{color:'white', fontSize:14, width:'100%', marginStart:25, fontWeight:'700', textAlignVertical:'center'}}>C'est incroyable !</Text>
                        <Text numberOfLines={1} style={{color:'#828282', fontSize:12, width:'100%', marginTop:2, marginStart:25}}>JOYCA - 3 M de vues  il y a 6 j</Text>

                    
                    </View>
                </View>
            

            </View>

        </View>


        
       
      
    </TouchableOpacity>
    )
}