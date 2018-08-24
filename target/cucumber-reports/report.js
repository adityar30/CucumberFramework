$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Feature2.feature");
formatter.feature({
  "line": 2,
  "name": "Automating the SmartBear application again",
  "description": "",
  "id": "automating-the-smartbear-application-again",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.scenarioOutline({
  "line": 44,
  "name": "Login",
  "description": "",
  "id": "automating-the-smartbear-application-again;login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 43,
      "name": "@sanity2"
    }
  ]
});
formatter.step({
  "line": 45,
  "name": "open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "navigate to the application",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "enter the user username \"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "enter the password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "click Login button",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "application should navigate to the home page",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "verify if database is closed",
  "keyword": "Then "
});
formatter.examples({
  "line": 53,
  "name": "",
  "description": "",
  "id": "automating-the-smartbear-application-again;login;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 54,
      "id": "automating-the-smartbear-application-again;login;;1"
    },
    {
      "cells": [
        "adi",
        "tp"
      ],
      "line": 55,
      "id": "automating-the-smartbear-application-again;login;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 322861,
  "status": "passed"
});
formatter.scenario({
  "line": 55,
  "name": "Login",
  "description": "",
  "id": "automating-the-smartbear-application-again;login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    },
    {
      "line": 43,
      "name": "@sanity2"
    }
  ]
});
formatter.step({
  "line": 45,
  "name": "open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "navigate to the application",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "enter the user username \"adi\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "enter the password \"tp\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "click Login button",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "application should navigate to the home page",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "verify if database is closed",
  "keyword": "Then "
});
formatter.match({
  "location": "Implementation.open_the_browser()"
});
formatter.result({
  "duration": 4925539648,
  "status": "passed"
});
formatter.match({
  "location": "Implementation.navigate_to_the_application()"
});
formatter.result({
  "duration": 9897385294,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "adi",
      "offset": 25
    }
  ],
  "location": "Implementation.enter_the_user_username(String)"
});
formatter.result({
  "duration": 105909173,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tp",
      "offset": 20
    }
  ],
  "location": "Implementation.enter_the_password(String)"
});
formatter.result({
  "duration": 83957603,
  "status": "passed"
});
formatter.match({
  "location": "Implementation.click_Login_button()"
});
formatter.result({
  "duration": 649808465,
  "status": "passed"
});
formatter.match({
  "location": "Implementation.application_should_navigate_to_the_home_page()"
});
formatter.result({
  "duration": 1048898723,
  "status": "passed"
});
formatter.match({
  "location": "Implementation.verify_if_database_is_closed()"
});
formatter.result({
  "duration": 94934,
  "status": "passed"
});
formatter.after({
  "duration": 59868,
  "status": "passed"
});
formatter.uri("SmartBearApplication.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Feature: Automating the SmartBear application"
    },
    {
      "line": 3,
      "value": "#Scenario: login to the application"
    },
    {
      "line": 4,
      "value": "#Given open the browser"
    },
    {
      "line": 5,
      "value": "#When navigate to the application"
    },
    {
      "line": 6,
      "value": "#When enter the user username"
    },
    {
      "line": 7,
      "value": "#When enter the password"
    },
    {
      "line": 8,
      "value": "#When click Login button"
    },
    {
      "line": 9,
      "value": "#Then application should navigate to the home page"
    }
  ],
  "line": 11,
  "name": "Automating the SmartBear application",
  "description": "",
  "id": "automating-the-smartbear-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 56,
  "name": "Login",
  "description": "",
  "id": "automating-the-smartbear-application;login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 55,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 57,
  "name": "enter the user username \"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "enter the password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "click Login button",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "application should navigate to the home page",
  "keyword": "Then "
});
formatter.step({
  "line": 61,
  "name": "verify if database is closed",
  "keyword": "Then "
});
formatter.examples({
  "line": 63,
  "name": "",
  "description": "",
  "id": "automating-the-smartbear-application;login;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 64,
      "id": "automating-the-smartbear-application;login;;1"
    },
    {
      "cells": [
        "Tester",
        "test"
      ],
      "line": 65,
      "id": "automating-the-smartbear-application;login;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 900591,
  "status": "passed"
});
formatter.background({
  "line": 13,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 15,
  "name": "open the browser",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "navigate to the application",
  "keyword": "And "
});
formatter.match({
  "location": "Implementation.open_the_browser()"
});
formatter.result({
  "duration": 3510330704,
  "status": "passed"
});
formatter.match({
  "location": "Implementation.navigate_to_the_application()"
});
formatter.result({
  "duration": 4690954668,
  "status": "passed"
});
formatter.scenario({
  "line": 65,
  "name": "Login",
  "description": "",
  "id": "automating-the-smartbear-application;login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 55,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 57,
  "name": "enter the user username \"Tester\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "enter the password \"test\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "click Login button",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "application should navigate to the home page",
  "keyword": "Then "
});
formatter.step({
  "line": 61,
  "name": "verify if database is closed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Tester",
      "offset": 25
    }
  ],
  "location": "Implementation.enter_the_user_username(String)"
});
formatter.result({
  "duration": 112243240,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 20
    }
  ],
  "location": "Implementation.enter_the_password(String)"
});
formatter.result({
  "duration": 87475293,
  "status": "passed"
});
formatter.match({
  "location": "Implementation.click_Login_button()"
});
formatter.result({
  "duration": 2650824943,
  "status": "passed"
});
formatter.match({
  "location": "Implementation.application_should_navigate_to_the_home_page()"
});
formatter.result({
  "duration": 3282144791,
  "status": "passed"
});
formatter.match({
  "location": "Implementation.verify_if_database_is_closed()"
});
formatter.result({
  "duration": 73980,
  "status": "passed"
});
formatter.after({
  "duration": 52171,
  "status": "passed"
});
});