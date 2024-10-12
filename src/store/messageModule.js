import { Message } from '@/models'

export const messageModule={
  state: () => ({		
   messages: [
    //constructor(id, chatId, text, timestamp, hasRead = false)
  new Message(0, 0, 'Привет, все работает', '2024-09-27T18:16', true),
  new Message(1, 0, 'Скопируй и перешли мне, пожалуйста: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula ac nulla id egestas. Nulla eu sodales odio. Ut vitae eleifend est. Integer molestie magna ex, sit amet maximus orci iaculis eu.', '2024-09-27T18:18', true),
  new Message(2, 0, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula ac nulla id egestas. Nulla eu sodales odio. Ut vitae eleifend est. Integer molestie magna ex, sit amet maximus orci iaculis eu.', '2024-09-27T19:14', true),
  new Message(3, 1, 'Хорошо поговорили', '2024-09-28T19:14', true),
  new Message(4, 2, 'Сообщение в третьем чате', '2024-09-29T13:14', false),
  new Message(5, 1, 'Ок, увидимся позже', '2024-09-28T20:30', true),
  new Message(6, 1, 'Ок, увидимся позже', '2024-09-29T20:30', true),
  new Message(7, 1, 'Ок, увидимся позже', '2024-09-30T20:30', true),
  new Message(8, 1, 'Ок, увидимся позже', '2024-10-08T20:30', true),
    ]
}),
	mutations: {
  addMessage(state, message) {
    console.log("add method",state, message);
    const timestamp = new Date().getTime(); 
    const newMsg = new Message(
      timestamp, 
      message.chatId,
      message.text,
      new Date().toISOString(), 
      false
  );
    state.messages = [...state.messages, newMsg];
  },
  markMessagesAsRead(state, chatId) {
    state.messages.forEach((msg) => {
      if (msg.chatId === chatId) {
        msg.hasRead = true;
        }
      });
      console.log('mutations', state.messages)
    },
},
  

  actions: {
    markMessagesAsRead({ commit }, chatId) {
      commit('markMessagesAsRead', chatId);
      console.log('actions', chatId)
    }
  },
	 getters: {   
    getMessagesByChatId: (state) => (chatId) => {
      return state.messages.filter(message => message.chatId === chatId);
  },
  
  }
}

