import { useState } from "react";
import 'font-awesome/css/font-awesome.min.css'

const App = ()=>{

  const [userData , setUserData] = useState([]);
  const [loading , setLoading] = useState(false)

  const fetchData = ()=>{
  setLoading(true)
  fetch("https://jsonplaceholder.typicode.com/users")
  .then((response)=>response.json())

  .then((users)=>{
    console.log(users)
    setUserData(users)
    setLoading(false)
  })

  .catch((error)=>{
    console.log(error)
    console.log("faild")
    setLoading(false)
  })
  }

return(
  <div>
      <div style={{
        width : "70%",
        margin : "0 auto"
      }}>
         <h1 style={{
          textAlign : "center"
         }}>Ram Ram</h1>
         <button onClick={fetchData}
         style={{
          border : "none",
          padding : "12px 32px" ,
          background : "#6a0777",
          color : "white",
          fontWeight : "600",
          fontSize : "16px",
          borderRadius : "5px"
         }}>Fetch Data</button>

         <div style={{
          marginTop : 24,
          display : "flex",
          flexDirection : "column",
          gap : "20px"
         }}>

        {
          loading && (
            <div>
              <i className="fa fa-spinner fa-spin" style={{
                fontSize : "50px"
              }}></i>
            </div>
          )
        }

        {
       userData.map((user , index)=>(
                
        <div key={index} style={{
          border : "1px solid #ccc",
          padding : 16,
          boxShadow : "0 0 10px #ddd",
          borderRadius : "5px",
          backgroundColor : "white"
        }}>

          <h1 style={{
            padding : "0px",
            margin : "0px"
          }}>{user.name}</h1>

          <p style={{
            padding : "0px",
            margin : "0px",
            color : "dodgerblue"
          }}>Email :{user.email}</p>

          <p style={{
            padding : "0px",
            margin : "0px",
          }}>Phone : {user.phone}</p>

        </div>
              ))
            }
         

         </div>
      </div>
  </div>
)
}
export default App;