<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import MarkdownIt from "markdown-it";
import frontMatter from "markdown-it-front-matter";
import yaml from "js-yaml";
import PostRender from "../components/PostRender.vue";

const route = useRoute();

const content = ref("");
const frontmatter = ref<any>({});

const md = new MarkdownIt();

md.use(frontMatter, (fm) => {
  frontmatter.value = yaml.load(fm);
});

const modules = import.meta.glob("../posts/*.md", {
  query: "?raw",
  import: "default",
});

watch(
  () => route.params.id,
  async (id) => {
    if (!id || typeof id !== "string") return;

    // ensure filename ends with .md
    const filename = id.endsWith(".md") ? id : `${id}.md`;

    const loader = modules[`../posts/${filename}`];

    if (!loader) {
      content.value = md.render("# 404\nPost not found");
      return;
    }

    const raw = await loader();
    content.value = md.render(raw);
  },
  { immediate: true }
);
</script>

<template>
<div>
  <PostRender :content="content" />
</div>
</template>
