<script>
export default {
    name: 'AppHeader'
}
</script>
<template>
    <div class="header">
        <div class="">

            <div class="logo">Mohammed</div>
    
            <ul class="text-right" >
                <router-Link to="/" tag="li" exact>
                    <a>Home</a>
                </router-Link>
                <router-Link to="/blog" tag="li" >
                    <a>Blog</a>
                </router-Link>
                <routerLink to="/about" tag="li">
                    <a>About</a>
                </routerLink>
                <routerLink to="/help" tag="li" >
                    <a >Help</a>
                </routerLink>
                <routerLink to="/table" tag="li" >
                    <a >Table</a>
                </routerLink>
            </ul>
        </div>
    </div>

</template>

<style lang="scss" scoped>
.header {
    background-color: #333;
    color: #fff;
    overflow: hidden;
    padding:12px;
    width: calc(100% );  

    .logo{
        font-size: 24px;
        // padding: 20px;
        float:left;
        width: 200px;
    }
    ul{
        float:left;
        width: calc(100% - 200px);  
        font-size: 18px;
        li{
            display: inline-block;
        }
        a{
            padding:20px;
            text-decoration: none;
            color:#fff !important;
        }
    }

}
</style>