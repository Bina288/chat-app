export class Message {
  constructor(id, chatId, text, timestamp, hasRead = false) {
    this.id = id;
    this.chatId = chatId;
    this.text = text;
    //this.sender = sender; //по смыслу задания не требуется?
    this.timestamp = timestamp;
    this.hasRead = hasRead;
  }
}

export class Chat {
  constructor(id, name, lastVisited = '') {
    this.id = id,
    this.name = name;
    this.lastVisited = lastVisited;
  }
}
