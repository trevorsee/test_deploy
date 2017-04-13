---
title: 'Roadmap: Reporter'
date: 2016-12-14 05:31:00 Z
position: 1
photo: "/uploads/trevorcarr-dot-info-roadmapreporter1.png"
publish: true
time: Summer 2016
---

{% assign image = "trevorcarr-dot-info-roadmapreporter1.png" %}
{% include srcset-imgix.html %}

Product design for Reporter: an MVP for Roadmap 2.0.
{: .measure-wide .mt0 }

Roadmap is an <span class="nobreak">enterprise-scale</span> project management tool focused on integrating with existing tools and <span class="nobreak">exception-based</span> management.
{: .measure-wide }

I joined the small team of four to help reimagine Roadmap from the ground up, from both a design and technology perspective. After interviewing different types of customers about their project workflow and about how they use Roadmap, we found what worked and didn’t work about the current release of Roadmap. It became clear that a simpler point of view, better user experience, and a more flexible and easily adoptable tool were essential to satisfy and expand the user base. Because all of these improvements required sweeping changes to Roadmap 1.0, we needed a strategy for slowly rolling out Roadmap 2.0. We developed Reporter as an MVP for Roadmap 2.0 in order to begin that transition.
{: .measure-wide .mb5 }

{% assign image = "trevorcarr-dot-info-roadmapreporter2.png" %}
{% include srcset-imgix.html %}

{% assign image = "trevorcarr-dot-info-roadmapreporter4.png" %}
{% include srcset-imgix.html %}

**The goals of Reporter**
{: .measure-wide .ma0 }
- {: .list} Exist concurrently with Roadmap 1.0
- {: .list} Provide new features to existing customers
- {: .list} Raise revenue from new customers
{: .measure-wide .mt0 }

**Ideas & Principles**
{: .measure-wide .ma0 }
- {: .list} Stay flexible
- {: .list} We are not a spreadsheet application
- {: .list} We are not a full featured B.I. tool
- {: .list} We should be used efficiently and effectively
- {: .list} Keep time in Roadmap to a minimum
- {: .list} Set up once and forget
- {: .list} Exceptions based management through generated reports
- {: .list} Integrations: Many tools, one view
- {: .list} Better Support for low-granularity data
{: .measure-wide .mt0 .mb5 }

{% assign image = "trevorcarr-dot-info-roadmapreporter3.png" %}
{% include srcset-imgix.html %}

**Integrations**
<br>
The primary value of Roadmap is collecting data from a variety of tools (Github, Trello, Jira, Basecamp, …) into a single view. A Roadmap customer is often a single administrator or team leader and can use Roadmap to view data from the myriad of tools their team uses  day-to-day without asking their team to adopt a new tool.
{: .measure-wide .mt0 }

**Reports**
<br>
A Report is a structured comparison of hours, workdays, or dollars across projects, people, tasks, or roles. This allows a user to analyze past data, measure progress, and forecast the future, which enables faster, better decisions.
{: .measure-wide .mb5 }

{% assign image = "trevorcarr-dot-info-roadmapreporter5.png" %}
{% include srcset-imgix.html %}

**Base Report**
<br>
Base reports are the core unit of Reporter. Their goal is to provide clear and useful information in a flexible way. A base report comes with a primary data set: Planning Efficiency, Utilization, Project Status, Revenue, Collisions, as well as a series of data columns (logged hours, planned hours, etc). A base report has different views: overview, by time, by distribution, can be viewed across different data sets (hours, work-day, budget dollars) and can be navigated across time and time resolution (week, month, …).
.
{: .measure-wide .mt0 .mb5 }

{% assign image = "trevorcarr-dot-info-roadmapreporter6.png" %}
{% include srcset-imgix.html %}

**Hiding information until asked**
<br>
I designed Reporter with the perspective that targeted information is better than complete information, as long as there is easy navigation to ask for contextually related data. A project expands to see the internal tasks, people, and roles. A row can be expanded to view its contributing factors.
{: .measure-wide .mt0 .mb5 }

{% assign image = "trevorcarr-dot-info-roadmapreporter7.png" %}
{% include srcset-imgix.html %}

**Saved Reports & Filters**
<br>
A base report can be saved with a relative timeframe, optional filters, a custom name, and is collapsed into a small card. Rather than spending time organizing a large table view each time you open Roadmap for a particular task - Saved Reports allows a single setup that can be returned to.
{: .measure-wide .mt0 .mb5 }

{% assign image = "trevorcarr-dot-info-roadmapreporter8.png" %}
{% include srcset-imgix.html %}

{% assign image = "trevorcarr-dot-info-roadmapreporter9.png" %}
{% include srcset-imgix.html %}

{% assign image = "trevorcarr-dot-info-roadmapreporter10.png" %}
{% include srcset-imgix.html %}

**Collections**
<br>
Saved Reports can be sorted into Collections and viewed with a targeted context, such as Weekly Meetings. Using collections gives some amount of context before clickthrough rather than wasting time browsing through data looking for what is relevant.
{: .measure-wide .mt0 .mb5 }

{% assign image = "trevorcarr-dot-info-roadmapreporter11.png" %}
{% include srcset-imgix.html %}

**Dashboard**
<br>
The dashboard displays the general health of a team’s progress, gives access to important status information, as well as provides easy access to pinned Collections. This allows Roadmap to be useful as a quick overview of each business day, rather than a chore or additional baggage.
{: .measure-wide .mt0 }

**Exceptions**
<br>
Exceptions are contextually-chosen bounds for data in Roadmap. This helps a user direct their attention to problem areas, and helps prioritize decisions. For example, a project manager might only care about Utilization if it is under 75% or over 110%. A color-coded saved report can alert them to the issue, and they can drill-down to find and solve the problem.
{: .measure-wide .mb5 }


<span class="link dim out">[https://beta.ppmroadmap.com](https://beta.ppmroadmap.com)</span>
