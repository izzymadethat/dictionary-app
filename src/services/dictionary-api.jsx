import axios from "axios";

export async function getDefinition(formData) {
  try {
    const response = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${formData.word}`
    );
    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}
//axios has built in json() unlike fetch()