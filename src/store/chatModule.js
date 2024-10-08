import { Chat } from '@/models'
export const chatModule = {
	state: () => ({
		chats: [ new Chat(0, 'Чат 1'),
  new Chat(1, 'Чат 2'),
  new Chat(2, 'Чат 3'),],   
	}),
	mutations: {
    ADD_CHAT(state, chat) {
      state.chats.push(chat);
    },   
  },
  actions: {
    addChat({ commit }, chat) {
      commit('ADD_CHAT', chat);
    },    
  },
	 getters: {
    getChatById: (state) => (id) => {
      return state.chats.find(chat => chat.id === id);
    },     
  }
}
