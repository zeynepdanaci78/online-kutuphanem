📚 Online Kütüphane Projem
Bu proje benim 2026 yılı JavaScript final ödevim için hazırladığım bir kitap arama motoru uygulamasıdır. Temel amacı, bir API üzerinden canlı veri çekerek kullanıcıya düzenli bir şekilde sunmaktır.


Bu projede dünya çapında popüler olan Open Library API'sini kullandım.

Örnek Link: https://openlibrary.org/search.json?q=javascript&limit=12 (Bu link üzerinden kitap verilerini çekiyorum.)




Arama Yapmak İçin: Üstteki kutucuğa merak ettiğiniz bir kitabı veya yazarı yazıp butona basıyorsunuz.

 Ben o sırada arka planda kütüphaneye gidip verileri getiriyorum, o sırada ekranda "Yükleniyor..." yazısını görebilirsiniz.

Kitap Kartları: Gelen her kitap için başlık, yazar ve yıl bilgilerini içeren şık kartlar oluşturuyorum.

Detayları Gör: Eğer bir kitap ilginizi çekerse "Detay Göster" butonuna basarak aynı sayfa üzerinde daha fazla bilgiye ulaşabiliyorsunuz.


Ödevin gerektirdiği tüm JavaScript kurallarına uydum:

Fetch: Verileri canlı olarak çekmek için kullandım.

Hata Kontrolü: İnternet giderse veya bir sorun çıkarsa uygulama çökmesin diye hata yakalama sistemleri ekledim.

 API'den gelen kalabalık listeyi tek tek kartlara dönüştürmek için forEach kullandım.



✨ Bonus Olarak Ne Ekledim =
Ödevi biraz daha süslemek için şu özellikleri de ekledim:

Koyu/Açık Tema: Gözleriniz yorulmasın diye tek tıkla gece moduna geçebilirsiniz. Üstelik sayfayı yenileseniz bile tarayıcınız bu tercihinizi unutmaz.

İster telefonunuzdan ister bilgisayarınızdan bakın, tasarım bozulmadan kendini ayarlar.

Hazırlayan:
Zeynep Danacı

Karabük Üniversitesi - 2026 Final Ödevi
