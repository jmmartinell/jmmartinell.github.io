---
layout: default
title: Inicio - Informática
---

## Acceso Rápido

* [Dosificación](/dosificacion.html)
* [Lista de Todas las Clases](/clases.html)
* [Preguntas para Evaluaciones](/preguntas-evaluaciones.html)
* [Sobre este sitio](/about.html)

## Clases Recientes

{% assign clases_ordenadas = site.clases | sort: 'numero' %}
{% for clase in clases_ordenadas limit:5 %}
* [Clase {{ clase.numero }}: {{ clase.title }}]({{ clase.url }})
{% endfor %}