<script >


import AppHeader from './components/global/AppHeader.vue' 

     export default {
        name:'App',
        components:{AppHeader}
     }
   
</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <div class="">
      <HelloWorld msg="You did it!" />

      <nav>
          <AppHeader/>
      </nav>
      
    </div>
  </header>
  <div class="container">

      <RouterView />
  </div>


</template>

<style >

.container{
  padding: 90px;
}
</style>