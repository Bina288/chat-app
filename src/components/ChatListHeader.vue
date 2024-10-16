<template>
	<div class="list-header">
		<button class="menu-btn">
			<img class="icon" src="./icons/menu-icon.svg" alt="Chats Menu" />
		</button>
		<form
			class="search-form"
			v-show="!isCollapsed"
			@submit.prevent="executeSearch(query)"
		>
			<app-search-button class="search-btn"></app-search-button>
			<input
				v-model="query"
				class="search-input"
				type="search"
				placeholder="Поиск"
			/>
		</form>
	</div>
</template>

<script setup>
	import { defineProps, ref } from 'vue'
	import AppSearchButton from './UI/AppSearchButton.vue'
	import { useSearch } from '@/composables/useSearch'
	const { executeSearch } = useSearch()
	const props = defineProps({
		isCollapsed: {
			type: Boolean,
			required: true,
		},
	})
	const query = ref('')
</script>

<style lang="scss" scoped>
	.list-header {
		display: flex;
		align-items: center;
		padding: 10px 15px;
		justify-content: space-between;
		gap: 20px;
	}

	.menu-btn {
		margin-left: 10px;
		background: none;
		border: none;
		cursor: pointer;
	}

	.search-form {
		display: flex;
		justify-content: center;
		flex-grow: 1;

		.search-btn {
			border-radius: 20px 0 0 20px;
			background-color: $light-grey;
			padding: 10px;
			border: none;
			display: flex;
			align-items: center;
		}

		.search-input {
			border-radius: 0 20px 20px 0;
			border: 1px solid $light-grey;
			background-color: $light-grey;
			padding: 10px;
			width: 100%;
		}
	}
</style>
