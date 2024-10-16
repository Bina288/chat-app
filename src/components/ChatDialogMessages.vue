<template>
	<!-- scrollbar customization -->
	<div class="scroll-container" ref="scrollContainer">
		<div class="chat">
			<div class="chat__messages" ref="messagesContainer">
				<app-message-state v-if="isChatEmpty"
					>Сообщений пока нет</app-message-state
				>
				<app-message-state v-else-if="isSearchResultEmpty"
					>Не найдено сообщений по этому запросу</app-message-state
				>
				<template
					v-for="(message, index) in messagesToDisplay"
					:key="message.id"
				>
					<div
						v-if="shouldDisplayDate(messagesToDisplay, index)"
						class="chat__date"
					>
						{{ getDateLabel(message.timestamp) }}
					</div>
					<app-message :message="message" :messageIndex="index"></app-message>
				</template>
			</div>
			<app-chat-input
				v-if="chatId !== null"
				class="chat__input"
			></app-chat-input>
		</div>
	</div>
</template>

<script setup>
	import AppMessage from '@/components/UI/AppMessage.vue'
	import AppChatInput from './UI/AppMessageInput.vue'
	import AppMessageState from './UI/AppMessageState.vue'
	import { usePerfectScrollbar } from '@/composables/usePerfectScrollbar'
	import { useStore } from 'vuex'
	import { computed, ref } from 'vue'

	import { useFormatDate } from '@/composables/useFormatDate'
	const { shouldDisplayDate, getDateLabel } = useFormatDate()
	const { scrollContainer } = usePerfectScrollbar()
	const messagesContainer = ref(null)

	const store = useStore()
	const chatId = computed(() => store.getters.getCurrentChatId)
	const messages = computed(() =>
		store.getters.getMessagesByChatId(chatId.value)
	)
	const searchResults = computed(() => store.getters.getSearchResults)
	const messagesToDisplay = computed(() =>
		messages.value.length > 0 ? messages.value : searchResults.value
	)
	const isChatEmpty = computed(
		() => messages.value.length < 1 && chatId.value !== null
	)
	const isSearchResultEmpty = computed(
		() =>
			searchResults.value !== null &&
			searchResults.value.length < 1 &&
			messages.value.length < 1 &&
			chatId.value === null
	)
</script>

<style lang="scss" scoped>
	.scroll-container {
		position: relative;
		overflow: hidden;
		height: 100hv;
	}

	.chat {
		display: flex;
		flex-direction: column;
		background-color: $iceberg-blue;
		padding: 0 25px;
		min-height: 100vh;
		padding-top: 10px;

		.chat__messages {
			flex-grow: 1;
			display: flex;
			flex-direction: column;
			justify-content: flex-end;
		}

		.chat__date {
			align-self: center;
			padding: 8px;
			color: #f0f0f0;
			background-color: rgba(0, 0, 0, 0.15);
			border-radius: 20px;
			font-size: 14px;
			margin-bottom: 20px;
		}
	}
</style>
