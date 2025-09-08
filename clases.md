---
layout: default
title: Todas las Clases
---

# Lista de Todas las Clases

{% assign clases_ordenadas = site.clases | sort: 'numero' %}
{% for clase in clases_ordenadas %}
  {# Obtener el nombre base del archivo sin la extensión .md #}
  {% assign base_filename = clase.path | split: '/' | last | replace: '.md', '' %}
  
  {# Crear el nombre del archivo de notas reemplazando guiones bajos por guiones #}
  {% assign notas_filename = base_filename | append: '_notas' | replace: '_', '-' %}
  
* [{{ clase.title }}]({{ clase.url }})
  - [Notas y materiales](/notas/{{ notas_filename }}.html)
  - [Preguntas generadas por las clases](/preguntas-evaluaciones.html#{{ base_filename | replace: '_', '-' }})
{% endfor %}

# Archivos en la carpeta de Notas

{% for nota in site.notas %}
{% assign filename = nota.relative_path | split: '/' | last %}
* {{ filename }}
{% endfor %}

# Archivos en la carpeta de Preguntas

{% for pregunta in site.preguntas %}
{% assign filename = pregunta.relative_path | split: '/' | last %}
* {{ filename }}
{% endfor %}

# Listado completo con todas las propiedades disponibles

{% for item in site.notas %}
* <strong>Nombre del archivo:</strong> {{ item.name }}
* <strong>Ruta completa:</strong> {{ item.path }}
* <strong>Ruta relativa:</strong> {{ item.relative_path }}
* <strong>URL:</strong> {{ item.url }}
* <strong>Título:</strong> {{ item.title }}
* <strong>Colección:</strong> {{ item.collection }}
* <strong>Contenido:</strong> {{ item.content | strip_html | truncate: 10 }}
---
{% endfor %}