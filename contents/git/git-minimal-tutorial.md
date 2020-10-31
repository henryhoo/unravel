---
title: "2"
---

# Git Minimal Startup Guide

## Why writing this tutorial

It took me more than one year to fully master git. Before that, I can't agree more on one of the quote in [this YCombinator post](https://news.ycombinator.com/item?id=4200492):

> Can we please stop pretending that Git is simple and easy to learn? If that were true then there wouldn't be "Learn how to use Git in <X> minutes!" posts every other day.

Truth is, **the core idea behind Git is not complicated. However it can still be hard to get started and mastered**. :)

Most of current tutorial assume you already have some background in computer science (that make sense, since Git is majorlly used for managing codes). However, those assumptions can easily make a tutorial harder for beginners. Another thing that hard for begineers is Git has so many new terms like _repository_ and _commit_, which are hard to concretize without using Git for a while.

So I become yet another person trying to write yet another tutorial for Git & GitHub.

This tutorial aims to only require **minimal experience in command line**, and will try to **associate Git specific concepts with some everyday procedure** to help everyone to understand Git without cursing someone.

If you want to learn about command line, the best way is to google it: [example search](https://www.google.com/search?ei=8SBxX8PGAou8sAX084uoDw&q=learning+command+line&oq=learning+command+line&gs_lcp=CgZwc3ktYWIQAzIECAAQQzICCAAyAggAMgIIADICCAAyBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeOgQIABBHUPEOWPEOYI8QaABwA3gAgAFyiAFykgEDMC4xmAEAoAEBqgEHZ3dzLXdpesgBCMABAQ&sclient=psy-ab&ved=0ahUKEwiDg5inv4rsAhULHqwKHfT5AvUQ4dUDCA0&uact=5).

## How to use this tutorial

To me, Git is really a _tool_, it is not a _technology_ that you need to learn for a full semester of college class like [compiler](https://en.wikipedia.org/wiki/Compiler). However, **to fully master a tool, you need to use it everyday**. It is all about an old saying --- _Practice makes perfect_.

So the best way to learn with this tutorial is **running all the steps in each section by yourself, and then try to recap what happened based on explanation in that section.**

To help you with this process. Each section is break down into three parts:

- **Execution** that help you running Git on your own computer
- **Expected Result** that help you confirming you are running everything correctly
- **Explanation** that explain what we just done and what it means in Git

And there is a **recap section** in the end to summarize everything.

## Let's start

### Section 1: Getting start with command line and install Git

#### Execution

- First you will need to know how to use command line, the best way is to take a glimpse at [some existing tutorials](https://www.google.com/search?ei=8SBxX8PGAou8sAX084uoDw&q=learning+command+line&oq=learning+command+line&gs_lcp=CgZwc3ktYWIQAzIECAAQQzICCAAyAggAMgIIADICCAAyBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeOgQIABBHUPEOWPEOYI8QaABwA3gAgAFyiAFykgEDMC4xmAEAoAEBqgEHZ3dzLXdpesgBCMABAQ&sclient=psy-ab&ved=0ahUKEwiDg5inv4rsAhULHqwKHfT5AvUQ4dUDCA0&uact=5).

- Follow [this guide](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) to install git on your laptop.

- Open terminal and run your first command
  ```
  git --version
  ```

#### Expected Result

You should see your current installed git version (it might different from mine `2.24.3` which is totally fine)

```bash
% git --version
git version 2.24.3 (Apple Git-128)
```

#### Explanation

We just learn to run commands in terminal and installed Git. And we checked the version of our installed Git

### Section 2: Set up Git

#### Execution

- Run following commands in terminal (Just run them, don't need to know what it means, I will explain later):
  ```
  cd ~/Desktop
  mkdir learnGit
  cd learnGit
  git init
  git config user.name "Your name here"
  git config user.email "Your name here"
  ```

#### Expected Result

```bash
% cd ~/Desktop
% mkdir learnGit
% cd learnGit
% git init
Initialized empty Git repository in /Users/jxh/Documents/jiaxi/learnGit/.git/
% git config user.name "Bob"
% git config user.email "Bob@xxx.com"
```

#### Explanation

- We went into your Desktop using `cd` command
- We created a new folder named _learnGit_ in your desktop using `mkdir` command.
- We went into that folder using `cd` command
- We initialized git for current folder (learnGit) using `git init` command.
- We added git user information (name & email) using `git config` command. It will help Git know who is making changes in the future (like add a signature for your documents).
