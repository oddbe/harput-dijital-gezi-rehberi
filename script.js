const mekanlar = {

    kale: {
        title: "Harput Kalesi (Süt Kalesi)",
        image: "images/harput-kalesi.jpg",
        icon: "fa-chess-rook",
        shortText: "3000 yıllık devasa surlar ve Harput'un simgesi Süt Kalesi efsanesi...",
        text: `Not: Bu metin taslak içeriktir — yayınlamadan önce doğrulanmış kaynaklarla değiştirin.
Yüksek bir kayalık üzerine kurulan kale, Harput'un tarih boyunca farklı
medeniyetlere ev sahipliği yapmasını sağlayan stratejik konumunu simgeler.
Kalenin adına dair en bilinen efsane, kalede mahsur kalanların dış dünyaya
gücünü göstermek için taşları süte batırıp surlardan aşağı akıttığı
anlatısına dayanır.`,
        photoSpot: "Kale surlarının güneybatı köşesi, gün batımında ovayı gösteren en geniş açı.",
        mapQuery: "Harput+Kalesi+Elazig"
    },

    kilise: {
        title: "Meryem Ana Kilisesi",
        image: "images/meryem-ana.jpg",
        icon: "fa-church",
        shortText: "Doğal kayaların içine oyulmuş, Anadolu'nun en eski ibadethanelerinden biri.",
        text: `Not: Bu metin taslak içeriktir — yayınlamadan önce doğrulanmış kaynaklarla değiştirin.
Süryani Kadim cemaatine ait olan yapı, kayaya oyularak inşa edilen
bölümleriyle bölgenin en eski ibadethanelerinden biri olarak kabul edilir.
Sade taş işçiliği ve alçak tavanlı iç mekânı, ziyaretçilere Harput'un
çok kültürlü geçmişinden bir kesit sunar.`,
        photoSpot: "Ana giriş kapısının hemen karşısı, taş cepheyi bütün olarak kadraja alan nokta.",
        mapQuery: "Suryani+Kadim+Meryem+Ana+Kilisesi+Harput"
    },

    ulucami: {
        title: "Harput Ulu Camii",
        image: "images/ulu-cami.jpg",
        icon: "fa-mosque",
        shortText: "Pisa Kulesi'nden bile daha eğik minaresiyle ünlü.",
        text: `Not: Bu metin taslak içeriktir — yayınlamadan önce doğrulanmış kaynaklarla değiştirin.
Artuklu dönemine tarihlenen cami, silindirik gövdeli minaresinin zamanla
kazandığı eğimle tanınır. Sade taş cephesi ve avlusuyla, Harput'un
Selçuklu-Artuklu mimari mirasının en görünür örneklerinden biridir.`,
        photoSpot: "Avlunun kuzey ucu, minarenin eğimini gövdesiyle birlikte gösteren açı.",
        mapQuery: "Harput+Ulu+Camii+Elazig"
    },

    sarahatun: {
        title: "Sarahatun Camii",
        image: "images/sarahatun.jpg",
        icon: "fa-kaaba",
        shortText: "Akkoyunlu mimarisinin önemli eserlerinden biri.",
        text: `Not: Bu metin taslak içeriktir — yayınlamadan önce doğrulanmış kaynaklarla değiştirin.
Akkoyunlu dönemi hayır eserlerinden olan cami, döneminin taş işçiliğini
yansıtan portali ve sade iç mekânıyla dikkat çeker. Harput'un eski
şehir dokusunun en iyi korunmuş yapılarından biridir.`,
        photoSpot: "Taç kapının önü, taş süslemeleri yakın plan gösteren açı.",
        mapQuery: "Sarahatun+Camii+Harput"
    },

    basin: {
        title: "Harput Basın Müzesi",
        image: "images/basin-muzesi.jpg",
        icon: "fa-newspaper",
        shortText: "Harput'un kültürel ve basın tarihine yolculuk.",
        text: `Not: Bu metin taslak içeriktir — yayınlamadan önce doğrulanmış kaynaklarla değiştirin.
Restore edilmiş tarihi bir Harput evinde hizmet veren müze, bölgenin
basın ve matbaacılık tarihine dair belge, fotoğraf ve nesneleri bir
araya getirir. Geleneksel ev mimarisini yakından görme fırsatı da sunar.`,
        photoSpot: "Müzenin taş avlusu, geleneksel cumbalı cepheyi gösteren açı.",
        mapQuery: "Harput+Basin+Muzesi+Elazig"
    },

    sefik: {
        title: "Şefik Gül Kültür Evi",
        image: "images/sefik-gul.jpg",
        icon: "fa-house-chimney-window",
        shortText: "Geleneksel Harput ev yaşamını keşfedin.",
        text: `Not: Bu metin taslak içeriktir — yayınlamadan önce doğrulanmış kaynaklarla değiştirin.
Geleneksel bir Harput konağının özenle restore edilmiş hali, dönemin
günlük yaşamını yansıtan odalar, eşyalar ve iç mimari detaylarla
ziyaretçilerini karşılar.`,
        photoSpot: "İç avludan cumbalı cepheye bakan köşe.",
        mapQuery: "Sefik+Gul+Kultur+Evi+Harput"
    },

    arapbaba: {
        title: "Arap Baba Türbesi",
        image: "images/arap-baba.jpg",
        icon: "fa-monument",
        shortText: "Harput'un en gizemli ziyaret noktalarından biri.",
        text: `Not: Bu metin taslak içeriktir — yayınlamadan önce doğrulanmış kaynaklarla değiştirin.
Halk arasında çeşitli efsanelerle anılan türbe, Harput'un manevi
duraklarından biri olarak yerel ziyaret geleneğinin önemli bir
parçasıdır. Sade taş yapısı çevresindeki tarihi dokuyla bütünleşir.`,
        photoSpot: "Türbe girişinin karşısındaki merdivenler, yapıyı bütün gösteren açı.",
        mapQuery: "Arap+Baba+Turbesi+Harput"
    }
};

