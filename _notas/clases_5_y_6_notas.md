---
layout: default
title: Notas Clases 5 y 6
---

# Notas de Clase - Informática

## Clase #5: Introducción a la Programación: Algoritmos y Datos

### 📋 Objetivo de la Clase
*   Definir el concepto de algoritmo y reconocer su presencia en la vida cotidiana.
*   Identificar los tipos de datos básicos y el concepto de variable como elementos fundamentales para la resolución de problemas mediante programación.

---

### 💡 Conceptos Clave

#### **¿Qué es un Algoritmo?**
> Es una secuencia de pasos **lógicos, ordenados y finitos** que se siguen para resolver un problema o realizar una tarea.
> *   **Lógicos:** Cada paso debe tener sentido y seguir un orden coherente.
> *   **Ordenados:** Los pasos deben ejecutarse en una secuencia específica.
> *   **Finitos:** El proceso debe tener un inicio y un final claros.
> *   **Ejemplos cotidianos:** Una receta de cocina, las instrucciones para armar un mueble, el proceso para cepillarse los dientes.

#### **Características de un Buen Algoritmo**
> Para que un algoritmo sea entendido por una computadora, debe ser:
> *   **Preciso:** Cada instrucción debe ser clara y no ambigua. Ej: "Agregar 200 ml de leche" en lugar de "agregar un poco de leche".
> *   **Definido:** Siempre debe producir el mismo resultado con las mismas entradas.
> *   **Efectivo:** Debe resolver el problema para el que fue diseñado.

#### **¿Qué es un Dato en Programación?**
> Es la **materia prima** que un programa procesa. Es cualquier información que se introduce, almacena o produce. Para poder trabajar con ellos, los datos se clasifican en **tipos**.

#### **Tipos de Datos Básicos**
> La información que maneja un programa se clasifica en tipos. Los fundamentales son:
>
> | Tipo de Dato | ¿Qué representa? | Ejemplos |
> | :--- | :--- | :--- |
> | **Número** | Valores numéricos para realizar operaciones matemáticas. | `5`, `-10`, `3.14` |
> | **Texto (String)** | Una cadena de caracteres que forman palabras o frases. | `"Hola"`, `"Juan"`, `"Aprobado"` |
> | **Booleano** | Solo puede tener uno de dos valores posibles: VERDADERO o FALSO. | `True`, `False` |

#### **¿Qué es una Variable?**
> Es un **espacio reservado en la memoria** de la computadora donde se almacena un dato que puede cambiar (**varía**) durante la ejecución del programa.
> *   **Analogía:** Es como una **caja** con una **etiqueta** (el nombre de la variable). Podemos guardar algo dentro (el dato) y luego cambiarlo por otra cosa.
> *   **Ejemplo:** La variable `edad` puede guardar el número `17`. Un año después, podemos cambiar su valor a `18`.
> *   **Función:** Permiten que los programas sean dinámicos y puedan trabajar con información inputada por el usuario o calculada.

---

## Clase #6: Estructuras de Control: Tomando Decisiones y Repitiendo Acciones

### 📋 Objetivo de la Clase
*   Identificar y comprender el funcionamiento de las estructuras de control condicionales (si-entonces) y repetitivas (bucles).

---

### 💡 Conceptos Clave

#### **¿Qué son las Estructuras de Control?**
> Son bloques de código que **modifican el flujo de ejecución** de un algoritmo. Permiten que un programa no sea solo una lista lineal de instrucciones, sino que pueda tomar decisiones y repetir acciones.

#### **Estructuras de Control Condicional (Si-Entonces-Sino)**
> Permiten que el programa **ejecute diferentes acciones dependiendo de si una condición se cumple (es Verdadera) o no (es Falsa)**.
>
> *   **Analogía:** "**Si** está lloviendo **entonces** llevo paraguas, **en caso contrario (sino)** no lo llevo."
> *   **Condición:** Es una expresión que solo puede ser Verdadera o Falsa (usualmente involucra comparaciones: `==`, `>`, `<`, `>=`, `!=`).
> *   **Pseudocódigo de ejemplo:**
>     ```
>     SI (edad >= 18) ENTONCES
>         MOSTRAR "Eres mayor de edad"
>     SI_NO
>         MOSTRAR "Eres menor de edad"
>     FIN_SI
>     ```

#### **Estructuras de Control Repetitivas (Bucles)**
> Permiten **repetir un bloque de instrucciones múltiples veces** mientras se cumpla una condición. Son esenciales para automatizar tareas repetitivas.
>
> *   **Analogía:** "**Mientras** queden papas fritas en el paquete, **repite** la acción de tomar una y comerla."
> *   **Bucle MIENTRAS (While):** Se repite **mientras** la condición sea verdadera. La condición se verifica al inicio de cada repetición.
> *   **Pseudocódigo de ejemplo (contar del 1 al 5):**
>     ```
>     variable contador = 1
>     MIENTRAS (contador <= 5) HACER
>         MOSTRAR "Vuelta número", contador
>         contador = contador + 1
>     FIN_MIENTRAS
>     ```
> *   **Resultado:** Este código imprimiría: "Vuelta número 1", "Vuelta número 2", ... hasta "Vuelta número 5".

#### **¿Qué tipos de Bucles existen?**
> Los dos tipos principales son:

| **Tipo de Bucle** | **¿Cómo funciona?** | **¿Cuándo se usa?** | **Ejemplo en Pseudocódigo** |
| :--- | :--- | :--- | :--- |
| **MIENTRAS (While)** | **Primero verifica** la condición. **Si es verdadera**, ejecuta el bloque de código. **Repite** este proceso. | Cuando **no sabemos exactamente** cuántas veces se repetirá, pero sí la condición para que continúe. | `contador = 1` <br> `MIENTRAS (contador <= 5) HACER` <br> `   MOSTRAR "Vuelta", contador` <br> `   contador = contador + 1` <br> `FIN MIENTRAS` |
| **PARA (For)** | Ejecuta el bloque de código un **número específico de veces**, definido por un contador. | Cuando **sabemos exactamente** la cantidad de veces que queremos repetir una acción (ej: 10 veces, 1 por cada alumno en la lista). | `PARA contador = 1 HASTA 5 HACER` <br> `   MOSTRAR "Vuelta", contador` <br> `FIN PARA` |

#### **¿Para qué sirve un "contador" en un bucle?**
> Es una **variable** (generalmente de tipo número) que se utiliza para **llevar el control** de cuántas veces se ha repetido el bucle. Es fundamental para evitar que el bucle se repita para siempre (lo que se conoce como "bucle infinito"). En el ejemplo de arriba, `contador` cumple esta función.

#### **Resumen de las Estructuras**
> | Estructura | Palabra Clave | Función |
> | :--- | :--- | :--- |
> | **Condicional** | `SI` / `ENTONCES` / `SI_NO` | Ejecuta un bloque u otro basado en una decisión. |
> | **Repetitiva** | `MIENTRAS` / `HACER` | Repite un bloque mientras una condición sea verdadera. |

---

### 🧠 Tarea / Actividad
Escribe en tu cuaderno un algoritmo en pseudocódigo que simule un login simple: **Si** el usuario es "admin" **y** la contraseña es "1234", **entonces** mostrar "Acceso permitido", **en caso contrario** mostrar "Acceso denegado".
