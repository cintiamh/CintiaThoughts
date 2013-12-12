import os
from time import sleep

from selenium import webdriver
from selenium.webdriver.common.keys import Keys


def test_search_google():
	# using Firefox Driver (no need to download it)
	driver = webdriver.Firefox()
	# open the url for Google.com
	driver.get("http://www.google.com")
	# check if you have the string "Google" in the title
	assert "Google" in driver.title
	# get the element by the id we got before
	elem = driver.find_element_by_id("gbqfq")
	# input the string selenium into the search box
	elem.send_keys("selenium")
	# send a return keypress so the search will be fired
	elem.send_keys(Keys.RETURN)
	assert "Google" in driver.title
	# never use sleep for your tests (it's not reliable)
	# sleep is used here just so you can see the search result :-)
	sleep(3)
	# closes the browser
	driver.close()

def test_search_google_chrome():
	# remember where you saved the chromedriver file?
	# in my case it's one level up from where the test file is
	chrome_driver = os.path.normpath(os.path.join(os.path.dirname(__file__), '..', 'chromedriver'))
	# You can set some optional values to the ChromeDriver.
	# Here I am just setting the window size to a fixed number
	options = webdriver.ChromeOptions()
	options.add_argument("--window-size=1024,1024")
	driver = webdriver.Chrome(chrome_driver, chrome_options=options)
	driver.get("http://www.google.com")
	assert "Google" in driver.title
	elem = driver.find_element_by_id("gbqfq")
	elem.send_keys("selenium")
	elem.send_keys(Keys.RETURN)
	assert "Google" in driver.title
	driver.close()
