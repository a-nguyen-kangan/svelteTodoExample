<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    export let item;

    function cbClickHandler(e) {
        dispatch('onChangedItem', {...item, completed: !item.completed});
    }
</script>

<div>
    <input id={item.title} type="checkbox" checked={item.completed} on:click={cbClickHandler}/> 
    <span class="item" class:checked={item.completed}>{ item.title }</span>
</div>

<style>
    .checked {
        text-decoration: line-through;
        font-style: italic
    }

    div {
        font-family: "Monaco", "Courier New", monospace;
    }

    .item {
        font-weight: bold;
    }
</style>