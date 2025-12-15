<script setup lang="ts">
import MarkdownIt from "markdown-it";
import frontMatter from "markdown-it-front-matter";
import yaml from "js-yaml";
import { ref, onMounted } from "vue";

const frontmatters = ref<any[]>([]);

const md = new MarkdownIt();

md.use(frontMatter, (fm) => {
  frontmatters.value.push(yaml.load(fm));
});

const modules = import.meta.glob("../posts/*.md", {
  query: "?raw",
  import: "default",
});

onMounted(async () => {
  for (const load of Object.values(modules)) {
    const raw = await load();
    md.render(raw);
  }
});
</script>

<template>
<div class="mt-8">
    <h1 class="text-2xl text-green-800 dark:text-green-400 mb-4 border-b-2 border-(--bg-color) dark:border-(--text-color) border-dashed pb-2">
      Posts Recentes
    </h1>
    <div v-for="(post, index) in frontmatters" :key="index" class="my-5">
      <router-link
          :to="`/post/${post.filename.replace('.md', '')}`"
        class="
            block
            mb-4 p-4 bg-(--text-color) dark:bg-(--bg-color)
            dark:border-(--text-color)
            hover:border-double transition-normal"
      >
        <h2 class="text-xl font-bold mb-2 text-green-800 dark:text-green-400">
          {{ post.title }}
        </h2>
        <p
          class="mt-2 text-sm text-(--text-hover-color) dark:text-(--bg-hover-color)"
        >
          Publicado em: {{ post.date }}
        </p>
      </router-link>
    </div>
  </div>
</template>
