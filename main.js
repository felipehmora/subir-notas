import "./style.css";

// Datos de ejemplo
const turnos = [
  { id: 1, nombre: "Mañana" },
  { id: 2, nombre: "Tarde" },
];

const cursos = [
  { id: 1, nombre: "1ro Primaria", turnoId: 1 },
  { id: 2, nombre: "2do Primaria", turnoId: 1 },
  { id: 3, nombre: "1ro Secundaria", turnoId: 2 },
  { id: 4, nombre: "2do Secundaria", turnoId: 2 },
];

const secciones = ["A", "B", "C"];

const alumnos = [
  { id: 1, nombre: "Juan Pérez", cursoId: 1, seccion: "A" },
  { id: 2, nombre: "María García", cursoId: 1, seccion: "A" },
  { id: 3, nombre: "Pedro Rodríguez", cursoId: 1, seccion: "A" },
  { id: 4, nombre: "Ana López", cursoId: 1, seccion: "A" },
  { id: 5, nombre: "Luis Martínez", cursoId: 1, seccion: "A" },
  { id: 6, nombre: "Laura Sánchez", cursoId: 1, seccion: "A" },
  { id: 7, nombre: "Carlos Ramírez", cursoId: 1, seccion: "A" },
  { id: 8, nombre: "Sofía Torres", cursoId: 1, seccion: "A" },
  { id: 9, nombre: "José Gómez", cursoId: 1, seccion: "A" },
  { id: 10, nombre: "Carmen Hernández", cursoId: 1, seccion: "A" },
  { id: 11, nombre: "Miguel Pérez", cursoId: 1, seccion: "A" },
  { id: 12, nombre: "Lucía García", cursoId: 1, seccion: "A" },
  { id: 13, nombre: "Fernando Rodríguez", cursoId: 1, seccion: "A" },
  { id: 14, nombre: "Elena López", cursoId: 1, seccion: "A" },
  { id: 15, nombre: "Andrés Martínez", cursoId: 1, seccion: "A" },
  { id: 16, nombre: "Patricia Sánchez", cursoId: 1, seccion: "A" },
  { id: 17, nombre: "Jorge Ramírez", cursoId: 1, seccion: "A" },
  { id: 18, nombre: "Paula Torres", cursoId: 1, seccion: "A" },
  { id: 19, nombre: "Rafael Gómez", cursoId: 1, seccion: "A" },
  { id: 20, nombre: "Isabel Hernández", cursoId: 1, seccion: "A" },

  // Sección B
  { id: 21, nombre: "Juan Pérez", cursoId: 1, seccion: "B" },
  { id: 22, nombre: "María García", cursoId: 1, seccion: "B" },
  { id: 23, nombre: "Pedro Rodríguez", cursoId: 1, seccion: "B" },
  { id: 24, nombre: "Ana López", cursoId: 1, seccion: "B" },
  { id: 25, nombre: "Luis Martínez", cursoId: 1, seccion: "B" },
  { id: 26, nombre: "Laura Sánchez", cursoId: 1, seccion: "B" },
  { id: 27, nombre: "Carlos Ramírez", cursoId: 1, seccion: "B" },
  { id: 28, nombre: "Sofía Torres", cursoId: 1, seccion: "B" },
  { id: 29, nombre: "José Gómez", cursoId: 1, seccion: "B" },
  { id: 30, nombre: "Carmen Hernández", cursoId: 1, seccion: "B" },
  { id: 31, nombre: "Miguel Pérez", cursoId: 1, seccion: "B" },
  { id: 32, nombre: "Lucía García", cursoId: 1, seccion: "B" },
  { id: 33, nombre: "Fernando Rodríguez", cursoId: 1, seccion: "B" },
  { id: 34, nombre: "Elena López", cursoId: 1, seccion: "B" },
  { id: 35, nombre: "Andrés Martínez", cursoId: 1, seccion: "B" },
  { id: 36, nombre: "Patricia Sánchez", cursoId: 1, seccion: "B" },
  { id: 37, nombre: "Jorge Ramírez", cursoId: 1, seccion: "B" },
  { id: 38, nombre: "Paula Torres", cursoId: 1, seccion: "B" },
  { id: 39, nombre: "Rafael Gómez", cursoId: 1, seccion: "B" },
  { id: 40, nombre: "Isabel Hernández", cursoId: 1, seccion: "B" },

  // Sección C
  { id: 41, nombre: "Juan Pérez", cursoId: 1, seccion: "C" },
  { id: 42, nombre: "María García", cursoId: 1, seccion: "C" },
  { id: 43, nombre: "Pedro Rodríguez", cursoId: 1, seccion: "C" },
  { id: 44, nombre: "Ana López", cursoId: 1, seccion: "C" },
  { id: 45, nombre: "Luis Martínez", cursoId: 1, seccion: "C" },
  { id: 46, nombre: "Laura Sánchez", cursoId: 1, seccion: "C" },
  { id: 47, nombre: "Carlos Ramírez", cursoId: 1, seccion: "C" },
  { id: 48, nombre: "Sofía Torres", cursoId: 1, seccion: "C" },
  { id: 49, nombre: "José Gómez", cursoId: 1, seccion: "C" },
  { id: 50, nombre: "Carmen Hernández", cursoId: 1, seccion: "C" },
  { id: 51, nombre: "Miguel Pérez", cursoId: 1, seccion: "C" },
  { id: 52, nombre: "Lucía García", cursoId: 1, seccion: "C" },
  { id: 53, nombre: "Fernando Rodríguez", cursoId: 1, seccion: "C" },
  { id: 54, nombre: "Elena López", cursoId: 1, seccion: "C" },
  { id: 55, nombre: "Andrés Martínez", cursoId: 1, seccion: "C" },
  { id: 56, nombre: "Patricia Sánchez", cursoId: 1, seccion: "C" },
  { id: 57, nombre: "Jorge Ramírez", cursoId: 1, seccion: "C" },
  { id: 58, nombre: "Paula Torres", cursoId: 1, seccion: "C" },
  { id: 59, nombre: "Rafael Gómez", cursoId: 1, seccion: "C" },
  { id: 60, nombre: "Isabel Hernández", cursoId: 1, seccion: "C" },
];

