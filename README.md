# WDV3322_O_Setting_Up_Your_Backend_API
 dev-1.0.0

 You have already passed both Server Side Languages, and Advanced Server Side Languages. You are expected to understand the HTTP protocol & how it relates to backend services such as NodeJS/Express applications. 

This lesson is not to show you how to code a backend API since you have already been exposed to that in previous course. However this course will learn how to do the following:

# **Using Express middlewares to validate user input
Exposure to basic regular expressions (RegEx) for validation purposes
How to modularize your code by making your own NPM packages/libraries
How to write code/unit tests for NodeJS/Express applications using Jest (Javascript testing framework)
Write effective backend API documentation using Swagger UI
Backend API Requirements
So we will start this week off by building a backend API that has exactly one endpoint. Simple enough? This one endpoint will accept 4 different POST fields to create/signup a user. These four fields will be as follows: **

# **email - Email address of the user attempting to signup
# **phone - Phone number of the user attempting to signup
# **birthday - Birthdate of the user attempting to signup
# **password - Password of the user attempting to signup

There is no requirement for this user information to be stored in a database. So that really simplifies our project this month. 

The API endpoint route should be located at the URL path "/signup" and the Express application should be running on port 3000 as usual. The response from this API should be in JSON format. It should return all of the user's signup details (with the password masked). Please see the following code for how this endpoint should respond.

How to test your API
If all goes well, your backend API should respond properly to the following cURL command in your terminal: 

```javascript
curl -X POST --data "email=jworkman@fullsail.com&phone=407-555-5555&birthday=12/12/1980&password=asdf1234" http://localhost:3000/signup
```

If you have setup everything properly you should get the following response from your backend API: 

```javascript
{"message":"User has sucessfully signed up!","user":{"email":"jworkman@fullsail.com","phone":"407-555-5555","birthday":"12/12/1980","password":"●●●●●●●●●●●"}}

```

```javascript
const signup = (req, res) => {
	const { email, phone, birthday, password } = req.body
	res.json({
		message: "User has sucessfully signed up!",
		user: { email, phone, birthday, password: '●●●●●●●●●●●' }
	})
}
module.exports = { signup }
```