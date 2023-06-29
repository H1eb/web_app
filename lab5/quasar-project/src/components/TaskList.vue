<template>
    <div>
        <q-list class="bg-white" separator bordered>
        <q-item :class="{done: task.done, bg_blue_1: task.done}" @click="ChangeStatus(idx)" clickable v-ripple>
          <q-item-section avatar>
            <q-checkbox
              class="no-pointer-events"
              v-model="task.done"
              color="Orange"
            />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ task.title }}</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-btn @click.stop="Delete_Note(idx)" v-if="task.done" dense flat round color="primary" icon="delete"/>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
</template>

<script>
export default {
    props: {
        task: null,
        idx: null
    },
    methods: {
        Delete_Note(idx) {
            this.$emit('delete', idx);
        },
        ChangeStatus(idx) {
          this.$emit('update', idx)
        }
    }
}
</script>

<style scoped>

</style>
