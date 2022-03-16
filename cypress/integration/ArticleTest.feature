Feature: Post two articles

  Scenario: Post article #1
    Given User signs in as "testuser"
    And User navigates to the New Article page
    And User selects article "0" to input
    When User inputs article title
    And User inputs article description
    And User inputs article text
    And User inputs article tags
    And User publishes article
    Then User validates article

  Scenario: Post article #2
    Given User clicks on New Post
    Given User is logged in
    And User posts article "3"