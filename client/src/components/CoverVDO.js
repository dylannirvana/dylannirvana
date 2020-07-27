import React, { Component } from 'react';
// import dizzy from '../videos/dizzy.mp4'
// import badtv from '../videos/badtv.mp4'
// import bricks from '../videos/bricks.mp4'
// import inkbleed from '../videos/inkbleed.mp4'
// import jazzsmoke from '../videos/jazzsmoke.mp4'
// import pollution from '../videos/pollution.mp4'
// import lines from '../videos/lines.mp4'
// import smoke from '../videos/smoke.mp4'
// import verticalDistortion from '../videos/verticalDistortion.mp4'
import pseudo from '../videos/pseudo_1.mp4'


class CoverVDO extends Component {
  
  // ===== Script to select vdo
  componentDidMount() {
    // // videos
    // const videos = [dizzy, badtv, bricks, inkbleed, jazzsmoke, pollution, lines, smoke, verticalDistortion]
    
    // // SELECT BY DATE
    // const today = Date.now();
    // const todaysDate = new Date(today);
    // const dayOfTheMonth = todaysDate.getDate();
    // console.log("this is dayOfTheMonth " + dayOfTheMonth);

    // let selectedVideoIndex = 0    
    // // keeps selectedVideoIndex under 10
    // dayOfTheMonth > videos.length ? selectedVideoIndex = Math.floor(dayOfTheMonth / 3) : selectedVideoIndex = dayOfTheMonth;
    // console.log("this is todays video index " + selectedVideoIndex)

    // // assigns video
    // const todaysVideo = videos[selectedVideoIndex]
    // console.log("todays video is " + todaysVideo)
    // // END select by date


    // // SELECT RANDOMLY
    // let randomNumUnderSix = 0
    // const randomNum = Math.floor(Math.random() * 10 )
    // randomNum > 5 ?  randomNumUnderSix = randomNum - 4 : randomNumUnderSix = randomNum;
    // console.log("This is random num " + randomNum)
    // console.log("This is a random num under six is " + randomNumUnderSix)

    // // assigns video
    // const todaysVideo = videos[randomNumUnderSix]
    // console.log("todays video is " +  todaysVideo)
  }


    render() {
      // const todaysVideo = dizzy
      // console.log(todaysVideo)

      // // VIDEOS
      // const videos = [dizzy, badtv, bricks, inkbleed, jazzsmoke, pollution, lines, smoke, verticalDistortion]
      
      // // SELECT BY DATE
      // const today = Date.now();
      // const todaysDate = new Date(today);
      // const dayOfTheMonth = todaysDate.getDate();
      // console.log("this is dayOfTheMonth " + dayOfTheMonth);

      // let selectedVideoIndex = 0    
      // // keeps selectedVideoIndex under 10
      // dayOfTheMonth > videos.length ? selectedVideoIndex = Math.floor(dayOfTheMonth / 3) : selectedVideoIndex = dayOfTheMonth;
      // console.log("this is todays video index " + selectedVideoIndex)

      // // assigns video
      // const todaysVideo = videos[selectedVideoIndex]
      // console.log("todays video is " + todaysVideo)
      // // END select by date

      // // SELECT RANDOMLY
      // let randomNumUnderSix = 0
      // const randomNum = Math.floor(Math.random() * 10 )
      // randomNum > 8 ?  randomNumUnderSix = randomNum - 2 : randomNumUnderSix = randomNum;
      // console.log("This is random num " + randomNum)
      // console.log("This is a random num under nine is " + randomNumUnderSix)

      // // assigns video
      // const todaysVideo = videos[randomNumUnderSix]
      
      // const todaysVideo = "https://youtu.be/t46bHNULH6M"
  
        return (
            <header className="App-header">
              <video src={pseudo} playsInLine autoPlay muted loop style={{
                type: 'video/mp4',
                objectFit: 'cover',
                overflow: 'hidden',
                width: '100vw',
                height: '100vh',
                }} />
  
          </header>
        )
    }
}

export default CoverVDO;