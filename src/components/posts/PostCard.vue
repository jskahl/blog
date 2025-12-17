<script setup lang="ts">
import { ref, onMounted } from "vue";
import { CalendarBlank } from "@/icons";
import MarkdownIt from "markdown-it";
import frontMatter from "markdown-it-front-matter";
import yaml from "js-yaml";

type PostFrontmatter = {
    title?: string;
    date?: string;
    filename: string;
    description?: string;
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

        const last = frontmatters.value[frontmatters.value.length - 1];

        if (last) {
            last.filename = path.split("/").pop()!.replace(".md", "");
        }
    }
});
</script>

<template>
    <div v-for="(post, index) in frontmatters" :key="index"
        class="hover:scale-[102%] border-dashed active:border-solid border-2 border-transparent hover:border-(--bg-color) dark:hover:border-(--text-color) duration-300 active:scale-90 transition-all rounded-md">
        <router-link :to="`/postagens/${post.filename.replace('.md', '')}`"
            class="flex flex-col gap-3 mb-4 p-4 bg-inherit">
            <div class="flex gap-3">
                <h2 class="text-xl font-bold text-green-800 dark:text-green-400">
                    {{ post.title }}
                </h2>

                <div class="flex gap-1 items-center text-sm opacity-70">
                    <CalendarBlank :size="18" />
                    <p>
                        {{ post.date }}
                    </p>
                </div>
            </div>
            <p class="text-justify">
                {{ post.description }}
            </p>
        </router-link>
    </div>
</template>
