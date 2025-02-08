
import Headers from "../components/headers"
import proyecto1 from "../assets/img/mastery.png"
import proyecto2 from "../assets/img/mooc.png"
import { Link } from "react-router-dom"

export default function Proyecto(){
    return (
        <>
        <Headers></Headers>
    

       
        <main className="flex-shrink-0 hola">
       
           
            <section className="py-5">
                <div className="container px-5 mb-5">
                    <div className="text-center mb-5">
                        <h1 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">Proyectos</span></h1>
                    </div>
                    <div className="row gx-5 justify-content-center">
                        <div className="col-lg-11 col-xl-9 col-xxl-8">
                           {/* 
                            <div className="card overflow-hidden shadow rounded-4 border-0 mb-5">
                                <div className="card-body p-0">
                                    <div className="d-flex align-items-center">
                                        <div className="p-5">
                                            <h2 className="fw-bolder">Proyecto 1</h2>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius at enim eum illum aperiam placeat esse? Mollitia omnis minima saepe recusandae libero, iste ad asperiores! Explicabo commodi quo itaque! Ipsam!</p>
                                        </div>
                                        <img className="img-fluid" src="" alt="imagen-proyecto" />
                                    </div>
                                </div>
                            </div> */}
                           
                            <div className="card overflow-hidden shadow rounded-4 border-0">
                                <div className="card-body p-0">
                                <h2 className="laboral">PLATAFORMA MOOC</h2>
                                <div className="image-container">
                                <img className="img-fluid animated-image" src={proyecto1} alt="deimer" /> 
                                        <img className="img-fluid animated-image" src={proyecto2} alt="deimer123" /> 
                                        </div>
                            
                                    <div className="d-flex align-items-center">
                                        
                                        <div className="p-5">
                                           
                                            <p className="laboral">Creacion de una plataforma MOOC para que los docentes de la Universidad Popular del Cesar puedan crear y publicar cursos para estimular el aprendizaje autónomo y permanente en los estudiantes y egresados de la Universidad Popular del Cesar.</p>
                                    <Link target="u_blank" to={"https://mooc.aulacla.com/"}>Plataforma Mooc Mastery</Link> 
                                        </div>
                                      
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="py-5 bg-gradient-primary-to-secondary text-white">
                <div className="container px-5 my-5">
                    <div className="text-center">
                        <h2 className="display-4 fw-bolder mb-4">Nunca dejes de aprender, porque la vida nunca deja de enseñar</h2>
                       {/*  <a className="btn btn-outline-light btn-lg px-5 py-3 fs-6 fw-bolder" href="contact.html">Contact me</a> */}
                    </div>
                </div>
            </section>
        </main>
      
        <footer className="bg-white py-4 mt-auto">
            <div className="container px-5">
                <div className="row align-items-center justify-content-between flex-column flex-sm-row">
                   
                  
                </div>
            </div>
        </footer>
     
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
      

  
        </>
    )
}