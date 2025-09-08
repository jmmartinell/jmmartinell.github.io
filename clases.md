---
layout: default
title: Todas las Clases
---

# Lista de Todas las Clases

{% assign clases_ordenadas = site.clases | sort: 'numero' %}
{% for clase in clases_ordenadas %}
  {% assign base_filename = clase.path | split: '/' | last | replace: '.md', '' %}
  {% assign notas_filename = base_filename | append: '_notas' | replace: '_', '-' %}
* [{{ clase.title }}]({{ clase.url }})
  - [Notas y materiales](/notas/{{ notas_filename }}.html)
  - [Preguntas generadas por las clases](/preguntas-evaluaciones.html#{{ base_filename | replace: '_', '-' }})
{% endfor %}