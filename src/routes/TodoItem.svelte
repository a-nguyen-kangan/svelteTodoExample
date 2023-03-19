<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    export let item;

    function cbClickHandler() {
        dispatch('onChangedItem', {...item, completed: !item.completed});
    }
</script>

<div>
    <input id={item.title} type="checkbox" checked={item.completed} on:click={cbClickHandler}/> 
    { item.title }
</div>