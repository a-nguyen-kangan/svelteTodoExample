<script>
    import { component_subscribe } from "svelte/internal";
import TodoItem from "./TodoItem.svelte";

    export let todoItems = [
        {"completed": false, "text": "Learn Svelte"}, // 0
        {"completed": false, "text": "Make Toast"},    // 1
        {"completed": true, "text": "Make Coffee"}
    ]

    $: todosCount = todoItems.length;

    export function addNewItem(newItemName) {
        if(newItemName || newItemName != '') {
            let newItem = { 'text': newItemName, 'completed':false };
            todoItems = [...todoItems, newItem];
        } else {
            alert('Invalid todo text')
        }
    }

    function addButtonClickHandler() {
        if (document.getElementById("inp-todoText").value) {
            let newItemtext = document.getElementById("inp-todoText").value;
            let newItem  = {"completed": false, "text": newItemtext};

            document.getElementById("inp-todoText").value = '';
            //** used only to rerender page.  Need better solution
            todoItems = [...todoItems, newItem]
        }
    }
</script>

<!-- <div>
    <input id="inp-todoText" type="text" /> <button on:click={addButtonClickHandler}>Add</button>
</div> -->
<div class="container">
    <p id="todos_num">Number of todos: { todosCount }</p>
    <div class="todo-items">
        {#each todoItems as item}
            <TodoItem item = {item} on:onChangedItem />
        {/each}
    </div>
</div>

<style>
    .todo-items {
        border: 3px solid green;
        width: 60%;
        margin: auto;
        
    }
    .container {
        margin: auto;
    }
    #todos_num {
        text-align: center;
    }
</style>