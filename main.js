import './style.css'

// Datos de ejemplo
const turnos = [
  { id: 1, nombre: 'Mañana' },
  { id: 2, nombre: 'Tarde' }
];

const cursos = [
  { id: 1, nombre: '1ro Primaria', turnoId: 1 },
  { id: 2, nombre: '2do Primaria', turnoId: 1 },
  { id: 3, nombre: '1ro Secundaria', turnoId: 2 },
  { id: 4, nombre: '2do Secundaria', turnoId: 2 }
];

const secciones = ['A', 'B', 'C'];

const alumnos = [
  { id: 1, nombre: 'Juan Pérez', cursoId: 1, seccion: 'A' },
  { id: 2, nombre: 'María García', cursoId: 1, seccion: 'A' },
  // ... (agregar más alumnos hasta tener al menos 20 por curso)
];

document.querySelector('#app').innerHTML = `
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
    <div id="mensaje"></div>
  </div>
`

const listaTurnos = document.getElementById('listaTurnos');
const listaCursos = document.getElementById('listaCursos');
const listaSecciones = document.getElementById('listaSecciones');
const listaAlumnos = document.getElementById('listaAlumnos');
const notaForm = document.getElementById('notaForm');
const alumnoIdInput = document.getElementById('alumnoId');
const nombreAlumnoInput = document.getElementById('nombreAlumno');
const mensaje = document.getElementById('mensaje');
const modal = document.getElementById('modal');
const closeModal = document.getElementsByClassName('close')[0];

let turnoSeleccionado = null;
let cursoSeleccionado = null;
let seccionSeleccionada = null;

function mostrarTurnos() {
  listaTurnos.innerHTML = '';
  turnos.forEach(turno => {
    const li = document.createElement('li');
    li.textContent = turno.nombre;
    li.addEventListener('click', () => {
      turnoSeleccionado = turno;
      mostrarCursos();
    });
    listaTurnos.appendChild(li);
  });
}

function mostrarCursos() {
  listaCursos.innerHTML = '';
  const cursosFiltrados = cursos.filter(curso => curso.turnoId === turnoSeleccionado.id);
  cursosFiltrados.forEach(curso => {
    const li = document.createElement('li');
    li.textContent = curso.nombre;
    li.addEventListener('click', () => {
      cursoSeleccionado = curso;
      mostrarSecciones();
    });
    listaCursos.appendChild(li);
  });
}

function mostrarSecciones() {
  listaSecciones.innerHTML = '';
  secciones.forEach(seccion => {
    const li = document.createElement('li');
    li.textContent = seccion;
    li.addEventListener('click', () => {
      seccionSeleccionada = seccion;
      mostrarAlumnos();
    });
    listaSecciones.appendChild(li);
  });
}

function mostrarAlumnos() {
  listaAlumnos.innerHTML = '';
  const alumnosFiltrados = alumnos.filter(alumno => 
    alumno.cursoId === cursoSeleccionado.id && alumno.seccion === seccionSeleccionada
  );
  alumnosFiltrados.forEach(alumno => {
    const li = document.createElement('li');
    li.innerHTML = `
      ${alumno.id} - ${alumno.nombre}
      <button class="btn-nota" data-id="${alumno.id}" data-nombre="${alumno.nombre}">Subir Nota</button>
    `;
    listaAlumnos.appendChild(li);
  });

  // Agregar event listeners a los botones de subir nota
  document.querySelectorAll('.btn-nota').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const alumnoId = e.target.getAttribute('data-id');
      const nombreAlumno = e.target.getAttribute('data-nombre');
      abrirModalNota(alumnoId, nombreAlumno);
    });
  });
}

function abrirModalNota(alumnoId, nombreAlumno) {
  alumnoIdInput.value = alumnoId;
  nombreAlumnoInput.value = nombreAlumno;
  modal.style.display = 'block';
}

closeModal.onclick = function() {
  modal.style.display = 'none';
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}

notaForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const alumnoId = alumnoIdInput.value;
  const nombreAlumno = nombreAlumnoInput.value;
  const nota = document.getElementById('nota').value;

  if (!alumnoId) {
    mostrarMensaje('Por favor, seleccione un alumno', 'error');
    return;
  }

  // Aquí iría la lógica para guardar la nota en la base de datos
  console.log(`Nota ${nota} subida para el alumno ${alumnoId} - ${nombreAlumno}`);
  mostrarMensaje(`Nota subida con éxito para el alumno ${nombreAlumno}`, 'success');
  notaForm.reset();
  modal.style.display = 'none';
});

function mostrarMensaje(texto, tipo) {
  mensaje.textContent = texto;
  mensaje.className = tipo;
  setTimeout(() => {
    mensaje.textContent = '';
    mensaje.className = '';
  }, 3000);
}

// Inicializar la interfaz
mostrarTurnos();