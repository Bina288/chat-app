import { Message } from '@/models'

export const messageModule = {
  state:()=>( {		
   messages: [
    //constructor(id, chatId, text, timestamp, hasRead = false)
      new Message(0, 0, 'Привет, все работает', '2024-09-27T18:16', true),
      new Message(1, 0, 'Скопируй и перешли мне, пожалуйста: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula ac nulla id egestas. Nulla eu sodales odio. Ut vitae eleifend est. Integer molestie magna ex, sit amet maximus orci iaculis eu.', '2024-09-27T18:18', true),
      new Message(2, 0, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula ac nulla id egestas. Nulla eu sodales odio. Ut vitae eleifend est. Integer molestie magna ex, sit amet maximus orci iaculis eu.', '2024-09-27T19:14', false),
      new Message(3, 1, 'Хорошо поговорили', '2024-09-28T19:14', true),
      new Message(4, 1, 'Не забудь отправить отчет', '2024-09-28T19:20', true),
      new Message(5, 1, 'Уже отправил', '2024-09-28T19:25', false),

      /*new Message(6, 2, 'Сообщение в третьем чате', '2024-09-29T13:14', true),
      new Message(7, 2, 'Здесь всё готово', '2024-09-29T13:30', true),*/

      new Message(8, 3, 'Начнем завтра с утра?', '2024-09-30T10:00', true),
      new Message(9, 3, 'Отлично, буду на месте в 9', '2024-09-30T10:05', true),

      new Message(10, 4, 'Напиши, когда сможешь обсудить', '2024-09-30T11:20', true),
      new Message(11, 4, 'Давай через час', '2024-09-30T11:30', true),

      new Message(12, 5, 'Проверил данные, всё корректно', '2024-10-01T08:50', true),
      new Message(13, 5, 'Отлично, отправляю результат', '2024-10-02T09:00', true),

      new Message(14, 6, 'Есть вопрос по проекту, когда сможешь ответить?', '2024-10-01T10:20', true),
      new Message(15, 6, 'В течение часа, ок?', '2024-10-01T10:25', true),

      new Message(16, 7, 'Привет! Как успехи?', '2024-10-02T14:30', true),
      new Message(17, 7, 'Отлично, продвигаемся', '2024-10-02T14:45', true),

      new Message(18, 8, 'Когда финальный дедлайн?', '2024-10-02T15:00', true),
      new Message(19, 8, 'Через неделю', '2024-10-02T15:10', true),

      new Message(20, 9, 'Не забудь про встречу в пятницу', '2024-10-03T16:00', true),
      new Message(21, 9, 'Всё помню, спасибо за напоминание!', '2024-10-03T16:10', true),
    ],
}),
	mutations: {
    addMessage(state, message) {
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
    },
},  

  actions: {
    markMessagesAsRead({ commit }, chatId) {
      commit('markMessagesAsRead', chatId);
    },    
  },

	getters: {   
    getMessagesByChatId: (state) => (chatId) => {
      // console.log('in getter messages filter', state.messages.filter(message => message.chatId === chatId))
      return state.messages.filter(message => message.chatId === chatId);
    },   
    getAllMessages: (state) =>  {
      return state.messages;
    },   
  }
}

