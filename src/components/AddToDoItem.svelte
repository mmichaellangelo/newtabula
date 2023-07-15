
<form autocomplete="off" id="formwrapper" on:submit|preventDefault={addItem}>
    <input type="text" id="inputbox" bind:value={itemValue}>
    <button id="submitbutton" type="submit">Add</button>
</form>


<script lang="ts">

    import { ToDoStore } from "../state/stores";
    import { getTodoList, saveToDoList } from "../state/localStorage";
    import type { ToDoType } from "../state/localStorage";
    
    let itemValue: string;

    let store: ToDoType[];

    let unsubscribe = ToDoStore.subscribe((value => {
        store = value;
    }))

    function addItem() {
        console.log(itemValue);
        switch (itemValue) {
            case undefined:
                break;
            case "":
                break;
            case null:
                break;
            default:
                ToDoStore.add({ name: itemValue });
                break;
        }
        
        itemValue = "";

        saveToDoList("todo", store);
    }
</script>

<style>
    #formwrapper {
        display: flex;
        align-items: center;
        max-width: 100%;
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