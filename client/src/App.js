import './App.css';

function App() {
  return (
    <main>

      <header>

        <a href="" className="logo">MyBlog</a>
        <nav>
          <a href="">Login</a>
          <a href="">Register</a>
          
        </nav>

      </header>

      <div className="post">
        <div className="image">
          <img src="https://images.pexels.com/photos/587739/pexels-photo-587739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
        </div>
        
        <div className="texts">
          <h2>Dessert Afternoon Recommended.</h2>
          <p className="info">
            <a className="author">Dave Tompson</a>
            <time>2023-01-05 16:45</time>
          </p>
          <p className="summary">It doesn’t get much more simple and classic than s’mores: three basic ingredients working together to make something much more delicious than the sum of its parts. We've taken these flavors and run with them more times than we can count</p>
        </div> 
      </div>

      <div className="post">
        <div className="image">
          <img src="https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
        </div>
        
        <div className="texts">
          <h2>My Top5 pizza shop.</h2>
          <p className="info">
            <a className="author">Dave Tompson</a>
            <time>2023-02-25 16:45</time>
          </p>
          <p className="summary">Pizza is my favorite food of all time.</p>
        </div> 
      </div>

      <div className="post">
        <div className="image">
          <img src="https://images.pexels.com/photos/1233319/pexels-photo-1233319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
        </div>
        
        <div className="texts">
          <h2>Beverage that make you fresh after lunch.</h2>
          <p className="info">
            <a className="author">Dave Tompson</a>
            <time>2023-01-05 16:45</time>
          </p>
          <p className="summary">You need to get fresh after lunch for get back to work.</p>
        </div> 
      </div>
      
     
      

    </main>
  );
}

export default App;
