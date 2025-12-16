<script setup lang="ts">
import { ref, onMounted } from "vue";
import MarkdownIt from "markdown-it";
import frontMatter from "markdown-it-front-matter";
import yaml from "js-yaml";

type PostFrontmatter = {
  title?: string;
  date?: string;
  filename: string;
};

const frontmatters = ref<PostFrontmatter[]>([]);

const md = new MarkdownIt();

md.use(frontMatter, (fm: string) => {
  frontmatters.value.push(yaml.load(fm) as PostFrontmatter);
});

const modules = import.meta.glob("@/posts/*.md", {
  query: "?raw",
  import: "default",
});

onMounted(async () => {
  frontmatters.value = [];

  for (const [path, load] of Object.entries(modules)) {
    const raw = (await load()) as string;

    md.render(raw); // triggers frontmatter hook

    const last =
      frontmatters.value[frontmatters.value.length - 1];

    if (last) {
      last.filename = path.split("/").pop()!.replace(".md", "");
    }
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
