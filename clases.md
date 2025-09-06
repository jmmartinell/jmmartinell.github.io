---
layout: default
title: Todas las Clases
---

# Lista de Todas las Clases

{% assign clases_ordenadas = site.clases | sort: 'numero' %}
{% for clase in clases_ordenadas %}
* **Clase {{ clase.numero }}**: [{{ clase.title }}]({{ clase.url }}) 
  - [Notas](/notas/{{ clase.numero | prepend: '00' | slice: -2, 2 }}-notas-{{ clase.title | slugify }}.html)
  - [Preguntas](/preguntas/{{ clase.numero | prepend: '00' | slice: -2, 2 }}-preguntas-{{ clase.title | slugify }}.html)
{% endfor %}