# Binder.io
    
Milestone Project II for NJIT Coding Bootcamp, created by Darius M, Alex C, Christian C, Ella G

## Note Taking App

Binder.io is a notetaking app that allows basic CRUD functionality.


### Features

Binders, Incomplete-Status, CRUD

### Bonus Features

Task-List, Collaborative note-taking, extra styling

## Data Models

Models for SQL Tables

### User Table

| UserId | UserName | Password | DisplayName |

### UserBinders

| BinderId | BinderTitle | UserId | DateCreated |

### Notes

| NoteId | BinderId | NoteTitle | NoteContent | DateModified |

### Routes

| Controller | Method | Route | Description|
| --- | --- | --- | --- |
| Notes | Get | 'notes/' | Fetches list of notes |
| Notes | Get | 'notes/:id' | Fetches specific note |
| Notes | Get | 'notes/binder/:binderId' | Notes for specific user|
| Notes | Post | 'notes/' | Creates a new note |
| Notes | Put | 'notes/:id' | Modifies an existing note |
| Notes | Delete | 'notes/:id' | Deletes an existing note |
| --- | --- | --- | --- |
| UserBinders | Get | 'userbinders/' | Fetches list of binders |
| UserBinders | Get | 'userbinders/:id' | Fetches specific binder |
| UserBinders | Get | 'userbinders/user/userId' | Fetches binders for specific user |
| UserBinders | Post | 'userbinders/' | Creates a new binder |
| UserBinders | Put | 'userbinders/:id' | Modifies an existing binder |
| UserBinders | Delete | 'userbinders/:id' | Deletes an existing binder |
| --- | --- | --- | --- |
| UserTable | Get | 'usertables/' | Fetches list of users |
| UserTable | Get | 'usertables/:id' | Fetches specific user |
| UserTable | Post | 'usertables/' | Creates a new user |
| UserTable | Put | 'usertables/:id' | Modifies an existing user |
| UserTable | Delete | 'usertables/:id' | Deletes an existing user |

## Tasks
| Date | Contributor | Summary |
| ---- | ----------- | ------- |
| Sun. 4/24 | Darius | ReadMe file, Initial Commit. |
| Sun. 5/1 | Alex, Ella | Controllers, Models, Deployment |
| Tues. 5/3 | Alex, Ella | Seeders, Migrations, Debugging | 

## Project Planning
| Date | Goals |
| ---- | ----- |
| Sun. 4/24 | Create GitHub repository. Add collaborators. Complete README.md, tasks sectioned out |
| Tues. 4/26 | Ensure understanding of version control through Git, Basic Models for SQL Database, Skeleton of the website |
| Thurs. 4/28 | Integration of the front-end |
| Tues. 5/3 | Wrap everything up and check for any errors |


 

,

.

