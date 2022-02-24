const apiConfig = {
    baseUrl: "https://api.themoviedb.org/3/",
    apiKey: "d3868027c8847fa6cc85af458ac5fa84",
    originalImage: (imgPath) =>
        `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};
export default apiConfig;