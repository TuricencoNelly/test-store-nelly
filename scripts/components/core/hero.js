import choozy from '../../lib/choozy';
import { getString } from '../../lib/string';

export default window.component(node => {
  const { button } = choozy(node, null);
  // const info = button.getAttribute('data-info');
  // const { info } = button.dataset;
  const addToCart = getString('product.add_to_cart');
  const quantity = getString('cart.quantity');
  let count = 0;

  button.addEventListener('click', () => {
    count++;
    button.innerHTML = `I'm tapped ${count} times`;
    console.log(addToCart, quantity);
  });
});
