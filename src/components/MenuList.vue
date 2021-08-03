<template>
<ul>
  <li>
    <span v-if="hasChildren" @click="toggleOpen">{{opened ? "-" : "+" }}</span>
    <a @click="toggleOpen(item.label)">{{item.label}}</a>
    <ul v-show="hasChildren && opened">
       <MenuList v-for="(child,idx) in item.children" :key="idx" :item="child"/>
    </ul>
  </li>
</ul>
</template>
<script>
export default {
  name:"MenuList",
  props:{
    item:{
      type:Object,
      require:true
    }
  },
  data(){
    return{
      opened:false
    }
  },
  computed:{
    hasChildren(){
      return this.item.children && this.item.children.length ? true : false ;
    }
  },
  methods:{
    toggleOpen(label){
      if(this.hasChildren){
        this.opened =!this.opened
        console.log(label)
      }
    }
  }
}
</script>
<style scoped>
ul{
  list-style: none;
  text-align: left;
  padding-left: 20px;
  color:lightslategray;
}
</style>