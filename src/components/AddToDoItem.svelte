<div id="wrapper">
    <input type="text" id="inputbox" bind:value={itemValue}>
    <button id="submitbutton" on:click={addItem}>Add</button>
</div>


<script lang="ts">

    let itemValue: string;

    import { ToDoStore } from "../state/stores";

    function addItem() {
        ToDoStore.add({ name: itemValue })
    }
</script>

<style>

    #wrapper {
        display: flex;
        align-items: center;
    }

    #inputbox {
        margin-right: 1rem;
        width: 100%;
        padding: 0.5rem;
        margin-left: 1rem;
        box-sizing: border-box;
        background-color: rgba(0, 0, 0, 0);
        font-family: var(--roboto-ff);
        color: white;
        border: 2px solid white;
        transition: 0.15s ease;
    }

    #inputbox:focus {
        content: "";
        background-color: white;
        outline: none;
        color: black;
    }

    #inputbox::selection {
        background: black;
        color: white;
    }

    #submitbutton {
        margin-right: 1rem;
        background: rgba(0, 0, 0, 0);
        border: 2px solid white;
        border-radius: 0px;
        padding: 0.5rem;
        color: white;
        font-family: var(--roboto-ff);
    }
</style>