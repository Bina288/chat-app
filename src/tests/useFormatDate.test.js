const { useFormatDate } = require('../composables/useFormatDate');

describe('useFormatDate', () => {
  let shouldDisplayDate;
  let getDateLabel;

  beforeEach(() => {
    const { shouldDisplayDate: sdd, getDateLabel: gdl } = useFormatDate();
    shouldDisplayDate = sdd;
    getDateLabel = gdl;
  });

  test('should return true for the first message', () => {
    const messages = [{ timestamp: new Date().getTime() }];
    expect(shouldDisplayDate(messages, 0)).toBe(true);
  });

  test('should return true if messages are on different days', () => {
    const messages = [
      { timestamp: new Date('2024-10-01').getTime() },
      { timestamp: new Date('2024-10-02').getTime() }
    ];
    expect(shouldDisplayDate(messages, 1)).toBe(true);
  });

  test('should return false if messages are on the same day', () => {
    const messages = [
      { timestamp: new Date('2024-10-02').getTime() },
      { timestamp: new Date('2024-10-02').getTime() }
    ];
    expect(shouldDisplayDate(messages, 1)).toBe(false);
  });

  test('should return "Today" if the message is from today', () => {
    const timestamp = new Date().getTime(); // Today
    expect(getDateLabel(timestamp)).toBe('Сегодня');
  });

  test('should return "Yesterday" if the message is from yesterday', () => {
    const timestamp = new Date();
    timestamp.setDate(timestamp.getDate() - 1); // Yesterday
    expect(getDateLabel(timestamp.getTime())).toBe('Вчера');
  });

  test('should return formatted date if the message is older than yesterday', () => {
    const timestamp = new Date('2024-09-01').getTime(); // Arbitrary date
    expect(getDateLabel(timestamp)).toBe(new Date('2024-09-01').toLocaleDateString());
  });
});