export const searchModule = {
  state: () => ({		   
    searchResults: null,  
  }),

	mutations: { 
    setSearchResults(state, results) {
      console.log('4, setSearchResults', results)
      state.searchResults = results;
    },
},  

  actions: {     
    searchMessages({ commit, rootState }, { query, chatId }) {   
      const searchQuery = query.trim().toLowerCase(); 
      if (!searchQuery) {
        commit('setSearchResults', []); 
        return;
      }
      const messages = rootState.messageModule.messages;
      const results = messages.filter((message) => {
        const messageText = message.text.trim().toLowerCase();          
        if(chatId)
        return message.chatId === chatId && messageText.includes(searchQuery);        
        return  messageText.includes(searchQuery); 
      });
      commit('setSearchResults', results); 
    },    

    resetSearchResults({ commit }) {
      commit('setSearchResults', []);    
    },
  },

	getters: { 
     getSearchResults: (state) => state.searchResults,
  }
}

