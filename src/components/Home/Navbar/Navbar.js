import React from 'react';
import { useHistory } from 'react-router-dom';

const Navbar = () => {
  const history = useHistory();
  function handleClick(){
    history.push('/login');
  }
    return (
        <nav class="navbar navbar-expand-lg navbar-light ">
  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link  mr-5" href="#">Picture<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link mr-5 " href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link mr-5 " href="#">Our Portfolio</a>
      </li>
      <li class="nav-item">
        <a class="nav-link mr-5" href="#">Our Team</a>
      </li>
      <li class="nav-item">
        <a class="nav-link mr-5 " href="#">Contuct Us</a>
      </li>
      <li class="nav-item">
        <button onClick={handleClick} class="btn btn-dark " href="#">Login</button>
      </li> 
    </ul>
  </div>
</nav>

    );
};

export default Navbar;