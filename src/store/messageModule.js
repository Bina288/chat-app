import { Message } from '@/models'

export const messageModule={
  state: () => ({		
   messages: [
    //constructor(id, chatId, text, timestamp, hasRead = false)
  new Message(0, 0, 'Привет, все работает', '2024-09-27T18:16', false),
  new Message(1, 0, 'Скопируй и перешли мне, пожалуйста: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula ac nulla id egestas. Nulla eu sodales odio. Ut vitae eleifend est. Integer molestie magna ex, sit amet maximus orci iaculis eu.', '2024-09-27T18:18', false),
  new Message(2, 0, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula ac nulla id egestas. Nulla eu sodales odio. Ut vitae eleifend est. Integer molestie magna ex, sit amet maximus orci iaculis eu.', '2024-09-27T19:14', true),
  new Message(3, 1, 'Хорошо поговорили', '2024-09-28T19:14', true),
  new Message(4, 2, 'Сообщение в третьем чате', '2024-09-29T13:14', true),
  new Message(5, 1, 'Ок, увидимся позже', '2024-09-28T20:30', true),
    ]
}),
	mutations: {
   
    ADD_MESSAGE(state, { chatId, message }) {
      const chat = state.chats.find(chat => chat.id === chatId);
      if (chat) {
        chat.messages.push(message);
        chat.lastMessageTime = message.timestamp; // Обновляем время последнего сообщения
      }
    },
  },
  actions: {
   
    addMessage({ commit }, { chatId, message }) {
      commit('ADD_MESSAGE', { chatId, message });
    },
  },
	 getters: {
   
     getMessagesByChatId: (state) => (chatId) => {
    return state.messages.filter(message => message.chatId === chatId);
  },
  
  }
}

