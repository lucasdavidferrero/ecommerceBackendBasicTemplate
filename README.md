# Flujo para debuggear:
- Parar el nodemon
- Correr la tarea de vscode (compilar el TS a JS)
- Poner el/los breakpoint en el archivo .ts deseado
- Correr el launch para debuggear

# TODOs tecnicos.
- [ ] Incluir librería para hacer test unitarios.
- [ ] Crear test unitarios básicos.
- [ ] Ver cómo definir tipos de los request and response.
- [ ] Ver cómo manejar errores.
- [ ] Ver cómo vamos a hacer validaciones a nivel de ruta (alguna librería).
- [ ] Investigar alguna herramienta para documentar la API que estamos creando.

# Flujo Documentación
- Se define todas las estructuras de la Open API en la carpeta /docs
- Al finalizar la escrituras/modificaciones de la estructuras correr script ´docs:generate´. Este script genera un archivo openapi.json en el directorio raíz. Este archivo es tomado por el swagger-express-ui para generar la interfaz de la documentación.