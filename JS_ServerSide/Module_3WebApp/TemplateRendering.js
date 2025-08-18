//Server Side Rendering SSR
const server = require('express');
const app =new server();
const reactView = require('express-react-views');
const jsxEngine = reactView.createEngine();
 app.set('view engine','jsx');
 app.set('views','myViews');
 app.engine('jsx',jsxEngine);
app.get('/:name', (req, res) => {
  res.render('index', { name: req.params.name });
});
const port = 3333
app.listen(port,()=>{
    console.log(`Server run at port ${port}`);
});