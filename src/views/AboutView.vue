<template>
  <div class="">
    <h1>{{ pageName }}</h1>
    <p>{{ pageDescription }}</p>
    
  </div>
</template>

<style>

</style>

<script >
    export default {
        data: function()
      {
          return {
            pageName:'About Us' ,
            pageDescription:'This is About Us page'
        }
    }
    }
</script>
