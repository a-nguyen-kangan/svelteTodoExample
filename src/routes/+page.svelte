<script>
    import { onMount } from 'svelte';
    import Input from './Input.svelte';
    import TodoItem from './TodoItem.svelte';
    import TodoList from './TodoList.svelte';

    let todoItems = [
        {"completed": false, "text": "Do Svelte"}, // 0
        {"completed": true, "text": "Turn on computer"}    // 1
    ]

    let lastId = -1;

    function handleNewItem(event) {
        lastId++;
        let newItem = {...event.detail.item, id: lastId};
        todoItems = [...todoItems, newItem];
        console.log('New Item: ', newItem);
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
            const res = await fetch('https://jsonplaceholder.typicode.com/todos');
            todoItems = await res.json();
            lastId = todoItems[todoItems.length-1].id;
            
            const res2 = await fetch('https://ap-southeast-2.aws.data.mongodb-api.com/app/data-uxvtq/endpoint/data/v1/action/find',
                {
                    method: 'POST',
                    body: JSON.stringify({
                        "dataSource": "DtpKangan",
                        "database": "Todo",
                        "collection": "Todos"
                    }),
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Request-Headers': '*',
                        'api-key': 'HWsr2q50SyAYeR89vrgHRCE9SYiZSHoHRZ91DbRfTfb0iYWFJ2kuLP3d5emwY6pn'
                    }
                }
            )
            .then((r)=>r.json())
            .then((rs)=>console.log(rs))
            
        }
    )
</script>

<h1>Todo App</h1>

<Input on:onNewItem={handleNewItem} on:removeCompleted={handleRemoveCompleted}/>

<TodoList on:onChangedItem={handleOnChangedItem} todoItems={todoItems} />

