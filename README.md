# Spanish Academy JARIO — Front-end

Sitio web adaptable desarrollado con React para Spanish Academy JARIO. La página
principal presenta la academia, las clases, la reserva de una clase de prueba,
la evaluación de nivel, los paquetes de clases, el contenido de YouTube y la
información de contacto. La ruta de vocabulario permite buscar ejemplos de
oraciones en español con traducciones al inglés.

## Ejecución local

```bash
npm install
npm run dev
```

## Publicación en GitHub Pages

El flujo de GitHub Actions en `.github/workflows/deploy.yml` compila y publica
el sitio cuando se integra un cambio en `main`. En el repositorio, abre
**Settings → Pages** y selecciona **GitHub Actions** como fuente de publicación.
El sitio del repositorio `jario-frontend` se publica en
`https://ruzarate31-sudo.github.io/project-jario-frontend/`.

La ruta base de Vite y React Router está configurada para GitHub Pages. El flujo
también genera una página de respaldo para que `/vocabulary` y la ruta 404
funcionen al abrirse directamente.

## Comandos disponibles

- `npm run dev`: inicia el servidor de desarrollo de Vite.
- `npm run lint`: ejecuta ESLint para revisar el código.
- `npm run build`: genera la versión de producción en `dist/`.
- `npm run preview`: sirve localmente la versión de producción.

## Rutas

- `/`: página principal de JARIO.
- `/vocabulary`: búsqueda de oraciones en español.
- Cualquier ruta que no exista muestra la página 404.

## API de vocabulario

Los datos de búsqueda provienen de la API pública y de solo lectura Tatoeba API
v1. La aplicación consulta `https://api.tatoeba.org/v1/sentences` desde
`src/utils/tatoebaApi.js`, enviando el término de búsqueda, español como idioma
de las oraciones, traducciones al inglés y orden por relevancia. Cada solicitud
puede devolver hasta 10 oraciones.

La interfaz muestra tres resultados al inicio y permite mostrar tres más cada
vez. Cada tarjeta presenta hasta dos traducciones al inglés. Los resultados
enlazan a su fuente en Tatoeba y muestran el nombre de quien contribuyó y la
licencia cuando la API proporciona esos datos. Los textos de Tatoeba se
distribuyen bajo la licencia CC BY 2.0 FR; la atribución de cada oración se
muestra cuando está disponible. La descripción OpenAPI de la API no especifica
un límite de solicitudes. La disponibilidad y el tiempo de respuesta dependen
del servicio externo. Para buscar se necesita conexión a internet.

## Limitaciones actuales del front-end

- La evaluación calcula una estimación de nivel en el navegador. No guarda ni
  envía las respuestas por correo electrónico.
- Al enviar el formulario de contacto, se abre la aplicación de correo
  configurada por la persona visitante (`mailto:`). El sitio no envía mensajes
  mediante un servidor.
- La reserva de clases usa un calendario integrado de Calendly. El video de
  YouTube es de muestra y los datos de contacto son temporales; se actualizarán
  cuando esté disponible el contenido definitivo.

## Alcance del proyecto

Este proyecto solo incluye el front-end. TripleTen confirmó que acepta Vite y
el community manager aprobó omitir el back-end opcional.
