# PHASE-4-PROJECT: YOUDEMY

<h3> What is it? </h3>
Youdemy is a fullstack application which allows students to sign up/sign in and enrol in various courses. 
It was built as part of my software engineering course from Academy Xi (Flatiron School).
Keep in mind that the courses from the db:seeds file are (very sadly) not real and you won't actually learn the Kamehameha technique. However, if you do learn it, please let me know.  

<h3> What technologies does it use? </h3>
Frontend: React + Material UI

Backend: 
* Ruby on Rails 7 supplying the API 
* Ruby 3.2.2

<h3> Running the Application</h3>
Prior to running the application locally, ensure to have Postgresql installed. 
Once installed, ensure that the database is running (unlike SQLite, Postgresql does not start itself by default)

To run the application, please cd into the repo and run:
- bundle install
- npm install --prefix client
- rails db:create
- rails db:seed
- rails s
- in another terminal window run: npm start --prefix client

*please ensure your CORS settings are not blocking any requests
