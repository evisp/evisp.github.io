---
title: Research
---

<div class="ev-pagehead" markdown>

Motion planning and safe autonomy
{ .ev-kicker }

# Research

I work at the meeting point of formal planning methods and real autonomous
behaviour. The long-term question behind every project is the same: how do we
build robots that need ==less and less human guidance==, and can be trusted when
they get it right on their own?
{ .ev-lead }

</div>

My research combines classical planning (graph search, sampling-based motion
planning, workspace decomposition) with learning and control. A planner that
only finds *a* path is not enough in practice. It has to respect the robot's
dynamics, keep a safe distance from what could go wrong, adapt as the scene
changes, and understand what the robot's sensors are seeing. The four threads
below follow those needs.

<div class="ev-legend">
<span class="ev-legend__item"><span class="ev-glyph ev-glyph--key">!</span> key result</span>
<span class="ev-legend__item"><span class="ev-glyph ev-glyph--idea">!?</span> promising idea</span>
<span class="ev-legend__item"><span class="ev-glyph ev-glyph--open">∞</span> open problem</span>
</div>

The marks are borrowed from chess annotation, where `!` marks a strong move,
`!?` an interesting one worth trying, and `∞` a position whose outcome is still
unclear.
{ .ev-note }

## Motion planning

How can a robot with real dynamics find not just one feasible path, but good and
varied ones, quickly? My work pairs discrete search over roadmaps and workspace
decompositions with sampling-based planners, so that high-level guidance steers
low-level motion.

<ul class="ev-annotated">
  <li><span class="ev-glyph ev-glyph--key">!</span><p><strong>Superfacets.</strong> An intermediate representation between geometry and search that guides sampling-based planners toward direct paths. <a href="publications/#plaku-2017-superfacets">RA-L 2017</a>, <a href="publications/#plaku-2018-clearance">Robotica 2018</a></p></li>
  <li><span class="ev-glyph ev-glyph--key">!</span><p><strong>Diverse trajectories.</strong> Combining roadmap search with sampling-based planning to produce trajectories that differ in meaningful ways, not only in small details. <a href="publications/#plaku-2026-diverse">IEEE Access 2026</a></p></li>
  <li><span class="ev-glyph ev-glyph--idea">!?</span><p><strong>Language as guidance.</strong> Letting a large language model turn instructions into guidance over superfacets, so people can steer a planner in plain words. <a href="publications/#plaku-2025-llm-paths">ICITEE 2025</a></p></li>
  <li><span class="ev-glyph ev-glyph--open">∞</span><p>When is a set of trajectories diverse in a way that is useful for the task, rather than merely different?</p></li>
</ul>

## Risk-aware planning

Safety should shape the plan from the start, not be checked at the end. This
thread builds safety zones around hazards into the planner itself, and uses
semantic maps of urban scenes to decide which routes are safe to take.

<ul class="ev-annotated">
  <li><span class="ev-glyph ev-glyph--key">!</span><p><strong>Safety zones.</strong> Planning with explicit safety regions around obstacles and hazards. <a href="publications/#plaku-2023-safety-zones">ICINCO 2023</a>, <a href="publications/#plaku-2024-safety-zones">LNEE 2024</a></p></li>
  <li><span class="ev-glyph ev-glyph--key">!</span><p><strong>Semantic-aware graphs.</strong> Urban driving graphs that carry meaning (crossings, lanes, zones) so the planner can prefer safe paths. <a href="publications/#plaku-2026-semantic">IJCAS 2026</a></p></li>
  <li><span class="ev-glyph ev-glyph--idea">!?</span><p><strong>Neural cost shaping.</strong> Learning how to weigh semantic information in route costs. <a href="publications/#plaku-2026-urban-route">MED 2026</a></p></li>
  <li><span class="ev-glyph ev-glyph--open">∞</span><p>How should a planner trade risk against progress when the map itself is uncertain?</p></li>
</ul>

## Predictive control

Plans meet the world through control. Model predictive control lets a robot
re-plan continuously over a short horizon as people and vehicles move around it.

<ul class="ev-annotated">
  <li><span class="ev-glyph ev-glyph--idea">!?</span><p><strong>Adaptive horizons.</strong> Letting the controller decide how far ahead to look, depending on how dynamic the environment is. <a href="publications/#lici-2026-adaptive-mpc">MED 2026</a></p></li>
  <li><span class="ev-glyph ev-glyph--open">∞</span><p>When is looking further ahead worth its computational cost, and when is a short horizon the safer choice?</p></li>
</ul>

## Perception for navigation

A robot can only plan around what it perceives. This thread connects detection
and segmentation to the safety of the navigation that follows.

<ul class="ev-annotated">
  <li><span class="ev-glyph ev-glyph--key">!</span><p><strong>Perception-driven safety analysis.</strong> Traffic sign recognition, dynamic object detection and semantic segmentation combined to assess the safety of a robot's route. <a href="publications/#plaku-2024-safety-analysis">CoNTESA 2024</a></p></li>
  <li><span class="ev-glyph ev-glyph--open">∞</span><p>How should uncertainty in what the robot sees change the plan it commits to?</p></li>
</ul>

<div class="ev-callout" markdown>

**Working on something related?** I'm open to collaborations, co-supervision and
joint proposals on autonomous navigation and safe planning.
[Get in touch](../about/contact.md){ .ev-textlink }

</div>
