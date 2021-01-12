1. Breaking the user interface into different components

The main to-do page will allow users to add a to-do item, search items in their to-do list, clear their to-do items, delete individual to-do items, and view their to-do items. Broken down into components, we have:
- App: contains the entirety of the to-do list and all the functionalities
- NewItemForm: creates new to-do list items. Comprised of a text input box and a submission button.
- ToDoList: displays and filters to-do list items. (If there are no to-do list items, displays another message, i.e. "no tasks")
- ToDoItem: displays one to-do list entry and delete button.


2. How should data flow through the application?

2.a. What type of data needs to be stored in the app?
- a list of to-do items in the form of a list of objects containing a string and an ID. This ID will be used when the user wants to individually delete an item.
- user's input when it searches for a to-do item.
- user's input when creating a new to-do item.
- a list of search results which filters the to-do items list, but doesn't edit it.

2.b. What type of data does each component need to access?
- App needs access to the user's search input, the list of to-do items, and user's input when creating a new item.
- ToDoList needs access to the list of to-do items, which is updated in App, as well as the search results.
- NewItemForm needs access to the user's input
- ToDoItem needs access to one to-do list item and it's ID at a time.