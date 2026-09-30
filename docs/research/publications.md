---
title: Publications
render_macros: true
---

<div class="ev-pagehead" markdown>

Journal and conference papers, 2017 to 2026
{ .ev-kicker }

# Publications

Papers on motion planning, risk-aware navigation, predictive control and
perception for autonomous robots. The list is kept in one data file, so new
papers appear here, grouped and tagged, as soon as they are added.
{ .ev-lead }

[Google Scholar](https://scholar.google.com/citations?user=NRYpvpcAAAAJ){ .ev-btn .ev-btn--ghost }
[ORCID](https://orcid.org/0009-0002-4042-2673){ .ev-btn .ev-btn--ghost }
{ .ev-actions }

</div>

{% for group, label in [("journal", "Journal articles"), ("conference", "Conference papers")] %}
## {{ label }}

{% for p in publications if p.type == group %}
<div class="ev-pub ev-pub--{{ p.thread }}" id="{{ p.id }}" markdown>

<p class="ev-pub__meta"><span class="ev-pub__year">{{ p.year }}</span><span class="ev-tag ev-tag--{{ p.thread }}">{{ threads[p.thread] }}</span></p>

<p class="ev-pub__title">{{ p.title }}</p>

<p class="ev-pub__authors">{{ p.authors }}</p>

<p class="ev-pub__venue">{{ p.venue }}{% if p.pages %}, pp. {{ p.pages }}{% endif %}, {% if p.month %}{{ p.month }} {% endif %}{{ p.year }}</p>

{% if p.doi %}<p class="ev-pub__links"><a href="https://doi.org/{{ p.doi }}">DOI {{ p.doi }}</a></p>{% endif %}

??? cite "BibTeX"

    ```bibtex
    @{{ "article" if p.type == "journal" else "inproceedings" }}{{ "{" }}{{ p.id | replace("-", "_") }},
      author    = {{ "{" }}{{ p.authors | replace(", ", " and ") }}{{ "}" }},
      title     = {{ "{" }}{{ p.title }}{{ "}" }},
      {{ "journal  " if p.type == "journal" else "booktitle" }} = {{ "{" }}{{ p.venue }}{{ "}" }},
      year      = {{ "{" }}{{ p.year }}{{ "}" }}{% if p.pages %},
      pages     = {{ "{" }}{{ p.pages | replace("–", "--") }}{{ "}" }}{% endif %}{% if p.doi %},
      doi       = {{ "{" }}{{ p.doi }}{{ "}" }}{% endif %}
    }
    ```

</div>
{% endfor %}
{% endfor %}
