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
<svg class="ev-illus__svg" viewBox="0 0 360 260" role="img" aria-labelledby="ev-illus-title"><title id="ev-illus-title">A probabilistic roadmap: sampled points connected around two obstacles and their safety margins, with the shortest route from start to goal</title><rect class="ev-illus__zone" x="105" y="21" width="100" height="110" rx="16"/><rect class="ev-illus__obstacle" x="118" y="34" width="74" height="84" rx="10"/><rect class="ev-illus__zone" x="201" y="147" width="106" height="92" rx="16"/><rect class="ev-illus__obstacle" x="214" y="160" width="80" height="66" rx="10"/><g class="ev-illus__edges"><line x1="36.0" y1="222.0" x2="40.0" y2="159.5" pathLength="1" style="--i:0"/><line x1="36.0" y1="222.0" x2="78.5" y2="182.9" pathLength="1" style="--i:1"/><line x1="36.0" y1="222.0" x2="80.5" y2="232.6" pathLength="1" style="--i:2"/><line x1="36.0" y1="222.0" x2="115.8" y2="217.7" pathLength="1" style="--i:3"/><line x1="80.5" y1="232.6" x2="131.4" y2="172.2" pathLength="1" style="--i:4"/><line x1="115.8" y1="217.7" x2="80.5" y2="232.6" pathLength="1" style="--i:5"/><line x1="160.5" y1="208.1" x2="80.5" y2="232.6" pathLength="1" style="--i:6"/><line x1="78.5" y1="182.9" x2="80.5" y2="232.6" pathLength="1" style="--i:7"/><line x1="78.5" y1="182.9" x2="131.4" y2="172.2" pathLength="1" style="--i:8"/><line x1="78.5" y1="182.9" x2="115.8" y2="217.7" pathLength="1" style="--i:9"/><line x1="76.6" y1="132.7" x2="78.5" y2="182.9" pathLength="1" style="--i:10"/><line x1="40.0" y1="159.5" x2="78.5" y2="182.9" pathLength="1" style="--i:11"/><line x1="76.6" y1="132.7" x2="40.0" y2="159.5" pathLength="1" style="--i:12"/><line x1="25.9" y1="121.8" x2="40.0" y2="159.5" pathLength="1" style="--i:13"/><line x1="115.8" y1="217.7" x2="131.4" y2="172.2" pathLength="1" style="--i:14"/><line x1="160.5" y1="208.1" x2="115.8" y2="217.7" pathLength="1" style="--i:15"/><line x1="76.6" y1="132.7" x2="78.4" y2="71.2" pathLength="1" style="--i:16"/><line x1="76.6" y1="132.7" x2="46.9" y2="85.2" pathLength="1" style="--i:17"/><line x1="164.4" y1="143.6" x2="76.6" y2="132.7" pathLength="1" style="--i:18"/><line x1="76.6" y1="132.7" x2="25.9" y2="121.8" pathLength="1" style="--i:19"/><line x1="46.9" y1="85.2" x2="25.9" y2="121.8" pathLength="1" style="--i:20"/><line x1="25.9" y1="121.8" x2="16.2" y2="63.8" pathLength="1" style="--i:21"/><line x1="160.5" y1="208.1" x2="131.4" y2="172.2" pathLength="1" style="--i:22"/><line x1="164.4" y1="143.6" x2="131.4" y2="172.2" pathLength="1" style="--i:23"/><line x1="164.4" y1="143.6" x2="160.5" y2="208.1" pathLength="1" style="--i:24"/><line x1="46.9" y1="85.2" x2="16.2" y2="63.8" pathLength="1" style="--i:25"/><line x1="46.9" y1="85.2" x2="78.4" y2="71.2" pathLength="1" style="--i:26"/><line x1="46.9" y1="85.2" x2="99.9" y2="18.6" pathLength="1" style="--i:27"/><line x1="46.9" y1="85.2" x2="67.7" y2="19.4" pathLength="1" style="--i:28"/><line x1="164.4" y1="143.6" x2="245.1" y2="129.4" pathLength="1" style="--i:29"/><line x1="67.7" y1="19.4" x2="78.4" y2="71.2" pathLength="1" style="--i:30"/><line x1="78.4" y1="71.2" x2="16.2" y2="63.8" pathLength="1" style="--i:31"/><line x1="78.4" y1="71.2" x2="99.9" y2="18.6" pathLength="1" style="--i:32"/><line x1="67.7" y1="19.4" x2="16.2" y2="63.8" pathLength="1" style="--i:33"/><line x1="67.7" y1="19.4" x2="99.9" y2="18.6" pathLength="1" style="--i:34"/><line x1="211.6" y1="82.9" x2="245.1" y2="129.4" pathLength="1" style="--i:35"/><line x1="243.4" y1="25.5" x2="211.6" y2="82.9" pathLength="1" style="--i:36"/><line x1="271.4" y1="77.5" x2="211.6" y2="82.9" pathLength="1" style="--i:37"/><line x1="211.6" y1="82.9" x2="240.5" y2="61.4" pathLength="1" style="--i:38"/><line x1="267.3" y1="107.3" x2="211.6" y2="82.9" pathLength="1" style="--i:39"/><line x1="245.1" y1="129.4" x2="240.5" y2="61.4" pathLength="1" style="--i:40"/><line x1="271.4" y1="77.5" x2="245.1" y2="129.4" pathLength="1" style="--i:41"/><line x1="267.3" y1="107.3" x2="245.1" y2="129.4" pathLength="1" style="--i:42"/><line x1="319.1" y1="122.2" x2="245.1" y2="129.4" pathLength="1" style="--i:43"/><line x1="267.3" y1="107.3" x2="240.5" y2="61.4" pathLength="1" style="--i:44"/><line x1="319.1" y1="122.2" x2="267.3" y2="107.3" pathLength="1" style="--i:45"/><line x1="267.3" y1="107.3" x2="271.4" y2="77.5" pathLength="1" style="--i:46"/><line x1="271.4" y1="77.5" x2="240.5" y2="61.4" pathLength="1" style="--i:47"/><line x1="243.4" y1="25.5" x2="240.5" y2="61.4" pathLength="1" style="--i:48"/><line x1="324.0" y1="40.0" x2="240.5" y2="61.4" pathLength="1" style="--i:49"/><line x1="319.1" y1="122.2" x2="311.5" y2="214.6" pathLength="1" style="--i:50"/><line x1="332.2" y1="188.8" x2="311.5" y2="214.6" pathLength="1" style="--i:51"/><line x1="338.2" y1="236.0" x2="311.5" y2="214.6" pathLength="1" style="--i:52"/><line x1="243.4" y1="25.5" x2="271.4" y2="77.5" pathLength="1" style="--i:53"/><line x1="324.0" y1="40.0" x2="271.4" y2="77.5" pathLength="1" style="--i:54"/><line x1="319.1" y1="122.2" x2="271.4" y2="77.5" pathLength="1" style="--i:55"/><line x1="324.0" y1="40.0" x2="243.4" y2="25.5" pathLength="1" style="--i:56"/><line x1="319.1" y1="122.2" x2="332.2" y2="188.8" pathLength="1" style="--i:57"/><line x1="338.2" y1="236.0" x2="332.2" y2="188.8" pathLength="1" style="--i:58"/><line x1="324.0" y1="40.0" x2="319.1" y2="122.2" pathLength="1" style="--i:59"/></g><g class="ev-illus__nodes"><circle cx="80.5" cy="232.6" r="2.6" style="--i:0"/><circle cx="78.5" cy="182.9" r="2.6" style="--i:1"/><circle cx="40.0" cy="159.5" r="2.6" style="--i:2"/><circle cx="115.8" cy="217.7" r="2.6" style="--i:3"/><circle cx="76.6" cy="132.7" r="2.6" style="--i:4"/><circle cx="25.9" cy="121.8" r="2.6" style="--i:5"/><circle cx="131.4" cy="172.2" r="2.6" style="--i:6"/><circle cx="160.5" cy="208.1" r="2.6" style="--i:7"/><circle cx="46.9" cy="85.2" r="2.6" style="--i:8"/><circle cx="164.4" cy="143.6" r="2.6" style="--i:9"/><circle cx="78.4" cy="71.2" r="2.6" style="--i:10"/><circle cx="16.2" cy="63.8" r="2.6" style="--i:11"/><circle cx="67.7" cy="19.4" r="2.6" style="--i:12"/><circle cx="99.9" cy="18.6" r="2.6" style="--i:13"/><circle cx="211.6" cy="82.9" r="2.6" style="--i:14"/><circle cx="245.1" cy="129.4" r="2.6" style="--i:15"/><circle cx="267.3" cy="107.3" r="2.6" style="--i:16"/><circle cx="240.5" cy="61.4" r="2.6" style="--i:17"/><circle cx="311.5" cy="214.6" r="2.6" style="--i:18"/><circle cx="271.4" cy="77.5" r="2.6" style="--i:19"/><circle cx="243.4" cy="25.5" r="2.6" style="--i:20"/><circle cx="332.2" cy="188.8" r="2.6" style="--i:21"/><circle cx="319.1" cy="122.2" r="2.6" style="--i:22"/><circle cx="338.2" cy="236.0" r="2.6" style="--i:23"/></g><path class="ev-illus__path" d="M36.0 222.0 L78.5 182.9 L131.4 172.2 L164.4 143.6 L245.1 129.4 L271.4 77.5 L324.0 40.0" pathLength="1"/><circle class="ev-illus__start" cx="36" cy="222" r="5.5"/><g class="ev-illus__goal"><circle class="ev-illus__halo" cx="324" cy="40" r="12"/><circle cx="324" cy="40" r="5"/></g><g class="ev-illus__robot" style="offset-path: path('M36.0 222.0 L78.5 182.9 L131.4 172.2 L164.4 143.6 L245.1 129.4 L271.4 77.5 L324.0 40.0')"><circle class="ev-illus__robot-halo" r="9"/><circle class="ev-illus__robot-body" r="4.5"/></g></svg>
</figure>

