import {Card} from "react-bootstrap"

export function Main ({Alumno}){
  
  const {nombre, apellido, edad, presentacion, lenguajes, } = Alumno;
  console.log(Alumno);
  
    return(
      <div>
    <Card style={{width:"50%",margin:"auto"}}>
      <Card.Title>{nombre}{apellido}</Card.Title>
        <Card.Body>
          <Card.Text > Presentacion:  {presentacion} </Card.Text>
          { <Card.Text > Lenguajes :   {lenguajes} </Card.Text> }
          <Card.Text > Edad: {edad} </Card.Text>
          <Card.Img  style={{height: "100px", width:"100px"}} ></Card.Img>
        </Card.Body>
    </Card>
    </div>
  )
}

export default Main;