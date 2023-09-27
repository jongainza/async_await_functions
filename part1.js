async function getFav(n) {
  let url = `http://numbersapi.com/${n}?json`;
  let res = await axios.get(url);
  console.log(res.data.text);
}

async function getNums() {
  let nums = [15, 20, 25];
  let url = `http://numbersapi.com/${nums}?json`;
  let res = await axios.get(url);
  console.log(res.data);
  for (re in res.data) {
    console.log(res.data[re]);
  }
}

async function getFacts(n) {
  let url = `http://numbersapi.com/${n}/trivia?json`;
  let facts = await Promise.all([
    axios.get(url),
    axios.get(url),
    axios.get(url),
    axios.get(url),
    axios.get(url),
    axios.get(url),
    axios.get(url),
  ]);

  for (i = 0; i < facts.length; i++) {
    console.log(facts[i].data.text);
  }
}
