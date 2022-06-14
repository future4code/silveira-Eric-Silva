import axios from "axios";
import { baseURL } from "./baseUrl";

const createNews = async (): Promise<void> => {
  await axios.put(`${baseURL}/news`, {
    title: "Feriado de São João",
    content:
      "Este ano o mês de Julho vai ser inteiro de feriado. Isso mesmo! do dia 1 ao dia 30, boas festas!",
    date: Date.now(),
  });
};

const main = async () => {
  try {
    await createNews();
  } catch (error) {
    
  }
};
main();
