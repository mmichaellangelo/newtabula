<div id="ToDoList">
    <h3 id="todo_title">To do:</h3>
    <AddToDoItem />
    {#if hasToDoData}
        {#each list as listitem (listitem.id)}
            <ToDoItem props={listitem} />
        {/each}
    {/if}
</div>

<script lang="ts">
    import { ToDoStore } from "../state/stores";
    import ToDoItem from "./ToDoItem.svelte";
    import AddToDoItem from "./AddToDoItem.svelte";
    import { onDestroy } from "svelte";
    let list;
    let unsubscribe = ToDoStore.subscribe((value) => {
        list = value;
    })
    let hasToDoData: boolean;
    $: list == null ? hasToDoData = false : hasToDoData = true;
    onDestroy(unsubscribe);
</script>

<style>

    #todo_title {
        margin-top: 0px;
        margin-bottom: 2rem;
        margin-left: 0.63rem;
        font-size: 18pt;
    }

    #ToDoList {
        max-width: 400px;
        margin: auto;
        color: white;
        border: 2px solid white;
        padding: 2rem;
        border-radius: 10px;
        transition: 0.3s ease;
    }

    #ToDoList:hover {
        border-radius: 0px;
        transition: 0.3s ease;
    }
</style>