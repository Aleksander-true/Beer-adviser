const api = {
  async get(url, options) {
    try {
      const response = await fetch(url, options);
      if (response.status == 200) {
        return { isSuccess: true, response: response };
      } else {
        return { isSuccess: false, response: response };
      }
    } catch (err) {
      console.log("Error: ", err);
      return { isSuccess: false, response: null };
    }
  },
};

export { api };
