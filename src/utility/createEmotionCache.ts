import createCache from "@emotion/cache";

const createEmotionCatche = () =>
  createCache({
    key: "emotion-cache",
    prepend: true,
  });

export default createEmotionCatche;
