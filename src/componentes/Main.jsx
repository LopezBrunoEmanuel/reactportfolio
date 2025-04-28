import "../css/Main.css"
import {Card} from "react-bootstrap"


export function Main ({Alumno}){
  
  const {nombre, apellido, edad, presentacion, lenguajes, } = Alumno;
  console.log(Alumno);
  
    return(
      <div>
    <Card className="card" style={{width:"50%",margin:"auto"}}>
      <Card.Title>{nombre}{apellido}</Card.Title>
        <Card.Body>
          <Card.Text > Presentacion:  {presentacion} </Card.Text>
          <Card.Text > Lenguajes :   {lenguajes} </Card.Text>
          <Card.Text > Edad: {edad} </Card.Text>
          {/* <Card.Text className="cardimg" > <img src="./public/perfil.jpg" alt="" /></Card.Text> */}
          <Card.Img className="cardimg" style={{height: "200px", width:"150px"}} ></Card.Img>
        </Card.Body>
    </Card>
    </div>
  )
}

export default Main;