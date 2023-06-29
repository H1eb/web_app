<template>
    <div class="form">
    <input 
        type="text" 
        :placeholder = "placeholderString"
        @keypress.enter = "createTask"
        v-model = "task.title" 
        >
    <button class="btn" @click = "createTask">Добавить</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                task: {
                    id: '',
                    title: ''
                }
            }
        },
        methods: {
            createTask() {
                if (this.task.title != '') {
                    this.task.id = Date.now();
                    this.$emit('create', this.task);
                    this.task = {
                        id: "",
                        title: ""
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>