---
layout: default
title: Notas Clases 9 y 10
---

# Notas de Clase - Informática

## Clase #1: Fundamentos de la Imagen Digital

### 📋 Objetivo de la Clase
*   Diferenciar los conceptos básicos de la imagen digital estática, sus tipos (vectorial vs. mapa de bits) y formatos.
*   Seleccionar el tipo de imagen adecuado para diferentes proyectos multimedia.

---

### 💡 Conceptos Clave

#### **¿Qué es una Imagen Digital Estática?**
> Es una representación visual de dos dimensiones, creada, almacenada y procesada por una computadora en forma de datos binarios (0s y 1s).

#### **El Píxel: La Unidad Básica**
> Un **píxel** (elemento de imagen) es el **punto mínimo de color** que forma una imagen digital. Es como un "ladrillo" de una construcción visual.

#### **Los Dos Grandes Tipos de Imágenes Digitales**
> | Característica | **Imagen de Mapa de Bits (Bitmap)** | **Imagen Vectorial** |
> | :--- | :--- | :--- |
> | **¿Qué es?** | Imagen compuesta por una **rejilla o mapa de píxeles**. Cada píxel tiene un color específico. | Imagen construida con **fórmulas matemáticas** (vectores) que definen formas, líneas y curvas. |
> | **Base** | Píxeles. | Fórmulas matemáticas (vectores). |
> | **Comportamiento al ampliar** | Se **pixelan** (se ven los cuadrados de los píxeles) porque se estiran los puntos de color. | **Mantiene la nitidez** perfecta a cualquier tamaño porque las fórmulas se recalculan. |
> | **Uso típico** | **Fotografías**, imágenes realistas y complejas. | **Logotipos, iconos, ilustraciones**, dibujos técnicos y tipografía. |
> | **Formatos comunes** | `JPG`, `PNG`, `GIF`, `BMP`. | `SVG`, `AI`, `EPS`. |

#### **Formatos de Imagen y su Uso**
> *   **JPG (JPEG):** Ideal para **fotografías**. Usa compresión con pérdida de calidad (el archivo pesa menos, pero pierde algo de detalle).
> *   **PNG:** Ideal para **gráficos con fondos transparentes** (logos, iconos). Usa compresión sin pérdida de calidad.
> *   **SVG:** Formato **vectorial**. Perfecto para logotipos e iconos que necesiten escalarse sin perder calidad.

---

### 🧠 Tarea / Actividad
**Buscar 3 imágenes en internet:**
1.  Una que creas que es **vectorial** (ej: un logo simple).
2.  Una que sea claramente de **mapa de bits** (ej: una fotografía).
3.  Una que te genere **duda** sobre su tipo.

Guárdalas en una carpeta para analizarlas en la próxima clase.

---

## Clase #2: Profundizando en el Mapa de Bits

### 📋 Objetivo de la Clase
*   Analizar las características técnicas de las imágenes de mapa de bits (resolución, tamaño, modo de color).
*   Optimizar imágenes para diferentes soportes (web, impresión, pantalla) controlando su calidad y peso.

---

### 💡 Conceptos Clave

#### **Resolución: La Densidad de la Información**
> La **resolución** de una imagen de mapa de bits se mide en **PPI** (Píxeles Por Pulgada). Indica **cuántos píxeles hay concentrados en una pulgada lineal**.
>
> | Resolución Típica | Uso Recomendado | Explicación |
> | :--- | :--- | :--- |
> | **72 PPI** | **Visualización en pantalla** (web, redes sociales, presentaciones). | Es la densidad estándar de las pantallas. Una resolución mayor no se apreciará y solo hará el archivo más pesado. |
> | **300 PPI (o más)** | **Impresión** de alta calidad (folletos, fotografías, revistas). | Se necesita más densidad de píxeles para que la imagen se vea nítida en papel. |

> **¡Cuidado!** **Redimensionar vs. Remuestrear:**
> *   Si solo aumentas el **tamaño físico** (ej: de 10x15 cm a 20x30 cm) **sin añadir más píxeles**, la resolución (PPI) **bajará** y la imagen se verá pixelada.
> *   **Remuestrear** es añadir o quitar píxeles para cambiar las dimensiones manteniendo la resolución, pero puede afectar a la calidad.

#### **Tamaño de Archivo: ¿Por qué pesa una imagen?**
> El peso de un archivo de imagen depende de:
> 1.  **Dimensiones en píxeles:** A más píxeles (ancho x alto), más información y mayor peso.
> 2.  **Resolución (PPI):** Mayor resolución implica mayor peso.
> 3.  **Profundidad de color:** Cantidad de información de color por píxel.

#### **Modos de Color: RGB vs. CMYK**
> | Modo de Color | ¿Para qué se usa? | Base | Ejemplo |
> | :--- | :--- | :--- | :--- |
> | **RGB**<br>(Red, Green, Blue) | **Medios digitales** (pantallas, TV, proyectos web). | Luz aditiva. Los colores se crean sumando luz (Rojo, Verde, Azul). | Una pantalla de computadora o teléfono. |
> | **CMYK**<br>(Cyan, Magenta, Yellow, Key/Black) | **Impresión profesional** (tinta sobre papel). | Sustractiva. Los colores se crean restando luz al reflejarse en el papel. | Un folleto, un cartel o una revista impresa. |

> **Consejo práctico:** Siempre trabaja en **RGB** para proyectos en pantalla y convierte a **CMYK** solo si el trabajo va a imprimirse profesionalmente.

---

### 🧠 Tarea / Actividad
1.  **Toma una foto con tu celular.**
2.  Crea dos versiones de ella:
    *   **Versión 1 (Para WhatsApp):** Optimizada para web (bajo peso, 72 PPI).
    *   **Versión 2 (Para imprimir en A4):** Con alta calidad (300 PPI).
3.  **Anota los valores de resolución y tamaño de archivo** que usaste para cada una.