// Using Fetch, to get the data,
const items = document.querySelector(".items");
const show_items = document.querySelector(".show_items");
const container = document.querySelector(".container");
const data_demo = document.querySelector("#demo");

const elapsed = document.createElement("p");
const arr_data = document.createElement("p");
const arr = document.createElement("p");
const index = document.createElement("p");
const timestamp = document.createElement("p");
const slug = document.createElement("p");
const symbol = document.createElement("p");
const arr_id = document.createElement("p");
const metrics = document.createElement("p");
const market_data = document.createElement("p");
const price_usd = document.createElement("p");
//Define arrays for market data
const arr_0 = document.createElement("p");
const arr_1 = document.createElement("p");
const arr_2 = document.createElement("p");
const arr_3 = document.createElement("p");
const arr_4 = document.createElement("p");
const arr_5 = document.createElement("p");
const arr_6 = document.createElement("p");
const arr_7 = document.createElement("p");
const arr_8 = document.createElement("p");
const arr_9 = document.createElement("p");
const arr_10 = document.createElement("p");
const arr_11 = document.createElement("p");
const arr_12 = document.createElement("p");
const arr_13 = document.createElement("p");
const arr_14 = document.createElement("p");
const arr_15 = document.createElement("p");
const arr_16 = document.createElement("p");
const arr_17 = document.createElement("p");
const arr_18 = document.createElement("p");
const arr_19 = document.createElement("p");

//Define cards
const card = document.querySelector("#card");
const card_0 = document.createElement("div");
const card_1 = document.createElement("div");
const card_2 = document.createElement("div");
const card_3 = document.createElement("div");
const card_4 = document.createElement("div");
const card_5 = document.createElement("div");
const card_6 = document.createElement("div");
const card_7 = document.createElement("div");
const card_8 = document.createElement("div");
const card_9 = document.createElement("div");
const card_10 = document.createElement("div");
const card_11 = document.createElement("div");
const card_12 = document.createElement("div");
const card_13 = document.createElement("div");
const card_14 = document.createElement("div");
const card_15 = document.createElement("div");
const card_16 = document.createElement("div");
const card_17 = document.createElement("div");
const card_18 = document.createElement("div");
const card_19 = document.createElement("div");

//Add classes to cards

card_0.classList.add("card-0");
card_1.classList.add("card-1");
card_2.classList.add("card-2");
card_3.classList.add("card-3");
card_4.classList.add("card-4");
card_5.classList.add("card-5");
card_6.classList.add("card-6");
card_7.classList.add("card-7");
card_8.classList.add("card-8");
card_9.classList.add("card-9");
card_10.classList.add("card-10");
card_11.classList.add("card-11");
card_12.classList.add("card-12");
card_13.classList.add("card-13");
card_14.classList.add("card-14");
card_15.classList.add("card-15");
card_16.classList.add("card-16");
card_17.classList.add("card-17");
card_18.classList.add("card-18");
card_19.classList.add("card-19");
//Add classes to rest of elements
arr_0.classList.add("arr-0");
arr;
arr_1.classList.add("arr-1");
arr;
arr_2.classList.add("arr-2");
arr;
arr_3.classList.add("arr-3");
arr;
arr_4.classList.add("arr-4");
arr;
arr_5.classList.add("arr-5");
arr;
arr_6.classList.add("arr-6");
arr;
arr_7.classList.add("arr-7");
arr;
arr_8.classList.add("arr-8");
arr;
arr_9.classList.add("arr-9");
arr_10.classList.add("arr-10");
arr_11.classList.add("arr-11");
arr_12.classList.add("arr-12");
arr_13.classList.add("arr-13");
arr_14.classList.add("arr-14");
arr_15.classList.add("arr-15");
arr_16.classList.add("arr-16");
arr_17.classList.add("arr-17");
arr_18.classList.add("arr-18");
arr_19.classList.add("arr-19");

