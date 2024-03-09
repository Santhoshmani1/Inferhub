async function query(data) {
 // Fetching the model from Hugging Face's model hub using fetch API.
  const response = await fetch(
    "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0",
    {
      headers: {
        Authorization: "Bearer " + import.meta.env.VITE_HF_API_KEY,
      },
      method: "POST",
      body: JSON.stringify(data),
    }
  );
  const result = await response.blob();
  return result;
}

export default async function generateImage(prompt) {
  return query({ inputs: prompt })
    .then((result) => {
      // Creating url of the generated image from blob object for simplicity in rendering images.
      const imageUrl = URL.createObjectURL(result);
      return imageUrl;
    })
    .catch((error) => {
      console.error(error);
    });
}
