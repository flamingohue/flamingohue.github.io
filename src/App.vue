<template>
  <div class="app">
    <!-- Sidebar -->
    <Sidebar />
    
    <title>Responsive Side Nav</title>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css2?family=Material+Icons" rel="stylesheet">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Tangerine">
    <div style="overflow-y:scroll; height:100vh; width: 100%;"><router-view/></div>  
    
  </div>
  
</template>
    

<script setup>
import Sidebar from './components/sidebarView.vue'

</script>


<style lang="scss">
  :root {
    --primary: #4ade80;
    --primary-alt: #22c55e;
    --grey: #64748b;
    --dark: #1e293b;
    --dark-alt: #334155;
    --light: #f1f5f9;
    --sidebar-width: 300px;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Fira sans', sans-serif;
  }
  body {
    background: var(--light);
  }
  button {
    cursor: pointer;
    appearance: none;
    border: none;
    outline: none;
    background: none;
  }
  .app {
    display: flex;
    main {
      flex: 1 1 0;
      padding: 2rem;
      @media (max-width: 1400vw) {
        padding-left: 6rem;
      }
    }
  }
  .home{
    flex: 1 0 0%;
    text-size-adjust: auto;
  }
  .pagenofound{
    flex: 1 0 0%;
    text-size-adjust: auto;
  }
  .about{
    flex: 1 0 0%;
    text-size-adjust: auto;
  }
  .projectPage{
    flex: 1 0 0%;
    text-size-adjust: auto;
  }
  .experience{
    flex: 1 0 0%;
    text-size-adjust: auto;
  }
  .contactView{
    flex: 1 0 0%;
    text-size-adjust: auto;
  }
  .carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: pink;
  color: black;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
  background-color: pink;
  color: black;
}
  </style>