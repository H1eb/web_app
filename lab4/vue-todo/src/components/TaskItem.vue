<template>
    <li>
        <div>
            <input v-if="toDoFlag == false" type="checkbox" @change="check(idx)"/>
            <input v-else type="checkbox" @change="check(idx)" checked/>
            <span v-if="editedTask!=task.id">{{task.title}}</span>
            <span v-else-if="toDoFlag == true">{{task[0].title}} ({{task.dt}})</span>
            <!-- <input v-else type="text" class="text-field"> -->
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
    </li>
</template>

<script>
export default {
    props: {
        task: String,
        index: null,
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

<style>

</style>
