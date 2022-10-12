Feature: Hear shout
    Scenario: Listner is within the Range
    Given Lucy is located 15 meters away from sean
    When Sean shouts "free bagles at Seans"
    Then Lucy hears message
    