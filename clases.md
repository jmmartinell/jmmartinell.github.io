---
layout: default
title: Todas las Clases
---

# Lista de Todas las Clases

{% assign clases_ordenadas = site.clases | sort: 'numero' %}
{% for clase in clases_ordenadas %}
* [{{ clase.title }}]({{ clase.url }})
  - [Notas y materiales](/notas/{{ clase.name | replace: '.md', '' }}_notas.html)
  - [Preguntas generadas por las clases](/preguntas-evaluaciones.html#{{ clase.name | replace: '.md', '' }})
{% endfor %}

# Lista de Archivos de Notas

{% for nota in site.notas %}
* {{ nota.name | replace: '.md', '' }}
{% endfor %}

# Lista de Archivos de Preguntas

{% for pregunta in site.preguntas %}
* {{ pregunta.name | replace: '.md', '' }}
{% endfor %}