const baseUrl = "https://1763470a.sibforms.com/serve";

const uniqueId =
  "MUIFAE0CXsDslr3YVW001HR4nZzWjETg6B1gd-By3QYzxBd9sWd40Gtma9Ljjp6MqbQmGVygQP9NEuyrT4hLfzaKO4YQgNEdzU6z_10uQWZmXrkq-7DIdV8MpFI7BJyAPR5--2In_WaxZzYN0i2uGHVach5CzBCrFo3rJ5CjmdoWynIzQd91O4xd2LAaSN7BdjXyjN2nFeuTZsjU";

const submitFormApi = async (data) => {
  const formData = new FormData();
  formData.append("FIRST_NAME", data.FIRST_NAME?.split(" ")[0]);
  formData.append("LASTNAME", data.FIRST_NAME?.split(" ")?.[1] || "");
  formData.append("SMS__COUNTRY_CODE", data.SMS__COUNTRY_CODE);
  formData.append("SMS", data.SMS);
  formData.append("EMAIL", data.EMAIL);
  formData.append("LOCATION", data.LOCATION);
  formData.append("email_address_check", null);
  formData.append("locale", "en");

  try {
    const url = `${baseUrl}/${uniqueId}?isAjax=1`;
    const response = await fetch(url, {
      method: "POST",

      body: formData,
    });

    return response;
  } catch (error) {
    console.error(error);
  }
};

export default submitFormApi;
