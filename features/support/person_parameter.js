const { defineParameterType } = require('@cucumber/cucumber')

const { Person } = require('../../src/person')

defineParameterType({
    name: 'person',
    regexp: /Lucy|lucy|Sean|sean/,
    transformer: name => new Person(name)
})