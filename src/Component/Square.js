// import React from 'react'

// class Square extends React.Component {

//     render() {
//       return (
//         <button
//          className="square"
//          onClick = {()=>this.props.onClick()}
//          >
//           {this.props.value}
//         </button>
//       );
//     }
//   }

//   export default Square 

  import React from 'react';
  
  function Square (props) {
    return ( 
        <button
         className="square"
         onClick = {props.onClick}
         //onClick={() => this.props.onClick()}
         >
          {props.value}
        </button>
    );
  };
  
  export default Square;

 // [R1C1, R1C2, R1C3],
 //[R2C1, R2C2, R2C3],
 //[R3C1 , R3C2, R3C3]