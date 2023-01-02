<template>

  <div class="home" :style="inlineStyle">
    <div class="container">
      <h1></h1>
      <h1 id = 'namehome'> I'm Fan Gao</h1>
    
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import favicon from '../assets/favicon.png'

export default {
  mounted:function() {
    var link = document.createElement('link');
    link.type = 'image/png';
    link.rel = 'icon';
    link.href = favicon;
    document.head.appendChild(link);
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
#namehome{
  color: #E5CFE5;
  font-family: "Tangerine";
  font-size: 10vw;
  text-align: center;
  overflow: hidden;
  padding-top: 20rem;
  text-size-adjust: auto;
  top: 40%;
  left: 40%;
}

</style>