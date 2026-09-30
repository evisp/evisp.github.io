---
title: Research
description: "Research on motion planning, risk-aware navigation, predictive control and perception for autonomous robots."
---

<div class="ev-pagehead" markdown>

Motion planning and safe autonomy
{ .ev-kicker }

# Research

How do we build robots that need ==less and less human guidance==, and can be
trusted when they act on their own? Four threads, each with its key results.
{ .ev-lead }

</div>

<div class="ev-legend" title="Marks borrowed from chess annotation">
<span class="ev-legend__item"><span class="ev-glyph ev-glyph--key">!</span> key result</span>
<span class="ev-legend__item"><span class="ev-glyph ev-glyph--idea">!?</span> promising idea</span>
<span class="ev-legend__item"><span class="ev-glyph ev-glyph--open">∞</span> open problem</span>
</div>

## Motion planning

Finding good, varied paths quickly for robots with real dynamics.

<ul class="ev-annotated">
  <li><span class="ev-glyph ev-glyph--key">!</span><p><strong>Superfacets.</strong> An intermediate representation between geometry and search that guides sampling-based planners toward direct paths. <a href="publications.md#plaku-2017-superfacets">RA-L 2017</a>, <a href="publications.md#plaku-2018-clearance">Robotica 2018</a></p></li>
  <li><span class="ev-glyph ev-glyph--key">!</span><p><strong>Diverse trajectories.</strong> Combining roadmap search with sampling-based planning to produce trajectories that differ in meaningful ways, not only in small details. <a href="publications.md#plaku-2026-diverse">IEEE Access 2026</a></p></li>
  <li><span class="ev-glyph ev-glyph--idea">!?</span><p><strong>Language as guidance.</strong> Letting a large language model turn instructions into guidance over superfacets, so people can steer a planner in plain words. <a href="publications.md#plaku-2025-llm-paths">ICITEE 2025</a></p></li>
  <li><span class="ev-glyph ev-glyph--open">∞</span><p>When is a set of trajectories diverse in a way that is useful for the task, rather than merely different?</p></li>
</ul>

## Risk-aware planning

Building safety into the plan from the start, not checking it at the end.

<ul class="ev-annotated">
  <li><span class="ev-glyph ev-glyph--key">!</span><p><strong>Safety zones.</strong> Planning with explicit safety regions around obstacles and hazards. <a href="publications.md#plaku-2023-safety-zones">ICINCO 2023</a>, <a href="publications.md#plaku-2024-safety-zones">LNEE 2024</a></p></li>
  <li><span class="ev-glyph ev-glyph--key">!</span><p><strong>Semantic-aware graphs.</strong> Urban driving graphs that carry meaning (crossings, lanes, zones) so the planner can prefer safe paths. <a href="publications.md#plaku-2026-semantic">IJCAS 2026</a></p></li>
  <li><span class="ev-glyph ev-glyph--idea">!?</span><p><strong>Neural cost shaping.</strong> Learning how to weigh semantic information in route costs. <a href="publications.md#plaku-2026-urban-route">MED 2026</a></p></li>
  <li><span class="ev-glyph ev-glyph--open">∞</span><p>How should a planner trade risk against progress when the map itself is uncertain?</p></li>
</ul>

## Predictive control

Re-planning continuously as people and vehicles move around the robot.

<ul class="ev-annotated">
  <li><span class="ev-glyph ev-glyph--idea">!?</span><p><strong>Adaptive horizons.</strong> Letting the controller decide how far ahead to look, depending on how dynamic the environment is. <a href="publications.md#lici-2026-adaptive-mpc">MED 2026</a></p></li>
  <li><span class="ev-glyph ev-glyph--open">∞</span><p>When is looking further ahead worth its computational cost, and when is a short horizon the safer choice?</p></li>
</ul>

## Perception for navigation

Connecting what the robot sees to how safely it moves.

<ul class="ev-annotated">
  <li><span class="ev-glyph ev-glyph--key">!</span><p><strong>Perception-driven safety analysis.</strong> Traffic sign recognition, dynamic object detection and semantic segmentation combined to assess the safety of a robot's route. <a href="publications.md#plaku-2024-safety-analysis">CoNTESA 2024</a></p></li>
  <li><span class="ev-glyph ev-glyph--open">∞</span><p>How should uncertainty in what the robot sees change the plan it commits to?</p></li>
</ul>

<div class="ev-callout" markdown>

**Working on something related?** I'm open to collaborations, co-supervision and joint proposals.
[Get in touch](../about/contact.md){ .ev-textlink }

</div>
