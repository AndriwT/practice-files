//LRU
// Least Recently Used

interface LRUOptions {
  max: number;
  maxTime: number
}

class LRU {
  private data = {};
  private frequency = {};

  private options: LRUOptions = {
    max: 40,
    maxTime: 1000 * 60 * 5
  };

  size = () => {
    return Object.keys(this.data).length;
  }

  print = () => {
    console.log('data: ', this.data);
  };

  printFreq = () => {
    console.log('frequency: ', this.frequency);
  };

  clampData = () => {
    if (Object.keys(this.data).length >= this.options.max) {
      const keys = Object.keys(this.frequency);

      let leastUsed = '';
      let min = Number.MAX_SAFE_INTEGER;

      for (const key of keys) {
        const freq = this.frequency[key];
        if (freq <= min) {
          leastUsed = key;
          min = freq;
        }
      }

      console.log("REMOVING: ", leastUsed, min);
      delete this.frequency[leastUsed];
      delete this.data[leastUsed];
    }
  };

  add = (key: string, value: number) => {
    this.clampData();
    this.frequency[key] = 0;
    this.data[key] = value;
  };

  get = (key: string) => {
    this.frequency[key] += 1;
    return this.data[key];
  };
}

const lru = new LRU();

for (let i = 0; i < 60; i++) {
  console.log("ADDING: ", "element-" + i);
  lru.add('element-' + i, i);

  for (let j = 0; j < Math.random() * 10; j++) {
    lru.get('element-' + i);
  }
}



lru.printFreq();
console.log(lru.size());

