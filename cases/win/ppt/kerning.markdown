---
layout: page
title: PowerPoint Kerning
nav_exclude: true
---

## Kerning

PowerPoint *only* supports the legacy `kern` table. See [fontations#1183](https://github.com/googlefonts/fontations/issues/1183).

## Embeding

from https://forum.glyphsapp.com/t/powerpoint-pc-embedding-bug/32030

### Observed behaviour
Fonts embedded are replaced by fallback fonts when the document is re-opened.

### What should happen (expected behaviour):
— Seeing the picked fonts when fonts are not locally installed.

### Steps to reproduce:
— On Windows 11, with the last version of PPT installed (2410 (Build 18129.20116)).
— Create a new PPT document, set a text using a non system font on a slide, save with font embedding on. (Even better: modify a master slide and set the headline or text style using a non-system font.)
— Close PPT.
— Remove the fonts from the system;
— Reopen the file.
