
import {Given,When,Then} from "cypress-cucumber-preprocessor/steps"

Given('Ok', function () {
    return console.log("GIVEN está funcionando");
  });



When('ko', function () {
    return console.log('When aqui');
});


Then('NOK', function () {
    return console.log('Thennnn');
});