document.querySelector("#app").innerHTML = `
  <div class="container">
    <h1>Panel de Profesor</h1>
    <div class="panel">
      <div class="turnos">
        <h2>Turnos</h2>
        <ul id="listaTurnos"></ul>
      </div>
      <div class="cursos">
        <h2>Cursos</h2>
        <ul id="listaCursos"></ul>
      </div>
      <div class="secciones">
        <h2>Secciones</h2>
        <ul id="listaSecciones"></ul>
      </div>
      <div class="alumnos">
        <h2>Alumnos</h2>
        <ul id="listaAlumnos"></ul>
      </div>
    </div>
    <div id="modal" class="modal">
      <div class="modal-content">
        <span class="close">&times;</span>
        <h2>Subir Nota</h2>
        <form id="notaForm">
          <div class="form-group">
            <label for="alumnoId">ID del Alumno:</label>
            <input type="text" id="alumnoId" required readonly>
          </div>
          <div class="form-group">
            <label for="nombreAlumno">Nombre del Alumno:</label>
            <input type="text" id="nombreAlumno" required readonly>
          </div>
          <div class="form-group">
            <label for="nota">Nota:</label>
            <input type="number" id="nota" min="0" max="10" step="0.1" required>
          </div>
          <button type="submit">Subir Nota</button>
        </form>
      </div>
    </div>
    <div id="modal-ver-notas" class="modal">
     <div class="modal-content">
        <span class="close">&times;</span>
        <h2>Notas </h2>

      </div>
    </div>
    <div id="mensaje"></div>
  </div>
`;

const listaTurnos = document.getElementById("listaTurnos");
const listaCursos = document.getElementById("listaCursos");
const listaSecciones = document.getElementById("listaSecciones");
const listaAlumnos = document.getElementById("listaAlumnos");
const notaForm = document.getElementById("notaForm");
const alumnoIdInput = document.getElementById("alumnoId");
const nombreAlumnoInput = document.getElementById("nombreAlumno");
const mensaje = document.getElementById("mensaje");
const modal = document.getElementById("modal");
const modalVerNotas = document.getElementById("modal-ver-notas");
const closeModal = document.getElementsByClassName("close")[0];

