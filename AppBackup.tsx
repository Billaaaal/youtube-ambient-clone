import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import { LikeButton } from './components/likebutton';
import { ActionButton } from './components/actionbutton';
import {LinearGradient} from 'expo-linear-gradient';
import { SubscribeButton } from './components/subscribebutton';
import YoutubePlayer from "react-native-youtube-iframe-blur";
import { useCallback, useState } from 'react';
import { CommentsButton } from './components/commentsbutton';
import {VideoButton} from './components/videobutton';

export default function App() {
  const [playing, setPlaying] = useState(false);
  const onStateChange = useCallback((state: string) => {
    if (state === "ended") {
      setPlaying(false);
    }
  }, []);
  

  const jsToInject = `const addCSS = css => document.head.appendChild(document.createElement("style")).innerHTML=css;  addCSS("body{ filter: blur(20px); }")`
  
  return (
    <View style={{flex: 1, backgroundColor: 'black', flexDirection: 'column'}}>
      <View style={{marginTop:37.9}}> 
        <YoutubePlayer
            height={232}
            play={playing}
            videoId={'819GH4l2QEs'}
            initialPlayerParams={{ controls: false }}
            JsToInject={''}
          />

          <TouchableOpacity delayPressIn={2000} delayPressOut={2000} onPress={()=>{setPlaying(true)}} activeOpacity={0.4} style={{top: 0, height: 232,width: '100%',position: 'absolute', backgroundColor:'black', opacity:0}}/>
        
          {/*marginTop:37.9*/}
          {/*<Image source={{uri:'https://img.youtube.com/vi/OmmbQRSuNys/maxresdefault.jpg'}}  style={{aspectRatio: 16/9, width:'100%'}} ></Image>*/}
          <View>
            
          </View>
          <View style={{ width: '100%', height: 100, zIndex: -1, marginTop:100, position:'absolute' }}>
            <YoutubePlayer
                mute={true}
                height={232}
                play={playing}
                videoId={'819GH4l2QEs'}
                initialPlayerParams={{ controls: false }}
                JsToInject={jsToInject}
              />


          </View>
                      <LinearGradient colors={['rgba(0, 0, 0, 0.5)', '#000000']} style={{ height: 100, width: '100%', position:'absolute', marginTop:232 }} />

            
              
      </View>
      
      <ScrollView style={{flex: 1, flexDirection: 'column', marginTop:-0}}>
      

      

      <View style={{ flex: 1, width:'100%', height:116}}>

        

        <View style={{ position: 'absolute', width:'95%', height:'100%', flex:1, flexDirection:'column', alignContent:'center', alignSelf:'center'}}>

          <Text numberOfLines={2} style={{color:'white', fontSize:18, alignSelf:'flex-start', marginTop:10, fontWeight: 'bold', lineHeight:25, width:'90%' }}>Why Apple Events Always Win. Why Apple always wins</Text>
          <Text style={{color:'#828282', fontSize:12, alignSelf:'flex-start', marginTop:4}}>3 M de vues  il y a 6 j</Text>


          <TouchableOpacity activeOpacity={0.7} style={{ width:'100%', height:35, marginTop:15, flexDirection:'row', alignItems:'center'}}>
            <Image style={{height:35, width:35, borderRadius:50}}source={{uri:'https://yt3.googleusercontent.com/Ikb1C4ih2VMvfjma8OO5b39JnHL2CQcQgksB_I7TM-gGA3ERTY589OeLKCYyRQQO0nkE54-f=s900-c-k-c0x00ffffff-no-rj'}}></Image>
            <Text style={{color:'white', fontSize:15, marginStart:15, fontWeight: 'bold' }}>Mrwhosetheboss</Text>
            <Text style={{color:'#828282', fontSize:12, marginStart:10}}>13,7 M</Text>
            <View style={{flex:1}}></View>
            <SubscribeButton/>

          </TouchableOpacity>

        </View>
    
      </View>
      



      
       
      {/*<View style={{width:'100%', height:50, backgroundColor:'#3e3a3a', opacity:0.2}}></View>
      <Image source={{uri:'https://img.youtube.com/vi/OmmbQRSuNys/maxresdefault.jpg'}} 
      blurRadius={50}
       style={{width:'100%', height:50, opacity: 0.15}} ></Image>*\} 

      
  
  




      
      {/* <Image source={{uri:'https://img.youtube.com/vi/OmmbQRSuNys/maxresdefault.jpg'}} 
      blurRadius={50}
       style={{width:'100%', height:50, opacity: 0.2}} ></Image>
        */}

      
      <ScrollView style={{width:'99%', maxHeight: 32.5, marginLeft:10, flex:1, marginTop:27.5}} horizontal showsHorizontalScrollIndicator={false}>
        
        <LikeButton></LikeButton>
        <ActionButton icon='https://i.ibb.co/Hq49gXy/svgviewer-png-output-4.png' text={"Partager"}/>
        <ActionButton icon='https://i.ibb.co/4JGF5t9/svgviewer-png-output-7.png' text={"Télécharger"}/>
        <ActionButton icon='https://i.ibb.co/FKrrRnS/svgviewer-png-output-8.png' text={"Extrait"}/>
        <ActionButton icon='https://i.ibb.co/4J7qM1x/svgviewer-png-output-5.png' text={"Enregistrer"}/>
        
        <ActionButton icon='https://i.ibb.co/WtZkY4n/svgviewer-png-output-6.png' text={"Signaler"}/>
      </ScrollView>

      



      <CommentsButton/>
    
      <View style={{marginTop:15, backgroundColor:'#000000'}}>
        
        <VideoButton/>
        <VideoButton/>
        <VideoButton/>



        

      </View>

      
      

      
      


    </ScrollView>

    </View>
    
  );
}



