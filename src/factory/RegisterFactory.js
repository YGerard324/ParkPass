class RegisterFactory {
    constructor(entry, exit, parkingSpaceId, userId) {
      this.entry = entry;
      this.exit = exit;
      this.parkingSpaceId = parkingSpaceId;
      this.userId = userId;
    }
  
    createRegister() {
      return {
        entry: this.entry,
        exit: this.exit,
        parkingSpaceId: this.parkingSpaceId,
        userId: this.userId,
      };
    }
  }
  
  module.exports = RegisterFactory;
  