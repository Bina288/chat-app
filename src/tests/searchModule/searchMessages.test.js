const {searchModule}  = require('../../store/searchModule');

describe('searchMessages action', () => {
  let commit;
  let rootState;
  
  beforeEach(() => {
    commit = jest.fn();

    rootState = {
      messageModule: {
        messages: [
          { id: 1, text: 'Hello world', chatId: 1 },
          { id: 2, text: 'Vue.js is awesome', chatId: 1 },
          { id: 3, text: 'Hello again', chatId: 2 },
        ],
      },
    };
  });

  test('should return an empty array when search query is empty', () => {
    const query = '';
    const chatId = 1;
    const context = { state: {}, commit, rootState };

    searchModule.actions.searchMessages(context, { query, chatId });

    expect(commit).toHaveBeenCalledWith('setSearchResults', []);
  });

  test('should search messages by chatId and query', () => {
    const query = 'hello';
    const chatId = 1;
    const context = { state: {}, commit, rootState };

    searchModule.actions.searchMessages(context, { query, chatId });

    expect(commit).toHaveBeenCalledWith('setSearchResults', [
      { id: 1, text: 'Hello world', chatId: 1 },
    ]);
  });

test('should search messages without chatId', () => {
    const query = 'hello';
    const chatId = null;
    const context = { state: {}, commit, rootState };

    searchModule.actions.searchMessages(context, { query, chatId });

    expect(commit).toHaveBeenCalledWith('setSearchResults', [
      { id: 1, text: 'Hello world', chatId: 1 },
      { id: 3, text: 'Hello again', chatId: 2 },
    ]);
  });

  test('should handle case-insensitive search', () => {
    const query = 'HELLO';
    const chatId = null;
    const context = { state: {}, commit, rootState };

    searchModule.actions.searchMessages(context, { query, chatId });

    expect(commit).toHaveBeenCalledWith('setSearchResults', [
      { id: 1, text: 'Hello world', chatId: 1 },
      { id: 3, text: 'Hello again', chatId: 2 },
    ]);
  });

  test('should return an empty array if no results match', () => {
    const query = 'doesnotmatch';
    const chatId = 1;
    const context = { state: {}, commit, rootState };

    searchModule.actions.searchMessages(context, { query, chatId });

    expect(commit).toHaveBeenCalledWith('setSearchResults', []);
  });
});