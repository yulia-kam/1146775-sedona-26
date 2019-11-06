var link = document.querySelector(".hotel-search-button");
var popup = document.querySelector(".booking-form-form");
var dateArrival = popup.querySelector("[name=date-1]");
var dateDeparture = popup.querySelector("[name=date-2]");
var adults = popup.querySelector(".adults");
var kids = popup.querySelector(".kids");

// var isStorageSupport = true;
// var storage = "";

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("form-show");
    dateArrival.focus();
    popup.classList.toggle("form-show");
    popup.classList.toggle("form-hide");
  });

popup.classList.add("form-hide")

      // try {
      //    storage = localStorage.getItem("dateArrival");
      //    storage = localStorage.getItem("dateDeparture");
      //    storage = localStorage.getItem("adults");
      //    storage = localStorage.getItem("kids");
      //  } catch (err) {
      //    isStorageSupport = false;
      //  }

   //   if (storage) {
   //   dateArrival.value = storage;
   //   dateDeparture.value = storage;
   //   adults.value = storage;
   //   kids.value = storage;
   // }

//        popup.addEventListener("submit", function (evt) {
//        evt.preventDefault();
//        });
//
//       if (storage) {
//       dateArrival.value = storage;
//       dateDeparture.focus();
//       } else {
//         dateArrival.focus();
//       }
//       });
//
//       if (storage) {
//       dateDeparture.value = storage;
//       adults.focus();
//       } else {
//         dateDeparture.focus();
//       }
//       });
//
//       if (storage) {
//       adults.value = storage;
//       kids.focus();
//       } else {
//         adults.focus();
//       }
//       });
//
//   form.addEventListener("submit", function (evt) {
//   if (!dateArrival.value || !dateDeparture.value || !adults.value || !kids.value) {
//     evt.preventDefault();
//     popup.classList.remove("form-error");
//     popup.offsetWidth = popup.offsetWidth;
//     popup.classList.add("form-error");
//     console.log("Нужно указать все параметры");
//   } else { if (isStorageSupport) {
//     localStorage.setItem("arrival", dateArrival.value);
//     localStorage.setItem("departure", dateDeparture.value);
//     localStorage.setItem("adults", adults.value);
//     localStorage.setItem("kids", kids.value);
//   }
//   }
// });
