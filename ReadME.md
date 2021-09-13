



# MCQ Assessment  Portal

This is an MCQ-based Online Assessment Portal made by Vinay Giri Goswami and Ayushi jain. The web application is made using `React js for frontend` and `Node js` as backend, `Mongodb` as Database and for the front-end part, we have used `HTML`, `CSS`, `JS`, and `Bootstrap`.

You can find the Portal here: https://assesment-quiz.netlify.app/
You can find the Admin Portal here: https://assesment-quiz.netlify.app/adminLogin

## Demonstration Video:

https://user-images.githubusercontent.com/68124405/133069157-ff72bfd6-1778-45e3-a924-39f1323e5904.mp4

## Tech Stack:

1. `Frontend` : HTML5,CSS3,Bootstrap,Javascript.
2. `Backend` : Node js.
3. `Database` : MongoDB.


## Specifications Assigned:

1. Assessment shall be MCQ pattern.✔️

2. There must be a question pool for the assessment.✔️

3. The questions displayed in the assessment shall be only from that pool.✔️

4. Number of questions in the pool shall be more than questions displayed.✔️

5. Set a time limit for the assessment (individual timer for a question/optional).✔️

6. Question order shall be shuffled for each candidate appearing.✔️

```
All specifications are satisfied ✔️
```

## Deployment:
- For Deployment, we have used `Heroku for backend` and `Netlify for forntend` .

- We created an app on `Heroku` and deployed our project into it.

- Hosted on `Netlify`.

- For database, we have used `MongoDB - Atlas` and integrated this database in our project.
 
- Mongodb database file named `assessment`  on Atlas.  
  

## Pages Functionality:
   1. `Login page` - to take the data of users attempting for assessment and to show the dynamic rules for assessment created by admin.
   2. `Question Page` - after reading all the instructions,user should start the test after entering the correct details , all valid users are prompted to give assessment.
   3. `Result Page` - after attempting the assessment, in case the user submits , the user will be redirected to this page on which they will get their resultant scores and if the user fails to answer the questions 
   4. `Admin Page` - This page is isolated from normal user environment, content of that page can be accessed by authorised users only.
   
- Assessment is of 15 minutes.
- Assessment will auto-submit in case of no submission before times up.
- Assessment can be submitted anytime and at any point of assessment, score will be calculated accordingly.
- There is no negative marking.
- 15 questions asked in shuffled order from a question pool of 30 questions.

## Admin Panel:
http://13.232.39.172/QuizApp/admin.html
 - Firstly user have to login to admin panel with valid credentials to prove his authenticity.
 - Only admins with valid credentials can access inner content of page.
 - For test purpose, one of the admin's username and password given below:
 ```
 username:  admin@walkover.in
 password:  admin
 ```
 - After successful login user redirected to results page where he can see results of all users attempted the assessment.
 - On Results page, records of all attempts displayed with details : `Name` , `Email ID` , `Score`.

## Project Setup: 

**Requirements:** Pre-installed `Netbeans` with `Apache Tomcat-Server` and `MySQL`.

1. Clone this repository in your local machine using the following command:

    ```git
    git clone https://github.com/kunal2899/AssessmentPortal.git
    ```

2. Open the cloned repository in `VS Code`.

3. Please make sure , you have Node js and MongDB installed on your machine. 
4. Then run the below given commands in the terminal of VS code '''bash
npm i
npm start
```bash


5. Now just **RUN** the Project.

6. If everything is done in order then this will open the website in your local machine at http://localhost:8080/ 

