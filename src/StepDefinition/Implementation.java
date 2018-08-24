package StepDefinition;


import java.io.FileInputStream;
import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.Properties;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.DataTable;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Implementation {
	
	public WebDriver driver=null;
	
	public Properties objectRepository_repo=null;
	
	public static Properties config_prop=null;
	
	

	@Given("^open the browser$")
	public void open_the_browser() throws Throwable {
		
		FileInputStream objectRepository = new FileInputStream(
				"C:\\Users\\Admin\\eclipse-workspace\\Adithya\\BehaviorDrivenDevelopmentApproach\\src\\Configurations\\ObjectRepo.properties");
		
		FileInputStream config = new FileInputStream(
				"C:\\Users\\Admin\\eclipse-workspace\\Adithya\\BehaviorDrivenDevelopmentApproach\\src\\Configurations\\config.properties");


		objectRepository_repo = new Properties();

		objectRepository_repo.load(objectRepository);
		
		config_prop = new Properties();
		
		config_prop.load(config);
		
		System.setProperty("webdriver.chrome.driver", "E:\\Selenium\\chromedriver.exe"); 
		 driver = new ChromeDriver();
	    
	}

	@When("^navigate to the application$")
	public void navigate_to_the_application() throws Throwable {
	 
		driver.manage().window().maximize();
		driver.get(config_prop.getProperty("URL"));
	
	}

	/*@When("^enter the user username$")
	public void enter_the_user_username() throws Throwable {
		
		driver.findElement(By.xpath(objectRepository_repo.getProperty(("landing.userName")))).sendKeys(config_prop.getProperty("Username"));
	    
	}

	@When("^enter the password$")
	public void enter_the_password() throws Throwable {
		
		driver.findElement(By.xpath(objectRepository_repo.getProperty(("landing.password")))).sendKeys(config_prop.getProperty("Password"));
	    
	}
*/
	@When("^click Login button$")
	public void click_Login_button() throws Throwable {
		
		driver.findElement(By.xpath(objectRepository_repo.getProperty(("landing.loginbtn")))).click();
	    
	}

	@Then("^application should navigate to the home page$")
	public void application_should_navigate_to_the_home_page() throws Throwable {
		 
		if(driver.findElements(By.xpath("//*[@id='ctl00_menu']/li[1]/a")).size()!=0)
		{
			System.out.println("Element is displayed");
		}
		else
		{
			System.out.println("Elemt not visible");
		}
		
		driver.close();
		driver.quit();
	}
	
	@When("^enter the user username \"([^\"]*)\"$")
	public void enter_the_user_username(String username) throws Throwable {
		
		driver.findElement(By.xpath(objectRepository_repo.getProperty(("landing.userName")))).sendKeys(username);
	   
	}

	@When("^enter the password \"([^\"]*)\"$")
	public void enter_the_password(String password) throws Throwable {
		
		driver.findElement(By.xpath(objectRepository_repo.getProperty(("landing.password")))).sendKeys(password);
	    
	}
	
	@When("^clic on Weborder$")
	public void clic_on_Weborder() throws Throwable {
	    
		driver.findElement(By.xpath(objectRepository_repo.getProperty(("Order")))).click();
	}

	@When("^Fill Quantity \"([^\"]*)\"$")
	public void fill_Quantity(String quantity) throws Throwable {
	    
		driver.findElement(By.xpath(objectRepository_repo.getProperty(("Quantity")))).sendKeys(quantity);
		
	}

	/*@When("^click on Process$")
	public void click_on_Process() throws Throwable {
	    
		driver.findElement(By.xpath(objectRepository_repo.getProperty(("Order")))).click();
	}*/

	@When("^Enter Customer name \"([^\"]*)\"$")
	public void enter_Customer_name(String custname) throws Throwable {
		
		driver.findElement(By.xpath(objectRepository_repo.getProperty(("Customer")))).sendKeys(custname);
	    
	}

	@When("^Enter Street \"([^\"]*)\"$")
	public void enter_Street(String street) throws Throwable {
	    
		driver.findElement(By.xpath(objectRepository_repo.getProperty(("Street")))).sendKeys(street);

	}

	@When("^Enter City \"([^\"]*)\"$")
	public void enter_City(String city) throws Throwable {
	    
		driver.findElement(By.xpath(objectRepository_repo.getProperty(("City")))).sendKeys(city);
	}

	@When("^Enter State \"([^\"]*)\"$")
	public void enter_State(String state) throws Throwable {
	    
		driver.findElement(By.xpath(objectRepository_repo.getProperty(("State")))).sendKeys(state);
	}

	@When("^Enter Zip \"([^\"]*)\"$")
	public void enter_Zip(String zip) throws Throwable {
		
		driver.findElement(By.xpath(objectRepository_repo.getProperty(("Zip")))).sendKeys(zip);
	}

	@When("^Select Card$")
	public void select_Card() throws Throwable {
	    
		driver.findElement(By.xpath(objectRepository_repo.getProperty(("Card")))).click();
		
	}

	@When("^Enter Card Number \"([^\"]*)\"$")
	public void enter_Card_Number(String cardnumber) throws Throwable {
	    
		driver.findElement(By.xpath(objectRepository_repo.getProperty(("CardNumber")))).sendKeys(cardnumber);
	}

	@When("^Enter Expiry date \"([^\"]*)\"$")
	public void enter_Expiry_date(String expdate) throws Throwable {
	    
		driver.findElement(By.xpath(objectRepository_repo.getProperty(("ExpiryDate")))).sendKeys(expdate);
		
		driver.findElement(By.xpath(objectRepository_repo.getProperty(("Processbtn")))).click();
	}


	@When("^click Login button again$")
	public void click_Login_button_again() throws Throwable {
	    
		driver.findElement(By.xpath(objectRepository_repo.getProperty(("landing.loginbtn1")))).click();
	}
	
	
	@When("^login to application$")
	public void login_to_application(DataTable data) throws Throwable {
		
	//	List<List<String>> allData=data.raw();
		
		
		List <Map<String,String>> allData=data.asMaps(String.class, String.class);
		
		driver.manage().window().maximize();
		driver.get(config_prop.getProperty("URL"));
		
	//	driver.findElement(By.xpath(objectRepository_repo.getProperty(("landing.userName")))).sendKeys(allData.get(1).get(0));
		
		driver.findElement(By.xpath(objectRepository_repo.getProperty(("landing.userName")))).sendKeys(allData.get(0).get("username"));
		
	//	driver.findElement(By.xpath(objectRepository_repo.getProperty(("landing.password")))).sendKeys(allData.get(1).get(1));
		
		driver.findElement(By.xpath(objectRepository_repo.getProperty(("landing.password")))).sendKeys(allData.get(0).get("password"));
		
		driver.findElement(By.xpath(objectRepository_repo.getProperty(("landing.loginbtn")))).click();
	    
	}

	@Then("^Login successful$")
	public void login_successful() throws Throwable {
		
		if(driver.findElements(By.xpath("//*[@id='ctl00_menu']/li[1]/a")).size()!=0)
		{
			System.out.println("Element is displayed");
		}
		else
		{
			System.out.println("Elemt not visible");
		}
		
		driver.close();
		driver.quit();
	   
	}
	
	@Before
	
	public void openDb() {
		
		System.out.println("DB opened");
	}
	
	@After
	public void closeDb()
	{
		System.out.println("Closing DB");
		
	}
	
	@Then("^verify if database is closed$")
	public void verify_if_database_is_closed() throws Throwable {
	    
		System.out.println("Db closed successfully");
	
	}


}
