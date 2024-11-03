<script lang="ts" setup>
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Slash } from "lucide-vue-next";

import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

interface Breadcrumb {
  text: string;
  link: string;
}

const breadcrumbs = ref<Breadcrumb[]>([]);

onMounted(() => {
  const route = useRoute();
  const pathSegments = route.path.split("/").filter((segment) => segment);

  if (route.path === "/") {
    breadcrumbs.value = [{ text: "Home", link: "/" }];
  } else {
    breadcrumbs.value = pathSegments.map((segment, index) => ({
      text: segment,
      link: "/" + pathSegments.slice(0, index + 1).join("/"),
    }));
  }
});
</script>

<template>
  <Breadcrumb>
    <BreadcrumbList>
      <template v-for="(breadcrumb, index) in breadcrumbs" :key="index">
        <BreadcrumbItem>
          <BreadcrumbLink :href="breadcrumb.link">
            {{ breadcrumb.text }}
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator
          v-if="index < breadcrumbs.length - 1 && breadcrumbs.length > 1"
        >
          <Slash />
        </BreadcrumbSeparator>
      </template>
    </BreadcrumbList>
  </Breadcrumb>
</template>
