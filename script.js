function generarSesion() {
  const nivel = document.getElementById("nivel").value;
  const area = document.getElementById("area").value;
  const tema = document.getElementById("tema").value;
  const tiempo = document.getElementById("tiempo").value;

  const resultado = document.getElementById("resultado");

  resultado.innerHTML = `
    <h3>📘 Sesión de Aprendizaje</h3>
    <p><strong>Nivel:</strong> ${nivel}</p>
    <p><strong>Área:</strong> ${area}</p>
    <p><strong>Tema:</strong> ${tema}</p>
    <p><strong>Duración:</strong> ${tiempo}</p>

    <h4>🧠 Inicio</h4>
    <p>Pregunta generadora relacionada con ${tema}.</p>

    <h4>🔬 Desarrollo</h4>
    <p>Actividad práctica guiada usando recursos digitales.</p>

    <h4>✅ Cierre</h4>
    <p>Reflexión y autoevaluación rápida.</p>

    <h4>📊 Evaluación</h4>
    <p>Lista de cotejo simple enfocada en el proceso.</p>
  `;
}
