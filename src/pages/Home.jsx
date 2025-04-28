import Header from "../componentes/Header"
import Main from "../componentes/Main"
import Footer from "../componentes/Footer"



export const Home = () => {

   const Alumno = {
    nombre: "Bruno ",
    apellido: "Lopez",
    edad: 32,
    presentacion: "Soy estudiante de Tup en la facultad tecnológica",
    lenguajes: " React y C#",
   }
  return (
    <div>
      <Header/>
      <br />
      <Main Alumno={Alumno} />
      <br />
      <Footer/>
      </div>

  )
}
      
export default Home;