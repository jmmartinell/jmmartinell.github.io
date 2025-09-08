{% raw %}
---
layout: default
title: Todas las Clases
---

# Lista de Todas las Clases

{% assign clases_ordenadas = site.clases | sort: 'numero' %}
{% for clase in clases_ordenadas %}
* {# Muestra solo el título de la clase (que contiene el nombre del archivo) #}
  [{{ clase.title }}]({{ clase.url }})
  {# Enlace a las notas - asumiendo que tus archivos de notas siguen el patrón: [nombre-clase]_notas #}
  - [Notas y materiales](/notas/{{ clase.name }}_notas.html)
  {# Enlace a preguntas - usando un ID más simple basado en el nombre del archivo #}
  - [Preguntas generadas por las clases](/preguntas-evaluaciones.html#{{ clase.name }})
{% endfor %}
{% endraw %}