const cocineroDisponible = true; 


const esperar = (ms) => new Promise((resolve, reject) => {
  cocineroDisponible ? setTimeout(resolve, ms) : reject("❌ Error: El cocinero no está disponible.");
});

function procesarOrden() {
  const pantalla = document.getElementById("pantalla");
  const icono = document.getElementById("iconoEstatus");
  
  const orden = document.getElementById("nombreOrden").value || "Tu Orden";
  const bebida = document.getElementById("selectBebida").value;
  const plato = document.getElementById("selectPlato").value;
  const postre = document.getElementById("selectPostre").value;

  pantalla.innerText = `Iniciando orden: "${orden}"...`;
  icono.innerText = "⏳";
  console.log(`Iniciando orden: "${orden}"`);

  // Secuencia de entregas
  esperar(2000)
    .then(() => { icono.innerText = bebida.split(" ")[0]; pantalla.innerText = `¡${bebida} entregada!`; console.log(`¡${bebida} entregada!`); return esperar(3000); })
    .then(() => { icono.innerText = plato.split(" ")[0]; pantalla.innerText = `¡${plato} entregado!`; console.log(`¡${plato} entregado!`); return esperar(2000); })
    .then(() => { icono.innerText = postre.split(" ")[0]; pantalla.innerText = `¡${postre} entregado!`; console.log(`¡${postre} entregado!`); return esperar(1000); })
    .then(() => {
      icono.innerText = "✅🎉";
      const msj = `¡La orden completa ("${orden}") ha sido entregada con éxito!`;
      pantalla.innerText = msj;
      console.log(msj);
    })
    .catch((err) => {
      icono.innerText = "🚫";
      pantalla.innerText = err;
      console.log(err);
    });
}

document.getElementById("btnIniciar").onclick = procesarOrden;