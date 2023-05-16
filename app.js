

let filterItems = document.querySelector(".items");
let filterImg = document.querySelectorAll(".gallery .image");
let prevBox = document.querySelector(".preview-box");
let categoryName = prevBox.querySelector(".title p");
let closeIcon = prevBox.querySelector(".icon");
let prevImg = prevBox.querySelector("img");
let shadow = document.querySelector(".shadow");


window.onload = () => {
 
  filterItems.onclick = (selectedItem) => {
    
    if (selectedItem.target.classList.contains("item")) {
      
      filterItems.querySelector(".active").classList.remove("active");

      
      selectedItem.target.classList.add("active");

      
      let filterVal = selectedItem.target.getAttribute("data-name");

      filterImg.forEach((image) => {
        
        let imgFilter = image.getAttribute("data-name");

        
        if (imgFilter == filterVal || filterVal == "all") {
          
          image.classList.remove("hide");

          
          image.classList.add("show");
        } else {
          
          image.classList.add("hide");

          image.classList.remove("show");
        }
      });
    }
  };

  
  for (let i = 0; i < filterImg.length; i++) {
    filterImg[i].setAttribute("onclick", "preview(this)");
  }
};


function preview(element) {
  
  document.querySelector("body").style.overflow = "hidden";

  
  let selectedPrevImage = element.querySelector("img").src;

 
  let selectedPrevCat = element.getAttribute("data-name");

  
  prevBox.classList.add("show");

  
  shadow.classList.add("show");

 
  categoryName.textContent = selectedPrevCat;

  prevImg.src = selectedPrevImage;

 
  closeIcon.onclick = () => {
    
    prevBox.classList.remove("show");

   
    shadow.classList.remove("show");

    
    document.querySelector("body").style.overflow = "auto";
  };
}