</div>

<aside class="ev-thesis" aria-label="PhD dissertation">
<p class="ev-thesis__label">PhD dissertation, 2026</p>
<div class="ev-thesis__body">
<p class="ev-thesis__title">Enhancing Autonomy of Mobile Robots Operating in Complex Environments</p>
<p class="ev-thesis__sub">Discrete Structure as a Guide for Kinodynamic Planning</p>
</div>
<p class="ev-thesis__meta">Metropolitan University of Tirana<br>Artificial Intelligence and Intelligent Systems</p>
</aside>

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
<article class="ev-q ev-q--{{ q.status }}{% if q.media %} ev-q--media{% endif %}">
{% if q.media %}<figure class="ev-media">
{% if q.media.video or q.media.youtube %}<button type="button" class="ev-media__frame" data-video="{{ q.media.video or '' }}" data-youtube="{{ q.media.youtube or '' }}" aria-label="Play video: {{ q.question }}">
<img src="../{{ q.media.poster }}" alt="{{ q.media.alt or q.question }}" loading="lazy" width="1280" height="720">
<span class="ev-media__play" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 5.5v13l10.5-6.5z"/></svg></span>
{% if q.media.length %}<span class="ev-media__length">{{ q.media.length }}</span>{% endif %}
</button>{% else %}<div class="ev-media__frame"><img src="../{{ q.media.poster }}" alt="{{ q.media.alt or q.question }}" loading="lazy" width="1280" height="720"></div>{% endif %}
</figure>{% endif %}
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

<div class="ev-callout ev-ink ev-invite">
<p class="ev-invite__title">Working on something related?</p>
<p class="ev-invite__text">I'm open to collaborations, co-supervision and joint proposals.</p>
<p class="ev-invite__actions"><a class="ev-btn ev-btn--light" href="../about/#contact">Get in touch</a><a class="ev-textlink" href="publications/">All papers, with citations</a></p>
</div>
