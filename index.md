---
layout: default
title: Inicio - Informática
---

# Bienvenidos al Sitio del Curso de Informática

Este es el punto central para todos los materiales de la asignatura de Informática.

## Acceso Rápido

* [Ver Dosificación Completa](/dosificacion.html)
* [Lista de Todas las Clases](/clases.html)
* [Preguntas Frecuentes Generales](/preguntas-frecuentes.html)

## Clases Recientes

{% assign clases_ordenadas = site.clases | sort: 'numero' %}
{% for clase in clases_ordenadas limit:5 %}
* [Clase {{ clase.numero }}: {{ clase.title }}]({{ clase.url }})
{% endfor %}

[Ver todas las clases](/clases.html)