---
title: Research
description: "Research directions and open questions in motion planning, risk-aware navigation, predictive control and perception for autonomous robots."
render_macros: true
hide:
  - navigation
  - toc
---

<div class="ev-pagehead ev-pagehead--split" markdown>

<div class="ev-pagehead__text" markdown>

Motion planning and safe autonomy
{ .ev-kicker }

# Research

How do we build robots that need ==less and less human guidance==, and can be
trusted when they act on their own? I treat this as a planning problem:
combining search and sampling-based motion planning with learning, predictive
control and perception, so robots find good paths quickly, keep safety margins
by design, and adapt as the world around them changes.
{ .ev-lead }

[All publications](publications.md){ .ev-btn .ev-btn--ghost }
{ .ev-actions }

</div>

<figure class="ev-illus" markdown="0">
<svg class="ev-illus__svg" viewBox="0 0 360 260" role="img" aria-labelledby="ev-illus-title"><title id="ev-illus-title">A robot plans a smooth path through a roadmap, keeping a safety margin around two obstacles</title><g class="ev-illus__edges"><line x1="75" y1="189" x2="91" y2="228"/><line x1="119" y1="198" x2="189" y2="233"/><line x1="30" y1="211" x2="75" y2="189"/><line x1="330" y1="32" x2="318" y2="235"/><line x1="228" y1="38" x2="293" y2="85"/><line x1="293" y1="85" x2="288" y2="126"/><line x1="121" y1="148" x2="172" y2="165"/><line x1="228" y1="38" x2="224" y2="102"/><line x1="324" y1="119" x2="318" y2="235"/><line x1="40" y1="132" x2="63" y2="75"/><line x1="323" y1="171" x2="324" y2="119"/><line x1="40" y1="132" x2="28" y2="94"/><line x1="119" y1="198" x2="172" y2="165"/><line x1="79" y1="148" x2="75" y2="189"/><line x1="119" y1="198" x2="91" y2="228"/><line x1="330" y1="32" x2="293" y2="85"/><line x1="156" y1="201" x2="119" y2="198"/><line x1="63" y1="75" x2="28" y2="94"/><line x1="330" y1="32" x2="324" y2="119"/><line x1="156" y1="201" x2="189" y2="233"/><line x1="40" y1="132" x2="44" y2="42"/><line x1="228" y1="38" x2="330" y2="32"/><line x1="34" y1="166" x2="30" y2="211"/><line x1="79" y1="148" x2="121" y2="148"/><line x1="323" y1="171" x2="288" y2="126"/><line x1="119" y1="198" x2="75" y2="189"/><line x1="156" y1="201" x2="172" y2="165"/><line x1="330" y1="32" x2="288" y2="126"/><line x1="293" y1="85" x2="224" y2="102"/><line x1="30" y1="211" x2="91" y2="228"/><line x1="293" y1="85" x2="324" y2="119"/><line x1="324" y1="119" x2="288" y2="126"/><line x1="224" y1="102" x2="288" y2="126"/><line x1="40" y1="132" x2="79" y2="148"/><line x1="34" y1="166" x2="75" y2="189"/><line x1="172" y1="165" x2="189" y2="233"/><line x1="44" y1="42" x2="63" y2="75"/><line x1="40" y1="132" x2="34" y2="166"/><line x1="323" y1="171" x2="318" y2="235"/><line x1="44" y1="42" x2="28" y2="94"/><line x1="119" y1="198" x2="121" y2="148"/></g><g class="ev-illus__nodes"><circle cx="228" cy="38" r="2.4"/><circle cx="40" cy="132" r="2.4"/><circle cx="44" cy="42" r="2.4"/><circle cx="156" cy="201" r="2.4"/><circle cx="330" cy="32" r="2.4"/><circle cx="293" cy="85" r="2.4"/><circle cx="119" cy="198" r="2.4"/><circle cx="79" cy="148" r="2.4"/><circle cx="224" cy="102" r="2.4"/><circle cx="121" cy="148" r="2.4"/><circle cx="34" cy="166" r="2.4"/><circle cx="172" cy="165" r="2.4"/><circle cx="63" cy="75" r="2.4"/><circle cx="323" cy="171" r="2.4"/><circle cx="30" cy="211" r="2.4"/><circle cx="189" cy="233" r="2.4"/><circle cx="75" cy="189" r="2.4"/><circle cx="324" cy="119" r="2.4"/><circle cx="318" cy="235" r="2.4"/><circle cx="288" cy="126" r="2.4"/><circle cx="91" cy="228" r="2.4"/><circle cx="28" cy="94" r="2.4"/></g><rect class="ev-illus__zone" x="105" y="21" width="100" height="110" rx="18"/><rect class="ev-illus__obstacle" x="118" y="34" width="74" height="84" rx="10"/><rect class="ev-illus__zone" x="201" y="147" width="106" height="92" rx="18"/><rect class="ev-illus__obstacle" x="214" y="160" width="80" height="66" rx="10"/><path class="ev-illus__cone" d="M38 218 L67.1 163.3 A62 62 0 0 1 97.0 198.8 Z"/><path class="ev-illus__path" d="M38.0 218.0 C47.0 211.0 71.7 188.0 92.0 176.0 C112.3 164.0 141.2 152.0 160.0 146.0 C178.8 140.0 188.0 144.7 205.0 140.0 C222.0 135.3 245.2 125.3 262.0 118.0 C278.8 110.7 296.0 108.3 306.0 96.0 C316.0 83.7 319.3 52.7 322.0 44.0" pathLength="1"/><circle class="ev-illus__start" cx="38" cy="218" r="6"/><g class="ev-illus__goal"><circle class="ev-illus__halo" cx="322" cy="44" r="13"/><circle cx="322" cy="44" r="5.5"/></g></svg>
</figure>

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
{% else %}<p class="ev-q__invite">Interested in this question? It could be a <a href="../teaching/#thesis">thesis</a> or <a href="../about/#contact">joint work</a>.</p>{% endif %}
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
