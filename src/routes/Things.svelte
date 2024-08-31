<script lang="ts">
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import { Button, Iconify, Input } from '$lib/components';

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
	<form on:submit|preventDefault={addTodo}>
		<Input bind:value={newTodoText} placeholder="Add a New Thing To Do" />
		<Button aria-label="Add a New Thing To Do" type="submit" size="icon">
			<Iconify class="ml-1 text-lg" icon="plus" />
		</Button>
	</form>

	<div class="lists-container">
		{#each ['To Do', 'Completed'] as listType}
			<h2>{listType}</h2>
			<ul
				class="todo-list"
				on:dragover|preventDefault
				on:drop={(e) => handleDrop(e, listType === 'Completed')}
			>
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
	form {
		@apply mb-2 flex items-center justify-center gap-4;
	}
	.lists-container {
		@apply flex flex-col justify-between gap-4 sm:mr-4 sm:flex-row;
		user-select: none;
	}

	.todo-list {
		scrollbar-width: none;
		border: 1px solid #ccc;
		@apply rounded-md border-2 border-muted;
		@apply h-[70vh] min-w-[50%] space-y-2 overflow-y-scroll p-4;
	}

	.todo-item {
		@apply cursor-pointer rounded-md bg-muted py-2 pl-4;
		@apply flex items-center justify-between gap-4 break-all;
	}

	.completed {
		opacity: 0.6;
		text-decoration: line-through;
	}
</style>
