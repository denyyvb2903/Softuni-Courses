function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   const input = document.querySelector("#inputs>textarea");
   const bestRestaurantResult = document.querySelector("#bestRestaurant>p");
   const workersResult = document.querySelector("#workers>p")

   function onClick () {
      const arr = JSON.parse(input.value);
      
      
   }
}