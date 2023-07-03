<div class="item_frame">    
    <input class="item_checkbox" type="checkbox">
    <p class="item_name">{name}</p>
</div>

<script lang="ts">
    export let name;
</script>

<style>
    .item_frame {
        display: block;
        border: 2px solid white;
        margin: 1rem;
        padding: 1rem;
        border-radius: 30px;
        transition: 0.1s ease;
    }

    .item_frame:hover {
        border-radius: 0%;
        transition: 0.1s ease;
    }

    .item_checkbox {
        display: inline;
        margin-right: 1rem;
        opacity: 0;
        border: 1px solid white;
        width: 1rem;
        height: 1rem;
        
    }

    .item_name {
        display: inline;
    }
</style>