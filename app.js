// Using AXIOS, to get the data,
const items = document.querySelector(".items");
const show_items = document.querySelector(".show_items");
const container = document.querySelector(".container");
const data_demo = document.querySelector("#demo");

const fetchBitCoinPrice = async () => {
  try {
    //window.location.href = "http://localhost:9000/";
    const url =
      "https://data.messari.io/api/v1/assets?fields=id,slug,symbol,metrics/market_data/price_usd";
    const res = await fetch(url, {
      //method: "GET",
      //mode: "no-cors",
      //credentials: "same-origin",
      //headers: { "Content-Type": "application/json" },
    });
    const data_str = await res.json();
    console.log("res is:", res);
    console.log("data_str from response of fetch:", data_str);

    //O/P can to be converted to an array
    const data_JS = Object.values(data_str);
    console.log("data_str in string format is", data_str);
    console.log("data_JS in array format after conversion is", data_JS);

    for (let djsArr of data_JS) {
      console.log("data in dataJS", djsArr);
      console.log("Id is ", djsArr.id);
      console.log("data_JS [0] is:", data_JS[0]);
      console.log("Time Elapsed: ", data_JS[0].elapsed);
      console.log("Time Timestamp: ", data_JS[0].timestamp);
      console.log("data_JS [1] is:", data_JS[1]);
      for (let arrayData_JS of data_JS[1]) {
        console.log("Each array in data_JS[1]:", arrayData_JS);
        console.log("Symbol is", arrayData_JS.symbol);
        console.log("Slug is", arrayData_JS.slug);
        console.log("Metrics is ", arrayData_JS.metrics);
        console.log("Market data is", arrayData_JS.metrics.market_data);
        console.log(
          "Market data's price_usd is",
          arrayData_JS.metrics.market_data.price_usd
        );
      }
    }
  } catch (e) {
    console.log("An Error Occured!!", e.message);
  }
};
//fetchBitCoinPrice();
