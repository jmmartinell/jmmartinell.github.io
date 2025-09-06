---
layout: default
title: Inicio - [Nombre de tu Curso]
---

# Bienvenidos al Sitio del Curso

Este es el punto central para todos los materiales de [Nombre del Curso].

## Acceso Rápido

*   **[Ver Dosificación Completa](/dosificacion.html)**: El plan de todo el curso.
*   **[Lista de Todas las Clases](/clases.html)**: Accede a cualquier clase planificada.
*   **[Preguntas Frecuentes Generales](/preguntas-frecuentes.html)**:

## Clases Recientes
{% assign clases_ordenadas = site.clases | sort: 'fecha' %}
{% for clase in clases_ordenadas limit:5 %}
*   [{{ clase.title }}]({{ clase.url }})
{% endfor %}
... [más enlaces]