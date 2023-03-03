<template>
  <LandingHeader></LandingHeader>
  <div class=" items-center max-w-full">
    <div class="relative">
      <div class="absolute -z-40 right-0">
        <img :src="baseData.baseURL + base" class="w-full" />
      </div>
    </div>

    <div class="block-rounded w-full h-full absolute bottom-0"></div>

    <div class="flex absolute z-30 bottom-4 px-32">
      <div
        v-if="items"
        v-for="item in items"
        @click="handleClick(item)"
        class="ml-3"
      >
        <img
          :src="baseData.baseURL + item.poster_path"
          width="150"
          class="rounded-xl"
        />
      </div>
    </div>

    <div class="absolute text-white mt-[62px] px-32">
      <p class="textDes text-[40px] font-bold mt-11 mb-5">
        {{ starts.original_title }}
      </p>

      <p class="textDes w-[950px] leading-relaxed opacity-75 font-bold mb-9">
        {{ starts.overview }}
      </p>

      <span class="flex">
        <p class="absolute textFont-vote text-[25px]">
          {{ starts.vote_average }}
        </p>
        <img src="../public/vectore.svg" class="textIMG" />
        <p class="absolute textFont text-[30px]">10</p>
      </span>

      <div class="relative flex items-center mt-6 mb-6">
        <img src="../public/play.svg" width="100" />
      </div>
    </div>
  </div>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Shantell+Sans:ital,wght@0,400;1,300;1,400&display=swap");
/*font-family: 'Shantell Sans', cursive;*/
.textDes {
  font-family: "Shantell Sans", cursive;
}
.textFont {
  font-family: "Shantell Sans", cursive;
  padding-left: 52px;
}

.textIMG {
  padding-left: 29px;
}

.textFont-vote {
  font-family: "Shantell Sans", cursive;
  transform: rotateZ(-60deg);
  padding-left: 12px;
}

.block-rounded {
  background: radial-gradient(
    125.62% 138.43% at 124.32% -64.63%,
    rgba(0, 0, 0, 0.49) 33.51%,
    #000000 90.34%
  );
}
</style>

<script setup>
import LandingHeader from "../components/header.vue";
import storeIndex from "../store/index.js";
import { onMounted, ref } from "vue";

const items = ref([]);
const handleClick = (item) => {
  base.value = item.backdrop_path;
  starts.value = item;
  itemID.value = item.id;
  denemeValue.value = item;
};

const baseData = ref({
  baseURL: "https://image.tmdb.org/t/p/w1280",
});

const itemID = ref({});

const denemeValue = ref({});

const deneme = () => {
  if (itemID.value.id === items.value.id) {
  }
};

console.log(denemeValue.value);

const base = ref({});
const starts = ref({});

onMounted(async () => {
  const { data, error } = await storeIndex();
  items.value = data.value.slice(0, 10);
  base.value = items.value[0].backdrop_path;
  starts.value = items.value[0];
});
</script>
