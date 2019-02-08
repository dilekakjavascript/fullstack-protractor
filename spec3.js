//Pages
var home        = require("../Pages/home.page.js");
//var testData    = require("../TestData/data.json");

//DB Connection
var pgp         = require('pg-promise')(/*options*/);

describe('Login with DB Connection', () => {
    
    var connectionString = {
        host    : 'room-reservation-qa5.cxvqfpt4mc2y.us-east-1.rds.amazonaws.com',
        port    : 5432,
        database: 'room_reservation_qa5',
        user    : 'qa_user',
        password: 'Cybertek11!'
    }

    var db = pgp(connectionString);
    var arr=[];
    var username = '';
    var pass = '';

    it('Test Case 3- Login to the Website with DB Connection', () => {
        
        //Fetch the data from database

        db.any(`select firstname,lastname,email from users where email='efewtrell8c@craigslist.org'`)
        .then(function(result){
            //console.log(result.length);
            username = result[0].email;
            //console.log(username);
            pass = result[0].firstname.toLowerCase()+result[0].lastname.toLowerCase();
            //console.log(pass);

        }).catch(function(error){
            console.log(error);
        }).then(function(){
            //All UI automation Code

            browser.get("https://cybertek-reservation-qa5.herokuapp.com/");
            home.email.sendKeys(username);
            home.password.sendKeys(pass);
            home.signinButton.click();
            browser.sleep(2000);
            expect(home.title.getText()).toEqual("VA");
            browser.sleep(2000);



        })
        
        
        
        
        
        
        
        
        
        //Pre-test trials
        //Show all the users

        // db.any(`select * from users`)
        //     .then(function(result){
        //         arr=result;
        //     })
        //     .catch(function(error){
        //         console.log(error);
        //     })
        //     .then(function(){
        //         //All our automation code will be here
        //         console.log(arr);
        //     })

        // Show Email, Firstname, Lastname,Role and Team Name   

        
    // db.any(`SELECT firstname,lastname, email, role, name
    // FROM users inner join team
    // on users.team_id= team.id`)
    //         .then(function(result){
    //             arr=result;
    //         })
    //         .catch(function(error){
    //             console.log(error);
    //         })
    //         .then(function(){
    //             //All our automation code will be here
    //             console.log(arr);
    //         })


    });



});