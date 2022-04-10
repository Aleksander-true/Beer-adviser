const api = {
  async get({ url, headers, mode, cache }) {
    try {
      const response = await fetch(url, {
        method: "GET",
        headers,
        mode,
        cache,
      });
      if (response.status == 200) {
        return {
          isSuccess: true,
          response: response,
        };
      } else {
        return { isSuccess: false, response: response };
      }
    } catch (err) {
      console.log("Error: ", err);
    }
  },
};

export { api };
