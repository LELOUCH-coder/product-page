
/*  for white-box*/
const menu=document.querySelector(".menu");
const cross=document.querySelector(".cross");
const white=document.querySelector(".white-space");


menu.addEventListener("click",function(){
	white.classList.add("show-white-space");
});


cross.addEventListener("click",function(){
	white.classList.remove("show-white-space");
});





/*  for cart*/
const carts = document.querySelectorAll(".cart");
const inbox = document.querySelectorAll(".cart-inbox");

carts.forEach(cart => {
    cart.addEventListener("click", function() {
        inbox.forEach(inboxItem => {
            inboxItem.classList.toggle("show-cart-inbox");
        });
    });
});



/* for box2 */
const box2 = document.querySelectorAll('.box2');
const colorNums = document.querySelectorAll('.color-num');
const numbers = document.querySelectorAll('.number');

box2.forEach((box, index) => {
    box.addEventListener('click', function() {
        const currentNumber = parseInt(numbers[index].textContent);

        if (currentNumber > 0) {
            colorNums[index].classList.add('show-color-num');
            colorNums[index].textContent = currentNumber;
        } else {
            colorNums[index].classList.remove('show-color-num');
        }
    });
});



/* Add to cart and delete function of checkout */
document.addEventListener('DOMContentLoaded', function() {
const addToCartBtns = document.querySelectorAll('.box2');
const deleteBtns = document.querySelectorAll('.delete');
const emptyCartMsg = document.querySelector('.empty');
const emptyCartMsg1 = document.querySelector('.empty1');
const checkoutSection = document.querySelector('.checkout');
const checkoutSection1 = document.querySelector('.checkout1');

const numberAmtDisplay = document.querySelector('.number-amt');
const numberAmtDisplay1 = document.querySelector('.number-amt1');

const totalAmountDisplay = document.querySelector('.total-amount');
const totalAmountDisplay1 = document.querySelector('.total-amount1');

const numberDisplays = document.querySelectorAll('.number');
const colorNumber = document.querySelectorAll('.color-num');

addToCartBtns.forEach((addToCartBtn, index) => {
    addToCartBtn.addEventListener('click', function() {
        let currentNumber = parseInt(numberDisplays[index].textContent);

        if (currentNumber > 0) {
            checkoutSection.style.display = 'flex';
            emptyCartMsg.style.display = 'none';
            numberAmtDisplay.textContent = currentNumber;
            let totalAmount = currentNumber * 125;
            totalAmountDisplay.textContent = '$' + totalAmount.toFixed(2);
            colorNumber[index].textContent = currentNumber;
            colorNumber[index].style.display = 'inline';
        }
    });
});


addToCartBtns.forEach((addToCartBtn, index) => {
    addToCartBtn.addEventListener('click', function() {
        let currentNumber = parseInt(numberDisplays[index].textContent);

        if (currentNumber > 0) {
            checkoutSection1.style.display = 'flex';
            emptyCartMsg1.style.display = 'none';
            numberAmtDisplay1.textContent = currentNumber;
            let totalAmount = currentNumber * 125;
            totalAmountDisplay1.textContent = '$' + totalAmount.toFixed(2);
            colorNumber[index].textContent = currentNumber;
            colorNumber[index].style.display = 'inline';
        }
    });
});



deleteBtns.forEach(deleteBtn => {
    deleteBtn.addEventListener('click', function() {
        checkoutSection.style.display = 'none';
        emptyCartMsg.style.display = 'block';
        numberAmtDisplay.textContent = '0';
        totalAmountDisplay.textContent = '$0';
        colorNumber.forEach(colorNum => {
            colorNum.textContent = '0';
            colorNum.style.display = 'none';
        });
    });
});



deleteBtns.forEach(deleteBtn => {
    deleteBtn.addEventListener('click', function() {
        checkoutSection1.style.display = 'none';
        emptyCartMsg1.style.display = 'block';
        numberAmtDisplay1.textContent = '0';
        totalAmountDisplay1.textContent = '$0';
        colorNumber.forEach(colorNum => {
            colorNum.textContent = '0';
            colorNum.style.display = 'none';
        });
    });
});


});










/* for changing images with buttons */

const productImage = document.getElementById('product-image');
const previousBtns = document.querySelectorAll('.previous');
const nextBtns = document.querySelectorAll('.next');

const images = ['image-product-1.jpg', 'image-product-2.jpg', 'image-product-3.jpg' , 'image-product-4.jpg'];
let currentIndex = 0;

function updateImage() {
    productImage.src = images[currentIndex];
}

