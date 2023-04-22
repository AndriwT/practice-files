const a = [10, 12, 1, 0, 23, 5, 30, 8, 2];

function swap(i, j) {
  let oldJ = a[j];
  a[j] = a[i];
  a[i] = oldJ;
}

function partition(l, h) {
  const pivot = a[l];
  let i = l;
  let j = h;

  while (i < j) {
    do {
      i++;
    } while (a[i] < pivot);

    do {
      j--;
    } while (a[j] >= pivot);

    if (i < j) {
      swap(i, j);
    }
  }

  swap(l, j);
  return j;
}

function quicksort(l, h) {
  if (l < h) {
    let j = partition(l, h);
    quicksort(l, j);
    quicksort(j + 1, h);
  }
}

quicksort(0, a.length);

console.log('sorted: ', a);

