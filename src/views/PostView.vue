<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import MarkdownIt from "markdown-it";
import MarkdownItTaskLists from "markdown-it-task-lists";
import MarkdownItHighlightjs from "markdown-it-highlightjs";
import MarkdownItAnchor from "markdown-it-anchor";
import MarkdownItCodeCopy from "markdown-it-code-copy";
import MarkdownTOCDoneRight from "markdown-it-toc-done-right";
import frontMatter from "markdown-it-front-matter";
import yaml from "js-yaml";

const route = useRoute();

const html = ref("");
const frontmatter = ref<any>({});

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
});

md.use(frontMatter, (fm: string) => {
  frontmatter.value = yaml.load(fm);
});

md.use(MarkdownItTaskLists);
md.use(MarkdownItHighlightjs);
md.use(MarkdownItAnchor, {
  permalink: MarkdownItAnchor.permalink.linkInsideHeader({
    symbol: '<i class="mdi mdi-link-variant"></i>',
    placement: "after",
    class: "text-green-800 dark:text-green-400",
  }),
});
md.use(MarkdownTOCDoneRight); //, {
//    level: [1, 2, 3],
//    containerClass: "toc",
//    listType: "ul",
//    callback: (html: string) => {
//        return `
//      <details class="toc-dropdown bg-red-200">
//        <summary class="toc-summary bg-red-500">Contents</summary>
//        ${html}
//      </details>
//    `;
//    },
//});

md.use(MarkdownItCodeCopy, {
  buttonClass:
    "text-inherit [&_span]:text-(--text-color) hover:scale-110 transition-transform active:scale-90 duration-100",
});

const modules = import.meta.glob("../posts/*.md", {
  query: "?raw",
  import: "default",
});

onMounted(async () => {
  const id = route.params.id as string;
  if (!id) return;

  const loader = modules[`../posts/${id}.md`];
  if (!loader) {
    html.value = "<h1>404</h1>";
    return;
  }

  const raw = (await loader()) as string;
  html.value = md.render(raw);
});
</script>

<template>
  <div class="w-full h-full bg-inherit text-inherit flex flex-col items-center justify-center">
    <h1
      class="text-2xl font-extrabold mb-2 text-green-800 dark:text-green-400"
    >
      {{ frontmatter.title }}
    </h1>

<article
  class="
    /* ───────────────── Base ───────────────── */
    w-full h-full
    markdown
    max-w-none
    prose
    dark:prose-invert
    text-inherit bg-inherit

    /* ───────────────── Links ───────────────── */
    prose-a:decoration-wavy
    prose-a:decoration-green-800
    dark:prose-a:decoration-green-400

    /* ───────────── Headings & text ─────────── */
    prose-headings:scroll-mt-20
    prose-h1:text-3xl
    prose-p:text-justify

    /* ───────────── Inline code ─────────────── */
    prose-code:before:content-none
    prose-code:after:content-none
    not-prose-pre:prose-code:rounded-sm
    not-prose-pre:prose-code:p-1
    not-prose-pre:prose-code:bg-(--bg-color)
    dark:not-prose-pre:prose-code:bg-[#121212]
    not-prose-pre:prose-code:text-(--text-color)
    dark:not-prose-pre:prose-code:text-(--text-color)

    /* ───────────── Code blocks ─────────────── */
    [&_pre:has(>code)]:bg-(--bg-color)
    dark:[&_pre:has(>code)]:bg-[#121212]

    /* ───────────── Blockquotes ─────────────── */
    prose-blockquote:quotes
    prose-blockquote:border-l-green-800
    dark:prose-blockquote:border-l-green-400
    prose-blockquote:prose-p:opacity-50
    prose-blockquote:prose-p:first-of-type:before:content-none
    prose-blockquote:prose-p:first-of-type:after:content-none

    /* ───────────── Lists & emphasis ────────── */
    prose-li:marker:text-green-800
    dark:prose-li:marker:text-green-400
    prose-strong:font-extrabold
    prose-strong:text-green-800
    dark:prose-strong:text-green-400
  "
>
      <div v-html="html" class="w-full h-full" />
    </article>
  </div>
</template>