nextBtns.forEach(nextBtn => {
    nextBtn.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage();
    });
});

previousBtns.forEach(previousBtn => {
    previousBtn.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateImage();
    });
});



/* for button to add to cart */

 const minusIcons = document.querySelectorAll('.minus-icon');
const plusIcons = document.querySelectorAll('.plus-icon');
const numberDis = document.querySelectorAll('.number');

minusIcons.forEach((minusIcon, index) => {
    minusIcon.addEventListener('click', function() {
        let currentNumber = parseInt(numberDis[index].textContent);

        if (currentNumber > 0) {
            currentNumber--;
            numberDis[index].textContent = currentNumber;
        }
    });
});

plusIcons.forEach((plusIcon, index) => {
    plusIcon.addEventListener('click', function() {
        let currentNumber = parseInt(numberDis[index].textContent);
        currentNumber++;
        numberDis[index].textContent = currentNumber;
    });
});




/*  to change pictures by clicking thumbnail*/
document.addEventListener('DOMContentLoaded', function() {

// Get reference to thumbnail images
const thumbnailImages = document.querySelectorAll('.thumbnail-product');
const mainProductImage = document.querySelector('.main-product1');

// Add event listeners to each thumbnail image
thumbnailImages.forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
        // Update the src attribute of the main product image with the clicked thumbnail's src
        mainProductImage.src = thumbnail.src;
    });
});




});

document.addEventListener('DOMContentLoaded', function() {
    // Get reference to thumbnail images
    const thumbnailImages = document.querySelectorAll('.thumbnail-product');
    
    // Add event listeners to each thumbnail image
    thumbnailImages.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            // Remove the border and opacity style from all thumbnail images
            thumbnailImages.forEach(img => {
                img.style.border = 'none';
                img.style.opacity = '1';
            });
            
            // Change the border and opacity of the clicked thumbnail image
            thumbnail.style.border = '2px solid #f58349'; // Change border color as needed
            thumbnail.style.opacity = '0.5'; // Adjust opacity as needed
        });
    });
});


/* for modapage image thumnail  */


document.addEventListener('DOMContentLoaded', function() {
    // Get reference to thumbnail images
    const modalThumbnailImages = document.querySelectorAll('.modal-thumbnail-product');
    
    // Add event listeners to each thumbnail image
    modalThumbnailImages.forEach(thumb => {
        thumb.addEventListener('click', function() {
            // Remove the border and opacity style from all thumbnail images
            modalThumbnailImages.forEach(img => {
                img.style.border = 'none';
                img.style.opacity = '1';
            });
            
            // Change the border and opacity of the clicked thumbnail image
            thumb.style.border = '2px solid #f58349'; // Change border color as needed
            thumb.style.opacity = '0.5'; // Adjust opacity as needed
        });
    });
});


/*  to change pictures by clicking thumbnail*/
document.addEventListener('DOMContentLoaded', function() {

// Get reference to thumbnail images
const modalthumbnailImages = document.querySelectorAll('.modal-thumbnail-product');
const modalmainProductImage = document.querySelector('.modal-main-product1');

// Add event listeners to each thumbnail image
modalthumbnailImages.forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
        // Update the src attribute of the main product image with the clicked thumbnail's src
        modalmainProductImage.src = thumbnail.src;
    });
});

});



/* for changhing images with button for desktop version */



const productImg = document.getElementById('modal-main');
const previousButt = document.querySelectorAll('.modal-previous');
const nextButt = document.querySelectorAll('.modal-next');

const image = ['image-product-1.jpg', 'image-product-2.jpg', 'image-product-3.jpg' , 'image-product-4.jpg'];
let currentIndexs = 0;

function updateImages() {
    productImg.src = image[currentIndexs];
}

nextButt.forEach(nextBtnss => {
    nextBtnss.addEventListener('click', function() {
        currentIndexs = (currentIndexs + 1) % image.length;
        updateImages();
    });
});

previousButt.forEach(previousBtnss => {
    previousBtnss.addEventListener('click', function() {
        currentIndexs = (currentIndexs - 1 + image.length) % image.length;
        updateImages();
    });
});




