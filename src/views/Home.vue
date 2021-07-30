<template>
  <div style="display:flex;justify-content:center;flex-direction:column">
    <Carousel :imgs="imgs"></Carousel>
    <div>
      <calender @handlerDate="test" :handlerEvent="testforDate"></calender>
    </div>
  </div>
</template>

<script>
import calender from '@/components/Calender.vue'
import Carousel from '@/components/Carousel.vue'
export default {
  components: {
    calender,
    Carousel
  },
  data(){
    return{
    event:[{name: '休假', start: '2021-07-26'},{name: '25 Birthday', start: '2021-07-27'},{name: '發薪日', start: '2021-08-05'}], 
    imgs:[
        { src:require("@/assets/images/a1.jpg") },
        { src:require("@/assets/images/a2.jpg") },
        { src:require("@/assets/images/a3.jpg") },
      ] 
    }
  },
  methods:{
     testforDate(val){     
      for(let a of this.event){
        if(a.start.split('-')[0]==val.year&&a.start.split('-')[1]==val.month+1&&a.start.split('-')[2]==val.date){
          return a.name
        }
       
      }
    },
    test(val){
      console.log(val,'haha')
    }
  }
}
</script>
