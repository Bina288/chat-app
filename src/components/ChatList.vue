<template>
	<div
		class="chat-list"
		:style="{ width: chatListWidthCSS }"
		@mousedown="onMouseDown"
	>
		<chat-list-header :isCollapsed="isCollapsed"></chat-list-header>
		<chat-list-items></chat-list-items>
	</div>
</template>

<script setup>
	import ChatListHeader from './ChatListHeader.vue'
	import ChatListItems from './ChatListItems.vue'
	import { useListToggle } from '@/composables/useListToggle'
	const { isCollapsed, chatListWidthCSS, onMouseDown } = useListToggle()
</script>

<style lang="scss" scoped>
	.chat-list {
		min-width: 75px;
		max-width: 400px;
		transition: width 0.9s ease;
		display: flex;
		flex-direction: column;
		position: relative;
		overflow-x: hidden;

		.chat-list::after {
			content: '';
			position: absolute;
			right: 0;
			top: 0;
			bottom: 0;
			width: 20px;
			cursor: ew-resize;
		}
		@media screen and (max-width: $large) {
			max-width: 300px;
		}
		@media screen and (max-width: $medium) {
			max-width: 230px;
		}
		@media screen and (max-width: $small) {
			max-width: $small;
		}
	}
</style>
