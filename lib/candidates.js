import axios from "axios";

// Функция для обработки запросов по эндпоинту
export default async function fetchGetEndpoint(endpoint, token) {
  try {
    const response = await axios.get(`http://80.85.246.168:8080${endpoint}`, {
      headers: {
        Authorization: `Token ${
          token ? token : "3db1d91bd408f3921741cee912e6db2b8beb5d17"
        }`,
      },
    });

    return response;
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

export async function fetchPostEndpoint(endpoint, body, token) {
  try {
    const response = await axios.post(
      `http://80.85.246.168:8080${endpoint}`,
      body,
      {
        headers: {
          Authorization: `Token ${
            token ? token : "3db1d91bd408f3921741cee912e6db2b8beb5d17"
          }`,
          "Content-Type": "application/json", // Убедитесь, что сервер ожидает JSON
        },
      }
    );

    return response.data; // Возвращаем данные из ответа
  } catch (error) {
    if (error.response) {
      console.error("Server returned an error response:", error.response);
      return {
        error: `HTTP ${error.response.status}: ${error.response.statusText}`,
        details: error.response.data,
      };
    } else if (error.request) {
      console.error("No response received:", error.request);
      return {
        error: "No response received from the server.",
      };
    } else {
      console.error("Unexpected error:", error.message);
      return {
        error: error.message,
      };
    }
  }
}
