<template>
	<form class="search_bar" @submit.prevent="executeSearch(query, chatId)">
		<input id="searchToggle" type="checkbox" v-model="isSearchActive" />
		<label for="searchToggle">
			<i class="icon"></i>
			<i class="last icon"></i>
			<app-search-button class="search-btn"></app-search-button>
		</label>
		<input placeholder="Поиск" type="search" v-model="query" />
	</form>
</template>

<script setup>
	import { useStore } from 'vuex'
	import { computed, ref, watch } from 'vue'
	import AppSearchButton from './UI/AppSearchButton.vue'
	import { useSearch } from '@/composables/useSearch'

	const { executeSearch } = useSearch()
	const store = useStore()
	const chatId = computed(() => store.getters.getCurrentChatId)
	const query = ref('')
	const isSearchActive = ref(false)

	watch(isSearchActive, (newVal) => {
		//to animate the input's opening
		if (!newVal) {
			query.value = ''
		}
	})
</script>

<style lang="scss" scoped>
	.search_bar {
		display: flex;
		align-items: center;

		input {
			width: 0;
			background: transparent;
			transition: width 0.3s ease;

			padding-top: 5px;

			border: none;
			font-size: 14px;
			color: #333;
			text-indent: 30px;
			opacity: 0;
			border-bottom: none;

			&:focus {
				border-bottom: 2px solid #a8a952;
			}
		}

		&:hover input {
			width: 150px;
			opacity: 1;
			border-bottom: 1px solid $navy-grey;
		}

		input[type='checkbox'] {
			display: none;
		}

		label {
			position: relative;
			cursor: pointer;
			i {
				font-size: 24px;
				color: #a8a952;
				transition: all 0.3s;
			}
			.last {
				transform: scale(0);
				transition: transform 0.3s;
			}
			input[type='checkbox']:checked + label i.icon {
				transform: scale(0);
			}
			input[type='checkbox']:checked + label .last {
				transform: scale(1);
			}
		}
	}
</style>
