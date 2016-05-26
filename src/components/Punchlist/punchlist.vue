<script>
var localStore = function (key){
    this.KEY = key;
}

localStore.prototype.fetch = function (){
    return JSON.parse(localStorage.getItem(this.KEY)) || [];
}

localStore.prototype.save = function (todos){
    localStorage.setItem(this.KEY, JSON.stringify(todos));
}

var store = new localStore('punchlist');




    module.exports = {
        data: () => {
            return {
                punchlist: store.fetch(),
                // [
                    // { description: 'Build list', complete: false, editing: false },
                    // { description: 'Test list', complete: false, editing: false },
                // ],
                newTask: '',
                editCache: ''
            }
        },
        watch: {
            punchlist:{
                handler: function (punchlist){
                    store.save(punchlist);
                },
                deep: true
            }
        },
        methods: {
            toggleComplete: function (task){
                task.complete = !task.complete;
            },
            startEditing: function (task){
                task.editing = true;
            },
            endEditing: function (task){
                task.editing = false;
                // task.description = task.description.trim();
                if(task.description === ''){
                    this.punchlist.$remove(task);
                }
            },
            addTask: function (){
                if(this.newTask !== ''){
                    this.punchlist.push({description: this.newTask, complete: false, editing: false});
                }
                this.newTask = '';
            }
        }
    }    
</script>
<template>
    <ul class="list-group">
        <li v-show="punchlist.length !== 0" v-for="task in punchlist" class="task list-group-item" :class="{'complete': task.complete}">
            <span @click="toggleComplete(task)" v-show="!task.editing">{{ task.description }}</span>
            <button class="btn btn-primary pull-right" @click="startEditing(task)" v-show="!task.editing">edit</button>
            <input type="text" v-model="task.description" v-show="task.editing" class="form-control">
            <button class="btn btn-success pull-right" @click="endEditing(task)" @keyup.enter="endEditing(task)" v-show="task.editing">done</button>
        </li>
        <li class="list-group-item newTask">
            <input type="text" v-on:keyup.13="addTask(newTask)" class="form-control" v-model="newTask" placeholder="Add task...">
        </li>
    </ul> 
</template>

<style>
    body{
        font-family: arial, helvetica, sans-serif;
    }
    .complete{
        text-decoration: line-through;
        color:gray!important;
        font-weight: normal!important;
        font-style: italic;
    }
    .task{
        font-size: 20pt;
        padding:5px;
        min-height: 60px;
        font-weight: bold;
        /*width: 400px;*/
        word-wrap: break-word;
        border: none;

    }
    .newTask{
        border: none;

        /*width: 400px;*/
    }
    .task:hover{
        color:red;
    }
    .task button{
        display: none;
        margin-left: 5px;
        height:50px;
        font-size: 15pt;
    }
    .task:hover button{
        display:inline-block;
    }
    .task input{
        font-size: 20pt;
        height:50px;
        /*width: 300px!important;*/
        width: 70%!important;
        display:inline-block;
    }
</style>