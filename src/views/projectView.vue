<template>
  <div class="home" :style="inlineStyle" >
    <h1 class="project-title">Projects</h1>
    <carousel :items-to-show="1.5" >
      <slide v-for="(item, key) in slides" :key="key">
        <div class="carousel_item slide-container">
          <div class="centered">{{key}}</div>
          <img class="slide-image w-100 h-80" :src="item" :alt="key">
        </div>
        
      </slide>
      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </div>
 </template>



 <script>
 export default {
  data() {
    return {
      slides: {"NLP Project":require("@/assets/nlp.png"), 
               "RNN Project":require("@/assets/stock.png"),
      },  
      settings: {
        itemsToShow: 1,
        snapAlign: 'center',
        },
      // breakpoints are mobile first
      // any settings not specified will fallback to the carousel settings
      breakpoints: {
        // 700px and up
        700: {
          itemsToShow: 1,
          snapAlign: 'center',
        },
        // 1024 and up
        1024: {
          itemsToShow: 1,
          snapAlign: 'start',
        }
      }
    }
  },
  computed: {
    bgImage () {
      return require('@/assets/background.png')
    },
    inlineStyle () {
      return {
        backgroundImage: `url(${this.bgImage})`,
        backgroundSize: "cover",
        width: "100%",
        height: "100%"
      }
  }
}
 }
 </script>

<style>
  .slide-container{
    padding: 0vw 5vw;
  }
  .slide-image{
    height: 25vw;

  }
  
  /* Container holding the image and the text */
.container {
  position: relative;
  text-align: center;
  color: white;
}

/* Bottom left text */
.bottom-left {
  position: absolute;
  bottom: 8px;
  left: 16px;
}

/* Top left text */
.top-left {
  position: absolute;
  top: 8px;
  left: 16px;
}

/* Top right text */
.top-right {
  position: absolute;
  top: 8px;
  right: 16px;
}

/* Bottom right text */
.bottom-right {
  position: absolute;
  bottom: 8px;
  right: 16px;
}

/* Centered text */
.centered {
  position: absolute;
  color: plum;
  font-size: 4vw;
  top: 70%;
  left: 55%;
  transform: translate(-70%, -50%);
}
.project-title{
  font-family: "Tangerine";
  font-size: 8vw;
  text-align: center;
  padding-top: 4vw;
  padding-bottom: 2vw;
}
</style>