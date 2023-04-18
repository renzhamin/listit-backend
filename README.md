# Rest api

| Endpoint /api/X  | Method | Required Data               | Response                                |
| ---------------- | ------ | --------------------------- | --------------------------------------- |
| /auth/register   | POST   | { email,username,password } | 200 or failure                          |
| /auth/login      | POST   | { username,password }       | { accessToken } or failure              |
| /auth/refresh    | GET    | refreshToken cookie         | { accessToken } and refreshToken cookie |
| /auth/logout     | DELETE | refreshToken cookie         | 200 or Invalid Refresh Token            |
| /auth/logout_all | DELETE | refreshToken cookie         | 200 or Invalid Refresh Token            |
| /list            | POST   | { title, content }          | create list                             |
| /lists           | GET    |                             | all lists of current user               |
| /list/:id        | GET    |                             | list with :id                           |
| /list/:id        | DELETE |                             | delete list with :id                    |
| /list/:id        | PUT    |                             | update list with :id                    |
