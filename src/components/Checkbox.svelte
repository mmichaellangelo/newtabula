<div class={className} on:click={checkBox} on:keypress={checkBox} tabindex={1}>

</div>

<script lang="ts">
    import { onDestroy } from 'svelte';


    export let index: number;

    import { ToDoStore } from '../state/stores'

    let checkedValue: boolean;

    const unsubscribe = ToDoStore.subscribe((item) => {
        console.log('item:', item, 'index:', index);
        if (item[index]) {
            checkedValue = item[index].checked;
        }
    })

    $: className = "checkbox" + (checkedValue ? " checked" : "");

    function checkBox() {
        ToDoStore.check(index);
    }

    onDestroy(unsubscribe);

</script>



<style>

    .checkbox {
        border: 2px solid white;
        display: inline-block;
        padding: 0.5rem;
        margin: 0.5rem;
        border-radius: 1rem;
        transition: 0.3s ease;
        background-color: rgba(0, 0, 0, 0);
    }

    .checkbox:hover {
        border-radius: 0.1rem;
    }

    .checked {
        content: "";
        border-radius: 0.1rem;
        background-color: white;
        transition: 0.1s ease;
    }

</style>