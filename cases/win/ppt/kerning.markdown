---
layout: page
title: PowerPoint Kerning
---

### Only legacy `kern` table

PowerPoint *only* supports the legacy `kern` table. See [fontations#1183](https://github.com/googlefonts/fontations/issues/1183).

### GPOS kerning will be taken if Variable font
It seems, that for a VAR font the default opentype feature are active, which includes GPOS kerning:
[Glyphsapp Forum ppt-microsoft-opentype-and-gpos-kerning-work-with-vf](https://forum.glyphsapp.com/t/ppt-microsoft-opentype-and-gpos-kerning-work-with-vf/31467).

This is a very interesting finding and may need some more investigation:
- Why does this work? 
- Is it triggert by a specific table? 
- And if so, would it be possible to add such dummy table to a static font as well to trigger PPT to support opentype feature?

