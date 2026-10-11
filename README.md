# Mi Tienda Online

Aplicación web desarrollada con HTML, CSS y JavaScript que permite visualizar un resumen de pedido, seleccionar planes, consultar productos mediante una API y simular el proceso de compra y cancelación.

## Descripción del proyecto

Mi Tienda Online es un proyecto práctico de desarrollo web orientado a aplicar los fundamentos de la programación frontend. La aplicación ofrece una interfaz para consultar información de productos, gestionar una selección de compra y recorrer diferentes etapas de un proceso de pedido.

El proyecto se desarrolló progresivamente, comenzando con la estructura de la página y avanzando hacia la incorporación de estilos, interactividad, ventanas modales y publicación en internet.

**Importante:** el proceso de pago es simulado. La aplicación no procesa transacciones bancarias reales.

## Objetivos

- Construir una interfaz web clara y fácil de utilizar.
- Aplicar HTML para estructurar el contenido.
- Utilizar CSS para diseñar la interfaz y adaptarla a diferentes tamaños de pantalla.
- Implementar JavaScript para gestionar eventos e interacciones.
- Consultar productos mediante una API.
- Practicar el uso de Git y GitHub para el control de versiones.
- Publicar la aplicación utilizando Vercel.

## Tecnologías utilizadas

| Tecnología | Uso |
|---|---|
| HTML5 | Estructura y contenido de la página. |
| CSS3 | Diseño visual, distribución de elementos y adaptación a dispositivos. |
| JavaScript | Eventos, selección de planes, gestión del pedido, ventanas modales y validaciones. |
| API | Consulta de productos disponibles. |
| Git | Control de versiones del proyecto. |
| GitHub | Almacenamiento y administración del código fuente. |
| Vercel | Despliegue y publicación de la aplicación web. |

## Desarrollo del proyecto paso a paso

### Paso 1. Creación de la estructura HTML

Se creó el archivo `index.html`, encargado de definir la estructura principal de la aplicación.

En esta etapa se organizaron los elementos de la interfaz, incluyendo:

- Resumen del pedido.
- Información del plan seleccionado.
- Botones para modificar el plan y continuar con la compra.
- Sección para consultar productos.
- Ventanas modales para seleccionar el plan, realizar el pago y cancelar el pedido.

### Paso 2. Diseño de la interfaz con CSS

Se creó el archivo `style.css` para establecer la presentación visual de la aplicación.

Se trabajaron aspectos como:

- Colores, tipografía y espaciado.
- Distribución de los elementos.
- Apariencia de los botones.
- Diseño de las ventanas modales.
- Formularios y campos de entrada.
- Adaptación de la interfaz a diferentes tamaños de pantalla.

### Paso 3. Incorporación de funcionalidades con JavaScript

Se creó el archivo `script.js` para dar interactividad a la aplicación.

Se implementaron funciones para:

- Abrir y cerrar ventanas modales.
- Seleccionar entre un plan anual y uno mensual.
- Mostrar la información del plan elegido.
- Consultar productos mediante una API.
- Actualizar la información del pedido y los valores mostrados.
- Validar los campos del formulario de pago.
- Confirmar o cancelar el pedido.
- Mostrar mensajes de confirmación al usuario.

### Paso 4. Implementación de la cancelación del pedido

Se incorporó un flujo de cancelación para evitar que el usuario cancele accidentalmente su pedido.

El proceso contempla los siguientes pasos:

1. El usuario selecciona la opción de cancelar el pedido.
2. La aplicación muestra una ventana de confirmación.
3. El usuario puede confirmar la cancelación o conservar el pedido.
4. Si confirma, se muestra un mensaje indicando que la cancelación se realizó correctamente.

### Paso 5. Simulación del proceso de compra

Se creó una ventana de pago con un resumen de la compra y campos para ingresar datos de prueba.

La interfaz permite recorrer el flujo de confirmación, pero no está conectada a una pasarela de pagos ni realiza cobros reales.

**Recomendación:** utilizar únicamente información ficticia al probar el formulario.

### Paso 6. Organización del código

Se separaron las responsabilidades principales en tres archivos:

- `index.html`: estructura y contenido.
- `style.css`: presentación visual.
- `script.js`: comportamiento e interactividad.

Esta organización facilita el mantenimiento, la identificación de errores y la incorporación de nuevas funcionalidades.

### Paso 7. Control de versiones con Git

Se utilizó Git para registrar los cambios realizados durante el desarrollo.

Los comandos principales utilizados para administrar el proyecto son:

```bash
git status
git add .
git commit -m "Describe el cambio realizado"
git push
```

Estos comandos permiten revisar los cambios, prepararlos, crear una versión y enviarla al repositorio remoto.

### Paso 8. Publicación en GitHub

El código fuente se almacenó en un repositorio de GitHub para mantener una copia remota del proyecto y facilitar su seguimiento.

Repositorio: [Mi Tienda Online en GitHub](https://github.com/jadantex/mi-tienda-online)

### Paso 9. Despliegue con Vercel

Se conectó el repositorio de GitHub con Vercel para publicar la aplicación web.

El flujo de publicación consiste en:

1. Realizar cambios en los archivos del proyecto.
2. Registrar los cambios con Git.
3. Enviar los cambios a GitHub.
4. Permitir que Vercel detecte el nuevo commit.
5. Verificar el resultado del despliegue.
6. Abrir la URL pública para comprobar el funcionamiento de la aplicación.

## Estructura del proyecto

```text
mi-tienda-online/
+-- images/
¦   +-- favicon-32x32.png
¦   +-- icon-music.svg
¦   +-- illustration-hero.svg
¦   +-- pattern-background-desktop.svg
¦   +-- pattern-background-mobile.svg
+-- .gitignore
+-- index.html
+-- script.js
+-- style.css
+-- README.md
```

La carpeta `images` contiene los recursos gráficos del proyecto. Los archivos HTML, CSS y JavaScript conforman la aplicación principal.

## Cómo ejecutar el proyecto localmente

1. Clonar el repositorio:

```bash
git clone https://github.com/jadantex/mi-tienda-online.git
```

2. Ingresar a la carpeta:

```bash
cd mi-tienda-online
```

3. Abrir la carpeta en Visual Studio Code:

```bash
code .
```

4. Abrir `index.html` en un navegador. También se puede utilizar la extensión Live Server de Visual Studio Code para ejecutar la página durante el desarrollo.

## Pruebas recomendadas

Antes de publicar una nueva versión, se recomienda comprobar:

- Que la página cargue correctamente.
- Que los botones respondan a las acciones del usuario.
- Que se pueda seleccionar y modificar el plan.
- Que la consulta de productos muestre los estados correspondientes.
- Que el usuario pueda confirmar o cancelar el pedido.
- Que los formularios validen los campos obligatorios.
- Que las ventanas modales se puedan cerrar correctamente.
- Que la interfaz funcione en pantallas de diferentes tamaños.
- Que el despliegue de Vercel termine correctamente.

## Mejoras futuras

Entre las posibles mejoras se encuentran:

- Persistencia del carrito entre sesiones.
- Incorporación de un catálogo con productos propios.
- Implementación de un backend y una base de datos.
- Autenticación de usuarios.
- Integración de una pasarela de pagos real mediante un proveedor autorizado.
- Pruebas automatizadas.
- Mejoras de accesibilidad y experiencia de usuario.

## Autor

Proyecto desarrollado como ejercicio práctico de desarrollo web, utilizando tecnologías frontend y herramientas de control de versiones y despliegue.

---

**Estado del proyecto:** aplicación web frontend con funcionalidades interactivas y proceso de compra simulado.