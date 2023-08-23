export default function Post(){
    return(
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
    );
    
}