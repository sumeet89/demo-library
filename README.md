# demo-library

The app is live at https://sumeets-library.herokuapp.com/

# How to run locally
The application is standalone Spring Boot application built by Maven. The repository can be cloned and built using Maven with IDE of choice (I used Eclipse), you can simply run LibraryApplication.java to have it running in your machine. The username-password is admin-admin. 

The database layer is in-memory H2 database, so it gets cleaned up as soon as the application is stopped.

# Note
1. I deliverately didn't add any automated tests, I would like to enhance it with Selenium tests when I have some free time.
2. I haven't yet added roles to the actions like save books and delete books, but plan to do so.
