<template>

</template>

<script>
import storeIndex from "../store/index.js";





onMounted(async () => {
  const { data, error } = await storeIndex();
  items.value = data.value.slice(0, 10);
  fetch(`https://api.themoviedb.org/3/movie/${}?api_key=98de61c4aa587f3c34c5a1a4ed1416f4&append_to_response=videos`)
});
</script>