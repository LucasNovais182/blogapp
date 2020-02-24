if(process.env.NODE_ENV == 'production'){
    module.exports = {mongoURI: "mongodb+srv://Lucas:amour222@blogapp-prod-dlvxv.mongodb.net/test?retryWrites=true&w=majority"}
}else{
    module.exports = {mongoURI: 'mongodb://localhost/blogapp'}
}