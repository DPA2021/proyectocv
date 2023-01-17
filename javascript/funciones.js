/**
 * Itera sobre todo lo que se haya que cambiar entre los modos claro/oscuro.
 * pa: Párrafos, ti: Títulos, li: Listas, co: Contenedores, im: Imágenes.
 */
fuentesAColorear = [
    "pa01", "pa02", "pa03", "pa04", "pa05", "pa06", "pa07", "pa08", "pa09", "pa10",
    "ti01", "ti02", "ti03", "ti04",
    "li01", "li02", "li03", "li04", "li05", "li06", "li07", "li08", "li09", "li10", "li11", "li12",
    "li13", "li14", "li15",
    "co01", "co02", "co03", "co04", "co05",
    "im01"
];


function modoOscuro() {
    document.getElementById("cuerpo").style.backgroundColor = "#121212";
    document.getElementById("indicadorIdioma").style.color = "white";
    document.getElementById("im01").src = "https://randomuser.me/api/portraits/men/49.jpg";

    for (let elemento in fuentesAColorear) {
        document.getElementById(fuentesAColorear[elemento]).style.color = "white";
    }
}


function modoClaro() {
    document.getElementById("cuerpo").style.backgroundColor = "#FFFFFF";
    document.getElementById("indicadorIdioma").style.color = "black";
    document.getElementById("im01").src = "imagenes/chadNocturno.jpg";

    for (let elemento in fuentesAColorear) {
        document.getElementById(fuentesAColorear[elemento]).style.color = "black";
    }
}


function ocultarTexto() {
    document.getElementById("indicadorIdioma").style.display = "none";
    document.getElementById("bo03").style.display = "none";
}


