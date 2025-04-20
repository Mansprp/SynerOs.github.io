// Puedes agregar interactividad aquí si es necesario
console.log("Bienvenido a GamerZone!");
document.addEventListener('DOMContentLoaded', () => {
  const enlacePC = document.getElementById('mostrar-comt');
  const contenedor = document.getElementById('contenedor-comt');

  enlacePC.addEventListener('click', (e) => {
    e.preventDefault();
    fetch('comt.html')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al cargar el archivo');
        }
        return response.text();
      })
      .then(html => {
        contenedor.innerHTML = html;
        contenedor.style.display = 'block';
      })
      .catch(error => {
        contenedor.innerHTML = '<p>No se pudo cargar el contenido.</p>';
        contenedor.style.display = 'block';
        console.error(error);
      });
  });
});
