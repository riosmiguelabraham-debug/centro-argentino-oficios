const generalWA = "https://wa.me/5491176068862?text=";
const courses = [
  {name:"Acompañante Terapéutico",cat:"Salud",icon:"♡",duration:"8 meses",schedule:"Sábados · 10 a 12 hs",modality:"Presencial",desc:"Acompañamiento, escucha empática y apoyo en la vida cotidiana.",cert:"CAO · UAI · Universidad de San Pablo (extensión universitaria)"},
  {name:"Asistente Veterinario",cat:"Salud",icon:"✚",duration:"6 meses",schedule:"Sábados · 10 a 12 hs",modality:"Presencial",desc:"Herramientas para asistir en el cuidado y la atención veterinaria.",cert:"Certificación CAO"},
  {name:"Body Piercing",cat:"Belleza",icon:"✧",duration:"4 meses",schedule:"Lunes · 18 a 20 hs",modality:"Presencial",desc:"Técnicas, anatomía y medidas de bioseguridad para una práctica responsable.",cert:"Certificación CAO"},
  {name:"Reparación de Celulares",cat:"Oficios",icon:"▣",duration:"6 meses",schedule:"Sábados · 10 a 12 hs",modality:"Presencial",desc:"Componentes, diagnóstico de fallas y posibles soluciones.",cert:"CAIM · UTN · UAI · CAO"},
  {name:"Asistente en Cardiología",cat:"Salud",icon:"♡",duration:"6 meses",schedule:"Jueves · 16 a 18 hs",modality:"Presencial",desc:"Introducción práctica a ECG, ergometría, MAPA y Holter.",cert:"CAO · UAI"},
  {name:"Electricidad Domiciliaria",cat:"Oficios",icon:"ϟ",duration:"6 meses",schedule:"Sábados · 16 a 18 hs",modality:"Presencial",desc:"Conocimientos teóricos y prácticos para instalaciones y reparaciones domiciliarias.",cert:"CAO · CAIM"},
  {name:"Extraccionista de Laboratorio",cat:"Salud",icon:"✚",duration:"6 meses",schedule:"Jueves · 18 a 20 hs",modality:"Presencial",desc:"Punción venosa, toma de muestras y nociones de primeros auxilios.",cert:"CAO · UAI · AATALAC (incluye carnet RUDEA)"},
  {name:"Auxiliar de Farmacia",cat:"Salud",icon:"✚",duration:"5 meses",schedule:"Jueves · 15 a 17 hs",modality:"Presencial",desc:"Manejo de medicamentos, tareas administrativas y dispensación bajo supervisión.",cert:"CAO · UAI"},
  {name:"Estimulación Temprana",cat:"Salud",icon:"♡",duration:"5 meses",schedule:"Sábados · 12 a 14 hs",modality:"Presencial",desc:"Desarrollo infantil, aprendizaje y acompañamiento durante las primeras etapas.",cert:"CAO · UAI · Universidad de San Pablo (extensión universitaria)"},
  {name:"Belleza de Uñas y Pestañas",cat:"Belleza",icon:"✧",duration:"5 meses",schedule:"Viernes · 16 a 18 hs",modality:"Presencial",desc:"Técnicas para uñas, cejas y pestañas con criterios de higiene y cuidado.",cert:"Certificación CAO"},
  {name:"Maquillaje Social y Profesional",cat:"Belleza",icon:"✧",duration:"5 meses",schedule:"Miércoles · 16 a 18 hs",modality:"Presencial",desc:"Técnicas, herramientas y productos para maquillaje social y profesional.",cert:"Certificación CAO"},
  {name:"Masajista Profesional",cat:"Salud",icon:"♡",duration:"6 meses",schedule:"Sábados · 12 a 14 hs",modality:"Presencial",desc:"Maniobras y técnicas de masaje con fundamentos de anatomía.",cert:"Certificación CAO"},
  {name:"Refrigeración y Aire Acondicionado",cat:"Oficios",icon:"❄",duration:"6 meses",schedule:"Lunes · 20 a 22 hs",modality:"Presencial",desc:"Instalación y mantenimiento de equipos de refrigeración y climatización.",cert:"CAO · CAIM (incluye matrícula de instalador)"},
  {name:"Reparación de PC y Soporte Informático",cat:"Informática",icon:"⌘",duration:"8 meses",schedule:"Lunes · 18 a 20 hs",modality:"Presencial",desc:"Diagnóstico, mantenimiento, reparación de computadoras y sistemas.",cert:"CAIM · UTN · UAI · CAO"},
  {name:"Tatuador Profesional",cat:"Belleza",icon:"✧",duration:"6 meses",schedule:"Jueves · 19 a 21 hs",modality:"Presencial",desc:"Fundamentos, diseño, equipos, técnicas y práctica de tatuaje.",cert:"Certificación CAO"},
  {name:"Tatuaje Nivel 2 · Avanzado",cat:"Belleza",icon:"✧",duration:"6 meses",schedule:"Sábados · 9 a 11 hs",modality:"Presencial",desc:"Técnicas avanzadas de sombreado, composición, realismo y color.",cert:"Certificación CAO"},
  {name:"Secretario Médico",cat:"Salud",icon:"✚",duration:"5 meses",schedule:"Jueves · 14 a 16 hs",modality:"Online",desc:"Documentación clínica, organización de historias médicas y gestión administrativa.",cert:"CAO · UAI"},
  {name:"Internet Full",cat:"Informática",icon:"⌘",duration:"8 meses presencial · 6 virtual",schedule:"Horarios a consultar",modality:"Presencial / Virtual",desc:"Navegación, correo, redes sociales y herramientas digitales cotidianas.",cert:"CAO · UTN · UAI"},
  {name:"Operador Office",cat:"Informática",icon:"⌘",duration:"8 meses presencial · 6 virtual",schedule:"Horarios a consultar",modality:"Presencial / Virtual",desc:"Herramientas de oficina: Word, Excel, Access, PowerPoint e internet.",cert:"CAO · UTN · UAI"},
  {name:"Diseño Gráfico",cat:"Informática",icon:"▧",duration:"8 meses presencial · 6 virtual",schedule:"Horarios a consultar",modality:"Presencial / Virtual",desc:"Comunicación visual y herramientas de diseño gráfico.",cert:"CAO · UTN · UAI"},
  {name:"Diseño de Páginas Web",cat:"Informática",icon:"⌘",duration:"8 meses presencial · 6 virtual",schedule:"Horarios a consultar",modality:"Presencial / Virtual",desc:"Diseño web con fundamentos de HTML, CSS y JavaScript.",cert:"CAO · UTN · UAI"},
  {name:"AutoCAD",cat:"Informática",icon:"▧",duration:"8 meses presencial · 6 virtual",schedule:"Horarios a consultar",modality:"Presencial / Virtual",desc:"Herramientas de diseño asistido por computadora en 2D y 3D.",cert:"CAO · UTN · UAI"},
  {name:"Creación y Programación de Videojuegos",cat:"Informática",icon:"▣",duration:"8 meses presencial · 6 virtual",schedule:"Horarios a consultar",modality:"Presencial / Virtual",desc:"Diseño y desarrollo de videojuegos con herramientas de programación.",cert:"CAO · UTN · UAI"},
  {name:"Secretariado Jurídico Informático",cat:"Informática",icon:"▤",duration:"8 meses presencial · 6 virtual",schedule:"Horarios a consultar",modality:"Presencial / Virtual",desc:"Herramientas informáticas y organización de tareas en ámbitos jurídicos.",cert:"CAO · UTN · UAI"},
  {name:"Secretariado Ejecutivo Informático",cat:"Informática",icon:"▤",duration:"8 meses",schedule:"Horarios a consultar",modality:"Presencial / Virtual",desc:"Herramientas administrativas, contables y de gestión.",cert:"CAO · UTN · UAI"}
];
const intensives = [
  {name:"Aire Acondicionado Intensivo",icon:"❄",duration:"3 meses",schedule:"Viernes · 18 a 20 hs",cert:"Privada · CAIM; la certificación CAIM incluye matrícula de instalador."},
  {name:"Extensión de Pestañas",icon:"✧",duration:"2 meses",schedule:"Jueves · 14 a 16 hs · Inicio informado: 5/11",cert:"Certificación privada"},
  {name:"Uñas Intensivo",icon:"✧",duration:"2 meses",schedule:"Jueves · 16 a 18 hs · Inicio informado: 5/11",cert:"Certificación privada"},
  {name:"Cejas Intensivo",icon:"✧",duration:"2 meses",schedule:"Miércoles · 16 a 18 hs · Inicio informado: 4/11",cert:"Certificación privada"},
  {name:"Micropigmentación de Cejas y Labios",icon:"✧",duration:"2 meses · 8 clases teórico-prácticas",schedule:"Jueves · 18 a 20 hs · Inicio informado: 5/11",cert:"Consultá por certificaciones y costos"}
];
const grid = document.getElementById("courseGrid");
const search = document.getElementById("courseSearch");
let activeFilter = "Todos";
const catClass = c => c==="Salud"?"salud":c==="Belleza"?"belleza":c==="Informática"?"informatica":c==="Veterinaria"?"veterinaria":"oficios";
function renderCourses(){
  const term = search.value.trim().toLocaleLowerCase("es");
  const list = courses.filter(c => (activeFilter==="Todos" || c.cat===activeFilter) && (c.name+" "+c.desc+" "+c.cat).toLocaleLowerCase("es").includes(term));
  grid.innerHTML = list.length ? list.map((c,i)=>`
    <article class="course-card">
      <div class="course-art ${catClass(c.cat)}"><span class="art-icon">${c.icon}</span><span class="art-label">${c.cat.toUpperCase()} · IMAGEN ILUSTRATIVA</span></div>
      <div class="course-body">
        <span class="tag">${c.modality}</span><h3>${c.name}</h3><p>${c.desc}</p>
        <div class="course-meta"><span>◷ ${c.duration}</span><span>◉ ${c.schedule}</span></div>
        <div class="cert-line">Certificaciones: ${c.cert}</div>
        <div class="card-actions"><a class="more-link" href="${generalWA+encodeURIComponent("Hola, quisiera información sobre el curso de "+c.name+".")}" target="_blank" rel="noopener">Consultar curso</a><a class="wa-link" href="${generalWA+encodeURIComponent("Hola, quisiera consultar horarios, próximas fechas y certificaciones del curso de "+c.name+".")}" target="_blank" rel="noopener">WhatsApp ↗</a></div>
      </div>
    </article>`).join("") : `<div class="empty-state">No encontramos cursos con esa búsqueda. Probá con otra palabra o consultanos por WhatsApp.</div>`;
}
function renderIntensives(){
 document.getElementById("intensiveGrid").innerHTML=intensives.map(c=>`<article class="intensive-card"><span class="mini-icon">${c.icon}</span><div><strong>${c.name}</strong><span>${c.duration} · ${c.schedule}</span><small>Certificación: ${c.cert}</small></div></article>`).join("");
}
document.getElementById("filters").addEventListener("click",e=>{const b=e.target.closest("button[data-filter]");if(!b)return;activeFilter=b.dataset.filter;document.querySelectorAll(".filter").forEach(x=>x.classList.toggle("active",x===b));renderCourses();});
search.addEventListener("input",renderCourses);
const menuToggle=document.getElementById("menuToggle"), nav=document.getElementById("mainNav");
menuToggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");menuToggle.setAttribute("aria-expanded",String(open));});
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");menuToggle.setAttribute("aria-expanded","false");}));
renderCourses();renderIntensives();
