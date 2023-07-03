<div id="ToDoList">
    <h3 id="todo_title">To do:</h3>
    {#each list as listitem}
        <ToDoItem name={listitem} />
    {/each}
</div>

<script lang="ts">
    import { getToDo, setToDo } from "../util/todolist";
    import ToDoItem from "./ToDoItem.svelte";
    let list = getToDo();
    if (list == null || list == undefined) {
        list = ["chicken", "broccoli", "tomatoes"];
    }
</script>

<style>

    #todo_title {
        margin-top: 0px;
        margin-bottom: 2rem;
        margin-left: 0px;
    }

    #ToDoList {
        max-width: 400px;
        margin: auto;
        color: white;
        border: 1px solid white;
        padding: 2rem;
    }
</style>