const express = require('express');     // inserted the express package
const mongoose = require('mongoose');    // DB Package
const bodyParser = require('body-parser'); // Body Parser (package): Accessing the POST Method
const cors = require('cors');           // importing CORS policies (Connect Backend with Frontend)
const dotenv = require('dotenv');       // Environmental File
const passport = require('passport');   // For Social Media Login
const cookieSession = require('cookie-session');

const app = express();                  // assigning the express component in app variable

const routes = require('./Routes/index');
const paymentRoutes = require('./Controllers/payment');
const passportSetup = require('./Controllers/passport');      // Social Media Login Setup
const authRoute = require('./Controllers/auth');          // Social Media Login Routing Part

app.use(cookieSession({ name:"Session", keys:["edureka"], makAge: 24*60*60*1000 }));

const corsOptions = {
    origin:'http://localhost:3000', 
    credentials:true,            
    optionSuccessStatus:200
}

dotenv.config();

app.use(cors(corsOptions));
app.use(bodyParser.json()); 
app.use(passport.initialize());
app.use(passport.session());

app.use('/', routes);                       // If any requests are made it redirects to routes.
app.use('/api/payment', paymentRoutes);    // If any payment requests are made it redirects to paymentRoutes.
app.use('/auth', authRoute);                // If any social media authentication requests are made it redirects to authRoute.


const port = 5500;
const hostname = 'localhost';






//database connection with (mongo db).
const dburl ='mongodb://127.0.0.1:27017/zomato-78';   //mongodb shell conection (local network)  //mongoose link of your system mongodb url link in terminal

const atlasdburl = 'mongodb+srv://mohammedawez:811KkMdUXH2LyyAr@cluster0.6l7ambw.mongodb.net/zomato-78?retryWrites=true&w=majority'     //mongodb atlas (website network).

//sample show of use url :-   mongodb+srv://<usernamr>:<password>@cluster0.6l7ambw.mongodb.net/<databasename>?retryWrites=true&w=majority

mongoose.connect(atlasdburl,{useNewurlparser:true,useUnifiedTopology:true})    //(useNewurlparser:true) means:-if we change url link then also it runs,as now we change into zomato-78, and (useUnifiedTopology:true) means:- any one can access the data. 





.then(res => {
    app.listen(port,hostname,() => {
        console.log(`server is running at ${hostname}:${port}`);             //this is use to in local host details.
    });
})
.catch(err => console.log(err));     //This (.Then & .catch ) is use to see error in console






