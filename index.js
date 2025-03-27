
const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "image/image.png", rating: 5, comment: "Yaiks!" },
    { id: 2, name: "Naruto Ramen", restaurant: "Mitsuyado Se", image: "image/naruto.jpg", rating: 4, comment: "AIH!" },
    { id: 3, name: "Nirvana Ramen", restaurant: "Ramen Nagi", image: "image/nirvana.jpg", rating: 5, comment: "Delisioso" },
    { id: 4, name: "Kojiro Ramen", restaurant: "Ramen Kojiro", image: "image/kojiro.jpg", rating: 3, comment: "Over Done." },
    { id: 5, name: "Gyukotsu Ramen", restaurant: "Ramen Nagi", image: "image/gyukotsu.jpg", rating: 2, comment: "Sio Mbaya" }
  ];
  
  document.addEventListener("DOMContentLoaded", () => {
    const ramenMenu = document.getElementById("ramen-menu");
    const ramenDetail = document.getElementById("ramen-detail");
    const detailImage = document.getElementById("ramen-img");
    const detailName = document.getElementById("ramen-name");
    const detailRestaurant = document.getElementById("ramen-restaurant");
    const detailRating = document.getElementById("ramen-rating");
    const detailComment = document.getElementById("ramen-comment");
    const newRamenForm = document.getElementById("new-ramen");
  
    function displayRamens() {
      ramens.forEach(ramen => {
        const img = document.createElement("img");
        img.src = ramen.image;
        img.alt = ramen.name;
        img.classList.add("ramen-thumbnail");
        img.addEventListener("click", () => handleClick(ramen));
        ramenMenu.appendChild(img);
      });
    }
  
    function handleClick(ramen) {
      detailImage.src = ramen.image;
      detailName.textContent = ramen.name;
      detailRestaurant.textContent = ramen.restaurant;
      detailRating.textContent = ramen.rating;
      detailComment.textContent = ramen.comment;
    }
  
    function addSubmitListener() {
      newRamenForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const newRamen = {
          id: ramens.length + 1,
          name: document.getElementById("name").value,
          restaurant: document.getElementById("restaurant").value,
          image: document.getElementById("image").value,
          rating: document.getElementById("rating").value,
          comment: document.getElementById("comment").value
        };
  
        ramens.push(newRamen);
  
        const img = document.createElement("img");
        img.src = newRamen.image;
        img.alt = newRamen.name;
        img.classList.add("ramen-thumbnail");
        img.addEventListener("click", () => handleClick(newRamen));
        ramenMenu.appendChild(img);
  
        newRamenForm.reset();
      });
    }
  
    function main() {
      displayRamens();
      addSubmitListener();
    }
  
    main();
  });

