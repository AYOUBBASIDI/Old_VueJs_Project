<template>
  <main class="all">
    <header>
        
        <div class="logout">
            <a href="http://localhost:3000/"><img src="../assets/logout2.png" alt=""></a>
        </div>
        <div class="logo">
            <img src="../assets/logo.png" alt="">
            <h2><span>At</span>Develop</h2>
        </div>
        
    </header>
  </main>
  <div class="adcontent">
        <h1>ADMINISTRATION</h1>
        <div class="table">
            <table>
                <thead>
                    <th>FULL NAME</th>
                    <th>PHONE NUMBER</th>
                    <th>PROFESSION</th>
                    <th>OPERATION</th>
                    
                </thead>
                <tbody>
                    <tr>
                        <td>Ayoub Basidi</td>
                        <td>0681530508</td>
                        <td>Contractor</td>
                        <td class="oper"><button class="delete"><a class="btn" href="#">Delete</a></button>
                        <button class="update"><a class="btn" href="#popup1">Update</a></button></td>
                    </tr>
                    <tr>
                        <td>Ayoub Basidi</td>
                        <td>0681530508</td>
                        <td>Contractor</td>
                        <td class="oper"><button class="delete"><a class="btn" href="#">Delete</a></button>
                        <button class="update"><a class="btn" href="#">Update</a></button></td>
                    </tr>
                    <tr>
                        <td>Ayoub Basidi</td>
                        <td>0681530508</td>
                        <td>Contractor</td>
                        <td class="oper"><button class="delete"><a class="btn" href="#">Delete</a></button>
                        <button class="update"><a class="btn" href="#">Update</a></button></td>
                    </tr>
                    <tr>
                        <td>Ayoub Basidi</td>
                        <td>0681530508</td>
                        <td>Contractor</td>
                        <td class="oper"><button class="delete"><a class="btn" href="#">Delete</a></button>
                        <button class="update"><a class="btn" href="#">Update</a></button></td>
                    </tr>
                    <tr>
                        <td>Ayoub Basidi</td>
                        <td>0681530508</td>
                        <td>Contractor</td>
                        <td class="oper"><button class="delete"><a class="btn" href="#">Delete</a></button>
                        <button class="update"><a class="btn" href="#">Update</a></button></td>
                          
                    </tr>
                    <tr>
                        <td>Ayoub Basidi</td>
                        <td>0681530508</td>
                        <td>Contractor</td>
                        <td class="oper"><button class="delete"><a class="btn" href="#">Delete</a></button>
                        <button class="update"><a class="btn" href="#">Update</a></button></td>
                           
                    </tr>
                    <tr>
                        <td>Ayoub Basidi</td>
                        <td>0681530508</td>
                        <td>Contractor</td>
                        <td class="oper"><button class="delete"><a class="btn" href="#">Delete</a></button>
                        <button class="update"><a class="btn" href="#">Update</a></button></td>
                         
                    </tr>
                    <tr>
                        <td>Ayoub Basidi</td>
                        <td>0681530508</td>
                        <td>Contractor</td>
                        <td class="oper"><button class="delete"><a class="btn" href="#">Delete</a></button>
                        <button class="update"><a class="btn" href="#">Update</a></button></td>
                          
                    </tr>
                    <tr>
                        <td>Ayoub Basidi</td>
                        <td>0681530508</td>
                        <td>Contractor</td>
                        <td class="oper"><button class="delete"><a class="btn" href="#">Delete</a></button>
                        <button class="update"><a class="btn" href="#">Update</a></button></td>
                          
                    </tr>
                    
                </tbody>
            </table>
        </div> 

        <div id="popup1" class="overlay">
            <div class="popup">
              <h2>Create Your Account</h2>
              <a class="close" href="#">&times;</a>
              <div class="contentt">
                <div>
                  <div class="A1">
                    <label>First Name</label>
                    <input type="text"  placeholder="First Name" />
                  </div>
                  <div class="A2">
                    <label>Last Name</label>
                    <input type="text"  placeholder="Last Name" />
                  </div>
                </div>
                <div>
                  <div class="A1">
                    <label>Telephone</label>
                    <input type="text"  placeholder="Telephone" />
                  </div>
                  <div class="A2">
                    <label>Profession</label>
                    <input type="text"  placeholder="Profession" />
                  </div>
                </div>
              </div>
              <button type="button" class="btn btn-primary create">create</button>
            </div>
          </div>

  </div>
</template>

<style scoped>


.table th{
    background-color: #444E59;
    padding: 1%;
    width: 200px;
    color: #252A30; 
    font-weight: bold;
}
th:first-child{
    border-radius: 15px 0px 0px 0px;
}
th:last-child{
    border-radius: 0px 15px 0px 0px  ;
}
.table{
    margin-top: 2%;
}
.table td{
    border:3px solid #37414D ;
    text-align: center;
    color:white;
}












    *{
 font-family: "Roboto";   
}
  template{
    font-family: 'roboto';

  }
  *::-webkit-scrollbar {
    width: 12px;
  }

  *::-webkit-scrollbar-track {
    background: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background-color: rgb(95, 95, 95);
    border-radius: 20px;
    border: 2px solid  rgb(255, 255, 255);
  }
  .all{
    background-image: url(../assets/back3.png);
    height: 50vh;
    background-repeat:no-repeat !important;
    background-size: cover;
    margin: 0;
    padding: 0;
     background-position: center;
    background-size: cover;
    object-fit: cover;
    background-attachment: fixed;
  }
  .logoad{
    height: 130px;
        display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    padding: 30px;
  }
  .overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  transition: opacity 500ms;
  visibility: hidden;
  opacity: 0;
}
.overlay:target {
  visibility: visible;
  opacity: 1;
  z-index: 999;
}

