const express = require('express');
const app = express();

// console.log(express);


app.get('/steve-mcgarret', (req,res) => {
    res.send("Book'em Danno")
});

app.get('/emeril', (req,res) => {
    res.send("BAM")
})


app.get('/Bruce-Banner', (req,res) => {
    res.send("Dont make me angry")
})

app.get('/Batman', (req,res) => {
    res.send("To the batmobile!")
})


app.get('/Tony-montana', (req,res) => {
    res.send("Say hello to my little friend")
})


app.get('/zeus', (req,res) => {
    res.send("Release the Kracken")
})


app.get('/Frankenstien', (req,res) => {
    res.send("Its alive!!")
})

app.get('/Rocky', (req,res) => {
    res.send("Yo adrian.")
})






app.listen(5500,() => {
    console.log("Listening for request on port 5500")
});
