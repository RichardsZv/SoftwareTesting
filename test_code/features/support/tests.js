import {NavigationTest} from "../testobjects/navigationTest";
import {LoginTest} from "../testobjects/loginTest";

class Tests {
    constructor(){
        this.navigationTest = new NavigationTest();
        this.loginTest = new LoginTest();
    }
}
export const tests = new Tests();