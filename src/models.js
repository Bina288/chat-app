export class Message {
  constructor(text, timestamp, hasRead = false) {
    this.id = id;
    this.chatId = chatId;
    this.text = text;
    //this.sender = sender; //по смыслу задания не требуется?
    this.timestamp = timestamp;
    this.hasRead = hasRead;
  }
}

export class Chat {
  constructor(id, name, lastVisited = '', messages = []) {
    this.id = id,
    this.name = name;
    this.lastVisited = lastVisited;
    //this.messages = messages;
  }

  getUnreadCount() {
    return this.messages.filter(message => !message.hasRead).length;
  }
}
