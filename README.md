# userList_React

### Live Link : [https://strong-babka-bb0e75.netlify.app/](https://strong-babka-bb0e75.netlify.app/)

### Intoduction

- Continuation of Practical-4
- The User List App displays a list of users with their basic details, such as profile,status,access.
- When the user hovers over a user profile, a card with more details about the user will be displayed on the right-hand side of the screen.
- Server side fetching of data using pageNumber

### Features :

- Displays a list of users with basic details fetched via API.
- Displays a card with more details about the user when there is a hover event on a user item.
- The card is displayed on the right-hand side of the screen.
- The first user item in the list has "Active" as status and "owner" as access, with a lock icon displayed next to the access field.
- On changing status from active to inactive, The change will be seen on card as well.
- For Users with active status Green symbol is displayed in card.
- For Users with inactive status Red symbol is displayed in card.
- Responsiveness is added.
- Pagination is added using react-paginate
- for async code of API fetching, Action creator Thunk is used.
- Error handling is done.
- Loader for loading state of API fetching is added.

### Dependencies used:

- react
- react-dom
- react-feather
- @Reactjs/toolkit
- react-redux
- react-paginate
- react-loader-spinner

### Components :

- UserList : contains table with list of all users
- User : Row of table, one user's data
- UserProfile : User's basic details such as name,profile image,email id
- UserCard : User's all data , displayed when row of that user gets hovered over.
- Error : Error handling is done.

### Style modules :

for each component seperate style modules are there in src/components/Component-name/Component-name.module.css

- UserList.module.css
- User.module.css
- UserProfile.module.css
- UserCard.module.css

### Folder Structure :

        .
        ├── index.html
        ├── package.json
        ├── package-lock.json
        ├── public
        ├── README.md
        ├── src
        │   ├── App.css
        │   ├── App.jsx
        │   ├── assets
        │   │   ├── errorImg.jpg
        │   │   ├── favicon.ico
        │   │   └── snapshot.png
        │   ├── components
        │   │   ├── Error
        │   │   │   └── Error.jsx
        │   │   ├── User
        │   │   │   ├── User.jsx
        │   │   │   └── User.module.css
        │   │   ├── UserCard
        │   │   │   ├── UserCard.jsx
        │   │   │   └── UserCard.module.css
        │   │   ├── UserList
        │   │   │   ├── UserList.jsx
        │   │   │   └── UserList.module.css
        │   │   └── UserProfile
        │   │       ├── UserProfile.jsx
        │   │       └── UserProfile.module.css
        │   ├── main.jsx
        │   └── store
        │       ├── cardSlice.js
        │       ├── hoverSlice.js
        │       ├── index.js
        │       └── userSlice.js
        └── vite.config.js

### SnapShot

![snapshot of practical](./src/assets/snapshot.png)