arr_data.classList.add("arr-data");
elapsed.classList.add("elapsed-arr");
timestamp.classList.add("time-stamp");
arr_id.classList.add("id-arr");
slug.classList.add("slug-arr");
symbol.classList.add("symbol-arr");
metrics.classList.add("metrics-arr");
market_data.classList.add("market-data");
price_usd.classList.add("price-usd");

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
    const dataStr = await res.json();
    console.log("res is:", res);
    console.log("dataStr from response of fetch:", dataStr);

    //O/P can to be converted to an array
    const dataJS = Object.values(dataStr);

    console.log("dataJS in array format after conversion is", dataJS);

    /* for (let djsArr of dataJS) {
      console.log("data in dataJS", djsArr);
      console.log("Id is ", djsArr.id);
      console.log("dataJS [0] is:", dataJS[0]);
      console.log("Time Elapsed: ", dataJS[0].elapsed);
      console.log("Time Timestamp: ", dataJS[0].timestamp);
      console.log("dataJS [1] is:", dataJS[1]);
      let data = dataJS; */
    //forEach Loop
    dataJS.forEach((arr, index, dataJS) => {
      console.log("index", index);
      console.log("The array:", arr);
      console.log("data_JS[index]", dataJS[index]);
      if (index !== undefined) {
        if (index === 0) {
          if (arr !== undefined) {
            console.log("Time Elapsed: ", dataJS[index].elapsed);
            elapsed.textContent = `Elapsed: ${dataJS[index].elapsed}`;

            console.log("Time Timestamp: ", dataJS[index].timestamp);
            timestamp.textContent = `Timestamp: ${dataJS[index].timestamp}`;
          } //if index 0 ends
        }
        //Get index=1, inside dataJS[1]
        if (index === 1) {
          for (let arr_data in arr) {
            console.log("index", index);
            console.log("arr[index]", arr[index]);
            console.log("Each object: ", arr[arr_data]);
            console.log("arr[index]", arr[index].id);
            console.log("arr[index]", arr[index].metrics);
            console.log("arr[index]", arr[index].slug);
            console.log("arr[index]", arr[index].symbol);
            console.log("Id", arr[arr_data].id);

            arr_id.classList.add("arr-id");
            arr_id.textContent = `Id: ${arr[arr_data].id} `;
            console.log("Symbol:", arr[arr_data].symbol);
            console.log("Slug:", arr[arr_data].slug);
            console.log("Metrics:", arr[arr_data].metrics);
            console.log("Market Data:", arr[arr_data].metrics.market_data);
            console.log(
              "Price in USD:",
              arr[arr_data].metrics.market_data.price_usd
            );
            if (arr_data === "0") {
              // add to arr_1
              arr_0.textContent = `Id: ${arr[arr_data].id} Symbol:${arr[arr_data].symbol} Slug:${arr[arr_data].slug}`;
            }
            if (arr_data === "1") {
              //add to arr_2
              arr_1.textContent = `Id: ${arr[arr_data].id} Symbol:${arr[arr_data].symbol} Slug:${arr[arr_data].slug}`;
            }
            if (arr_data === "2") {
              //add to arr_3
              arr_2.textContent = `Id: ${arr[arr_data].id} Symbol:${arr[arr_data].symbol} Slug:${arr[arr_data].slug}`;
            }
            if (arr_data === "3") {
              //add to arr_3
              arr_3.textContent = `Id: ${arr[arr_data].id} Symbol:${arr[arr_data].symbol} Slug:${arr[arr_data].slug}`;
            }
            if (arr_data === "4") {
              //add to arr_3
              arr_4.textContent = `Id: ${arr[arr_data].id} Symbol:${arr[arr_data].symbol} Slug:${arr[arr_data].slug}`;
            }
            if (arr_data === "5") {
              //add to arr_3
              arr_5.textContent = `Id: ${arr[arr_data].id} Symbol:${arr[arr_data].symbol} Slug:${arr[arr_data].slug}`;
            }
            if (arr_data === "6") {
              //add to arr_3
              arr_6.textContent = `Id: ${arr[arr_data].id} Symbol:${arr[arr_data].symbol} Slug:${arr[arr_data].slug}`;
            }
            if (arr_data === "7") {
              //add to arr_3
              arr_7.textContent = `Id: ${arr[arr_data].id} Symbol:${arr[arr_data].symbol} Slug:${arr[arr_data].slug}`;
            }
            if (arr_data === "8") {
              //add to arr_3
              arr_8.textContent = `Id: ${arr[arr_data].id} Symbol:${arr[arr_data].symbol} Slug:${arr[arr_data].slug}`;
            }
            if (arr_data === "9") {
              //add to arr_3
              arr_9.textContent = `Id: ${arr[arr_data].id} Symbol:${arr[arr_data].symbol} Slug:${arr[arr_data].slug}`;
            }
            if (arr_data === "10") {
              //add to arr_3
              arr_10.textContent = `Id: ${arr[arr_data].id} Symbol:${arr[arr_data].symbol} Slug:${arr[arr_data].slug}`;
            }
            if (arr_data === "11") {
              //add to arr_3
              arr_11.textContent = `Id: ${arr[arr_data].id} Symbol:${arr[arr_data].symbol} Slug:${arr[arr_data].slug}`;
            }
            if (arr_data === "12") {
              //add to arr_3
              arr_12.textContent = `Id: ${arr[arr_data].id} Symbol:${arr[arr_data].symbol} Slug:${arr[arr_data].slug}`;
            }
            if (arr_data === "13") {
              //add to arr_3
              arr_13.textContent = `Id: ${arr[arr_data].id} Symbol:${arr[arr_data].symbol} Slug:${arr[arr_data].slug}`;
            }
            if (arr_data === "14") {
              //add to arr_3
              arr_14.textContent = `Id: ${arr[arr_data].id} Symbol:${arr[arr_data].symbol} Slug:${arr[arr_data].slug}`;
            }
            if (arr_data === "15") {
              //add to arr_3
              arr_15.textContent = `Id: ${arr[arr_data].id} Symbol:${arr[arr_data].symbol} Slug:${arr[arr_data].slug}`;
            }
            if (arr_data === "16") {
              //add to arr_3
              arr_16.textContent = `Id: ${arr[arr_data].id} Symbol:${arr[arr_data].symbol} Slug:${arr[arr_data].slug}`;
            }
            if (arr_data === "17") {
              //add to arr_3
              arr_17.textContent = `Id: ${arr[arr_data].id} Symbol:${arr[arr_data].symbol} Slug:${arr[arr_data].slug}`;
            }
            if (arr_data === "18") {
              //add to arr_3
              arr_18.textContent = `Id: ${arr[arr_data].id} Symbol:${arr[arr_data].symbol} Slug:${arr[arr_data].slug}`;
            }
            if (arr_data === "19") {
              //add to arr_3
              arr_19.textContent = `Id: ${arr[arr_data].id} Symbol:${arr[arr_data].symbol} 
               Slug:${arr[arr_data].slug}`;
            }
          }
        }
        //index ===1 ends

        //Append to cards
        card_0.appendChild(elapsed);
        card_0.appendChild(timestamp);
        //Append index 1 data
        card_1.appendChild(arr_1);
        card_2.appendChild(arr_2);
        card_3.appendChild(arr_3);
        card_4.appendChild(arr_4);
        card_5.appendChild(arr_5);
        card_6.appendChild(arr_6);
        card_7.appendChild(arr_7);
        card_8.appendChild(arr_8);
        card_9.appendChild(arr_9);
        card_10.appendChild(arr_10);
        card_11.appendChild(arr_11);
        card_12.appendChild(arr_12);
        card_13.appendChild(arr_13);
        card_14.appendChild(arr_14);
        card_15.appendChild(arr_15);
        card_16.appendChild(arr_16);
        card_17.appendChild(arr_17);
        card_18.appendChild(arr_18);
        card_19.appendChild(arr_19);
        show_items.append(
          card_0,
          card_1,
          card_2,
          card_3,
          card_4,
          card_5,
          card_6,
          card_7,
          card_8,
          card_9,
          card_10,
          card_11,
          card_12,
          card_13,
          card_14,
          card_15,
          card_16,
          card_17,
          card_18,
          card_19
        );
        container.append(show_items);
      } //if index undefined ends
      /* for (let arrDJS of dataJS[1]) {
        console.log("Each array in dataJS[1]:", arrDJS);
        console.log("Id is", arrDJS.id);
        console.log("Symbol is", arrDJS.slug);
        console.log("Metrics is ", arrDJS.metrics);
        console.log("Market data is", arrDJS.metrics.market_data);
        console.log(
          "Market data's price_usd is",
          arrDJS.metrics.market_data.price_usd
        );

        //
      } */
    }); // forEach loop ends
  } catch (e) {
    console.log("An Error Occured!!", e.message);
  }
};
//fetchBitCoinPrice();
