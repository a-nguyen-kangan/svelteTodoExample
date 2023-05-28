<script>
    import { createEventDispatcher } from 'svelte';
    import TodoItem from './TodoItem.svelte';

    const dispatch = createEventDispatcher();

    function addButtonClickHandler() {
        if (document.getElementById("inp-todoText").value) {
            let newItemtext = document.getElementById("inp-todoText").value;
            let newItem  = {"completed": false, "title": newItemtext, 'userId': 1};

            dispatch('onNewItem', {item: newItem});

            document.getElementById("inp-todoText").value = '';

            //** used only to rerender page.  Need better solution
            // todoItems = [...todoItems, newItem]
        }
    }

    function removeCompletedClickHandler() {
        dispatch('removeCompleted', '');
    }


</script>

<div id='inputs'>
    <input id="inp-todoText" type="text" /> <button on:click={addButtonClickHandler}>Add</button>
    <br>
    <button on:click={removeCompletedClickHandler}>Remove Completed</button>
</div>

<style>
    #inputs {
        text-align: center;
    }
</style>