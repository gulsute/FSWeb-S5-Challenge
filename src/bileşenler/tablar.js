import axios from "axios";

const Tablar = (konu) => {
  const topics = document.createElement("div");
  topics.classList.add("topics");

  konu.map((item) => {
    const tab = document.createElement("div");
    tab.classList.add("tab");
    tab.textContent = item;
    topics.appendChild(tab);
  });
  return topics;
};

// GÖREV 3
// ---------------------
// Tek argümanı bir dizi ("konu") olan bu fonksiyonu uygulayın.
// Örnek olarak, konu dizisi şu şekilde deklare edilmişse ['javascript', 'bootstrap', 'teknoloji']
// fonksiyon aşağıdaki şekilde bir DOM öğesi döndürecek.
// Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle eşleşmelidir!
// Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
//
// <div class="topics">
//   <div class="tab">javascript</div>
//   <div class="tab">bootstrap</div>
//   <div class="tab">teknoloji</div>
// </div>
//

const tabEkleyici = (secici) => {
  const tabContainer = document.querySelector(secici);

  axios
    .get("http://localhost:5001/api/konular")
    .then(function (response) {
      const tabbox = Tablar(response.data.konular);
      tabContainer.appendChild(tabbox);
      console.log(response.data);
    })
    .catch(function (error) {
      tabContainer.textContent = "Bir bağlantı hatası oluştu";
      console.log(error);
    });
};

export { Tablar, tabEkleyici };

// GÖREV 4
// ---------------------
// Tek argümanı olarak bir css seçici alan bu işlevi uygulayın.
// Konuları bu uç noktadan almalıdır: `http://localhost:5001/api/konular` (console.log ile test edin!).
// Yanıtın içindeki konu dizisini bulun ve Tablar bileşenini kullanarak tabları oluşturun.
// Tabları, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
//
