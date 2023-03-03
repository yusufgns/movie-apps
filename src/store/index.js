import { ref, onMounted } from "vue";

export default async function () {
  const data = ref(null);
  const error = ref(null);

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const json = await response.json();
    data.value = json.results;
  } catch (err) {
    error.value = console.log(err.message);
  }

  return { data, error };
}