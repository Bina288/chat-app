import { Chat } from '@/models'
import { useStore } from "vuex";

const store = useStore();
export const chatModule = {
	state: () => ({
    currentChatId: null,
		chats: [ 
      new Chat(0, 'Чат 1'),
      new Chat(1, 'Чат 2'),
      new Chat(2, 'Чат 3'),
      new Chat(3, 'Чат 4'),
],   
	}),
	mutations: {
    ADD_CHAT(state, chat) {
      state.chats.push(chat);
    },   
    setCurrentChatId(state, chatId) {
      state.currentChatId = chatId;
    },
  },
  actions: {
    addChat({ commit }, chat) {
      commit('ADD_CHAT', chat);
    },    
     changeCurrentChat({ commit }, chatId) {
      commit('setCurrentChatId', chatId);
      commit('markMessagesAsRead', chatId);
     
    },
    
  },
	 getters: {
    getAllChats: (state) => {
      return state.chats
    },    
    getCurrentChat: (state) => {
      return state.currentChatId;
    },
  }
}
