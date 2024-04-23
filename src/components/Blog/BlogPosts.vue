<template>
    <div class="post-box">
        <span class="post-views">10</span>
       <h3 class="post-title">Blog Post Title</h3>
       <span class="post-date">2024-1-2</span>
       <p class="post-content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo exercitationem perferendis excepturi nobis inventore eos sint magni incidunt fugiat, ut, illum voluptatibus commodi veritatis facilis sunt. Ullam voluptas modi quam!</p>
       <div class="row">
        <div class="col-sm-6">
            <span class="post-author">Post author</span>
        </div>
        <div class="col-sm-6 text-right">
            <span class="post-category"> Category Name </span>
        </div>
       </div>
    </div>
</template>
<script>
export default {
    name:'postBlog'
}
</script>


<style lang="scss" scoped>
.post-box {
padding: 15px;
background-color:#fff;
box-shadow: 0 0 10px #ddd;
position: relative;
text-align: left;

.post-views {
position: absolute;
top: 5px;
right: 5px;
background-color: #4CAF50;
border-radius: 4px;
padding: 1px 5px;
color: #fff;
text-align: center;
font-weight: bold;

} ;
.post-date {
display: block;
padding: 0 0 5px;
color:#888;
font-size: 14px;
}
.post-content {
line-height: 1.8;
color:#666;
};

.post-author {
background-color:#607D8B;
padding: 6px 10px;
border-radius: 4px;
color: #FFF;
};
.post-category { 
background-color: #E91E63;
padding: 6px 10px;
border-radius: 4px;
color: #FFF;

}
.text-right{
    text-align: right;
}

}

</style>