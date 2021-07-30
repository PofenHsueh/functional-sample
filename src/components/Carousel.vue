<template>
<div style="width:100%">
  <transition-group tag="div" class="container" :name="transitionName">
    <div class="page" v-for="(img,index) in imgs" :key="index" v-show ="index === show">
      <img :src="img.src" />
    </div>
  </transition-group>
  <button @click="show-=1"><i class="fas fa-long-arrow-alt-left"></i></button>
  <span>
    <button v-for="(num,index) in imgs.length" :key="index" @click="show-=num">{{num}}</button>
  </span>
  <button @click="show+=1"><i class="fas fa-long-arrow-alt-right"></i></button>
</div>
</template>
<script>
export default {
  props:{
    imgs:{
      type:Array
    }
  },
  data(){
    return{
      timer:'',
      interval:5000,
      transitionName:'left-in',
      show:0,
    }
  },
  watch:{
    show:{
      handler(newval,oldval){
       if(newval < 0){
         this.show = this.imgs.length - 1
       }else if(newval > this.imgs.length - 1){
         this.show = 0
       }else{
         if(oldval < 0) this.transitionName = "left-in"
         else if (oldval > 0) this.transitionName = "right-in"
         else this.transitionName = newval > oldval ? "right-in" : "left-in"
       }
      }
    }
  },
  methods:{
    nextShow(){
      this.show++
    }
  },
  mounted(){
    this.timer = setInterval(this.nextShow,this.interval)
  }
}
</script>
<style scoped>
.right-in-enter{
  left:100%
}
.right-in-enter-active , .right-in-leave-active{
  transition: left 1s;
}
.right-in-enter-to, .right-in-leave{
  left: 0%;
}
.right-in-leave-to{
  left: -100%;
}


.left-in-enter{
  left:-100%
}
.left-in-enter-active , .left-in-leave-active{
  transition: left 1s;
}
.left-in-enter-to, .left-in-leave{
  left: 0%;
}
.left-in-leave-to{
  left: 100%;
}

.container{
  position: relative;
  width: 100%;
  height: 400px;
  margin:0 auto;
  overflow: hidden;
}
.page{
  position: absolute;
  width: 100%;
  height: 400px;
}
.page > img{
  width: 100%;
  height:560px;
  object-fit: cover;
  object-position: center;
}
button {
  border: none;
  background: #fff;
  font-size: 14px;
}
button:hover{
  color: #F9BE44;
}

</style>