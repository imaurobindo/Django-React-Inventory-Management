import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from "./HomePage";
import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";
import { BrowserRouter, Switch, Routes, Route, Link, RedirectFunction } from 'react-router-dom';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

            <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="login/*" element={<Login />} />
                        <Route path="register/*" element={<Register />} />
                        <Route path="Dashboard/*" element={<Dashboard />} />
                    </Routes>
            </BrowserRouter>

        //     <div className="homepage_main">
        //         <h1>Testing React Code</h1>
        //         <HomePage />
        //     </div>
        );
    }
}

render(<App />, document.getElementById("app"));


// import React, { Component } from "react";
// import { render } from "react-dom";
// import HomePage from './HomePage';
// import { BrowserRouter, Switch, Routes, Route, Link, RedirectFunction } from 'react-router-dom';




  


// const App=() => {


    

//         return (
//             <BrowserRouter>
//                 <Routes>
//                     <Route path="/" element={<HomePage />} />
//                     {/* <Route path="login1/*" element={<Login1 />} /> */}
                    
//                 </Routes>
//             </BrowserRouter>
//         );
//     }


// render(<App />, document.getElementById("App"));

// export default App


// import { BrowserRouter, Switch, Routes, Route, Link, RedirectFunction } from 'react-router-dom';


// const Indexx=() => {


    

//     return (
//         <div>
//             <BrowserRouter>
//                <Routes>
//                    <Route path="/" element={<HomePage />} />
//                    <Route path="login/*" element={<Login />} />
//                    <Route path="Dashboard/*" element={<Dashboard />} />  
//                 </Routes>
//             </BrowserRouter>
//         </div>
//     );
// }


// render(<Indexx />, document.getElementById("indexx"));

// export default Indexx