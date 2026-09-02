# Jaquie Leal Style Studio

MVP web móvil para una asesoría personalizada de estilo e imagen.

## Funcionalidad actual

- Carga local de una fotografía de cuerpo completo.
- Selección o cálculo orientativo del tipo de figura.
- Selección de estación climática y paleta de color de 12 temporadas.
- Recomendaciones de prendas, colores y calzado por ocasión.
- Guardado de preferencias y looks en el navegador del dispositivo.
- Interfaz bilingüe español/inglés.

La fotografía usada para estimar proporciones no se envía a un servidor. La generación de imágenes de outfits con IA se plantea como una segunda fase y requerirá un servicio backend, almacenamiento privado, consentimiento y controles de costos.

## Desarrollo local

```bash
npm install
npm run dev
```

También puede abrirse `index.html` directamente en un navegador.

## Validación

```bash
npm run check
```

## Despliegue en Vercel

El proyecto es un sitio estático y no requiere compilación. Puede importarse desde GitHub en Vercel usando este directorio como raíz, o desplegarse con la CLI:

```bash
vercel --prod
```

## Ruta de evolución

1. Autenticación para Jaquie y sus clientas.
2. Base de datos y almacenamiento privado de fotografías.
3. Panel de curaduría protegido.
4. Generación de imágenes de outfits mediante una API de IA desde funciones de servidor.
5. Historial, aprobación y regeneración de propuestas.
