# Sistema de Simulación de Entrega de Órdenes 🍽️

Este proyecto demuestra el uso de **Promesas** (`new Promise`, `.then()` y `.catch()`) en JavaScript para procesar la entrega de un pedido de forma secuencial y asíncrona.

## 📋 Características

1. **Personalización de la orden:** Permite ingresar el nombre del cliente o número de pedido.
2. **Menú interactivo:** Opción para elegir libremente los platillos desde la interfaz:
   - 🥤 **Bebida:** Refresco, Jugo Natural o Agua Mineral.
   - 🍕 **Plato Principal:** Pizza, Hamburguesa o Hot Dog.
   - 🍨 **Postre:** Helado, Torta o Flan.
3. **Secuencia de entregas estricta:** Cada etapa tiene una duración simulada (`setTimeout`) y avanza únicamente al completar la anterior.
4. **Indicadores visuales:** Muestra el icono de cada platillo en la pantalla a medida que es entregado.
5. **Control de errores:** Simula la disponibilidad de la cocina mediante el manejo de `.catch()`.
6. **Notificación Final:** Muestra un mensaje informativo en pantalla y en la consola indicando que la orden completa ha sido entregada.

## 🛠️ Cómo Ejecutarlo

1. Abre el archivo `index.html` en tu navegador preferido.
2. Escribe el nombre de tu orden y selecciona los componentes de tu menú.
3. Presiona el botón **"Iniciar Entrega de Orden"**.
4. Presiona la tecla `F12` (o Clic derecho -> *Inspeccionar*) y selecciona la pestaña **Consola** (Console) para ver los registros en tiempo real.

---
Desarrollado por [Leo Pasquale](https://github.com/lnrd2025)