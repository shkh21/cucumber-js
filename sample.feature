Feature: Cucumber Testing

    Testing of library app

    Scenario: Test email field
    Given User is on library app page
    When User enter email in email field
    And Clicks on invitation button
    Then Display success message