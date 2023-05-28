<script>
    import { onMount } from 'svelte';
    import Input from './Input.svelte';
    import TodoList from './TodoList.svelte';

    let promise;
    let todoItems = [
            {'id': 0, 'userId': 1, 'completed': false, 'title': "Learn Svelte"}, // 0
            {'id': 1, 'userId': 1, 'completed': false, 'title': 'Make Toast'},    // 1
            {'id': 2, 'userId': 1, 'completed': true, 'title': 'Make Coffee'}
        ];

    let lastId = -1;

    async function postNewItem(newItem) {       
            const res = await fetch('https://todos-b646.restdb.io/rest/todos',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Request-Headers': '*',
                        'x-apikey': 'b89ce1946cce30eec2af9b0dd6830213d0f66'
                    },
                    body: JSON.stringify(newItem)
                }
            );
    }

    function handleNewItem(event) {
        lastId++;
        let newItem = {...event.detail.item, id: lastId};
        todoItems = [...todoItems, newItem];
        postNewItem(newItem);
    }

    function handleOnChangedItem(event) {
        console.log('detail', event.detail)
        let index = todoItems.findIndex((item) => event.detail.title === item.title);

        todoItems[index].completed = event.detail.completed;
    }

    function handleRemoveCompleted() {
        removeCompleted();
    }

    function removeCompleted() {
        todoItems = todoItems.filter((item) => item.completed === false);
    }

    onMount(
        async () => { 
            //const res = await fetch('https://jsonplaceholder.typicode.com/todos');
            promise = getTodoItems();            
 
        }
    )

    async function getTodoItems() {
        const res = await fetch('https://todos-b646.restdb.io/rest/todos',
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Request-Headers': '*',
                        'x-apikey': 'b89ce1946cce30eec2af9b0dd6830213d0f66'
                    }
                }
            );
            todoItems = await res.json();
            return todoItems;
    }

</script>

<h1>Todo App</h1>

<Input on:onNewItem={handleNewItem} on:removeCompleted={handleRemoveCompleted}/>

{#if promise}
    {#await promise}
        <p>Loading</p>
    {:then result}
        <TodoList on:onChangedItem={handleOnChangedItem} todoItems={todoItems} />
    {:catch error}
        <p id="error_message">Using default list due to error</p> <br>
        <TodoList on:onChangedItem={handleOnChangedItem} todoItems={todoItems} />
    {/await}

{/if}

<style>
    h1 {
        font-family:  "Monaco", "Courier New", monospace;
        font-size: 4em;
        text-align: center;
        color: blue;
    }

    #error_message {
        text-align: center;
    }
</style>

