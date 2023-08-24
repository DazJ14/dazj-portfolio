import encriptador from "./assets/other-assets/encriptador.png"
import todo from "./assets/other-assets/todo-list-app.png"
import landingPage from "./assets/other-assets/landingPage.png"

const Projects = [
    {
        spanish: {
            titulo: "encriptador",        
            descripcion: "Proyecto de encriptador creado como parte del curso Oracle Next Education, donde se utilizo Html, Css y Javascript para su realizacion",
        },
        english: {
            titulo: "Encryptor",
            descripcion: "Encryption project created as part of the Oracle Next Education course, where Html, Css, and Javascript were used for its implementation."
        },
        tecnologias: ["Html", "Css", "JavaScript"],
        demo: "https://dazjencriptador.netlify.app/",
        repositorio: "https://github.com/DazJ14/Alura-Encriptador",
        urlImagen: encriptador
    },
    {
        spanish: {
            titulo: "Noteit (Todo list app)",
            descripcion: "Aplicacion de notas, donde se pueden agregar, borrar, terminar, asi como previsualizar y ver tareas completas. Realizado con react y sass. (en un futuro recibira actualizacion)",
        },
        english: {
            titulo: "Noteit (Todo list app)",
            descripcion: "Todo application, where tasks can be added, deleted, marked as completed, as well as previewed and viewed in full page. Developed using React. (Will receive updates in the future)"
        },
        tecnologias: ["React", "Formik"],
        demo: "https://dazj14.github.io/noteit/",
        repositorio: "https://github.com/DazJ14/noteit",
        urlImagen: todo
    },
    {
        spanish: {
            titulo: "Animalx Landing Page",        
            descripcion: "Prototipo de diseño de landing page, en la cual podemos observar distintas secciones y rutas. La pagina principal con mayor diseño que las otras para solo mostrar el enrutamiento.",
        },
        english: {
            titulo: "Animalx Landing Page",
            descripcion: "Design prototype of a landing page, where we can observe different sections and routes. The main page has more design elements compared to the others, with the purpose of showcasing the navigation."
        },
        tecnologias: ["React", "Styled Components", "Router"],
        demo: "https://dazj14.github.io/Animalx/",
        repositorio: "https://github.com/DazJ14/Animalx",
        urlImagen: landingPage
    },
    // {
    //     titulo: "Conversor",
    //     tecnologias: ["Java", "JavaFX"],
    //     descripcion: "Conversor de monedas, en la cual puedes hacer el cambio de tu moneda local y comparar su valor respecto a otras monedas, asi como ver el valor de otras monedas con la tuya, Hecho con Java 8 y JavaFX.",
    //     demo: "#",
    //     repositorio: "#",
    //     urlImagen: "../public/todo-list-app.png"
    // },
]

export default Projects