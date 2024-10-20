import { Chat } from '@/models'

export const chatModule = {
	state: () => ({
    currentChatId: null,
     //constructor(id, name, lastVisited = '', avatar = '') 
		chats: [ 
      new Chat(0, 'Чат 1', 'пять минут назад'),
      new Chat(1, 'Чат 2'),
      new Chat(2, 'Чат 3'),
      new Chat(3, 'Чат 4'),
      new Chat(4, 'Чат 5', 'пять минут назад'),
      new Chat(5, 'Чат 6'),
      new Chat(6, 'Чат 7'),
      new Chat(7, 'Чат 8'),
      new Chat(8, 'Чат 9', 'пять минут назад'),
      new Chat(9, 'Чат 10'),
],   
	}),
	mutations: {
    setCurrentChatId(state, chatId) {
      state.currentChatId = chatId;
    },
  },
  actions: {
     changeCurrentChat({ commit }, chatId) {
      commit('setCurrentChatId', chatId);
      commit('markMessagesAsRead', chatId);     
    },

     resetCurrentChat({ commit }) {
      commit('setCurrentChatId', null);    
    },
    
  },
	 getters: {
    getAllChats: (state) => {
      return state.chats
    },    
    getCurrentChatId: (state) => {
      return state.currentChatId;
    },   
    getChatByChatId: (state) => (chatId) => {
      return state.chats.find(chat => chat.id === chatId);
  },
    
  }
}
