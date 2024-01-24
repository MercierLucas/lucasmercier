---
title: My research workflow using Obsidian
date: "2024-01-24"
tldr: Different tools I use and steps I follow to conduct my litterature review 
categories:
    - research
    - english
---


# My research workflow using Obsidian

Today I'm going to present the reseach workflow I'm using when I'm doing literature review. We will especially see:
- What steps I follows when searching for new papers
- How do I take notes on papers ?
- How do transform these notes into more structured and organized topics

For this we will see methods but also the tools I'm using, especially:
- Obsidian for note taking
- Zotero for reference management

# Tools used


## Zotero

[Zotero](https://www.zotero.org/) is a reference management tool widely used in the research community.  It allows to centralize scientific papers, blog post, journal publications etc.. You can then add tags to items to regroup them by topics, add annotations directly on the pdf etc.

To replicate steps in this tutorial, you will need to install the [Better BibTeX for Zotero](https://retorque.re/zotero-better-bibtex/installation/) plugin. It allows to easily format citations to import them with other tools. In our case, Osbidian.

## Obsidian

Obsidian is note-taking application that is using the [markdown](https://www.markdownguide.org/cheat-sheet/) language (the one used in README.md files in github for example).  Obsidian as many advantages, of which:
- It runs on your machine and files are stored locally (unlike Notion for example). This means you have full control over your notes. You can also sync them using something like Github, OneDrive etc. or the official [sync service](https://obsidian.md/sync)
- It allows to automatically create links between your notes that result in a rich graph-based representation that can be used to discover relations between notes/topics you wouldn't think at first (some example later on)

Obsidian allows the community to add their own features and to share them with [plugins](https://obsidian.md/plugins).  In this tutorial we will use the [Obsidian Zotero Integration](https://github.com/mgmeyers/obsidian-zotero-integration), to get data from Zotero thanks to the Better BibTeX plugin previously installed.


# Workflow description

The first step is the search for articles. For this I tend to use:
- [Google Scholar](https://scholar.google.com/) (with alerts on new papers)
- [Research Rabbit](https://www.researchrabbit.ai/)
- And other (to be updated)

When I find something interesting, I'm having a glance at it by reading key elements (title, abstract, sometimes results tables and conclusion). With this method I can quickly see if this paper is worth investing more time into it.
If that's the case, I'll dive a bit deeper, by taking a look at introduction and skim the proposed method, but only first few sentences, and diagrams (especially in Deep Learning to have an idea of the proposed architecture), but no math (yet).

If observation made by the authors or method looks promising I'll add it to Zotero and add tags:

![Figure 1: Zotero tags](https://github.com/MercierLucas/lucasmercier/blob/master/src/lib/assets/images/blog_workflow_academic_zotero_tags.png)

Tags are very specific to your topic. In my case (computer vision using deep learning), tags represents:
- The task: here *3d_human_pose_estimation* and *human_mesh_recovery*
- The method: *generative_adversial_network*
- Additionnal infos such as *semi_supervised_learning* etc.

I can then dive deeper into the article be reading more carefully the method, results and so on. At that point I'll generally highlight stuff, add annotations and a side note. For this I'm using the Zotero pdf viewer (should be the default one, otherwise you can change it in preferences).

![Figure 2: Annotation example with (Kipf et Welling, 2017)](https://github.com/MercierLucas/lucasmercier/blob/master/src/lib/assets/images/blog_workflow_academic_zotero_annotations.png)

I use the following color code for highlights:
- Yellow: State of the problem, actual known limitations from the litterature (the *Why?*)
- Blue: Proposed method to tackle aforementioned problems (the *How?*)
- Red: Limitations of the proposed method

Once I've added enough materials, I'll import them into Obsidian.

# Importing Zotero data into Obsidian

As mentioned, we will use the [Obsidian Zotero Integration](https://github.com/mgmeyers/obsidian-zotero-integration) plugin. The name is pretty self explanatory. It allows to import annotations (highlights, text etc.) and metadata (date, tags, authors etc.) from Zotero to obsidian by automatically create a new note. A [template](https://github.com/mgmeyers/obsidian-zotero-integration/blob/main/docs/Templating.md) can be defined to tell Obsidian how place this data in a new note. Mine is available [here](https://github.com/MercierLucas/lucasmercier/blob/master/src/lib/assets/files/zotero_integration_template.md).

Once installed, you can use the `CTRL + p` to open the command window and search for  *Zotero Integration: Import paper*, or use the `CTRL + SHIFT + O` (make sure tha Zotero is open, otherwise it won't work):

![Figure 3: Import paper from Zotero](https://github.com/MercierLucas/lucasmercier/blob/master/src/lib/assets/images/zotero_integration_import.png)

If we take the same example as before, we get something like:

![Figure 4: Zotero annotation import with (Kipf et Welling, 2017) paper](https://github.com/MercierLucas/lucasmercier/blob/master/src/lib/assets/images/export_zotero_integration.png)

Be carefull, if you add text directly in the note and you re-import it, those notes will be lost. To prevent this is can add a "persistent" section. To do this take a look at the template I linked, or directly in the [plugin's documentation](https://github.com/mgmeyers/obsidian-zotero-integration/blob/main/docs/Templating.md). 

# Using the graph-view

In the previous section I said that I'm using tags to represent the method used (in my case the type of network). By doing so you can use the graph to visually discover links between methods as we can see Figure 5:

![Figure 5: Local graph view of the graph_neural_network node](https://github.com/MercierLucas/lucasmercier/blob/master/src/lib/assets/images/graph_view_gcn.png)


From this example I can see that *(Liu et al. 2021)*, *(Zhao et al. 2019)* probably uses a similar approach in their paper, so we can regroup those two ones.

In Obsidian you can find two types of graphs, the [global](https://help.obsidian.md/Plugins/Graph+view) and the [local](https://help.obsidian.md/Plugins/Graph+view#Local+Graph) one. The global one is fun and pretty but start to become a mess when you had a lot of notes, so it seems that a lot of people only uses the local one that show links for a specific note.

# Gathering everything - The MindMAP

Finally, I would like to discuss once of the best Obisdian tool for me, the [canvas](https://obsidian.md/canvas). The main drawback with Obsidian is that after a while you avec a lot of notes and it can be hard to find information you need.
You can aggregate everything using the canvas as a mindmap. 

Let's take an example, my subject is "3D Human Pose Estimation" or "3D HPE". I create a block called "3D HPE" in my canvas (Figure 6). 
Then I can start to aggregate notes. For this I ask myself different questions:
- Why is it hard? What are the limitation?
- How is it done?
- What are the different approaches ?
- etc.
and I try to regroup notes that answer the same questions. For deep learning specifically, I create a node for each type of networks (for example Graph Neural Networks) and link intersting papers using those networks.

![Figure 6: Mindmap example for 3D HPE](https://github.com/MercierLucas/lucasmercier/blob/master/src/lib/assets/images/mindmap_obsidian.png)

# Références

Kipf, T. N., & Welling, M. (2017). _Semi-Supervised Classification with Graph Convolutional Networks_ (arXiv:1609.02907). arXiv. [http://arxiv.org/abs/1609.02907](http://arxiv.org/abs/1609.02907)

Liu, J., Rojas, J., Li, Y., Liang, Z., Guan, Y., Xi, N., & Zhu, H. (2021). A Graph Attention Spatio-temporal Convolutional Network for 3D Human Pose Estimation in Video. _2021 IEEE International Conference on Robotics and Automation (ICRA)_, 3374‑3380. [https://doi.org/10.1109/ICRA48506.2021.9561605](https://doi.org/10.1109/ICRA48506.2021.9561605)

Zhao, L., Peng, X., Tian, Y., Kapadia, M., & Metaxas, D. N. (2019). Semantic Graph Convolutional Networks for 3D Human Pose Regression. _2019 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)_, 3420‑3430. [https://doi.org/10.1109/CVPR.2019.00354](https://doi.org/10.1109/CVPR.2019.00354)
