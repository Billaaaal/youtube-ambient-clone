import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, ImageBackground, TouchableOpacity, Dimensions, Touchable } from 'react-native';
import { LikeButton } from './components/likebutton';
import { ActionButton } from './components/actionbutton';
import {LinearGradient} from 'expo-linear-gradient';
import { SubscribeButton } from './components/subscribebutton';
import YoutubePlayer from "react-native-youtube-iframe-blur";
import { useCallback, useState, useRef, useEffect } from 'react';
import { CommentsButton } from './components/commentsbutton';
import {VideoButton} from './components/videobutton';
import Dialog from "react-native-dialog";
import Slider from '@react-native-community/slider';
import {getYoutubeMeta} from 'react-native-youtube-iframe-blur';
import React from 'react';





export default function App() {

  const playerRef = useRef();

  const [playing, setPlaying] = useState(false);
  

  const jsToInject = `const addCSS = css => document.head.appendChild(document.createElement("style")).innerHTML=css;  addCSS("body{ filter: blur(50px); }")`
  
  const width = Dimensions.get('window').width;

  const pauseIconURL = "https://i.ibb.co/jJXmSS0/svgviewer-png-output-11.png"
  const playURL = "https://i.ibb.co/rsfDT9f/svgviewer-output-3.png3kRyQsFRj3E"

  const [YoutubeID, setYoutubeID] = useState("4vQ8If7f374");
  const [dialogVisible, setDialogVisible] = useState(false);
  const [commandsVisible, setCommandsVisible] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [playerIcon, setPlayerIcon] = useState(playURL);
  const [videoTitle, setVideoTitle] = useState("");
  const [channelName, setChannelName] = useState("");
  const [duration, setDuration] = useState(0);
  //const [currentTime, setCurrentTime] = useState(0);
  const [thumbPosition, setThumbPosition] = useState(0);
  const [current_time_text, setCurrent_time_text] = useState(0);

  function formatTime(seconds) {
    var minutes = Math.floor(seconds / 60);
    var remainingSeconds = seconds % 60;
    return padZero(minutes) + ":" + padZero(remainingSeconds);
  }
  
  function padZero(number) {
    return (number < 10 ? "0" : "") + number;
  }



  var YoutubeIDB = "";

  
  function playOrPause(){
    if(isPressed==true){

      if(playing==true){
        setPlaying(false)
        setPlayerIcon(playURL)
      }else{
        setPlaying(true)
        setPlayerIcon(pauseIconURL)
      }

    }
    
  }

  {/**/ }

  function handlePress(){
    if(isPressed==true){
      setIsPressed(false)
    }
    else{
      setIsPressed(true)
    }
  }


  
  getYoutubeMeta(YoutubeID).then(meta => {
    setVideoTitle(meta.title);
    setChannelName(meta.author_name);
    
  }).catch(err => {

  });

  


  playerRef.current?.getDuration().then(
    duration_ => setDuration(duration_)
  );

  useEffect(() => {
    const interval = setInterval(async () => {
      const elapsed_sec = await playerRef.current.getCurrentTime(); // this is a promise. dont forget to await
      const duration_sec = await playerRef.current.getDuration(); // this is a promise. dont forget to await

      // calculations
      const elapsed_ms = Math.floor(elapsed_sec * 1000);
      const ms = elapsed_ms % 1000;
      const min = Math.floor(elapsed_ms / 60000);
      const seconds = Math.floor((elapsed_ms - min * 60000) / 1000);

      setCurrent_time_text(
        min.toString().padStart(2, '0') +
          ':' +
          seconds.toString().padStart(2, '0')
      );

      //setThumbPosition((elapsed_sec.toFixed(0)/duration.toFixed(0)))
      setThumbPosition(elapsed_sec.toFixed(1)/duration_sec.toFixed(1))
      

      ;
    }, 500); // 100 ms refresh. increase it if you don't require millisecond precision

    return () => {
      clearInterval(interval);
    };
  }, []);

  
  


  

  
 
  


  //seekTO

  //playerRef.current?.seekTo(0);


  



  

  



  return (
    <View style={{flex: 1, backgroundColor: 'black', flexDirection: 'column', marginTop:0}}>
      <Dialog.Container visible={dialogVisible}>

        <Dialog.Title>Youtube Video</Dialog.Title>
        <Dialog.Description>Enter a video ID to play</Dialog.Description>

        <Dialog.Input placeholder="Video ID" 
        onChangeText={(value) => YoutubeIDB = value}
        autoCapitalize={'none'}
        autoFocus={true}/>
        <Dialog.Button label="OK" onPress={()=> {setYoutubeID(YoutubeIDB.replace('https://youtu.be/','')); setDialogVisible(false);}} />

      </Dialog.Container>

      <View style={{marginTop:0}}> 
        <YoutubePlayer
            ref={playerRef}
            height={width*(9/16)}
            play={playing}
            videoId={YoutubeID}
            initialPlayerParams={{ controls: false }}
            JsToInject={''}
          />

<Text style={{color:'#ffff', fontSize:12, position:'absolute', marginTop:width*(9/16)-30, marginLeft:15, zIndex:10, opacity: isPressed ? 1:0}}>{current_time_text}</Text>


          <View style={{width:'100%', height:2, backgroundColor:'#474747', marginTop:width*(9/16)-2, position:'absolute', opacity:0.6}}>
            
          </View>
          <View style={{width:`${thumbPosition*100}%`, height:2, backgroundColor:'#ffffff', marginTop:width*(9/16)-2, position:'absolute', opacity: isPressed ? 0:1}}></View>


          <TouchableOpacity delayPressIn={4000} delayPressOut={4000} onPressOut={()=>{setIsPressed(false)}} onPressIn={()=>{setIsPressed(true)}} onPress={()=>{handlePress()}} activeOpacity={1} style={{top: 0, height: width*(9/16),width: '100%',position: 'absolute', backgroundColor: isPressed ? '#00000075':'#00000009'}}>
              <View style={{width:'100%', height:'100%', flex: 1, flexDirection: 'column', justifyContent:'center', alignItems:'center'}}>
                <TouchableOpacity
                activeOpacity={0.4} //The opacity of the button when it is pressed
                style = {{width:50, height:50, backgroundColor:'black', borderRadius:100, opacity:isPressed ? 0.6:0, justifyContent:'center', alignItems:'center'}}
                onPress = {()=>playOrPause()}>

                  <Image source={{uri:playerIcon}} style={{height:playing?'50%':'40%', width:playing?'50%':'40%', marginLeft:playing? 0:0}}/>

              
                </TouchableOpacity>

                
                

                

              </View>

              
              
          </TouchableOpacity>
          
        
          {/*marginTop:37.9*/}
          {/*<Image source={{uri:'https://img.youtube.com/vi/OmmbQRSuNys/maxresdefault.jpg'}}  style={{aspectRatio: 16/9, width:'100%'}} ></Image>*/}
          <View>
            
          </View>
          <View style={{ width: '100%', height: 100, zIndex: -1, marginTop:100, position:'absolute' }}>
            <YoutubePlayer
                mute={true}
                height={width*(9/16)}
                play={playing}
                videoId={YoutubeID}
                initialPlayerParams={{ controls: false }}
                JsToInject={jsToInject}
              />


          </View>
          <LinearGradient colors={['rgba(0, 0, 0, 0.5)', '#000000']} style={{ height: 100, width: '100%', position:'absolute', marginTop:width*(9/16) }} />

            
              
      </View>

      <View style={{backgroundColor:'red', width: 6, height:2, position:'absolute', opacity: isPressed ? 1:0, marginTop:width*(9/16)-2, zIndex:2}}></View>

      <Slider
                style={{width: width+20, height:10, position:'absolute', opacity: isPressed ? 1:0,marginLeft:-10, marginTop:width*(9/16)-6, zIndex:3}}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor="red"
                maximumTrackTintColor="rgba(0, 0, 0, 0.0)"
                thumbTintColor="red"
                value={(duration==0) ? 0.1 : thumbPosition}
                onSlidingStart={()=>{console.log()}} //do not take its value but rather the onValueChange value
                onSlidingComplete={(value)=>{playerRef.current?.seekTo(value*duration)}}
                onValueChange={(value)=>{setCurrent_time_text(formatTime(value.toFixed(1)*duration.toFixed(1)))}}
                step={(duration==0) ? 0.1 : 0.01} //should be the number of seconds of the video (1/seconds)
              />
      
      
      
      <ScrollView style={{flex: 1, flexDirection: 'column', marginTop:0}}>


      

      

      <View style={{ flex: 1, width:'100%', height:116}}>

        

        <View style={{ position: 'absolute', width:'95%', height:'100%', flex:1, flexDirection:'column', alignContent:'center', alignSelf:'center'}}>
          <TouchableOpacity onPress={()=>{setDialogVisible(true)}}>
            <Text numberOfLines={2} style={{color:'white', fontSize:18, alignSelf:'flex-start', marginTop:10, fontWeight: 'bold', lineHeight:25, width:'95%' }}>{videoTitle}</Text>
            <Text style={{color:'#828282', fontSize:12, alignSelf:'flex-start', marginTop:4}}>3 M de vues  il y a 6 j</Text>

          </TouchableOpacity>
          

          <TouchableOpacity onPress={()=>{alert("Updated !");}} activeOpacity={0.7} style={{ width:'100%', height:35, marginTop:15, flexDirection:'row', alignItems:'center'}}>
            <Image style={{height:35, width:35, borderRadius:50}}source={{uri:'https://yt3.googleusercontent.com/Ikb1C4ih2VMvfjma8OO5b39JnHL2CQcQgksB_I7TM-gGA3ERTY589OeLKCYyRQQO0nkE54-f=s900-c-k-c0x00ffffff-no-rj'}}></Image>
            <Text style={{color:'white', fontSize:15, marginStart:15, fontWeight: 'bold' }}>{channelName}</Text>
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



