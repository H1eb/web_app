<template>
<div>
    <div class="header">
        <div class="container header__container">
            <div class="logo">Список задач</div>
            <div class="wrapper">
            <task-form @create="addTask"/>
            </div>
        </div>
        </div>
        <div class="container">
        <div class="wrapper">
            <task-list 
                :tasks="needToDoList" 
                :toDoFlag=false
                @remove="removeToDoTask" 
                @check='changeStatusToComplete'
                title="Нужно сделать"/>
            <task-list
                :tasks="completeToDoList" 
                :toDoFlag=true
                @remove="removeCompleteTask" 
                @check='changeStatusToNeed' 
                title="Уже сделаны"/>

            <p><b>Всего:</b> назначено {{ needToDoList.length }}, сделано {{ completeToDoList.length }}, удалено {{ countDelete }}</p>
        </div>
        </div>
    </div>
</template>
  
<script>
    import TaskForm from '@/components/TaskForm.vue';
    import TaskList from '@/components/TaskList.vue';
    export default {
        components:{
        TaskForm,
        TaskList
    },
    data() {
      return {
        placeholderString: "Введите название заметки",
        taskInput: "",
        needToDoList: [],
        completeToDoList: [],
        countNeedToDo: 0,
        countComplete: 0,
        countDelete: 0,
        nextToDoId: 0,
        taskUpd: "",
        editedElementId: null
      };
    },
    methods: {
        addTask(task) {
            console.log(task)
            this.needToDoList.push(task)   
        },
        removeToDoTask(idx) {
            this.needToDoList.splice(idx,1);
            this.countDelete++;
        },
        removeCompleteTask(idx) {
            this.completeToDoList.splice(idx,1);
            this.countDelete++;
        },
        changeStatusToComplete(idx) {
            const complete_task = this.needToDoList.splice(idx , 1);
            complete_task.dt = String(new Date().toLocaleString());
            console.log(complete_task);
            this.completeToDoList.push(complete_task);
        },
        changeStatusToNeed(idx) {
            const task = this.completeToDoList.splice(idx, 1);
            console.log(task[0][0]);
            this.needToDoList.push(task[0][0]);
        },
        clickUpdate(task) {
            this.editedElementId = task.id;
            this.taskUpd = task.title;
        },
        clickReady() {
            this.needToDoList.forEach(task => {
            if (task.id === this.editedElementId) {
                task.title = this.taskUpd;
                this.editedElementId = null;
                this.taskUpd = "";
            }
            });
        },
        getCurrentTime() {
            const current = new Date();
            const date = ('0'+current.getDate()).slice(-2)+'.'+('0'+(current.getMonth()+1)).slice(-2)+'.'+current.getFullYear();
            const time = ('0'+current.getHours()).slice(-2) + ":" + ('0'+current.getMinutes()).slice(-2) + ":" + ('0'+current.getSeconds()).slice(-2
            );
            const dateTime = '('+date +', '+ time+')';
            return dateTime;
        }
    }
    }
  
</script>

<style>

</style>
