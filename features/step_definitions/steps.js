const { Given, When, Then } = require('@cucumber/cucumber');
const { Person } = require('../../src/person')
const { assertThat, is } = require('hamjest')

Given('Lucy is located {int} meters away from sean', function (distance) {
    console.log(distance)
    this.lucy = new Person
    this.dave = new Person
    this.lucy.moveTo(distance)
    // Given('Lucy is located {float} meters away from sean', function (float) {
    // Write code here that turns the phrase above into concrete actions
    // return 'pending';
});


When('Sean shouts {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
    // return 'pending';
    this.dave.shout(string)
    this.lucy.heard(string)
    this.message = string
});


Then('Lucy hears message', function () {
    // Write code here that turns the phrase above into concrete actions
    // return 'pending';
    assertThat(this.lucy.messagesHeard(), is([this.message]))
});