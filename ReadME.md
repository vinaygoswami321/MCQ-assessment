




# MCQ Assessment  Portal

This is an MCQ-based Online Assessment Portal made by Vinay Giri Goswami and Ayushi jain. The web application is made using `React js` and `Node js` as backend, `Mongodb` as Database and for the front-end part, we have used `HTML`, `CSS`, `JS`, and `Bootstrap`.

You can find the Portal here: https://assesment-quiz.netlify.app/

You can find the Admin Portal here: https://assesment-quiz.netlify.app/adminLogin

## Demonstration Video:


https://user-images.githubusercontent.com/68124405/133074713-2eaf1209-f045-4587-bf81-9dbe1e35e016.mp4

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
   3. `Result Page` - after attempting the assessment, in case the user submits , the user will be redirected to this page on which they will get their resultant scores and if the user fails to answer all the questions in the given time duration he/she will be prompted with an alert message and will be redirected to the login page.
   4. `Admin Page` - this page can't be accessed by normal user , content of that page can be accessed by authorised users only.
   
- The number of the question is set by the admin and the admin can set the time and number of questions that he/she choose from the question pool.
- Assessment will auto-submit in case of no submission before times up.
- There is no negative marking.
- Number of questions set by admin will be asked in shuffled order from a question pool of questions he/she selected.

## Admin Panel:
ttps://assesment-quiz.netlify.app/adminLogin
 - Firstly user have to login to admin panel with valid credentials to prove his authenticity.
 - Only admins with valid credentials can access inner content of page.
 - For test purpose, one of the admin's username and password given below:
 ```
 username:  admin@gmail.com
 password:  admin1234
 ```
 - After successful login user redirected to results page where he can see results of all users attempted the assessment.
 - On All user  page, records of all attempts displayed with details : `Name` , `Email ID` , `Score`.
 - The admin can select the desired question from all the questions available in the question bank and make a pool of question from it.
 - The admin can set the number of questions that will appear in the test and set the time for the test. 
 - The admin can add new questions to the question bank using add question option.

## Project Setup: 

**Requirements:** Pre-installed `VS code` with `Node js` and `MongoDB`.

1. Clone this repository in your local machine using the following command:

    ```git
    git clone https://github.com/vinaygoswami321/MCQ-assessment.git
    ```

2. Open the cloned repository in `VS Code`.

3. Please make sure , you have Node js and MongDB installed on your machine. 
4. Then run the below given commands in the terminal of VS code '''bash
npm i
npm start
```bash


5. Now just **RUN** the Project.

6. If everything is done in order then this will open the website in your local machine at http://localhost:3000/ 