// Duraklari Sirali Olarak Render Etme
function renderCards() {
    const container = document.getElementById("duraklar");
    const spine = container.querySelector(".route-spine");
    container.innerHTML = "";
    if (spine) container.appendChild(spine);

    Object.keys(mekanlar).forEach((key, index) => {
        const item = mekanlar[key];
        const number = String(index + 1).padStart(2, "0");

        const stopHtml = `
        <article class="stop">
            <div class="stop-node">${number}</div>

            <div class="stop-media" style="background-image:url('${item.image}')">
                <span class="stop-media-icon">
                    <i class="fa-solid ${item.icon}"></i>
                </span>
            </div>

            <div class="stop-content">
                <p class="stop-eyebrow">Durak ${number}</p>
                <h3>${item.title}</h3>
                <p>${item.shortText}</p>
                <div class="stop-actions">
                    <button
                        class="action-btn btn-details"
                        onclick="showInfo('${key}')">
                        Detaylar
                    </button>
                    <a
                        href="https://www.google.com/maps/search/?api=1&query=${item.mapQuery}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="action-btn btn-map-icon"
                        aria-label="Google Maps'te aç">

                        <i class="fa-solid fa-diamond-turn-right"></i>
                    </a>
                </div>
            </div>
        </article>`;
        container.insertAdjacentHTML("beforeend", stopHtml);
    });
}

// Popup Gösterme
function showInfo(key) {

    const item = mekanlar[key];
    const index = Object.keys(mekanlar).indexOf(key) + 1;
    const popup = document.getElementById("popup");

    document.getElementById("popupTitle").innerText = item.title;
    document.getElementById("popupText").innerText = item.text;
    document.getElementById("popupPhoto").innerText = item.photoSpot;
    document.getElementById("popupNumber").innerText = `Durak ${String(index).padStart(2, "0")}`;

    document.getElementById("popupImage").src = item.image;
    document.getElementById("popupImage").alt = item.title;

    document.getElementById("popupMapLink").href =
        `https://www.google.com/maps/search/?api=1&query=${item.mapQuery}`;

    popup.classList.add("active");
    popup.setAttribute("aria-hidden", "false");
}

// Popup Kapatma
function closePopup() {
    const popup = document.getElementById("popup");
    popup.classList.remove("active");
    popup.setAttribute("aria-hidden", "true");
}

// Disariya Tiklandiginda / ESC ile Popup Kapatma
window.addEventListener("click", (e) => {
    const popup = document.getElementById("popup");
    if (e.target === popup) {
        closePopup();
    }
});

window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closePopup();
});

// Dark Mode Toggle
const darkModeBtn = document.getElementById("darkModeBtn");
darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    darkModeBtn.innerHTML = isDark ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
});

// Sayfa Yuklendiginde Duraklari Bas
document.addEventListener("DOMContentLoaded", renderCards);