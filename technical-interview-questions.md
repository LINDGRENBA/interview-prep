Technical Interview Questions:

( Link to Non Technical Interview - STAR Method
https://www.learnhowtoprogram.com/internship-and-job-search/preparing-for-job-interviews/non-technical-interview )


What is encapsulation? Why is encapsulation so important in object-oriented programming?
What is abstraction? How can we use it to help encapsulate our code?
What is the difference between public and private methods? When should we use public methods and when should we use private methods?
What is separation of concerns? What are some techniques we can use to write well-separated code?
What is the difference between static and instance methods? When should we use one or the other?
What are the benefits of namespacing our classes?
What are getters and setters?
Why should we separate out our Main() method into another class?
 
Consider this code snippet from a lesson this week. What can you tell about the project it belongs to? Talk your partner through what's happening in each line.
...
        [HttpPost("/categories/{categoryId}/items")]
        public ActionResult Create(int categoryId, string itemDescription)
        {
            Dictionary<string, object> model = new Dictionary<string, object>();
            Category foundCategory = Category.Find(categoryId);
            Item newItem = new Item(itemDescription);
            foundCategory.AddItem(newItem);
            List<Item> categoryItems = foundCategory.Items;
            model.Add("items", categoryItems);
            model.Add("category", foundCategory);
            return View("Show", model);
        }
...
How do you pass multiple objects into a View?
What data types are there in C#? How are they different? Talk your partner through a potential use case for each.
Why do we use classes? What benefits do they offer?
What are the differences between a GET and POST request? When would you use one over the other?
What does it mean when we say a property or method is static? Why would one declare something static?
When would we use an instance method instead of a static method?
What is Razor, and how is it designed to save us time?
What is a RESTful route? What is the benefit of designing your routes to be RESTful?
How are RESTful routes declared in MVC? What do these routes correspond to?
What kind of objects can be stored within other objects?
What is Entity? How does it make our lives easier as developers?
What is the difference between eager loading and lazy loading?
What is an HTML helper method? List a few examples.
What is the difference between SqlCommand and SqlDataReader?
What is the difference between a primary key and a foreign key?
What has to be done to establish a one-to-many relationship in a database?
Why do we use a test database?
What does CRUD stand for?
What is the difference between a PATCH and POST request?
What is the purpose of RESTful routing? What benefit does it offer?
Discuss the difference between POST and GET. When do we use a POST route, when a GET?
Walk through each of the following types of HTTP requests, describe what they do, and when you would use each:
PATCH
POST
GET
DELETE
What is ViewBag? How does it work?
Why is it important that the ID ID value of objects in our application match the ID of that information's entry in our database?
Why do we override the equals operator when we are testing a database?
What is the virtual keyword? Why do we need to use it with Entity?
What is MySQLWorkbench? What functionality does it offer?
Talk about a project you created recently that you're proud of. What skills does it demonstrate? What challenges did you face during the course of development?
What are you looking forward to learning most?
Describe a challenge you faced in a group or partner project, and explain what you did to resolve this issue.
Walk through the differences between a one-to-many and a many-to-many database relationship.
Describe a use case for a many-to-many relationship. What about a one-to-many?
What is the purpose of a join table? What should be included in a join table? What shouldn't be?
What is the difference between Identity and Entity?
What is the difference between authentication and authorization?
What does REST stand for?
What is the benefit to following RESTful conventions when defining routes?
How can we call an async method in C#? Why would we want to?
What is a migration? How do migrations make it easier for developers to work together on a large codebase?
Walk through the differences between a one-to-many and a many-to-many database relationship.
Describe a use case for a many-to-many relationship. What about a one-to-many?
What is the purpose of a join table? What should be included in a join table? What shouldn't be?
What is the difference between Identity and Entity?
What is the difference between authentication and authorization?
What does REST stand for?
What is the benefit to following RESTful conventions when defining routes?
How can we call an async method in C#? Why would we want to?
What is a migration? How do migrations make it easier for developers to work together on a large codebase?
What does it mean to scaffold an application? What are the advantages and disadvantages of scaffolding?
What is the difference between an API application and an MVC application?
What is serialization? Why is it useful?
What is deserialization and why is it necessary in an MVC application?
Why should we use environmental variables with API calls?
What is JSON? Why is it a commonly used format for API calls?
Explain the differences between a few different status codes. Here are a few examples: 200, 401, 403, 500.
What is CORS? What are its advantages and disadvantages?
Why should we use versioning in an API application?
What is a JWT? Why would we use JWTs with an API application?
When would we use pagination in an API application? What benefits does it provide?
What are some of the key differences between functional and object-oriented programming?
What are some of the advantages of using functional programming over object-oriented programming?
What is immutability and why is it important?
What is the difference between imperative and declarative programming?
What are pure functions and why are they important to functional programming?
What does it mean when a function is a first-class citizen? Why is it useful for a language like JS to offer this functionality?
What is a closure? What are some of their use cases?
Demonstrate the differences between writing a loop and using recursion to solve a problem. What are the advantages of using recursion? What are potential disadvantages?
What is the difference between composition and classical inheritance? What are some of the advantages of composition?
What does it mean to mutate state? Why do we want to avoid this in functional programming?
What is the difference between a library and a framework? Can you list an example of each?
What does it mean when we say a programming library or language is declarative? How can we tell React components are declarative?
What is the difference between local and shared state?
What is the benefit of using JSX? Make a case for (or against) this technology.
What is unidirectional data flow?
How can we use callbacks to pass data between child components and parent components?
What are keys in React, and why are they important?
Describe React's reconciliation process used to update the DOM.
 

Questions asked during an actual interview

1. Tell us about yourself.
2. What has you looking for a new opportunity?
3. What do you know about the company?
4. Tell us what you know about React.
5. Classes vs Function Components - Which one do you prefer and why?
6. Tell me about two hooks that you enjoy using or use a lot of.
7. Tell me a little about what useEffect does.
8. Tell me about what useState does.
9. Why can passing more data than required be problematic?
10. When does a component re-render?
11. What are two of the main things in React that can cause a component to re-render?
12. Would passing more data allow for more or less opportunities to cause re-renders?
13. Have you done a lot of code reviews? Do you see a lot of value in those?
14. What does semantic HTML mean to you? What are some tags that can possibly be used more?
15. In a React app, what does performance mean to you?
16. What does load time mean to you?
17. What are some things that could affect a page's time to interactive?
18. Do you think applications that have more code or less code to run will load faster?
19. Do you know much about managing what goes into your .js bundle?
20. How do you think dependencies might reduce your bundle size?
21. When you're thinking about adding a dependency for a project, how do you evaluate the dependency?
22. Redux, Context API & useState - talk about use cases for each and how you would choose to use one vs the other?
23. Do you want to put everything in the store or do you want to be more selective? When would you decide to put something in your Redux store?
