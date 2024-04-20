<template>
    <div class="">
      
<h2>Add a border to a table:</h2>

<table>
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
  </tr>
  <tr>
    <td>Peter</td>
    <td>Griffin</td>
  </tr>
  <tr>
    <td>Lois</td>
    <td>Griffin</td>
  </tr>
</table>
  <WelcomeMessage/>
    </div>
  </template>
  <style>
  table, th, td {
  border: 1px solid;
}
  </style>
<script setup>

import WelcomeMessage from '@/components/myApp.vue'
</script>
