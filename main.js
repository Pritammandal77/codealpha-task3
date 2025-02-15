const HandleOpenHamburger = () => {
    let hamburgerDiv = document.querySelector(".HamburgerDiv")
    hamburgerDiv.style.display = "flex";
}

const HandleCloseHamburger = () => {
    let hamburgerDiv = document.querySelector(".HamburgerDiv")
    hamburgerDiv.style.display = "none";
}

const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "ACCESS KEY");  /*here you have to put your web3forms access key , you can get from there official website */

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: json
    }).then((res) => res.json());


};

document.addEventListener("DOMContentLoaded", function () {
    const text = "Frontend Developer";
    const speed = 200; // Typing speed
    const eraseSpeed = 200; // Erasing speed
    const delayBetween = 200; // Pause before erasing/typing again
    let index = 0;
    let isDeleting = false;
    const typewriterElement = document.getElementById("typewriter");

    function typeEffect() {
      typewriterElement.innerHTML = text.substring(0, index);

      if (!isDeleting) {
        if (index < text.length) {
          index++;
          setTimeout(typeEffect, speed);
        } else {
          isDeleting = true;
          setTimeout(typeEffect, delayBetween); // Pause before erasing
        }
      } else {
        if (index > 0) {
          index--;
          setTimeout(typeEffect, eraseSpeed);
        } else {
          isDeleting = false;
          setTimeout(typeEffect, speed); // Pause before retyping
        }
      }
    }

    typeEffect();
  });

  
gsap.from(".hello", {
    opacity: 0,
    duration: 0.6,
    y: -300,
})


gsap.from(".myName", {
    opacity: 0,
    duration: 0.6,
    x: -500,
})

gsap.from(".myRole", {
    opacity: 0,
    duration: 0.6,
    y: 300,
})


gsap.from(".social-buttons", {
    opacity: 0,
    duration: 0.6,
    y: 200,
})


gsap.from(".myImg", {
    opacity: 0,
    duration: 0.6,
    x: 200,
})











































// const onSubmit = async (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.target);
    
//     // Store access key in an environment variable if possible
//     formData.append("access_key", process.env.REACT_APP_WEB3FORMS_KEY || "YOUR_ACCESS_KEY");

//     try {
//         const response = await fetch("https://api.web3forms.com/submit", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 Accept: "application/json"
//             },
//             body: JSON.stringify(Object.fromEntries(formData))
//         });

//         const res = await response.json();

//         if (res.success) {
//             Swal.fire({
//                 title: "Message Sent Successfully",
//                 icon: "success",
//                 draggable: true,
//                 customClass: {
//                     popup: "my-custom-class",
//                     title: "my-custom-title-class",
//                     icon: "my-custom-icon-class",
//                     confirmButton: "my-custom-confirm-btn"
//                 }
//             });
//             event.target.reset(); // Reset form after submission
//         } else {
//             Swal.fire({
//                 title: "Failed to Send Message",
//                 text: res.message || "Something went wrong. Please try again.",
//                 icon: "error"
//             });
//         }
//     } catch (error) {
//         Swal.fire({
//             title: "Error",
//             text: "Network error or server issue. Please try again later.",
//             icon: "error"
//         });
//     }
// };
