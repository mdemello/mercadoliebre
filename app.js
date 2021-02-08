const express=require('express');
const path=require('path');

const app=express();


// const publicFolderPath=path.resolve(__dirname,'./public');
// app.use(express.static(publicFolderPath));

//MIDDLEWARE
app.use(express.static('public'));




app.get('/', (req,res)=>{
    res.sendFile(path.resolve(__dirname, './views/home.html'));
});

app.get('/register', (req,res)=>{
    res.sendFile(path.resolve(__dirname, './views/register.html'));
});

app.get('/login', (req,res)=>{
    res.sendFile(path.resolve(__dirname, './views/login.html'));
});

/*
app.listen(3050, ()=>{
    console.log('Servidor corriendo en el puerto 3050');

});
*/

app.listen(process.env.PORT || 3000,function(){
    console.log('Servidor corriendo en el puerto 3000');
})




