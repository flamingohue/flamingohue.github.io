<template>
    <div class="pagenofound" :style="inlineStyle">
      <h1>404 Not Found</h1>
      <p>This is an 404 page used to illustrate mapping a view to a router with Vue Router.</p>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
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