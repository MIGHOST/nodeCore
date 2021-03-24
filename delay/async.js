(async () => {
  console.log("Run 1");

await new Promise((res, rej) =>
setTimeout(() => res(console.log("Run 2")), 1000)
);   
  console.log("Run 3")
 
})();
