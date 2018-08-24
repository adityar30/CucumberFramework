#Feature: Automating the SmartBear application

#Scenario: login to the application
#Given open the browser
#When navigate to the application
#When enter the user username
#When enter the password
#When click Login button
#Then application should navigate to the home page

Feature: Automating the SmartBear application

Background:

When open the browser
And navigate to the application

@smoke
Scenario Outline:
Given open the browser
When navigate to the application
When enter the user username "<username>"
When enter the password "<password>"
When click Login button
Then application should navigate to the home page

Examples:
|username|password|
|Tester|test|

@regression
Scenario Outline:
Given open the browser
When navigate to the application
When enter the user username "<username>"
When enter the password "<password>"
When click Login button
When clic on Weborder	
When Fill Quantity "<quan>"
#When click on Process
When Enter Customer name "<customer>"
When Enter Street "<street>"
When Enter City "<city>"
When Enter State "<state>"
When Enter Zip "<zip>"
When Select Card
When Enter Card Number "<cardnumber>"
When Enter Expiry date "<expirydate>"
Then application should navigate to the home page

Examples:
|username|password|quan|customer|street|city|state|zip|cardnumber|expirydate|
|Tester|test|100|Aditya|6th Street|Mumbai|Maharashtra|400709||431005109888|09/16|

@sanity
Scenario Outline: Login
And enter the user username "<username>"
And enter the password "<password>"
And click Login button
Then application should navigate to the home page
Then verify if database is closed

Examples:
|username|password|
|Tester|test|

@DataTableConcept

Scenario:
Given open the browser
When login to application
|username|password|
|Tester|test|
Then Login successful

