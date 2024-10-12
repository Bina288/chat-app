export function useFormatDate() {
  function shouldDisplayDate(messages, index) {
    if (index === 0) return true;
    const currentMessage = messages[index];
    const previousMessage = messages[index - 1];

    const currentDate = new Date(currentMessage.timestamp).toDateString();
    const prevDate = new Date(previousMessage.timestamp).toDateString();

    return currentDate !== prevDate;
  }

  function getDateLabel(timestamp) {
    const currentDate = new Date(timestamp);
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);

    if (currentDate.toDateString() === today.toDateString()) {
      return "Сегодня";
    } else if (currentDate.toDateString() === yesterday.toDateString()) {
      return "Вчера";
    } else {
      return currentDate.toLocaleDateString();
    }
  }
  return {
    shouldDisplayDate,
    getDateLabel
  };
}