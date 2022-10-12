class Person {
    constructor(message) {
        this.message = message || []
    }

    moveTo(distance) {
        console.log(distance)
    }
    shout(message) {

    }
    heard(message) {
        this.message.push(message)
    }
    messagesHeard() {
        return this.message
    }
}

module.exports = {
    Person
}