const Home = document.querySelector('#Home')
const Products = document.querySelector('#Products')
const Service = document.querySelector('#Service')
const Pricing = document.querySelector('#Pricing')
const Contacts = document.querySelector('#Contacts')

Home.addEventListener("click", () => {
  Home.classList.add("selected");
});