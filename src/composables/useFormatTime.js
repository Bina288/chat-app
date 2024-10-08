export function useFormatTime() {
  const formatTime = (datetime) => {
    return new Date(datetime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return { formatTime };
}