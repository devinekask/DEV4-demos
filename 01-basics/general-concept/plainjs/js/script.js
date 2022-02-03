{
  const items = [];

  const addItem = (item) => {
    items.push({ id: Date.now(), amount: 1, ...item });
    renderList();
    renderTotal();
  }

  const changeItemAmount = (id, value) => {
    const item = items.find(item => item.id === id);
    if (item.amount + value > 1) {
      item.amount += value;
      renderList();
      renderTotal();
    }
  }

  const renderList = () => {
    const $list = document.querySelector('.list');
    $list.innerHTML = '';
    items.forEach(item => {
      const $li = document.createElement('li');
      $li.appendChild(document.createTextNode(`${item.name} - ${item.price} EUR (${item.amount}x) = ${item.amount * item.price} EUR`));

      const $incrementButton = document.createElement('button');
      $incrementButton.innerHTML = '+';
      $incrementButton.addEventListener('click', () => changeItemAmount(item.id, 1))

      const $decreaseButton = document.createElement('button');
      $decreaseButton.innerHTML = '-';
      $decreaseButton.addEventListener('click', () => changeItemAmount(item.id, -1))

      $li.appendChild($decreaseButton);
      $li.appendChild($incrementButton);
      $list.appendChild($li);
    })
  }

  const renderTotal = () => {
    const $total = document.querySelector('.total');
    const $nItems = document.querySelector('.nItems');
    $nItems.innerHTML = items.length;
    $total.innerHTML = items.reduce((acc, item) => acc + (item.price * item.amount), 0) + ' EUR';
  }

  const handleFormSubmit = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = parseInt(e.target.price.value, 10);
    addItem({ name, price })
    e.target.reset();
  }

  const init = () => {
    document.querySelector('form').addEventListener('submit', handleFormSubmit)
  }

  init();
}