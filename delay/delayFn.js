async function delay(time) {
  return new Promise((resolve, reject) =>
    setTimeout(resolve(console.log(`Your function delayed on ${time} ms`)), time)
  );
}

const test = async () => {
    console.log("Run script #1");
    console.time("Run time delay");
    await delay(1000);
    console.timeEnd("Run time delay");
    console.time("Run time for script 3");
    console.log("Run script #3");
    console.timeEnd("Run time for script 3");
};
test();
