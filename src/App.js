// import {useSelector,useDispatch} from "react-redux"
// import {increment, decrement, color} from "./ReduxFunction/Action/Action1st"

// function App() {
  

//   const value = useSelector(state => state.CounterReducer)
//   const ColorValue = useSelector(state => state.ColorReducer)

//   const dispatch = useDispatch()

//   const change =(e)=>{
//     dispatch(color(e.target.value))

//   }

 
//   return (
//     <div className="App" style ={{backgroundColor:ColorValue ,color:"white",height:'100vh'}}>

//       <button style={{ backgroundColor:"blue"}} onClick={()=>dispatch(increment())}>add item</button>

//       <h6>value ={'>'} {value}</h6>

//       <button style={{ backgroundColor:"blue"}} onClick={()=>dispatch(decrement())} >Remove item</button>


//       <div>
//                <select id="lang" onChange={change} >
//                   <option value="#5d8aa8">blue</option>
//                   <option value="green">green</option>
//                   <option value="blue">blue</option>
//                </select>
//                <p></p>
              
//            </div>

    
//     </div>
//   );
// }

// export default App;


import React from 'react'
import Login from './Login'

export default function App() {


  return (

    <div>

        <Login></Login> 
             
    </div>
  )
}

