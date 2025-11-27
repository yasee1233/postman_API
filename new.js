var express = require('express');
var app = express();
app.use(express.json());
let user=[
  {
    id:1,
    name:'Yaseen',
    age:22
  },
  {
    id:2,
    name:'Ali',
    age:21
  },
  {
    id:3,
    name:'Ahmed',
    age:23
   },
      {
    id:4,
    name:'Omar',
    age:20  
      }
];
app.get('/users', function (req, res) {
  res.send(user);
});
app.post('/user',function (req, res) {
  const {name,age}=req.body;
  if(!name || !age){
    return res.status(400).send('Name and age are required');
  }
    user.push({id:user.length+1,
    name:name,
    age:age,
  });
  res.send('User added successfully');
});
  app.put('/Put/:id', function(req, res) {
  const id = req.params.id;   // convert id to number
  const { name, age } = req.body;
  const userIndex = user.findIndex(u => u.id === id);
  if (userIndex === -1) {
    return res.status(404).json({ error: 'User not found yaseen bhau' });
  }

  user[userIndex] = {
    id: id,
    name: name,
    age: age
  };

  res.send('User updated successfully');
});
app.delete('/user/:id', function async(req, res) {
  const {id} = req.params;
  const userIndex = user.findIndex(u => u.id === parseInt (id)); 
  if (userIndex === -1) {
    return res.status(404).json({ error: 'User not found' });
  } 
  user.splice(userIndex, 1); 
  res.status(200).send('User deleted successfully');
});
app.listen(3000,function (){
  console.log('Example app listening on port http://localhost:3000');
});
