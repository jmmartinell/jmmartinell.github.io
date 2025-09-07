---
layout: default
title: Clases 5 y 6
---

### **Planificación de Clases – Etapa Propedéutica**
**Asignatura:** Informática
**Docente:** José Manuel Martinell Reynaldo
**Temática General:** Fundamentos de programación.

---

### **CLASE # 5**

**Tema:** Introducción a la Programación: Algoritmos y Datos.
**Duración:** 45 minutos

**1. Objetivo de la Clase:**
*   Definir el concepto de algoritmo y reconocer su presencia en la vida cotidiana.
*   Identificar los tipos de datos básicos y el concepto de variable como elementos fundamentales para la resolución de problemas mediante programación.

**2. Método y Técnica:**
*   **Método:** Inductivo - Demostrativo
*   **Técnica:** Análisis de situaciones cotidianas, ejemplificación y demostración guiada.

**3. Medios y Recursos:**
*   Pizarra.
*   Computadora y proyector (TV) para mostrar ejemplos simples de pseudocódigo.

**4. Desarrollo de la Clase:**

| **Etapa** | **Tiempo** | **Actividades Docentes y Discentes** |
| :--- | :--- | :--- |
| **Inicio** | **5 min** | **Repaso y motivación:** "¿Quién de ustedes sigue una receta de cocina o las instrucciones de un manual de Lego? Sin saberlo, ya están pensando como programadores. Hoy descubriremos por qué." |
| **Introducción** | **5 min** | **Orientación hacia el Objetivo (OHO):** "En esta clase sentaremos las bases de la programación. Aprenderemos qué es un algoritmo, el concepto más importante, y cómo los programas manejan la información a través de datos y variables." |
| **Desarrollo** | **25 min** | **<u>Bloque 1: El Algoritmo (15 min)</u>** <br> • **Definición:** Un algoritmo es una secuencia de pasos **lógicos, ordenados y finitos** que se siguen para resolver un problema. <br> • **Ejemplos Cotidianos:** El docente guía a los estudiantes para describir algoritmos de: <br>   - Preparar una bebida instantánea. <br>   - Atender una llamada telefónica. <br> • **Características:** Se enfatiza que los pasos deben ser precisos (ej: "agregar azúcar al gusto" no es preciso para una computadora; debe ser "agregar 2 cucharadas de azúcar"). <br><br> **<u>Bloque 2: Datos y Variables (10 min)</u>** <br> • **Tipos de Datos Básicos:** <br>   - **Número:** Para realizar operaciones matemáticas (ej: 5, 3.14, -10). <br>   - **Texto (String):** Para representar palabras o frases (ej: "Hola", "Juan Pérez"). <br>   - **Booleano:** Representa solo dos valores posibles: VERDADERO o FALSO. <br> • **Variable:** Se define como un "espacio en la memoria" con un nombre, donde se guarda un dato que puede cambiar. <br> • **Analogía:** Una variable es como una **caja** con una **etiqueta** (nombre de la variable). Lo que guardamos dentro (el dato) puede cambiarse. Ej: La caja llamada `edad` puede guardar el número `17`. |
| **Cierre** | **10 min** | **Conclusiones:** El docente pide a un estudiante que describa el algoritmo para cepillarse los dientes, resaltando la secuencia lógica. Luego pregunta: "Si quisiera guardar el nombre de un usuario en un programa, ¿qué tipo de dato usaría? ¿Y para guardar si está conectado o no?". <br> **Tarea:** "Piensen en una actividad de su rutina diaria (como tender la cama) y escriban en su cuaderno los pasos, como un algoritmo. Luego, identifiquen 3 datos que intervengan y clasifíquenlos (número, texto, booleano)." |

---

### **CLASE # 6**

**Tema:** Estructuras de Control: Tomando Decisiones y Repitiendo Acciones.
**Duración:** 45 minutos

**1. Objetivo de la Clase:**
*   Identificar y comprender el funcionamiento de las estructuras de control condicionales (si-entonces) y repetitivas (bucles), para resolver problemas de mayor complejidad.

**2. Método y Técnica:**
*   **Método:** Expositivo - Demostrativo
*   **Técnica:** Analogías, demostración con diagramas de flujo y pseudocódigo.

**3. Medios y Recursos:**
*   Pizarra.
*   Computadora y proyector (TV).
*   Presentación con diagramas de flujo simples.

**4. Desarrollo de la Clase:**

| **Etapa** | **Tiempo** | **Actividades Docentes y Discentes** |
| :--- | :--- | :--- |
| **Inicio** | **5 min** | **Repaso de la clase anterior:** "¿Recuerdan qué es un algoritmo? ¿Y para qué usamos una variable?" El docente revisa brevemente la tarea, pidiendo un ejemplo de algoritmo de la vida diaria. |
| **Introducción** | **5 min** | **Orientación hacia el Objetivo (OHO):** "Hoy vamos a hacer nuestros algoritmos más inteligentes. Veremos cómo un programa puede tomar decisiones (como si hace calor, encender el aire acondicionado) y repetir tareas aburridas millones de veces sin cansarse." |
| **Desarrollo** | **25 min** | **<u>Bloque 1: Estructuras de Control Condicional (Si-Entonces) (12 min)</u>** <br> • **Definición:** Son estructuras que permiten que un programa ejecute diferentes acciones dependiendo de si una condición es Verdadera o Falsa. <br> • **Analogía:** "Es como decidir si llevar paraguas o no. **Si** está lloviendo **entonces** llevo paraguas, **en caso contrario** no lo llevo." <br> • **Ejemplo en Pseudocódigo:** El docente escribe en la pizarra: <br> `SI (edad >= 18) ENTONCES` <br> `   MOSTRAR "Eres mayor de edad"` <br> `SI_NO` <br> `   MOSTRAR "Eres menor de edad"` <br> `FIN_SI` <br><br> **<u>Bloque 2: Estructuras de Control Repetitivas (Bucles) (13 min)</u>** <br> • **Definición:** Son estructuras que permiten repetir un bloque de instrucciones múltiples veces mientras se cumpla una condición. <br> • **Analogía:** "Es como comer papas fritas: **mientras** queden papas en el paquete, **repite** la acción de tomar una y comerla." <br> • **Ejemplo en Pseudocódigo:** El docente escribe en la pizarra: <br> `variable contador = 1` <br> `MIENTRAS (contador <= 5) HACER` <br> `   MOSTRAR "Vuelta número", contador` <br> `   contador = contador + 1` <br> `FIN_MIENTRAS` <br> • **Resultado:** Se explica que esto imprimiría los números del 1 al 5. |
| **Cierre** | **10 min** | **Conclusiones:** El docente plantea un problema: "¿Cómo escribirían un algoritmo que me diga si un número es positivo o negativo? ¿Y uno que cuente desde 10 hasta 1?" Guía a los estudiantes para identificar qué estructura usar en cada caso. <br> **Tarea / Actividad sumativa:** "Escriban en su cuaderno un algoritmo en pseudocódigo que simule un login simple: **Si** el usuario es "admin" **y** la contraseña es "1234", **entonces** mostrar "Acceso permitido", **en caso contrario** mostrar "Acceso denegado"." |