.popup {
  margin: 70px auto;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  width: 50%;
  position: relative;
  /* transition: all 5s ease-in-out; */
  background-color: #252a30;
  color: white;
  padding: 20px;
}

.popup h2 {
  /* margin-top: 0; */
  color: #f9a800;
  text-align: center;
}
.popup .close {
  position: absolute;
  top: 20px;
  right: 30px;
  transition: all 200ms;
  font-size: 30px;
  font-weight: bold;
  text-decoration: none;
  color: white;
}
.popup .close:hover {
  color: #f9a800;
}
.popup .contentt {
  max-height: 100%;
  overflow: auto;
  margin-top: 20px;
}
.A1,.A2 {
  display: flex;
  flex-direction: column;
}
.contentt div {
  display: flex;
  justify-content: space-between;
}
.contentt div input {
  width: 250px;
  height: 40px;
  border-radius: 15px;
  border: 2px solid #ffdd97;
  background-color: #252a30;
  color: white;
  padding-left: 10px;
}

.create {
  background-image: url(../assets/Group_9.png);
  width: 150px;
  height: 40px;
  background-repeat: no-repeat !important;
  background-size: cover;
  margin-top: 50px;
  padding: 0;
  background-position: center;
  background-size: cover;
  object-fit: cover;
  border-radius: 19px;
  margin-left: 38%;
  border: none;
  font-size: 20px;
  cursor: pointer;
}
  .logo img{
    width:100px;
    height: 70px;
  }
  .logo h2 span{
    color:white;
    font-weight: 700
  }
  .logo h2{
    color:#F9A800;
    font-weight: 700;
    letter-spacing: 2px;
    font-size: 17px;

  }
  .logout{
    margin-top: 1%;
    margin-left: 1%;
  }
  header{
    display: flex;
    justify-content: space-between;
  }
  .adcontent{
      background-color: #252A30;
      width: 99vw;
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
  }
  .adcontent h1{
      font-weight: bold;
      letter-spacing: 10px;
      color:#F9A800;
      margin-top: 1%;
  }
  .adrecherche form{
    margin: auto;
    width: 370px;
    margin-top: 2%;
  }
  form.adexample input[type=text] {
  padding: 10px;
  font-size: 17px;
  float: left;
  width: 80%;
  background: #EAEAEA;
  border: none;
  border-radius: 30px 0 0 30px;
}

form.adexample button {
  float: left;
  width: 20%;
  padding: 0.2em;
  background: #F9A800;
  color: white;
  font-size: 17px;
  /* border-left: none; */
  border: none;
  cursor: pointer;
   border-radius: 0 30px 30px 0;
}

form.adexample button:hover {
  background: #F9A800;
}

form.adexample::after {
  content: "";
  clear: both;
  display: table;
}

.delete{
    background-color: rgb(111, 0, 0);
    border:none;
    border-radius: 5px;
    
    margin-left: 10px;
    cursor: pointer;
}
.btn {
color: white;
text-decoration: none;
}
.update{
    background-color: rgb(0, 64, 0);
    border:none;
    border-radius: 5px;
    color: white;
    margin-left: 10px;
    cursor: pointer;
}
/* .oper{
    display: flex;
} */




@media screen and (max-width:700PX) {
     
    .logo{
        margin-top: -24px;
        padding: 0%;
        margin-right: 2%;
    }
    .logo img {
    width: 76px;
    height: 40px;
}
header{
    margin-top: 0%;
}
.logo h2 {
    color: #F9A800;
    font-weight: 700;
    letter-spacing: 2px;
    font-size: 12px;
}
.logout img {
    margin-left: 10px;
    margin-top: 15px;
}

.all{
background-image: url(/src/assets/back3.png);
    background-repeat: no-repeat !important;
    background-size: cover;
    margin: 0;
    padding: 0;
    background-position: center;
    background-size: cover;
    object-fit: cover;
    background-attachment: fixed;
    height: 25vh;
    width: 100%;
}


.adcontent h1 {
    font-weight: bold;
    letter-spacing: 10px;
    color: #F9A800;
    margin-top: 1%;
    font-size: 20px;
}


.adrecherche form {
    margin: auto;
    width: 285px;
    margin-top: 2%;
}
th {
    margin-left: 41px;
    font-size:9px;
}
table {
    width: 100px;
}
.table {
    margin-top: 2%;
    margin-left: 4%;
    width: 100%;
}
table td{
    font-size:13px;
}
.table th{
    padding: 0%;
}
.adcontent{
    width: 100%;
}
}

</style>