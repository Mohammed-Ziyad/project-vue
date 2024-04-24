
<template>
    <div class="our-blog">
        <div v-highlight="'yellow'" arg="red">Hover me!</div>

        <h1>{{ pageName }}</h1>
    <p>{{ pageDescription }}</p>

    <div class="container">
        <div class="row">
            <div class="col-md-8">
                <div class="post-area">
                <BlogPosts 
                v-for="post in posts " 
                :key="post.id"
                :views="post.views"
                :title="post.title"
                :date="post.date"
                :content="post.content"
                :auther="post.auther"
                :category="post.category"
                
                />
                
                </div>
            </div>
            <div class="col-md-4">
                <div class="sidebar">
                    <BlogSidebar />
                </div>
            </div>
        </div>
    </div>
    </div>
    
</template>

<script setup>
import BlogPosts  from '@/components/Blog/BlogPosts.vue';
import BlogSidebar from '../components/Blog/BlogSidebar.vue';
import JsonPosts from '../json/blog_post.json'
 
// app.directive('highlight', {
//     bind(el, binding) {
//       el.style.backgroundColor = binding.value;
//       el.addEventListener('mouseenter', function() {
//         this.style.backgroundColor = binding.arg;
//       });
//       el.addEventListener('mouseleave', function() {
//         this.style.backgroundColor = binding.value;
//       });
//     }
//   });
  const vHighlight={
    mounted:(el , binding) => {
        el.style.backgroundColor = binding.value;
      el.addEventListener('mouseenter', function() {
        this.style.backgroundColor = binding.arg;
      });
      el.addEventListener('mouseleave', function() {
        this.style.backgroundColor = binding.value;
      });
    }
  }
</script>
<script>
  export default {
        data: function()
      {
          return {
            pageName:'Blog' ,
            pageDescription:'This is Blog page',
            posts:JsonPosts
        }
    },
    // name :'blogComponent',
    compnents:{
        BlogPosts,
        BlogSidebar
        
    }
    }
    
</script>

