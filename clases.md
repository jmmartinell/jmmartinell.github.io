---
layout: default
title: Todas las Clases
---

# Lista de Todas las Clases

{% assign clases_ordenadas = site.clases | sort: 'numero' %}
{% for clase in clases_ordenadas %}
* **Clases {{ clase.clase_inicio }} a {{ clase.clase_fin }}**: [{{ clase.title }}]({{ clase.url }}) 
  - [Notas y materiales](/notas/{{ clase.name }}.html)
  - [Preguntas generadas por las clases](/preguntas-evaluaciones.html#clase-{{ clase.clase_inicio }}-a-{{ clase.clase_fin }})
{% endfor %}