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

const modules = import.meta.glob("@/posts/*.md", {
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
    <div 
        v-for="(post, index) in frontmatters"
        :key="index"
        class="my-5 hover:scale-[102%] hover:shadow-xl duration-200 active:scale-85 transition-all rounded-xl "
    >
        <router-link
            :to="`/postagens/${post.filename.replace('.md', '')}`"
            class="
                block mb-4 p-4 bg-(--text-color) dark:bg-(--bg-color) dark:border-(--text-color)"
        >

        <h2 class="text-xl font-bold mb-2 text-green-800 dark:text-green-400">
          {{ post.title }}
        </h2>

        <p class="mt-2 text-sm text-(--text-hover-color) dark:text-(--bg-hover-color)">
          Publicado em: {{ post.date }}
        </p>

      </router-link>
    </div>
</template>
