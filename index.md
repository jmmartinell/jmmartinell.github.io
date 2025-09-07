---
layout: default
title: Inicio - Informática 10mo grado
---

# Bienvenidos al Sitio del Curso de Informática

Este es el punto central para todos los materiales de la asignatura de Informática de 10mo grado.

## Acceso Rápido

* [Dosificación del Curso](/dosificacion.html)
* [Lista de Todas las Clases](/clases.html)
* [Preguntas para Evaluaciones](/preguntas-evaluaciones.html)
* [Sobre este sitio](/about.html)

## Clases Recientes

{% assign clases_ordenadas = site.clases | sort: 'numero' | reverse %}
{% for clase in clases_ordenadas limit:4 %}
* [Clases {{ clase.clase_inicio }} a {{ clase.clase_fin }}: {{ clase.title }}]({{ clase.url }})
{% endfor %}

[Ver todas las clases](/clases.html)