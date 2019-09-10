function rle(value) {

    if (value.length === 0) return '';
    const arr = [];
    let line='';
    arr.push({ [value.split('')[0]]: 1 });
    value.split('').reduce((prevItem, item) => {
      if (prevItem === item) {
        arr[arr.length-1][prevItem]++;
      }
      else {
        arr.push({[item]:1});
      }
      return item;
    });
    arr.forEach((item)=>{
      for (let [key, value] of Object.entries(item)) {
        line+=(key+(value===1?'':value));
      }
    })
    return line;
  };
  
  console.log(rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDDABCCWJFFXI'));