import * as express from 'express';
import * as path from 'path';

var buildDir = path.join(__dirname, '/dist');
const app= express.default();
const router=express.Router();

app.use(express.static('dist'));


app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname,'../index.html'));
    console.log(buildDir);
  });



  router.route('users')
  .post((req,res) =>{
    
    res.json({message:'User Data'});
  });

  app.use('/api', router);

const port = process.env.PORT;
app.listen(port, () => {
  console.log('We are live on ' + port);
});
/*
az appservice plan create --name sbsvcplan --resource-group SuperB
az webapp create --resource-group SuperB --plan sbsvcplan --name superbwebapp
az webapp config appsettings set --resource-group SuperB --name superbwebapp --settings WEBSITE_NODE_DEFAULT_VERSION=10.6.0
*/
