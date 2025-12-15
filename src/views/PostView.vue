<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import MarkdownIt from "markdown-it";
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

md.use(frontMatter, (fm) => {
  frontmatter.value = yaml.load(fm);
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

  const raw = await loader();
  html.value = md.render(raw);
});
</script>

<template>
  <article class="prose dark:prose-invert markdown w-full h-full">
    <div v-html="html" />
  </article>
</template>