function alternarIdiomas() {
    let idiomaElegido = document.getElementById("selectorIdioma").value;

    if (idiomaElegido === "español") {
        // Para que no reaparezca el indicador de idioma si está oculto.
        if (document.getElementById("indicadorIdioma").style.display !== "none") {
            document.getElementById("indicadorIdioma").innerHTML = "Idioma: Español";
        }

        document.getElementById("pa01").innerHTML = "Apellido: Pena";
        document.getElementById("pa02").innerHTML = "Nombre: Chad";
        document.getElementById("pa03").innerHTML = "E-mail: chad.pena@example.com";
        document.getElementById("pa04").innerHTML = "Fecha de nacimineto: 4/6/1987";
        document.getElementById("pa05").innerHTML = "Domicilio: 2022 Oak Lawn Ave"
        document.getElementById("pa06").innerHTML = "Teléfono: (874) 777-5582";
        document.getElementById("pa07").innerHTML = "Soy un trabajador duro, con interés en producción y ventas. Mis conocimentos más desarrollados se centran en productividad y capacitación.";
        document.getElementById("pa08").innerHTML = "Alliance - Manager de Proyectos y Asociado de Ventas (2017-actualidad)";
        document.getElementById("pa09").innerHTML = "Social American - Oficina Frontal (2010-2017)";
        document.getElementById("pa10").innerHTML = "Universidad de St. Gallen - Licensiado en Marketing y Comunicaciones (2005-2010)";
        document.getElementById("ti01").innerHTML = "Resumen";
        document.getElementById("ti02").innerHTML = "Experiencia Laboral";
        document.getElementById("ti03").innerHTML = "Educación";
        document.getElementById("ti04").innerHTML = "Conocimientos, aptitudes, otros";
        document.getElementById("li01").innerHTML = "Logré una estrategia a mediano plazo para incrementar la rentabilidad en el área de management de proyectos; generando herramientas orientadas al comercio con 13 diferentes estados.";
        document.getElementById("li02").innerHTML = "Lideré un equipo de 50 personas y llevé a la empresa al top 25 de las empresas líderes del país en 2019, incrementando el número de stakeholders en un 40%.";
        document.getElementById("li03").innerHTML = "Organicé campañas de marketing, incrementando la productividad de la empresa en su totalidad. Trabajé con el departamento de publicidades para definir el target demográfico de mas de 25 productos y los atributos esperados, complementarios y potenciales que los clientes esperan en cada uno de estos.";
        document.getElementById("li04").innerHTML = "Capacité a 12 estudiantes en 2 eventos, para múltiples equipos de trabajo.";
        document.getElementById("li05").innerHTML = "Incrementé las utilidades de la empresa en un 500% en 5 años.";
        document.getElementById("li06").innerHTML = "Manejé 20 emprendimientos con consultantes de marketing.";
        document.getElementById("li07").innerHTML = "Participé con un equipo de 10 ingenieros, incrementando la productividad anual.";
        document.getElementById("li08").innerHTML = "Desarrollé cuatro nuevos proyectos privados en 2 mercados internacionales.";
        document.getElementById("li09").innerHTML = "Evalué 5 proyectos de elevada magnitud en 2016.";
        document.getElementById("li10").innerHTML = "Desarrollé e implementé un contrato a 5 años con un estimado de 300 empleados.";
        document.getElementById("li11").innerHTML = "Graduado con honores, primera clase.";
        document.getElementById("li12").innerHTML = "Estudié en el extranjero por 1 año como parte de un programa de intercambio.";
        document.getElementById("li13").innerHTML = "Experiencia con distintos tipos de software.";
        document.getElementById("li14").innerHTML = "Habilidad de trabajar en equipo y en situaciones bajo mucha presión.";
        document.getElementById("li15").innerHTML = "Dominio del idioma inglés.";
        document.getElementById("bo01").innerHTML = "Modo Oscuro";
        document.getElementById("bo02").innerHTML = "Modo Claro";
        document.getElementById("bo03").innerHTML = "Ocultar";
        document.getElementById("titulo").innerHTML = "Proyecto CV";
        document.getElementById("linkReadme").innerHTML = "Más información.";
    }

    else if (idiomaElegido === "english") {
        if (document.getElementById("indicadorIdioma").style.display !== "none") {
            document.getElementById("indicadorIdioma").innerHTML = "Language: English";
        }

        document.getElementById("indicadorIdioma").innerHTML = "Language: English";
        document.getElementById("pa01").innerHTML = "Last Name: Pena";
        document.getElementById("pa02").innerHTML = "Name: Chad";
        document.getElementById("pa03").innerHTML = "E-mail: chad.pena@example.com";
        document.getElementById("pa04").innerHTML = "Date of Birth: 4/6/1987";
        document.getElementById("pa05").innerHTML = "Address: 2022 Oak Lawn Ave"
        document.getElementById("pa06").innerHTML = "Phone: (874) 777-5582";
        document.getElementById("pa07").innerHTML = "I am a hard-working person, with interests regarding production and sales. My specialties lie in productivity and training employees.";
        document.getElementById("pa08").innerHTML = "Alliance - Project manager and sales associate (2017-present)";
        document.getElementById("pa09").innerHTML = "Social American - Front Office (2010-2017)";
        document.getElementById("pa10").innerHTML = "St. Gallen University - Degree in Marketing and Communication (2005-2010)";
        document.getElementById("ti01").innerHTML = "About Me";
        document.getElementById("ti02").innerHTML = "Experience";
        document.getElementById("ti03").innerHTML = "Education";
        document.getElementById("ti04").innerHTML = "Skills, aptitudes, miscellaneous";
        document.getElementById("li01").innerHTML = "Achieved a mid-term strategy towards increasing the cost effectiveness of the project management sector; generating tools geared towards commerce with 13 different states.";
        document.getElementById("li02").innerHTML = "Lead a team of 50 people and took the corporation to the top 25 of leading companies in the country during 2019, increasing the amount of stakholders by 40%.";
        document.getElementById("li03").innerHTML = "Organized marketing campaigns, increasing the company's productivity on average. Worked with the publicity's department to define the demographic target of more than 25 products; alongside the expected and potential attributes of these.";
        document.getElementById("li04").innerHTML = "Trained 23 students on 2 events for multiple work teams.";
        document.getElementById("li05").innerHTML = "Raised profits of the company by 500% in 5 years.";
        document.getElementById("li06").innerHTML = "Managed 20 ventures with marketing consultants.";
        document.getElementById("li07").innerHTML = "Worked alongside a team of 10 engineers, raising the annual productivity.";
        document.getElementById("li08").innerHTML = "Developed four new private projects on 2 international markets.";
        document.getElementById("li09").innerHTML = "Evaluated 5 high-profile projects in 2016.";
        document.getElementById("li10").innerHTML = "Developed and implemented a 5-year contract with an estimated 300 employees.";
        document.getElementById("li11").innerHTML = "Graduated with first class honors.";
        document.getElementById("li12").innerHTML = "Studied abroad for 1 year during an exchange course.";
        document.getElementById("li13").innerHTML = "Knowledge about different kinds of software.";
        document.getElementById("li14").innerHTML = "Capable of working with a team and under a lot of pressure.";
        document.getElementById("li15").innerHTML = "Fluent in Spanish.";
        document.getElementById("bo01").innerHTML = "Dark Mode";
        document.getElementById("bo02").innerHTML = "Light Mode";
        document.getElementById("bo03").innerHTML = "Hide";
        document.getElementById("titulo").innerHTML = "Resume Project";
        document.getElementById("linkReadme").innerHTML = "More information.";

    }
}