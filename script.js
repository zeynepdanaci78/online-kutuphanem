const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const bookContainer = document.getElementById('bookContainer');
const statusMsg = document.getElementById('statusMessage');
const detailPanel = document.getElementById('detailPanel');
const detailContent = document.getElementById('detail-content');


async function fetchBooks(query) {
    try {
        
        statusMsg.innerText = "Yükleniyor...";
        bookContainer.innerHTML = ""; 

        
        const response = await fetch(`https://openlibrary.org/search.json?q=${query}&limit=12`);
        
        if (!response.ok) {
            throw new Error("API hatası oluştu!"); 
        }

        const data = await response.json();

        
        if (data.docs.length === 0) {
            statusMsg.innerText = "Sonuç bulunamadı.";
            return;
        }

        statusMsg.innerText = ""; 
        renderBooks(data.docs); 

    } catch (error) {
        statusMsg.innerText = "Hata oluştu: " + error.message;
        console.error("Hata detayı:", error);
    }
}


function renderBooks(books) {
    books.forEach(book => { 
        const card = document.createElement('div');
        card.className = 'card'; 

        
        card.innerHTML = `
            <h3>${book.title}</h3>
            <p><strong>Yazar:</strong> ${book.author_name ? book.author_name[0] : "Bilinmiyor"}</p>
            <p><strong>Yıl:</strong> ${book.first_publish_year || "N/A"}</p>
            <button class="detay-btn">Detay Göster</button>
        `;

        
        card.querySelector('.detay-btn').addEventListener('click', () => {
            showDetails(book);
        });

        bookContainer.appendChild(card);
    });
}


function showDetails(book) {
    if (!book) return false; 

    
    detailContent.innerHTML = `
        <h2>${book.title}</h2>
        <p><strong>Yazarlar:</strong> ${book.author_name ? book.author_name.join(', ') : "Bilinmiyor"}</p>
        <p><strong>Yayıncı:</strong> ${book.publisher ? book.publisher[0] : "Bilgi Yok"}</p>
        <p><strong>Diller:</strong> ${book.language ? book.language.join(', ') : "N/A"}</p>
    `;

    detailPanel.classList.remove('hidden'); 
    return true;
}


searchBtn.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query !== "") {
        fetchBooks(query);
    }
});


document.getElementById('close-detail').addEventListener('click', () => {
    detailPanel.classList.add('hidden');
});

const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// 1. Sayfa yüklendiğinde eski tercihi kontrol et (LocalStorage)
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.innerText = "Açık Tema";
}

// 2. Butona tıklandığında temayı değiştir
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    let theme = 'light';
    if (body.classList.contains('dark-mode')) {
        theme = 'dark';
        themeToggle.innerText = "Açık Tema";
    } else {
        themeToggle.innerText = "Koyu Tema";
    }
    
    // Tercihi kaydet (Bonus Şartı)
    localStorage.setItem('theme', theme);
});