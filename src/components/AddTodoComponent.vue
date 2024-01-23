<template>
    <form @submit.prevent="onSubmit">
       <input type="text" v-model="value"> 
       <button type="submit">Create</button>
    </form>
</template>

<script>
export default {
    data: () => ({
        value: ''
    }),
    methods: {
        onSubmit() {
           if (this.value.trim()) {
            const newTodo = {
                id: Date.now(),
                title: this.value,
                completed: false
            }
            this.$emit('add-todo', newTodo)
            this.value = ''
           }
        }
    }
}
</script>

<style>
form {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 20px;
}
input {
    width: 400px;
}
</style>