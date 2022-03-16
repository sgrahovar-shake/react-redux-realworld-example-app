Feature: Sign out

  Scenario: User signs in as testuser
    Given User signs in as "testuser"

  Scenario: Sign out
    Given User is logged in
    And User signs out
    Then User is signed out