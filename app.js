const bodyParser  = require ("body-parser");
const mongoose = require ('mongoose');
const ejs = require("ejs");
const express = require("express");

/// Using 0.0.0.0 instead of local host
mongoose.connect('mongodb://0.0.0.0:27017/wikiDB',{useNewUrlParser: true});

const articleSchema = new mongoose.Schema({
    title :String,
    content :String
});

const Article = mongoose.model("Article",articleSchema);

const app =express();
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


app.route("/articles")
.get(async function(req,res){
    try { 
    const articles =await Article.find({});
    res.json(articles);
    } catch (error) {
       console.log("Error retriveing articles", error); 
       res.status(500);
    }
})
.post(async function(req,res){
    try {
        const newArticle = new Article({
            title:req.body.title,
            content:req.body.content
        });
        await newArticle.save();
        console.log("Saved to Database");
        res.redirect("/articles");
    } catch (error) {
      res.status(500).json({message:error.message})
    }
});
////////////////////////////////////////////////////////////Requests targeting all articles ///////////////////////////////////////////////
app.route("/articles/:articleTitle")
.get(async function(req,res){
    try {
        const foundArticle = await Article.findOne({title:req.params.articleTitle});
        console.log("Data fetched sucessfully");
        res.json(foundArticle);
    } catch (error) {
        console.log("Error fetching",error);
        
    }
})

.put(async function(req,res){
  try{
   const updatedArticle = await Article.findOneAndReplace({title : req.params.articleTitle},
    {title:req.body.title,
    content :req.body.content})
    console.log("Article updated",updatedArticle);
    res.send(updatedArticle);

   // res.redirect("/articles");
  }
  catch(err){
    console.log("Error upating the article",err);
  }})

  .patch(async function(req,res){
    try {
      const updatedArticle  = await Article.findOneAndUpdate({title:req.params.articleTitle},
        {title: req.body.title
        })
        console.log("Put request acepted");
        //res.send(updatedArticle);
        res.redirect("/articles");
    } catch (error) {
      console.log("Error upating the article",error);
    }
  })

  .delete(async function(req,res){
    try {
      const deletedArticle  = await Article.findOneAndDelete({title:req.params.articleTitle},
        {title : req.body.title})
        console.log("delete article");
        res.redirect("/articles");
        
    } catch (error) {
      console.log("Error upating the article",error);

    }
  });
app.listen(3000,function(){
    console.log("Server Started on 3000");
});