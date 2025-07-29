# Simple Node.js API's

This project is a basic Node.js REST API built with Express. It includes user List, creation, update, and deletion functionality and is used for API testing with Rest Assured.

## 🚀 Features

- Create User
- Update User
- Delete User
- JSON-based request/response
- Designed for testing API automation

---
How to clone 
1) git clone https://github.com/mithuntc/NodeJS_Login_CRUD_APIs.git
2) goto directory and hit **npm install**
3) to run the local server hit **npm run dev**
4) now server will run on **http://localhost:3000/**

**API End Points**

| Method     | Endpoint         | Description          |
| ------     | ---------------- | -------------------- |
| POST       | `/api/users`     | Create a new user    |
| PUT        | `/api/users/:id` | Update existing user |
| DELETE     | `/api/users/:id` | Delete a user        |
| Login      | `/api/login`     | Login                |
| User List  | `/api/users`     | Users List           |

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Sample Screenshots
1) login 
![Login_using_postman](https://github.com/user-attachments/assets/49d31d25-cd12-4383-bed2-5da96668e222)
2) Adding a user
![adding_user_postman](https://github.com/user-attachments/assets/1684d90f-a6ab-4cb9-b48d-7f240f8cf09d)
3) Updating a user
![updating the user](https://github.com/user-attachments/assets/b7b38336-be18-446e-82e2-2bedaa6d51a4)
4) Deleting a user
![user deleted](https://github.com/user-attachments/assets/fe265b50-5662-46df-bd73-685f428f8830)
5 User List
![userList](https://github.com/user-attachments/assets/153992f8-1f21-4d6f-8bbf-dd850cf7ce43)

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**Note**: **This repository must be cloned and run on your local system to test the APIs using Postman or Rest Assured (Automation).**
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Once this repository is cloned and running, we can use **https://github.com/mithuntc/NodeJS_CRUD_API_Test_RestAssured** to clone and run the automation tests. All the instructions are provided in the test documentation and the README.md file.
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

