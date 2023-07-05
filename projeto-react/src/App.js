import './App.css';

import React, { useEffect } from 'react';
import Tmdb from './Tmdb';

export default() => {


  useEffect(()=>{
    const loadAll = async () => {

  let list = await Tmdb.getHomeList();
 console.log(list);

    }

loadAll();
  },[]);

}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
