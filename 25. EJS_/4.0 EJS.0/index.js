import express from "express";


const app = express();
const port = 3000;
 
app.get("/", (req, res) => {
    const d = new Date();
    var day = d.getDay();

    var type = "a weekday";
    var adv = "It's time to work";

 if ( day === 0 || day === 6 ) {
      type = "weekend";
      adv = "It's time to have fun";
  }  


    res.render("index.ejs", {
    dayType: type,
    advice: adv,
    }
    );
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
  