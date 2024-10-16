import { useStore } from 'vuex'

export function useSearch() {
  const store = useStore()

  const executeSearch = (query, chatId) => {
    if (!query) return
    store.dispatch("searchMessages", {
      query: query,
      chatId: chatId,
    })
    store.dispatch("resetCurrentChat")
  }

  return {
    executeSearch
  }
}