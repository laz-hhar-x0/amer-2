
const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const port = 3000;


app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');



const lazhar = require("./models/articleSchema");

const nodemailer = require("nodemailer");





mongoose.connect("mongodb://lazhhar45:Lazhar123@cluster0-shard-00-00.50x18.mongodb.net:27017,cluster0-shard-00-01.50x18.mongodb.net:27017,cluster0-shard-00-02.50x18.mongodb.net:27017/?ssl=true&replicaSet=atlas-ysqnqs-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    app.listen(port, () =>{
        console.log(`Server is running successfully With "  DATA BASE "  : http://localhost:${port}/`);
    });
})
.catch((err) => {
    console.log(err);
});









// ----------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------
// --------  GET request -----------------------------------------------------------------------------


app.get("/", (req, res) => {
    
    res.render('open', { } );
});

app.get('/Contact',(req,res)=>{

  lazhar.find()
    .then((result ) => {
        res.render("contact.ejs", {arr: result })
    })
    .catch((err) => {
      console.log(err)
    });

});

app.get('/Contact2',(req,res)=>{

  lazhar.find()
    .then((result ) => {
        res.render("contact2.ejs", {arr: result })
    })
    .catch((err) => {
      console.log(err)
    });

});

app.get("/Login",  (req, res) => {
      res.render("LogIn");
});

app.get("/home", (req, res) => {

    lazhar.find()
    .then((result ) => {
        res.render("home", {arr: result })
    })
    .catch((err) => {
      console.log(err)
    });

});

app.get("/CreatCompte", (req, res) => {

    lazhar.find()
    .then((result ) => {
        res.render("CreatCompte", {arr: result })
    })
    .catch((err) => {
      console.log(err)
    });

});

app.get("/edit", (req, res) => {
    lazhar.find()
    .then((result ) => {
        res.render("edit", {arr: result })
    })
    .catch((err) => {
      console.log(err)
    });

});

app.get("/group", (req, res) => {

    lazhar.find()
    .then((result ) => {
        res.render("group", {arr: result })
    })
    .catch((err) => {
      console.log(err)
    });

});

app.get("/truck", (req, res) => {
    lazhar.find()
    .then((result ) => {
        res.render("truck", {arr: result })
    })
    .catch((err) => {
      console.log(err)
    });
});

app.get("/phone", (req, res) => {
    lazhar.find()
    .then((result ) => {
        res.render("phone", {arr: result })
    })
    .catch((err) => {
      console.log(err)
    });
});

app.get("/cars", (req, res) => {
    lazhar.find()
    .then((result ) => {
        res.render("cars", {arr: result })
    })
    .catch((err) => {
      console.log(err)
    });
});

app.get("/camio", (req, res) => {
  lazhar.find()
  .then((result ) => {
      res.render("camio", {arr: result })
  })
  .catch((err) => {
    console.log(err)
  });
});

app.get("/moto", (req, res) => {
  lazhar.find()
  .then((result ) => {
      res.render("moto", {arr: result })
  })
  .catch((err) => {
    console.log(err)
  });
});

app.get("/briefcase", (req, res) => {
    lazhar.find()
    .then((result ) => {
        res.render("briefcase", {arr: result })
    })
    .catch((err) => {
      console.log(err)
    });
});

app.get("/information", (req, res) => {
  lazhar.find()
  .then((result ) => {
      res.render("information", {arr: result })
  })
  .catch((err) => {
    console.log(err)
  });
});

app.get("/groupDahan", (req, res) => {
  lazhar.find()
  .then((result ) => {
      res.render("groupDahan", {arr: result })
  })
  .catch((err) => {
    console.log(err)
  });
});

app.get("/groupSaback", (req, res) => {
  lazhar.find()
  .then((result ) => {
      res.render("groupSaback", {arr: result })
  })
  .catch((err) => {
    console.log(err)
  });
});

app.get("/groupHalak", (req, res) => {
  lazhar.find()
  .then((result ) => {
      res.render("groupHalak", {arr: result })
  })
  .catch((err) => {
    console.log(err)
  });
});

// -----------------------------------------------------------------------------------------------------



// ----------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------
// --------  POST request -----------------------------------------------------------------------------


app.post("/SendData", (req, res) => {
    const Lazhar = new lazhar(req.body);
  
    Lazhar
    .save()
      .then( result => {
        console.log("------------------  add informaion is correct ----------------------------");
        res.redirect("/Login");
      })
      .catch( err => {
        console.log(err);
      });
});

app.post('/Contact', (req, res) => {
    console.log("\n-------------  User input this sDATA : --------------------\n");
    console.log(req.body);

      var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',  
        port: 465,
        secure: true,
        service : 'gmail',
        auth: {
                  user: 'appaplication.3@gmail.com', // Your Gmail account
                  pass: 'ncgg wdbs zluy ohly' // Your app-specific password if using 2FA, or Gmail password if no 2FA
              },
        tls: {
          rejectUnauthorized: false
      }
      })


      const mailOptions = {
        from: req.body.email,
        to: 'lazhhar.2@gmail.com',
        subject: `client name : (  ${req.body.name} ) `,
        text : `client number : ${req.body.subject}  \n ${req.body.message}` 
      }
       transporter.sendMail(mailOptions,(error,info)=>{
        if(error){
            console.log("\n \t   ---------------- \n \t  erooor in send mail \n\t   ----------------")
            console.log(error)
        }else{
            console.log('\t-------------------- \n \t Email sent : \n' + info.response);
            res.send('success')
        }
      })
});

// app.post("/Login", async (req, res) => {
//   try {
//     console.log("--------------------------------------------------\n--------------------------------------------------");

//     const { email, password } = req.body;

//     // Retrieve user using email
//     if (user = await lazhar.findOne({ mailll: email })) {
      
    

//       console.log(`This is your DATA : ${user ? `${user.mailll} : ${user.passss}` : 'User not found'}`);
//       console.log(`This is your USER : ${email} : ${password}`);

//       // Check if the password matches
//         if (user && user.passss === password) {

//           const userName=  user.nameee;
//           console.log(userData) 



//           res.json({ success: true, redirectUrl: "/home"});  
//         } else {
//           res.json({ success: false, message: " ❌ كلمة المرور غير صحيحة " });
//         }
//       }else{
//         res.json({ success: false, message: " ❌📩 البريد  غير صحيح" });
//       }
//   }catch (err) {
//         console.error(err);
//         res.status(500).json({ success: false, message: "حدث خطأ أثناء العملية" });
      
//     }
//   });


  app.post("/Login", async (req, res) => {
    try {
      console.log("--------------------------------------------------\n--------------------------------------------------");
  
      const { email, password } = req.body;
  
      // Retrieve user using email
      const user = await lazhar.findOne({ mailll: email });
  
      console.log(`This is your DATA : ${user ? `${user.mailll} : ${user.passss}` : 'User  not found'}`);
      console.log(`This is your USER : ${email} : ${password}`);
  
      // Check if the password matches
      if (user && user.passss === password) {
        const userName = user.nameee;  // Get the user's name
        console.log(userName);  // Log the username
  
        // Send userName in the response
        res.json({ success: true, redirectUrl: "/home", userName });  
      } else {
        res.json({ success: false, message: " ❌ كلمة المرور غير صحيحة " });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, message: "حدث خطأ أثناء العملية" });
    }
  });
