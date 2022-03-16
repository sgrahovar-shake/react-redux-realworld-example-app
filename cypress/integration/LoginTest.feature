Feature: Login test with three users

  Scenario: User signs in as testuser
    Given User navigates to the login page
    Given User "testuser" is selected
    When User inputs username
    And User inputs password
    And User presses Sign In button
    Then User is logged in

  Scenario: User signs in as testuser2
    Given User signs out
    Given User signs in as "testuser2"

  Scenario: User signs in as newuser2
    Given User signs out
    Given User navigates to the login page
    Given User "newuser2" is selected
    When User inputs username
    And User inputs password