const Header = (baslik, tarih, yazi) => {
  const header = document.createElement("div");
  header.classList.add("header");

  const date = document.createElement("span");
  date.classList.add("date");
  date.textContent = tarih;

  const title = document.createElement("h1");
  title.textContent = baslik;

  const text = document.createElement("span");
  text.classList.add("temp");
  text.textContent = yazi;

  header.append(date, title, text);
  document.querySelector(".header-container").appendChild(header);
  return header;
};

// GÖREV 1
// ---------------------
// Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
// Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
// Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
//
//  <div class="header">
//    <span class="date">{ tarih }</span>
//    <h1>{ baslik }</h1>
//    <span class="temp">{ yazi }</span>
//  </div>
//

const headerEkleyici = (secici) => {
  const headerBox = Header(
    "Teknoloji Zamanı",
    "24 Haziran 2023",
    "sağdaki yazı"
  );
  const headerContainer = document.querySelector(secici);
  headerContainer.appendChild(headerBox);
};

export { Header, headerEkleyici };

// GÖREV 2
// ---------------------
// Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
// Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
// Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
//
// İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper"))
// fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))
