---
layout: default
title: Todas las Clases
---

# Lista de Todas las Clases

{% assign clases_ordenadas = site.clases | sort: 'numero' %}
{% for clase in clases_ordenadas %}
  {% assign base_filename = clase.path | split: '/' | last | replace: '.md', '' %}
  {% assign notas_filename = base_filename | append: '_notas' | replace: '_', '-' %}
  {% assign preguntas_filename = base_filename | append: '_preguntas' | replace: '_', '-' %}
  
  {% assign notas_existe = false %}
  {% for nota in site.notas %}
    {% if nota.path contains base_filename %}
      {% assign notas_existe = true %}
    {% endif %}
  {% endfor %}
  
  {% assign preguntas_existe = false %}
  {% for pregunta in site.preguntas %}
    {% if pregunta.path contains base_filename %}
      {% assign preguntas_existe = true %}
    {% endif %}
  {% endfor %}
  
* [{{ clase.title }}]({{ clase.url }})
  {% if notas_existe %}
  - [Notas y materiales](/notas/{{ notas_filename }}.html)
  {% endif %}
  {% if preguntas_existe %}
  - [Preguntas generadas por las clases](/preguntas/{{ preguntas_filename }}.html)
  {% endif %}
{% endfor %}