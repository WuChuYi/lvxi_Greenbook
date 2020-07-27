<template>
    <div class="container">
        <div v-for="(item,index) in tabList" :key="index"  @click="navigateTo(item.url)" :style="item.color" class="square">
            <div class="number">{{index+1}}</div>
            <div class="name">{{item.name}}</div>
        </div>
    </div>
</template>
<script>
export default {
    name:"home",
    data(){
        return{
            tabList: [
                {
                    name:"绿惜介绍",
                    url:"",
                    color:"background-color: #96ca00;"    
                },
                {
                    name:"行业资讯",
                    url:"",
                    color:"background-color: #c5df56;"  
                },
                {
                    name:"绿惜模版",
                    url:"",
                    color:"background-color: #f2f7f3;"  
                },
                {
                    name:"资源",
                    url:"",
                    color:"background-color: #b3c8cd;"  
                },
                {
                    name:"影视资料",
                    url:"",
                    color:"background-color: #8ab186;"  
                },
                {
                    name:"其他",
                    url:"",
                    color:"background-color: #86e3ce;"  
                }
            ],
        }
    },
    methods:{
        navigateTo(url){
            //1、获取七牛云私有空间token

            //2、查看对应资源

        }
    }
}
</script>
<style scoped>
.container{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}
.square{
    width: calc(95vw/3);
    height: calc(95vw/3);
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
}
.name{
    font-size: 5vw;
    font-weight: 600;
}
.number{
    font-size: 10vw;
    font-weight: 600;
    font-style: oblique;
    margin-right: 10px;
}
</style>