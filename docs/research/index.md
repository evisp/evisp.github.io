---
title: Research
description: "Research directions and open questions in motion planning, risk-aware navigation, predictive control and perception for autonomous robots."
render_macros: true
hide:
  - navigation
  - toc
---

<div class="ev-pagehead" markdown>

Motion planning and safe autonomy
{ .ev-kicker }

# Research

How do we build robots that need ==less and less human guidance==, and can be
trusted when they act on their own? Four directions, each a set of questions:
some answered, some being explored, some still open.
{ .ev-lead }

[All publications](publications.md){ .ev-btn .ev-btn--ghost }
{ .ev-actions }

</div>

{% set pubs = {} %}{% for p in publications %}{% set _ = pubs.update({p.id: p}) %}{% endfor %}
{% set glyph = {"result": "!", "exploring": "!?", "open": "∞"} %}
{% set label = {"result": "Result", "exploring": "Exploring", "open": "Open question"} %}

<nav class="ev-dirs" aria-label="Research directions">
{% for d in directions %}{% set ids = [] %}{% for q in questions if q.direction == d.id %}{% for pid in (q.papers or []) %}{% if pid not in ids %}{% set _ = ids.append(pid) %}{% endif %}{% endfor %}{% endfor %}
<a class="ev-dir ev-dir--{{ d.id }}" href="{{ "#" ~ d.id }}" data-dir="{{ d.id }}">
<span class="ev-dir__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">{{ d.icon }}</svg></span>
<strong class="ev-dir__name">{{ d.name }}</strong>
<span class="ev-dir__line">{{ d.line }}</span>
<span class="ev-dir__count">{{ ids | length }} {{ "paper" if ids | length == 1 else "papers" }}</span>
</a>
{% endfor %}
</nav>

{% for d in directions %}
<section class="ev-dirpanel ev-dir--{{ d.id }}" id="{{ d.id }}" data-dir-panel="{{ d.id }}" aria-label="{{ d.name }}">
<header class="ev-dirpanel__head">
<h2>{{ d.name }}</h2>
<p>{{ d.line }}</p>
</header>
<div class="ev-qs">
{% for q in questions if q.direction == d.id %}
<article class="ev-q ev-q--{{ q.status }}">
<p class="ev-q__status"><span class="ev-q__glyph" aria-hidden="true">{{ glyph[q.status] }}</span>{{ label[q.status] }}</p>
<h3 class="ev-q__title">{{ q.question }}</h3>
{% if q.finding %}<p class="ev-q__finding">{{ q.finding }}</p>{% endif %}
{% if q.papers %}<ul class="ev-q__papers">
{% for pid in q.papers %}{% set p = pubs[pid] %}<li><a href="publications/#{{ p.id }}"><span class="ev-q__year">{{ p.year }}</span><span class="ev-q__venue">{{ p.short }}</span><span class="ev-q__ptitle">{{ p.title }}</span></a></li>
{% endfor %}</ul>
{% else %}<p class="ev-q__invite">Interested in this question? It could be a <a href="../mentoring/">thesis</a> or <a href="../about/#contact">joint work</a>.</p>{% endif %}
</article>
{% endfor %}
</div>
</section>
{% endfor %}

<div class="ev-callout" markdown>

**Working on something related?** I'm open to collaborations, co-supervision and
joint proposals. All papers, with citations, are on [Publications](publications.md).
[Get in touch](../about/index.md#contact){ .ev-textlink }

</div>