/*to change color while hovering modal section */
 document.addEventListener("DOMContentLoaded", function() {
        const modalPreviousButton = document.querySelector('.modal-previous');
        const modalNextButton = document.querySelector('.modal-next');
        const modalCrossButton = document.querySelector('.modal-cross');

        const originalPreviousContent = modalPreviousButton.innerHTML;
        const originalNextContent = modalNextButton.innerHTML;
        const originalCrossContent = modalCrossButton.innerHTML;

        modalPreviousButton.addEventListener('mouseover', function() {
            modalPreviousButton.innerHTML = '<i class="fa-solid fa-chevron-right fa-flip-horizontal fa-2xl" style="color: #eb932d;"></i>';
        });

        modalPreviousButton.addEventListener('mouseout', function() {
            modalPreviousButton.innerHTML = originalPreviousContent;
        });

        modalNextButton.addEventListener('mouseover', function() {
            modalNextButton.innerHTML = '<i class="fa-solid fa-chevron-right fa-2xl" style="color: #eb932d;"></i>';
        });

        modalNextButton.addEventListener('mouseout', function() {
            modalNextButton.innerHTML = originalNextContent;
        });

        modalCrossButton.addEventListener('mouseover', function() {
            modalCrossButton.innerHTML = '<i class="fa-solid fa-x fa-2xl" style="color: #ed9c2c;"></i>';
        });

        modalCrossButton.addEventListener('mouseout', function() {
            modalCrossButton.innerHTML = originalCrossContent;
        });
    });
	
	
	
	
	
	
	/*to change color while hovering main section */
document.addEventListener("DOMContentLoaded", function() {
    const mainPlusButton = document.querySelector('.plus-icon');
    const mainMinusButton = document.querySelector('.minus-icon');

    const originalMinusButton = mainMinusButton.innerHTML;
    const originalPlusButton = mainPlusButton.innerHTML;

    mainMinusButton.addEventListener('mouseover', function() {
        mainMinusButton.innerHTML = '<i class="fa-solid fa-minus fa-2xl" style="color: #ee9e53;"></i>';
    });

    mainMinusButton.addEventListener('mouseout', function() {
        mainMinusButton.innerHTML = originalMinusButton;
    });

    mainPlusButton.addEventListener('mouseover', function() {
        mainPlusButton.innerHTML = '<i class="fa-solid fa-plus fa-2xl" style="color: #ee9353;"></i>';
    });

    mainPlusButton.addEventListener('mouseout', function() {
        mainPlusButton.innerHTML = originalPlusButton;
    });
});

	
	
	
	
	//for thumnail image changing in accordanc e to main image
document.addEventListener("DOMContentLoaded", function() {
    const modalPreviousButton = document.querySelector('.modal-previous');
    const modalNextButton = document.querySelector('.modal-next');
    const modalCrossButton = document.querySelector('.modal-cross');
    const modalThumbnailButtons = document.querySelectorAll('.modal-thumbnail-product');
    const modalMainImage = document.querySelector('.modal-main-product1');

    const originalPreviousContent = modalPreviousButton.innerHTML;
    const originalNextContent = modalNextButton.innerHTML;
    const originalCrossContent = modalCrossButton.innerHTML;

    modalPreviousButton.addEventListener('click', function() {
        modalPreviousButton.innerHTML = '<i class="fa-solid fa-chevron-right fa-flip-horizontal fa-2xl" style="color: #eb932d;"></i>';
        modalThumbnailButtons.forEach(thumb => {
            if (thumb.src === modalMainImage.src) {
                thumb.style.border = '2px solid #f58349';
                thumb.style.borderRadius = '10px';
                thumb.style.opacity = '0.5';
            } else {
                thumb.style.border = 'none';
                thumb.style.borderRadius = '10px';
                thumb.style.opacity = '1';
            }
        });
    });

    modalNextButton.addEventListener('click', function() {
        modalNextButton.innerHTML = '<i class="fa-solid fa-chevron-right fa-2xl" style="color: #eb932d;"></i>';
        modalThumbnailButtons.forEach(thumb => {
            if (thumb.src === modalMainImage.src) {
                thumb.style.border = '2px solid #f58349';
                thumb.style.borderRadius = '10px';
                thumb.style.opacity = '0.5';
            } else {
                thumb.style.border = 'none';
                thumb.style.borderRadius = '10px';
                thumb.style.opacity = '1';
            }
        });
    });

    modalCrossButton.addEventListener('click', function() {
        modalCrossButton.innerHTML = '<i class="fa-solid fa-x fa-2xl" style="color: #ed9c2c;"></i>';
    });


});



	
	
	
	
	
	/* close btn and opening modal page */
	
	const openModalPage=document.querySelector(".main-product1");
		const ModalPage=document.querySelector(".modal-container");
		const closeModalPage=document.querySelector(".modal-cross");
		
		
		openModalPage.addEventListener("click",function(){
			ModalPage.classList.add("show-modal-container");
		
			
			
		});
		
		closeModalPage.addEventListener("click",function(){
			
			ModalPage.classList.remove("show-modal-container");
			
		});
		
		