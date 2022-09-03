# Jardin des devs

## Prérequis

- [Nodejs](https://nodejs.org/fr/) >= 16
- Un des gestionnaires de paquets suivants:
    - [NPM](https://docs.npmjs.com/about-npm)
    - [Yarn](https://yarnpkg.com/getting-started)
    - [PNPM](https://pnpm.io/fr/installation)
- [Git](https://git-scm.com/)

## Informations

Dans les examples nous utilisons pnpm, vous êtes libre d'utiliser le gestionnaire que vous voulez.

Merci de ne pas utiliser de [commonjs](https://blog.logrocket.com/commonjs-vs-es-modules-node-js/#:~:text=ES%20modules%20are%20the%20standard,encapsulating%20JavaScript%20code%20for%20reuse.).

## Comment collaborer ?

### Directement depuis le code 

Si vous voulez un exemple de comment contribuer: 
[Grafikart | Tutoriel git : Participer sur un projet open source](https://www.youtube.com/watch?v=7V2Jl0JRf3E&ab_channel=Grafikart.fr)

#### 1 - Faites un fork du projet

Lien ici: [fork](https://github.com/antharuu/jardin-des-devs/fork) du dépo.

#### 2 - Clonez le projet en local

Si besoin, voir les informations sur la commande *[git clone](https://git-scm.com/docs/git-clone/fr)*.

#### 3 - Installez les dépendances
```bash
pnpm install
```
#### 5 - Lancer le projet en local

```bash
pnpm run dev
```

#### 6 - Modifiez le projet

Voir les information sur l'ajout d'un article.

Vous pouvez aussi proposer des modifications en tout genre.

#### 7 - Faites un commit et un push

Voir la documentation sur les [commits](https://git-scm.com/docs/git-commit) et les [push](https://git-scm.com/docs/git-push).

#### 8 - Faites une pull-request

Retournez sur la page [github du projet](https://github.com/antharuu/jardin-des-devs).

Creez une nouvelle pull-request.

Merci de donner des informations sur vos modifications.

### Depuis discord

Envoyez simplement le contenu de votre article avec tout les informations *(voir fichier ci dessous)* à un membre de l'équipe ou à une personne pouvant utiliser ma méthode ci-dessus.

## Les formats accéptés

Pour le moment nous acceptons seulement les formats:

- [Markdown](#): .md
- [MDX](https://mdxjs.com/): .mdx

*N'hésitez pas à demander si vous avez une préférences pour un autre format.*

## Ajouter un post

Créez simplement un fichier compatible *(.md, .mdx)* dans le dossiers `src/pages/posts/[catégory]/[slug].[md ou mdx]` et copiez simplement le template correspondant:

```markdown
---

################################## ⚠️ Ne pas toucher à cette partie

layout: ../../../layouts/PostLayout.astro
draft: false

####################################################################

# Titre de l'article
title: Le titre de votre article

# Description courte, utilisé dans la liste des articles ainsi que pour le référencement.
description: Une super description

# La date de publication/modification. (format: YYYY-MM-DD et éventuellement l'heure HH:ii:ss)
date: 2022-09-03 15:00:00

# L'image de bannière (soit le lien direct, soit insérer dans le dossier images dans /public "/images/[votre image]")
image: /images/pexels-eberhard-grossgasteiger-1366919.jpg

# La catégorie de l'article.
category: godot

# Les tags de votre article. (5 max)
tags:
  - croquettes
  - godot

# L'auteur de l'article.
author: antharuu

---

<!-- Ici votre article en md/mdx -->

```
