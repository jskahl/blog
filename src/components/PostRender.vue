<script setup>
import MarkdownIt from "markdown-it";

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  breaks: true,
});

const props = defineProps({
    content: {
       type: String,
       required: true,
    },
})

const renderedMarkdown = md.render(props.content);
</script>

<template>
  <article class="prose max-w-none" v-html="renderedMarkdown" />
</template>
