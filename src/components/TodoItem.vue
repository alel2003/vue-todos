<template>
    <li>
        <span :class="{underline: todo.completed}">
            <input type="checkbox" @change="todo.completed = !todo.completed"/>
            <strong>{{ index + 1 }}</strong>
            {{ todo.title.toUpperCase()}}
        </span>
        <button @click="$emit('remove-todo', todo.id)" class="btn">&times;</button>
    </li>
</template>

<script>
export default {
    props: {
        todo: {
            type: Object,
            required: true
        },
        index:Number,
    }
}
</script>

<style scoped>
li {
    border: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    padding: .5rem 2rem;
    margin: 1rem;
}
.btn {
    background: red;
    color: white;
    border-radius: 50%;
    font-weight: bold;
    border: none;
    cursor: pointer;
}
input {
    margin-right: 1rem;
}
.underline {
    text-decoration: line-through;
}
</style>