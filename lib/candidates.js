import axios from "axios";

// Функция для обработки запросов по эндпоинту
export default async function fetchEndpoint(endpoint) {
  try {
    const response = await axios.get(`http://80.85.246.168:8080/${endpoint}`, {
      headers: {
        Authorization: "Token 7edc87babac990005a5cc10ae673b888cd691e10",
        "Content-Type": "application/json",
      },
      auth: {
        username: "admin",
        password: "admin",
      },
    });

    return response.data;
  } catch (error) {
    // Логирование ошибки
    if (error.response) {
      // Ошибка от сервера
      return {
        error: `HTTP ${error.response.status}: ${error.response.statusText}`,
        details: error.response.data,
      };
    } else if (error.request) {
      // Ошибка при отправке запроса
      return {
        error: "No response received from the server.",
      };
    } else {
      // Другое исключение
      return {
        error: error.message,
      };
    }
  }
}
