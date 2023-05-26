function updateVisitorCount() {
    const countVisitors = document.getElementById('cv');
    let count = 0;
    count = parseInt(counter.value);
    count = count+1;
    counter.innerHTML = parseInt(count);
}