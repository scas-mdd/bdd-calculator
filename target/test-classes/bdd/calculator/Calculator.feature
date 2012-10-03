Feature: Calculator
Background:
    Given I have a calculator
    Scenario: Addition 
        When I enter 5 plus 2
        Then it should print sum is 7
    
    Scenario: Substraction
        When I enter 6 minus 2
        Then it should print substraction is 4
    
    Scenario: Multiplication
        When I enter 3 multiplied by 4
        Then it should print multiplication is 12
    
    Scenario: Dividing
        When I enter 4 divided by 2
        Then it should print division is 2
    