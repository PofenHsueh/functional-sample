<template>
  <div>tree view
      <MenuList :item="list"></MenuList>
  </div>
</template>
<script>
import MenuList from "../components/MenuList.vue"
export default {
  components:{
    MenuList
  },
  data(){
    return{
      list:{
        label:"24小時標籤（2065）",
        children:[
          {
            label:"電玩遊戲",
            children:[
              {
                label:"switch"
              },
              {
                label:"ps4"
              }
            ]
          },
          {
            label:"積木桌遊",
            children:[
              {
                label:"撲克牌"
              },
              {
                label:"德國HABA桌遊"
              }
            ]
          }
        ]
      }
    }
  }
}
</script>
<style scoped>

</style>