<p> API's</p>
<p>Authentication API's</p>
<div>
  <p>Register a new user <span>http://127.0.0.1:8000/api/register</span></p>
<p>
  method=post
  body= {
  name,email,password
  
  }
</p>
</div>
<div>
  <p> user login <sapn>http://127.0.0.1:8000/api/login</sapn></p>
<p>
  method=post
  body= {
  name,email,password
  
  }
</div>
<div>
  <p>show all user detail<span>http://127.0.0.1:8000/api/regdata</span></p>
<p>
  method= get
</p>
</div>
<br>
<br>
<br>
<p>------<PRODUCT API's>------</p>
<div>
  <p>show list of all the products <span>http://127.0.0.1:8000/api/list</span> </p>
 <p> method=get</p>
</div>
<div>
  <p>store new product in dataBase<span>http://127.0.0.1:8000/api/store</span></p>
  <p>
    <p>method=post</p>
    <p>body ={
    name, price, description , image
      }</p>
  </p>
</div>
<div>
  <p>show detail of one item<span>http://127.0.0.1:8000/api/show/id</span></p>
  <p> method= get</p>
</div>
<div>
  <p>show default value for update<span>http://127.0.0.1:8000/api/edit/id</span></p>
  <p> method= get</p>
</div>
<div>
  <p>update api <span>http://127.0.0.1:8000/api/update/id/?_method=put</span></p>
 <p>method=post</p>
    <p>body ={
    name, price, description , image
      }</p>
</div>
  
<div><p>delete product <span>http://127.0.0.1:8000/api/delete/id</span></p>
<p> method= delete</p>
</div>
<div>
  <p>search product<span>http://127.0.0.1:8000/api/search</span></p>
<p>method= get </p>
</div>
