package TestRunner;

import java.io.File;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.cucumber.listener.Reporter;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
//@CucumberOptions(features="Feature",glue= {"StepDefinition"},tags= {"@sanity2 , @sanity"},plugin= { "pretty", "html:target/cucumber-reports"}, monochrome=true)
@CucumberOptions(features="Feature",glue= {"StepDefinition"},tags= {"@sanity2 , @sanity"},plugin = {"com.cucumber.listener.ExtentCucumberFormatter:output/report.html"}, monochrome=true)


public class Runner {
	
	@AfterClass
	
	public static void tearDown()
	{
		//Reporter.loadXMLConfig(new File("src/test/resources/extent-config.xml"));
        Reporter.setSystemInfo("user", System.getProperty("user.name"));
        Reporter.setSystemInfo("os", "Mac OSX");
        Reporter.setTestRunnerOutput("Sample test runner output message");
		
	}
	



	

}
