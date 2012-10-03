package bdd.calculator;
import cucumber.annotation.en.Given;
import cucumber.annotation.en.Then;
import cucumber.annotation.en.When;

import static junit.framework.Assert.assertEquals;

public class CalculatorStepsDefinition{
    
    Calculator calculator;
    int a;
    int b;
    int add,sub,mul,div;
    @Given("^I have a calculator$")
    public void createCalculatorAddition(){
        calculator = new Calculator();
    }
    
    // adition
    @When("^I enter (\\d+) plus (\\d+)$")
    public void computeAdder(int a, int b){
        add = calculator.add(a,b);
    }
    
    @Then("^it should print sum is (\\d+)$")
    public void printAddition(int c){
        assertEquals(c,add);
    }
     
    @When("^I enter (\\d+) minus (\\d+)$")
    public void computeSubstraction(int a, int b){
        sub = calculator.substract(a,b);
    }
    
    @Then("^it should print substraction is (\\d+)$")
    public void printSubstraction(int d){
        //sub = calculator.substract();
        assertEquals(d,sub);
        
    }
    
    @When("^I enter (\\d+) multiplied by (\\d+)$")
    public void I_enter_and(int arg1, int arg2){
        mul = calculator.multiply(arg1,arg2);
    }

    @Then("^it should print multiplication is (\\d+)$")
    public void printMul(int arg1) throws Throwable {
        assertEquals(arg1,mul);
    }
    
}