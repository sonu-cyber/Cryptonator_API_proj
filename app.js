// Using AXIOS, to get the data,
const items = document.querySelector('.items');
const show_items = document.querySelector('.show_items');
const container = document.querySelector('.container');
const data_demo = document.querySelector('#demo');

const fetchBitCoinPrice = async() => {
  try {
    const res = await fetch('https://api.cryptonator.com/api/full/btc-usd');
    const data_str = await res.json();
    console.log('data_str from response of fetch:', data_str);
    //o/p JSON data_JS
    //const data_obj = JSON.parse(data_str);
    //O/P can to be converted to an array
    const data_JS = Object.values(data_str);
    console.log('data_str in string format is', data_str);
    console.log('data_JS in array format after conversion is', data_JS);
    console.log('data_str.ticker',data_str.ticker);
    console.log('data_str ticker.base is', data_str.ticker.base);
    console.log('data_str ticker.markets is', data_str.ticker.markets);
    console.log('data_str ticker.markets[0].market is', data_str.ticker.markets[0].market);
    console.log('data_str.timestamp',data_str.timestamp);
    console.log('data_str.success',data_str.success);
    console.log('data_str.error',data_str.error);
    console.log('length of data_JS:', data_JS.length);
    //document.getElementById('demo').innerHTML = 'Ticker base: ' + data_str.ticker.base +'<br>' + 'Timestamp: ' + data_str.timestamp +'<br>' + 'Error: ' + data_str.error + '<br>' + 'Markets: ' + data_str.ticker.markets[5].market +'<br>' + 'Success: '+ data_str.success +'<br>';
    //Create demo data
    let data = data_JS;
    const show_title = document.createElement('h1');
    show_title.classList.add('show_title');
    show_title.textContent = 'Each Market Value';
    const data_JS_ticker_base = document.createElement('p');
    data_JS_ticker_base.textContent = 'Ticker base: ';
    data_JS_ticker_base.textContent += data.base;
    const data_JS_change = document.createElement('p');
    data_JS_change.classList.add('data_JS_change');
    data_JS_change.textContent = 'Change: ';
    data_JS_change.textContent += data.change;
    const data_JS_price = document.createElement('p');
    data_JS_price.classList.add('data_JS_price');
    data_JS_price.textContent = 'Price: ';
    data_JS_price.textContent += data.price;
    const data_JS_target = document.createElement('p');
    data_JS_target.classList.add('data_JS_target');
    data_JS_target.textContent = 'Target: ';
    data_JS_target.textContent += data.target;
    const data_JS_volume = document.createElement('p');
    data_JS_volume.classList.add('data_JS_volume');
    data_JS_volume.textContent = 'Volume: ';
    data_JS_volume.textContent += data.volume;
    const data_JS_timestamp = document.createElement('p');
    data_JS_timestamp.classList.add('data_JS_timestamp');
    data_JS_timestamp.textContent = 'Timestamp: ';
    data_JS_timestamp.textContent += data[1];
    const data_JS_success = document.createElement('p');
    data_JS_success.classList.add('data_str_success');
    data_JS_success.textContent = 'Success: ';
    data_JS_success.textContent += data[2];
    const data_JS_error = document.createElement('p');
    data_JS_error.classList.add('data_JS_error');
    data_JS_error.textContent = 'Error: ';
    data_JS_error.textContent += data[3];
    // pink
    data_demo.append(show_title, data_JS_ticker_base, data_JS_change, data_JS_price, data_JS_target, data_JS_volume, data_JS_timestamp, data_JS_success, data_JS_error);

    //loop thru Array
    for(let each_market of data_JS[0].markets){
      console.log("LENGTH OF data_JS[0].markets.length IS", data_JS[0].markets.length);
      console.log('each_market : ', each_market);
      console.log('each_market.volume : ', each_market.volume);
      console.log('each_market.market : ', each_market.market);
      //Create a card for the whole page
      const card = document.createElement('div');
      card.classList.add('card');
      const show_title = document.createElement('h1');
      show_title.classList.add('show_title');
      show_title.textContent = 'Each Market';
      const each_market_name = document.createElement('p');
      each_market_name.classList.add('each_market_name');
      each_market_name.textContent = 'Name: ' ;
      each_market_name.textContent += each_market.market;
      const each_market_volume = document.createElement('p');
      each_market_volume.classList.add('each_market_volume');
      each_market_volume.textContent = 'Volume: ';
      each_market_volume.textContent += each_market.volume;
      const each_market_price = document.createElement('p');
      each_market_price.classList.add('each_market_price');
      each_market_price.textContent = 'Price: ';
      each_market_price.textContent += each_market.price;
      const each_market_data = document.createElement('div');
      each_market_data.classList.add('each_market_data');
      //Green
      each_market_data.append(show_title, each_market_name, each_market_volume, each_market_price) ;
      //Append to card
      card.appendChild(each_market_data);
      console.log('CARD IS :',card);
      card.style.backgroundColor = '#94d6a0';
      card.style.color = '#e91e63';
      card.style.width = '250px';
      // card.displayDirection = 'column';
      card.style.padding = '10px 10px';
      card.border = 'none';
      card.style.transition = 'all 2s';
      card.flexWrap = 'wrap';
      items.classList.remove('hidden');
      //enclose card inside show_items
      show_items.classList.remove('hidden');
      show_items.append(card,data_demo);
      container.appendChild(show_items);
    }// for loop ends
   } catch(e){
   console.log('An Error Occured!!',e);
  }
}
fetchBitCoinPrice()
