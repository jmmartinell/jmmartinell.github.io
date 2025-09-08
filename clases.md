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