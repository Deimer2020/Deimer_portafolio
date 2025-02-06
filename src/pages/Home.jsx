import {Link} from "react-router-dom"
import Headers from "../components/headers"
import imagen from "../assets/img/deimer123.jpg"

export default function Home(){
    return (
        <>
         <Headers></Headers>
        <body>
            
        <main>

       
           <header className="py-5">
                <div className="container px-5 pb-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-xxl-5">
                            
                            <div className="text-center text-xxl-start">
                                <div className="badge bg-gradient-primary-to-secondary text-white mb-4"><div className="text-uppercase"> &middot;  &middot;Desarrollador &middot;  &middot;</div></div>
                                <div className="fs-3 fw-light text-muted">`La disciplina tarde o temprano vencera el talento`</div>
                                <h1 className="display-3 fw-bolder mb-5"><span className="text-gradient d-inline">INGENIERO DE SISTEMAS</span>
                                <p  className="nombre"> DEIMER JOSE ARIAS MONSALVE</p></h1>
                                {/* imagen */}
                                <div className="container-foto">
                                <img src={imagen} alt="Foto de portada" className="foto"/>
                                </div>
                                
                               {/*  botones */}
                                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                                   <Link to="/resumen" className="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder">Resume</Link>
                                    <Link to="/proyecto" className="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder" >Proyectos</Link>
                                </div>
                            </div>
                        </div>
                      
                    </div>
                </div>
            </header> 
           
           
           <section className="bg-light py-5">
                <div className="container px-5">
                    <div className="row gx-5 justify-content-center">
                        <div className="col-xxl-8">
                            <div className="text-center my-5">
                                <h2 className="display-5 fw-bolder"><span className="text-gradient d-inline">Acerca de mi</span></h2>
                                <p  className="text-gradient d-inline">Mi nombre es DEIMER JOSE ARIAS MONSALVE.</p>
                                <p className="text-muted">Ingeniero de Sistemas apasionado por la innovación tecnológica y el desarrollo de soluciones de software eficientes y robustas. Con una sólida formación en Node.js,React js, vanilla js, Angular, MongoDB, SQL, HTML, CSS, y más de 2 años de experiencia en la industria, he demostrado un compromiso inquebrantable con la excelencia y la calidad en cada proyecto que emprendo.

Mi carrera ha sido una continua búsqueda de mejorar y expandir mis conocimientos en tecnologías emergentes y métodos de desarrollo ágiles. He trabajado en diversos entornos colaborativos, siempre enfocándome en la entrega puntual y la satisfacción del cliente.
Soy una persona altamente comprometida y proactiva, con la capacidad de abordar desafíos complejos y encontrar soluciones innovadoras. Mi dedicación se refleja no solo en la calidad del código que escribo, sino también en mi habilidad para trabajar en equipo, colaborar con colegas de diferentes disciplinas y contribuir al éxito general del proyecto. </p>
                                <div className="d-flex justify-content-center fs-2 gap-4">
                                
                                    <Link className="text-gradient" target="_blank" to="https://www.linkedin.com/in/deimer-arias-monsalve-370b1a230/" ><i className="bi bi-linkedin"></i></Link>
                                    <Link className="text-gradient" target="_blank" to="https://github.com/Deimer2020" ><i className="bi bi-github"></i></Link>
                                    <Link className="text-gradient" target="_blank" to="" ><i className="bi bi-facebook"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </main>
            </body>
        </>
    )
}