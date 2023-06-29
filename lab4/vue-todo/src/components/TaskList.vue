<template>
    <div class="wrapper__list">
        <h2>
            <span>{{ title }}</span>
            <span class="task-num">{{ tasks.length }}</span>
        </h2>
        <div v-if = "tasks.length == 0">Задач нет</div>
        
        <ul class="task-list" :class="{complete_list: toDoFlag}" v-else>
            <div v-if="tasks.length > 10 && toDoFlag == false">Хватит ставить задачи, работай!</div>
            <div v-for="(task, idx) in tasks" :key="task.id">
                <task-item
                    :toDoFlag="toDoFlag"
                    :editedTask="editedTask"
                    :index="idx"
                    :task="task"
                    @remove="remove" 
                    @check="check"/>
            </div>
            <!-- <li v-for="(task, idx) in tasks" v-bind:key="task.id">
                <div>
                    <input v-if="toDoFlag == false" type="checkbox" @change="check(idx)"/>
                    <input v-else type="checkbox" @change="check(idx)" checked/>
                    <span v-if="editedTask!=task.id">{{task.title}}</span>
                    <input v-else type="text" class="text-field">
                </div>
                <div>
                    <button v-if="editedTask!=task.id && toDoFlag == false" class="btn btn_yellow" @click="update(task)">
                        <img src="@/assets/img/update.svg" alt="">
                    </button>
                    <button v-else-if="toDoFlag == false" class="btn btn_green" @click="clickReady()">
                        <img src="@/assets/img/ready.svg" alt="">
                    </button>
                    <button class="btn btn_red" @click="remove(index)" src="">
                        <img src="@/assets/img/delete.svg" alt="">
                    </button>
                </div>
            </li> -->
        </ul>
        
    </div>
</template>

<script>
    import TaskItem from './TaskItem.vue';
    export default {
        components: { 
            TaskItem 
            },
        props: {
            tasks: {
                type: Array
            },
            title: {
                type: String
            },
            toDoFlag: Boolean,
            editedTask: null
        },
        methods: {
            check (index) {
                this.$emit('check', index);
            },
            remove (index) {
                this.$emit('remove', index);
            },
            update (task) {
                this.$emit('update', task);
            }
        }
    }
</script>

<style scoped>

</style>