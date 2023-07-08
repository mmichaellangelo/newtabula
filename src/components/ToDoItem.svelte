<div class="item_frame">    
    <Checkbox index={props.id}/>
    <span class={className}>{props.name}</span>
</div>

<script lang="ts">
    import type { ToDoType } from "../state/localStorage";
    import { ToDoStore } from "../state/stores";
    export let props: ToDoType;
    import Checkbox from "./Checkbox.svelte";
    
    $: className = "name" + ($ToDoStore[props.id].checked ? " strikethrough" : "");
</script>

<style>

    .item_frame {
        display: flex;
        align-items: center;
        border: 2px solid white;
        margin: 1rem;
        padding: 1rem;
        border-radius: 10px;
        transition: 0.3s ease;
    }

    .item_frame:hover {
        border-radius: 0px;
        transition: 0.3s ease;
    }

    .name {
        margin-left: 0.5rem;
    }

    .strikethrough {
        text-decoration: line-through;
    }

</style>