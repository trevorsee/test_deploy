---
title: Studio Atlas
date: 2016-12-14 05:31:00 Z
position: 4
photo: "/uploads/trevorcarr-dot-info-studioatlas1.png"
publish: true
time: Spring 2017 
---

{% assign image = "trevorcarr-dot-info-studioatlas1.png" %}
{% include srcset-imgix.html %}

An index of graphic design studios and how they describe themselves.
{: .measure-wide }

We collected data about studios and their descriptions in to a spreadsheet that could be accessed by API through Sheetlabs. That data is piped into a python script that uses <span class="link dim out nobreak">[tf-idf](https://en.wikipedia.org/wiki/Tf%E2%80%93idf)</span> and <span class="link dim out nobreak">[t-SNE](https://en.wikipedia.org/wiki/Tf%E2%80%93idf)</span> algorithms to sort the studios. Studios that use similar words or write in a similar way are grouped together.
{: .measure-wide }

The resulting simple React app plots the studios according to their coordinates, creating a field of studio homepages that the user can explore at their own pace. We hope that this encourages a viewer to find relationships between grouped studios in both aesthetic and linguistic terms.
{: .measure-wide }

— in collaboration with <span class="link dim out">[Default Value](http://defaultvalue.info/)</span>.
{: .measure-wide .pb1 }

![](/uploads/trevorcarr-dot-info-studioatlas3.gif)

{% assign image = "trevorcarr-dot-info-studioatlas2.png" %}
{% include srcset-imgix.html %}

{% assign image = "trevorcarr-dot-info-studioatlas4.png" %}
{% include srcset-imgix.html %}

<span class="link dim out">[Studio Atlas](https://trevorcarr.info/deploy-studio-atlas/)</span>
