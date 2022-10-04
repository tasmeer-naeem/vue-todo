<template>
  <div class=" divide divide-y gap-4 p-8">
    <div class="grid lg:flex md:flex sm:grid  text-center justify-center divide-x gap-4 py-2">
   <form @submit.prevent="handleSubmit()" class="">
    <input type="text" placeholder="type here" v-model="typetext" 
    class="p-4  focus:bg-slate-200 focus:outline-none"/>
    <button  type="submit" 
    class=" text-black font-semibold hover:bg-green-800  hover:text-white px-12  py-4 sm:px-4 rounded bg-green-400 custom-class">Add</button>
   </form>
   <button  type="submit" @click="handleUpdate" 
   class=" text-black font-semibold hover:bg-gray-800  hover:text-white px-4  py-1 rounded bg-gray-400 custom-class">Update</button>
  </div>
  <div class="grid  text-center justify-center divide-x gap-4 py-2 lg:flex md:flex sm:grid" >
   <input type="search" v-model="searchdata" placeholder="search" 
   class="p-4  focus:bg-slate-200 focus:outline-none"/>
   <button  type="submit" @click="handleSearch"
   class=" text-black font-semibold hover:bg-yellow-700  hover:text-white px-4  py-2 rounded bg-yellow-300 custom-class">Search</button>
   <button  type="submit" @click="handleSort" 
   class=" text-black font-semibold hover:bg-yellow-700  hover:text-white px-4  py-2 rounded bg-yellow-300 custom-class">Sort</button>
  </div>
  <div class=" h-60 overflow-auto">
   <div v-for="(item,index)  in searchFunc" :key="index" class="my-1">
       {{index}} - {{item}} 
       <button @click="handleEdit(index)"
       class=" text-black font-semibold hover:bg-blue-800  hover:text-white px-4  py-2 rounded bg-blue-300 mx-1 custom-class">Edit</button>
       <button @click="handleDelete(index)"
       class=" text-black font-semibold hover:bg-red-800  hover:text-white px-4  py-2 rounded bg-red-300 mx-1 custom-class">Delete</button>
   </div>
  </div>
  </div>
</template>

<script>
export default {
        name: 'todoComp',
        data(){
          return{
            typetext:'',
            textArray : [],
            itemIndex : '',
            editText : '',
            id : 0,
            searchdata:''
          }
        },
        methods:{
          handleSubmit(){
           // console.log(this.typetext)
            if(this.typetext.length == 0){
              return null
            }
          //  this.textArray.push({idObj:new Date().getTime().toString() , nameObj:this.typetext})
          this.textArray.push(this.typetext)
          console.log(this.id += 1)
            this.typetext = ''
          },
          handleDelete(index){
            this.textArray.splice(index,1)
          },
          handleEdit(index){
           // console.log(index)
            this.typetext = this.textArray[index]
            this.itemIndex = index
            console.log(this.typetext,this.itemIndex)
          },
          handleUpdate(){
           this.textArray[this.itemIndex]=this.typetext
           
          },
          // handleSearch(){
          //    return this.textArray.filter(item=>{
          //       return item.toLowerCase().includes(this.searchdata.toLowerCase())
          //     })
          //    // console.log('hello')
          // },
          handleSort(){
            let a = this.textArray.sort()
            return a ,
            console.log(a)
          }
        },
        computed:{
          searchFunc(){
            // return this.textArray.filter((item)=>{
            //   return item.toLowerCase().includes(this.searchdata.toLowerCase())
            // })
             return this.textArray.filter(item=>{
               return item.toLowerCase().match(this.searchdata.toLowerCase())
            }) 
          },
          // sortFunc(){
          //   return this.textArray.sort()
          // }
        }
}
</script>

<style>
.custom-class{
  @apply font-serif hover:shadow-lg hover:shadow-gray-900 shadow-xl shadow-gray-300 
}
</style>