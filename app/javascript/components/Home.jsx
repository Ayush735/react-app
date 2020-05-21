import React from "react";
import { Link } from "react-router-dom";
import MouseTracker from "./MouseTracker";
const MyContext = React.createContext();

class Coder2 extends React.Component{
  static contextType = MyContext
  render(){
    return(
      <div>
        <h1> My age id {this.context.age}</h1>
      </div>
      );
  }
}

// const Coder2 = () => {
//   return (
//     <MyContext.Consumer>
//       {(data)=>{
//         return(
//           <h1>coder2</h1>
//         ) 
//       }
//       }
//     </MyContext.Consumer>
//   )
// }
const Coder1 = () => {
  return (
    <MyContext.Consumer>
      {
        (data)=>{
          return(
            <div>
            <h1>My name is {data.name}</h1>
            <h1>My age is {data.age}</h1>
            <Coder2/>
            <MouseTracker/>
          </div>
          )
        }
      }
    </MyContext.Consumer>
  )
}

const Coder = () => {
  return <Coder1/>
}

class Home extends React.Component{
  render(){
    return( 
      <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
        <div className="jumbotron jumbotron-fluid bg-transparent">
          <div className="container secondary-color">
            <h1 className="display-4">Food Recipes</h1>
            <MyContext.Provider value={{name: "Ayush", age:25}}>
              <Coder/>
            </MyContext.Provider>
            <p className="lead">
              A curated list of recipes for the best homemade meal and delicacies.
            </p>
            <hr className="my-4" />
            <Link
              to="/recipes"
              className="btn btn-lg custom-button"
              role="button"
            >
              View Recipes
            </Link>
          </div>
        </div>
      </div>
      );
  }
}
export default Home;