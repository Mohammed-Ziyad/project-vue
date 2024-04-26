<template>
  <div class="text-center"> 
    <h1>{{ pageName.toUpperCase()  }}</h1>
    <p v-font="'60'">{{ pageDescription }}</p>
    
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
<script setup>
 const vFont={
        mounted:(el , binding)=>{
            el.style.fontSize= binding.value +'px';
        }
    }
</script>
