import axios from "axios";

const Card = (makale) => {
  const cardBox = document.createElement("div");
  cardBox.classList.add("card");

  const headline = document.createElement("div");
  headline.classList.add("headline");
  headline.textContent = makale.anabaslik;

  const author = document.createElement("div");
  author.classList.add("author");

  const imgCont = document.createElement("div");
  imgCont.classList.add("img-container");

  const yazarFoto = document.createElement("img");
  yazarFoto.classList.add("yazarFoto");
  yazarFoto.src = makale.yazarFoto;

  const yazarAdi = document.createElement("span");
  yazarAdi.textContent = makale.yazarAdi + " tarafından";

  imgCont.appendChild(yazarFoto);
  author.append(imgCont, yazarAdi);
  cardBox.append(headline, author);

  document.querySelector(".cards-container").appendChild(cardBox);
  return cardBox;
};

// GÖREV 5
// ---------------------
// Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
// Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
// Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
// Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
// Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
//
// <div class="card">
//   <div class="headline">{ anabaslik }</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={ yazarFoto }>
//     </div>
//     <span>{ yazarAdi } tarafından</span>
//   </div>
// </div>
//

const cardEkleyici = (secici) => {
  const cardCont = document.createElement("div");

  axios
    .get("http://localhost:5001/api/makaleler")
    .then(function (response) {
      const keysArray = Object.keys(response.data.makaleler);
      for (let i = 0; i < keysArray.length; i++) {
        const konuArray = response.data.makaleler[keysArray[i]];
        for (let j = 0; j < konuArray.length; j++) {
          const makaleObj = konuArray[j];
          Card(makaleObj);
          document.querySelector(secici).appendChild(cardCont);
        }
      }
    })
    .catch(function (error) {
      tabContainer.textContent = "Bir bağlantı hatası oluştu";
      console.log(error);
    });
};

// GÖREV 6
// ---------------------
// Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
// Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
// Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
// Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
// Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
//

export { Card, cardEkleyici };
