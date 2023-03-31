import { Children } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';


export const CommentsButton = () => {
    return (
    <TouchableOpacity
     onPress={()=>{alert(`You clicked the button !`)}} activeOpacity={0.8} 
     style={{backgroundColor: '#1a1a1a', borderRadius:12.5, width: '95%', height:85, justifyContent: 'center', alignItems: 'center', alignSelf:'center', marginTop:15}}
     >
        {/*will contain a column with two rows inside */}

        <View style={{flex:1, width:'92.5%', flexDirection:'column'}}>

            <View style={{width:'100%', height:25, flexDirection:'row', alignItems:'center', marginTop:8}}>
                <Text style={{color:'white', fontSize:14, alignSelf:'flex-start', fontWeight: '500'}}>Commentaires</Text>
                <Text style={{color:'#828282', fontSize:14, marginStart:5, marginTop:-3}}>8,1 k</Text>



            </View>

            <View style={{width:'100%', height:40, flexDirection:'row', alignItems:'center'}}>
                
                <Image style={{height:30, width:30, borderRadius:50}} source={{uri:'https://yt3.googleusercontent.com/Ikb1C4ih2VMvfjma8OO5b39JnHL2CQcQgksB_I7TM-gGA3ERTY589OeLKCYyRQQO0nkE54-f=s900-c-k-c0x00ffffff-no-rj'}}></Image>
                <Text numberOfLines={2} style={{color:'white', fontSize:11, width:'80%', height:45, marginStart:8, fontWeight:'400', textAlignVertical:'center', lineHeight: 17.5}}>Why Apple Events Always Win.Why Apple Events Always Win.Why Apple Events Always Win.Why Apple Events Always Win.Why Apple Events Always Win.Why Apple Events Always Win.</Text>

            </View>
            

        </View>
       
      
    </TouchableOpacity>
    )
}