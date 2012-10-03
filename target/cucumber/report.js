$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('bdd\calculator\Calculator.feature');
formatter.feature({
  "id": "calculator",
  "description": "",
  "name": "Calculator",
  "keyword": "Feature",
  "line": 1
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 2,
  "type": "background"
});
formatter.step({
  "name": "I have a calculator",
  "keyword": "Given ",
  "line": 3
});
formatter.match({
  "location": "CalculatorStepsDefinition.createCalculatorAddition()"
});
formatter.result({
  "duration": 300912335,
  "status": "passed"
});
formatter.scenario({
  "id": "calculator;addition",
  "description": "",
  "name": "Addition",
  "keyword": "Scenario",
  "line": 4,
  "type": "scenario"
});
formatter.step({
  "name": "I enter 5 plus 2",
  "keyword": "When ",
  "line": 5
});
formatter.step({
  "name": "it should print sum is 7",
  "keyword": "Then ",
  "line": 6
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 8
    },
    {
      "val": "2",
      "offset": 15
    }
  ],
  "location": "CalculatorStepsDefinition.computeAdder(int,int)"
});
formatter.result({
  "duration": 4215941,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 23
    }
  ],
  "location": "CalculatorStepsDefinition.printAddition(int)"
});
formatter.result({
  "duration": 3742989,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 2,
  "type": "background"
});
formatter.step({
  "name": "I have a calculator",
  "keyword": "Given ",
  "line": 3
});
formatter.match({
  "location": "CalculatorStepsDefinition.createCalculatorAddition()"
});
formatter.result({
  "duration": 47893,
  "status": "passed"
});
formatter.scenario({
  "id": "calculator;substraction",
  "description": "",
  "name": "Substraction",
  "keyword": "Scenario",
  "line": 8,
  "type": "scenario"
});
formatter.step({
  "name": "I enter 6 minus 2",
  "keyword": "When ",
  "line": 9
});
formatter.step({
  "name": "it should print substraction is 4",
  "keyword": "Then ",
  "line": 10
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 8
    },
    {
      "val": "2",
      "offset": 16
    }
  ],
  "location": "CalculatorStepsDefinition.computeSubstraction(int,int)"
});
formatter.result({
  "duration": 186872,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 32
    }
  ],
  "location": "CalculatorStepsDefinition.printSubstraction(int)"
});
formatter.result({
  "duration": 123583,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 2,
  "type": "background"
});
formatter.step({
  "name": "I have a calculator",
  "keyword": "Given ",
  "line": 3
});
formatter.match({
  "location": "CalculatorStepsDefinition.createCalculatorAddition()"
});
formatter.result({
  "duration": 49604,
  "status": "passed"
});
formatter.scenario({
  "id": "calculator;multiplication",
  "description": "",
  "name": "Multiplication",
  "keyword": "Scenario",
  "line": 12,
  "type": "scenario"
});
formatter.step({
  "name": "I enter 3 multiplied by 4",
  "keyword": "When ",
  "line": 13
});
formatter.step({
  "name": "it should print multiplication is 12",
  "keyword": "Then ",
  "line": 14
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 8
    },
    {
      "val": "4",
      "offset": 24
    }
  ],
  "location": "CalculatorStepsDefinition.I_enter_and(int,int)"
});
formatter.result({
  "duration": 194141,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 34
    }
  ],
  "location": "CalculatorStepsDefinition.printMul(int)"
});
formatter.result({
  "duration": 116742,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 2,
  "type": "background"
});
formatter.step({
  "name": "I have a calculator",
  "keyword": "Given ",
  "line": 3
});
formatter.match({
  "location": "CalculatorStepsDefinition.createCalculatorAddition()"
});
formatter.result({
  "duration": 57729,
  "status": "passed"
});
formatter.scenario({
  "id": "calculator;dividing",
  "description": "",
  "name": "Dividing",
  "keyword": "Scenario",
  "line": 16,
  "type": "scenario"
});
formatter.step({
  "name": "I enter 4 divided by 2",
  "keyword": "When ",
  "line": 17
});
formatter.step({
  "name": "it should print division is 2",
  "keyword": "Then ",
  "line": 18
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});