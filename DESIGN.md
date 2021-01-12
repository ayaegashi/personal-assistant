1. Breaking the user interface into different components

The main to-do page will allow users to add a to-do item, search items in their to-do list, clear their to-do items, delete individual to-do items, and view their to-do items. Broken down into components, we have:
- ToDoPage: contains the entirety of the to-do list and all the functionalities
- AddToDo: creates new to-do list items. Comprised of a text input box and a submission button.
- TextInput: text input box.
- Button: button used for submitting new to-do item, for clearing to-do items, etc.
- SearchItems: receives user input for searching to-do list items.
- ListTable: displays and filters to-do list items. (If there are no to-do list items, displays another message, i.e. "no tasks")
- ToDoItem: displays one to-do list entry and delete button.


2. How should data flow through the application?

2.a. What type of data needs to be stored in the app?
- a list of to-do items in the form of a list of objects containing a string and an ID, where the ID is the order in which the item was created. This ID will be used when the user wants to individually delete an item.
- user's input when it searches for a to-do item.
- user's input when creating a new to-do item.

2.b. What type of data does each component need to access?
- the list of to-do items needs to be accessible to ListTable, and thus also to ToDoPage
- user's search input needs to be accessible to ListTable and ToDoPage
- user's input for new to-do items needs to be accesible to ListTable, ToDoPage, and ToDoItem