let turnoSeleccionado = null;
let cursoSeleccionado = null;
let seccionSeleccionada = null;

function mostrarTurnos() {
  listaTurnos.innerHTML = "";
  turnos.forEach((turno) => {
    const li = document.createElement("li");
    li.textContent = turno.nombre;
    li.addEventListener("click", () => {
      turnoSeleccionado = turno;
      mostrarCursos();
    });
    listaTurnos.appendChild(li);
  });
}

function mostrarCursos() {
  listaCursos.innerHTML = "";
  const cursosFiltrados = cursos.filter(
    (curso) => curso.turnoId === turnoSeleccionado.id
  );
  cursosFiltrados.forEach((curso) => {
    const li = document.createElement("li");
    li.textContent = curso.nombre;
    li.addEventListener("click", () => {
      cursoSeleccionado = curso;
      mostrarSecciones();
    });
    listaCursos.appendChild(li);
  });
}

function mostrarSecciones() {
  listaSecciones.innerHTML = "";
  secciones.forEach((seccion) => {
    const li = document.createElement("li");
    li.textContent = seccion;
    li.addEventListener("click", () => {
      seccionSeleccionada = seccion;
      mostrarAlumnos();
    });
    listaSecciones.appendChild(li);
  });
}

function mostrarAlumnos() {
  listaAlumnos.innerHTML = "";
  const alumnosFiltrados = alumnos.filter(
    (alumno) =>
      alumno.cursoId === cursoSeleccionado.id &&
      alumno.seccion === seccionSeleccionada
  );
  alumnosFiltrados.forEach((alumno) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${alumno.id} - ${alumno.nombre}
      <button class="btn-nota" data-id="${alumno.id}" data-nombre="${alumno.nombre}">Subir Nota</button>
      <button class="btn-ver-notas" data-id="${alumno.id}" data-nombre="${alumno.nombre}">Ver Notas</button>
    `;
    listaAlumnos.appendChild(li);
  });

  // Agregar event listeners a los botones de subir nota
  document.querySelectorAll(".btn-nota").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const alumnoId = e.target.getAttribute("data-id");
      const nombreAlumno = e.target.getAttribute("data-nombre");
      abrirModalNota(alumnoId, nombreAlumno);
    });
  });

  document.querySelectorAll(".btn-ver-notas").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const alumnoId = e.target.getAttribute("data-id");
      const nombreAlumno = e.target.getAttribute("data-nombre");
      console.log(alumnoId, nombreAlumno);
      abrirModalVerNotas();
    });
  });
}

function abrirModalNota(alumnoId, nombreAlumno) {
  alumnoIdInput.value = alumnoId;
  nombreAlumnoInput.value = nombreAlumno;
  modal.style.display = "block";
}

function abrirModalVerNotas() {
  modalVerNotas.style.display = "block";
}

closeModal.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

notaForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const alumnoId = alumnoIdInput.value;
  const nombreAlumno = nombreAlumnoInput.value;
  const nota = document.getElementById("nota").value;

  if (!alumnoId) {
    mostrarMensaje("Por favor, seleccione un alumno", "error");
    return;
  }

  // Aquí iría la lógica para guardar la nota en la base de datos
  console.log(
    `Nota ${nota} subida para el alumno ${alumnoId} - ${nombreAlumno}`
  );
  mostrarMensaje(
    `Nota subida con éxito para el alumno ${nombreAlumno}`,
    "success"
  );
  notaForm.reset();
  modal.style.display = "none";
});

function mostrarMensaje(texto, tipo) {
  mensaje.textContent = texto;
  mensaje.className = tipo;
  setTimeout(() => {
    mensaje.textContent = "";
    mensaje.className = "";
  }, 3000);
}

// Inicializar la interfaz
mostrarTurnos();
