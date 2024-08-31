<script lang="ts">
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import { Button, Iconify } from '$lib/components';

	interface Todo {
		id: number;
		text: string;
		completed: boolean;
	}

	let todos: Todo[] = [];
	let newTodoText = '';

	onMount(() => {
		const storedTodos = localStorage.getItem('todos');
		if (storedTodos) {
			todos = JSON.parse(storedTodos);
		}
	});

	$: {
		if (todos.length > 0) {
			localStorage.setItem('todos', JSON.stringify(todos));
		}
	}

	function addTodo() {
		if (newTodoText.trim()) {
			todos = [{ id: Date.now(), text: newTodoText.trim(), completed: false }, ...todos];
			newTodoText = '';
		}
	}

	function deleteTodo(id: number) {
		todos = todos.filter((todo) => todo.id !== id);
	}

	function updateTodoStatus(id: number, completed: boolean) {
		todos = todos.map((todo) => (todo.id === id ? { ...todo, completed } : todo));
	}

	function handleDragStart(event: DragEvent, todo: Todo) {
		event.dataTransfer?.setData('text/plain', todo.id.toString());
	}

	function handleDrop(event: DragEvent, targetCompleted: boolean) {
		event.preventDefault();
		const id = Number(event.dataTransfer?.getData('text/plain'));
		updateTodoStatus(id, targetCompleted);
	}
</script>

<main>
	<h1>Todo List</h1>

	<form on:submit|preventDefault={addTodo}>
		<input bind:value={newTodoText} placeholder="Add a new todo" />
		<button type="submit">Add</button>
	</form>

	<div class="lists-container">
		{#each ['To Do', 'Completed'] as listType}
			<ul
				class="todo-list"
				on:dragover|preventDefault
				on:drop={(e) => handleDrop(e, listType === 'Completed')}
			>
				<h2>{listType}</h2>
				{#each todos.filter((t) => t.completed === (listType === 'Completed')) as todo (todo.id)}
					<li
						transition:slide
						draggable="true"
						class="todo-item"
						class:completed={todo.completed}
						on:dragstart={(e) => handleDragStart(e, todo)}
					>
						<p>{todo.text}</p>
						<Button
							size="icon"
							variant="ghost"
							class="min-w-10"
							on:click={() => deleteTodo(todo.id)}
						>
							<Iconify class="text-lg" icon="delete" />
						</Button>
					</li>
				{/each}
			</ul>
		{/each}
	</div>
</main>

<style lang="postcss">
	.lists-container {
		@apply flex justify-between gap-4;
	}

	.todo-list {
		border: 1px solid #ccc;
		@apply min-h-[80vh] min-w-[50%] p-4 space-y-2;
	}

	.todo-item {
		@apply bg-muted py-2 pl-4 rounded;
		@apply break-all flex justify-between gap-4 items-center;
	}

	.completed {
		text-decoration: line-through;
		opacity: 0.6;
	}
</style>
