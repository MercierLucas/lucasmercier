---
title: {{title}}
aliases:
  - {{title}}
{% if shortTitle %}  - {{shortTitle}} {% endif%}

authors: {{authors}}
year: {{year}}
type: technical_article
---

<center><h1>{{title}}</h1></center>  

🔗: [{{select}}]({{select}})
📍: [{{url}}]({{url}})
tags:: {% for tag in tags %}{%if tag.tag != "✅"%}[[{{tag.tag}}]] {% endif %}{% endfor %}
highlight::  {% if notes %} {{notes[0].note.split("\n")[0]}} {% endif %}

---

# 📝Notes permanentes

{% persist "notes" %}

{% endpersist %}

---

{% if notes %}
# 📚Annotations

{% for note in notes -%}
{{note.note}}
{% endfor %} 

{% endif %}



{%- for entry in annotations | filterby ("type", "startswith", "image") -%}
{% if loop.first %}
# 📊Figures
{% endif %}

{% if entry.imageRelativePath%} ![[{{entry.imageRelativePath}}]]{% endif %}
{% if entry.comment %} {{entry.comment}} _[Page {{entry.page}}](zotero://open-pdf/library/items/{{entry.attachment.itemKey}}?page={{entry.page}})_{% endif %}

{% endfor %}



# 🔦 Highlight

{%-
	set zoteroColors = {
		"Yellow": "faq",
		"Blue": "info",
		"Green": "success",
		"Red": "fail"
	}

-%}



{% for color, colorCategorie in zoteroColors %}
{%- for entry in annotations | filterby ("colorCategory", "startswith", color) -%}
{% if entry.type == "highlight" %}
> [!{{colorCategorie}}] {% if entry.comment %} {{entry.comment}} {% else %} Annotation{% endif %} 
> {% if entry.annotatedText%} > {{entry.annotatedText}} - [Page {{entry.page}}](zotero://open-pdf/library/items/{{entry.attachment.itemKey}}?page={{entry.page}}) {% endif %}

{% endif %}
{% endfor -%}
{% endfor -%}


# Référence

> [!NOTE] Citation
> {{bibliography}}


