<template>
  <div>
    <todo-comp/>
    <router-link to="/logout" 
    class=" text-white font-semibold hover:bg-slate-600 hover:text-white 
    px-4  py-2 rounded bg-black custom-class">Logout</router-link>
  </div>
</template>

<script>
import todoComp from '../components/todoComp.vue'
export default {
  components: { todoComp },
    name : "todoPage" 
}
</script>

<style>

</style>