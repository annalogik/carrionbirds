# Carrion Birds · Centro de Tecnificación Virtual

Landing estática pensada para alojarse gratis en GitHub Pages.

## Estructura

```
index.html                  La página
css/styles.css              Estilos (colores y fuentes al principio)
img/logo-carrion-birds-circular.*  Logo circular (portada y pie)
img/favicon.png             Icono de la pestaña (cabeza del ave)
img/luz-carrion.jpg         SUSTITUIR por tu foto (vertical, 900 × 1200 px)
img/archery-zone.jpg        SUSTITUIR por la foto de Archery Zone (vertical, 900 × 1200 px)
img/foto-grupo.jpg          SUSTITUIR por la foto de grupo (horizontal, 1600 px de ancho)
img/logo-rfeta.png          Logo de la Real Federación Española de Tiro con Arco
img/logo-fatarco.png        Logo de la Federación Andaluza de Tiro con Arco
cv.pdf                      AÑADIR tu currículum con este nombre
privacidad.html             Política de privacidad (plantilla a completar)
fonts/                      Fuentes Karatula y Edo (con la licencia de Edo)
CNAME                       Tu dominio
.nojekyll                   Indica a GitHub que no procese la web
```

## 1. Antes de publicar

1. **Fuentes.** Ya están incluidas en `fonts/` (Karatula y Edo, en formato web). Karatula venía sin tildes y Edo sin dos puntos ni punto y coma; se han añadido dibujados a partir de sus propias formas. Los paréntesis y la @ en Edo se muestran con la fuente de reserva.
2. **Fotos.** Sustituye `img/luz-carrion.jpg`, `img/archery-zone.jpg` y `img/foto-grupo.jpg` por las tuyas, con el mismo nombre exacto (en minúsculas y con `.jpg`). Las fotos se recortan solas a la forma del diseño. Si al verlas algún recorte corta algo importante, ajusta el valor `object-position` de esa foto en `css/styles.css` (sección "Conóceme"): bajar el porcentaje muestra más parte de arriba y subirlo, más parte de abajo. Asegúrate de tener permiso de las personas que aparecen.
3. **Currículum.** Sube tu CV en la raíz con el nombre `cv.pdf`. El botón "Mi currículum" lo descarga.
4. **Párrafo sobre ti.** En `index.html`, sección "Conóceme", cambia el texto provisional.
5. **Google Classroom.** En `index.html`, busca `https://classroom.google.com/` y cámbialo por el enlace de tu clase (aparece en tres sitios).
6. **Dominio.** Abre `CNAME` y escribe tu dominio (por ejemplo `www.carrionbirds.com`), sin `https://`.
7. **Formulario y privacidad.** Ver el apartado siguiente.

## Formulario de contacto (Formspree)

GitHub Pages no puede enviar emails, así que el formulario usa **Formspree** (formspree.io). Tu email no aparece en ningún sitio de la web: solo un código.

1. Crea una cuenta gratuita en formspree.io con el email donde quieres recibir los mensajes, y confírmalo.
2. Crea un formulario nuevo (*New form*). Formspree te dará una dirección como `https://formspree.io/f/xyzabcde`.
3. En `index.html`, busca `TU_CODIGO` y sustitúyelo por la parte final de esa dirección (en el ejemplo, `xyzabcde`).
4. Publica la web y envía un mensaje de prueba. Comprueba que te llega (mira también en la carpeta de spam la primera vez).
5. Recomendado: en la configuración del formulario en Formspree, en el apartado de dominios permitidos, añade tu dominio para que nadie pueda usar tu formulario desde otra web.

Al responder al email que te llega, la respuesta va directamente al email que escribió la persona.

**Privacidad:** como el formulario recoge datos personales, la web incluye una casilla de aceptación y una página `privacidad.html`. Es una plantilla orientativa: completa los datos entre [corchetes] y revisa que se ajusta a tu caso.

## 2. Publicar en GitHub Pages

1. Crea un repositorio público en GitHub (por ejemplo `carrionbirds-web`).
2. Sube todos los archivos de esta carpeta (botón *Add file › Upload files*), incluida `.nojekyll`.
3. En el repositorio: *Settings › Pages › Build and deployment*: elige *Deploy from a branch*, rama `main`, carpeta `/ (root)`, y guarda.
4. En la misma pantalla, en *Custom domain*, escribe tu dominio y guarda. Cuando aparezca disponible, marca *Enforce HTTPS*.

## 3. Configurar el dominio (en tu proveedor de dominio)

Para `www.tudominio.com` crea un registro **CNAME**:

| Tipo  | Nombre | Valor                  |
|-------|--------|------------------------|
| CNAME | www    | TU-USUARIO.github.io   |

Para que funcione también sin `www`, crea cuatro registros **A** para `@`:

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

Los cambios de DNS pueden tardar desde unos minutos hasta 24 horas. Comprueba estas direcciones en la documentación oficial de GitHub Pages por si han cambiado.

## Cambios rápidos

- **Colores:** al principio de `css/styles.css`, en `:root`.
- **Todo el texto en Edo:** en `css/styles.css`, cambia `--fuente-lectura` por `var(--fuente-texto);`. Por defecto, Edo se usa en subtítulos, botones y textos destacados, y las listas usan una fuente de lectura más legible.
