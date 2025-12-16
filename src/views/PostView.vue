<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import MarkdownIt from "markdown-it";
import MarkdownItTaskLists from "markdown-it-task-lists";
import MarkdownItHighlightjs from "markdown-it-highlightjs";
import MarkdownItAnchor from "markdown-it-anchor";
import MarkdownItCodeCopy from "markdown-it-code-copy";
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

md.use(MarkdownItCodeCopy, {
    buttonClass: "text-inherit [&_span]:text-(--text-color) dark:[&_span]:text-(--bg-color) text-red-200 hover:scale-110 transition-transform active:scale-90 duration-100",
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
    <article
        class="prose dark:prose-invert prose-a:decoration-wavy prose-a:decoration-green-800 dark:prose-a:decoration-green-400 prose-headings:scroll-mt-20 prose-h1:text-green-800 dark:prose-h1:text-green-400 prose-p:text-justify markdown prose-blockquote:prose-p:first-of-type:after:content-none prose-blockquote:prose-p:first-of-type:before:content-none not-prose-pre:prose-code:first-of-type:before:content-none not-prose-pre:prose-code:last-of-type:after:content-none not-prose-pre:prose-code:bg-(--bg-color) dark:not-prose-pre:prose-code:bg-(--text-color) not-prose-pre:prose-code:text-(--text-color) dark:not-prose-pre:prose-code:text-(--bg-color) not-prose-pre:prose-code:rounded-sm not-prose-pre:prose-code:p-1 text-inherit bg-inherit prose-blockquote:prose-p:opacity-50 prose-strong:font-extrabold prose-strong:text-green-800 dark:prose-strong:font-extrabold dark:prose-strong:text-green-400 prose-p prose-pre:bg-(--bg-color) prose-pre:bg(--text-color) dark:prose-pre:bg-(--text-color) dark:prose-pre:text-(--bg-color) dark:prose-pre:bg-(--text-color) dark:prose-pre:text-(--bg-color) prose-blockquote:quotes prose-blockquote:border-l-green-800 dark:prose-blockquote:border-l-green-400 prose-li:marker:text-green-800 dark:prose-li:marker:text-green-400 w-full h-full">
        <div v-html="html" />
    </article>
</template>
