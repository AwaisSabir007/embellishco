const products = [
    {
        id: 1,
        name: "The Antelope Sculpture",
        category: "Brass",
        price: 850,
        image: "assets/imgi_17_618471253_17861740248571465_7393612158895155329_n.jpg",
        description: "Hand-cast brass antelope sculpture, a symbol of grace and heritage. Finished with a subtle patina to enhance its timeless details.",
        aspect: "aspect-[3/4]"
    },
    {
        id: 2,
        name: "Luxe Ash Tray Set",
        category: "Marble",
        price: 320,
        image: "assets/imgi_11_626299128_17865107670571465_5804733121499358811_n.jpg",
        description: "A pair of sculpted marble ash trays with golden geometric metal bases. Merging functionality with an ultra-modern aesthetic.",
        aspect: "aspect-[3/5]",
        margin: "md:mt-12"
    },
    {
        id: 3,
        name: "Atlas's Burden",
        category: "Art",
        price: 1200,
        image: "assets/imgi_15_618025231_17861740554571465_3115442924091278143_n.jpg",
        description: "A profound terracotta sculpture depicting Atlas carrying the world. A statement piece that commands attention in any study or lounge.",
        aspect: "aspect-[3/4]"
    },
    {
        id: 4,
        name: "Slender Candle Holder",
        category: "Brass",
        price: 450,
        image: "assets/imgi_12_622267621_17863143993571465_4816899438898139334_n.jpg",
        description: "Ebonized brass candle holder with multiple arms at varying heights. Creates a dramatic play of light and shadow.",
        aspect: "aspect-[1/1]",
        margin: "md:-mt-12"
    },
    {
        id: 5,
        name: "Peacock Artisan Sconce",
        category: "Brass",
        price: 540,
        image: "assets/imgi_6_638283483_17866493280571465_3271342736916397157_n.jpg",
        description: "Intricately detailed peacock sculpture in polished brass. A tribute to the majestic national bird, handcrafted with precision.",
        aspect: "aspect-[3/4]"
    },
    {
        id: 6,
        name: "The Markhor Bust",
        category: "Art",
        price: 980,
        image: "assets/imgi_11_582206049_17854244427571465_1127715316753710362_n.webp",
        description: "A striking tribute to the Markhor, Pakistan's national animal. Hand-carved with meticulous attention to the spiraling horns.",
        aspect: "aspect-[4/5]",
        margin: "md:mt-12"
    },
    {
        id: 7,
        name: "Thinkers Trinity",
        category: "Art",
        price: 1100,
        image: "assets/imgi_30_568496030_17850975717571465_1673490283456201681_n.webp",
        description: "A set of three golden figures in contemplative poses. Represents the philosophical depth of modern artisanal art.",
        aspect: "aspect-[3/4]"
    },
    {
        id: 8,
        name: "The Silent Man",
        category: "Art",
        price: 1350,
        image: "assets/imgi_36_562070731_17849320770571465_3495503588298618331_n.webp",
        description: "A modernist mosaic-style human sculpture. Reflects the fragmented yet resilient nature of the human spirit.",
        aspect: "aspect-[3/4]",
        margin: "md:mt-8"
    },
    {
        id: 9,
        name: "Dervish Set",
        category: "Art",
        price: 880,
        image: "assets/imgi_13_576102743_17853430635571465_6768183341635761252_n.webp",
        description: "Three spinning dervishes in a serene plaster finish. Captures the spiritual essence of the Sufi dance.",
        aspect: "aspect-[4/5]"
    },
    {
        id: 10,
        name: "Golden Fawn",
        category: "Brass",
        price: 380,
        image: "assets/imgi_6_586695908_17855047542571465_5951749695530241514_n.webp",
        description: "Delicate brass fawn sculpture, perfect for mantelpiece adornment. Hand-polished to a brilliant golden shine.",
        aspect: "aspect-[1/1]",
        margin: "md:-mt-12"
    },
    {
        id: 11,
        name: "Marble Petal Bowl",
        category: "Marble",
        price: 290,
        image: "assets/imgi_21_572583643_17851597185571465_7806878628721742051_n.webp",
        description: "A shallow marble bowl with petal-inspired edges. Carved from a single block of premium white Carrara-style marble.",
        aspect: "aspect-[3/4]"
    },
    {
        id: 12,
        name: "Abstract Serenity",
        category: "Art",
        price: 1500,
        image: "assets/imgi_45_560582241_17848748391571465_2437748730462740411_n.webp",
        description: "Large scale abstract sculpture with fluid lines. A centerpiece that bridges traditional craft and contemporary design.",
        aspect: "aspect-[3/5]",
        margin: "md:mt-12"
    },
    {
        id: 13,
        name: "Ancient Totem II",
        category: "Art",
        price: 1150,
        image: "assets/imgi_15_573958536_17852095233571465_5907085189010337875_n.webp",
        description: "A companion piece to our heritage totem, featuring deeper engravings and a darker mineral wash.",
        aspect: "aspect-[3/4]"
    },
    {
        id: 14,
        name: "Ornate Gilded Bowl",
        category: "Brass",
        price: 620,
        image: "assets/imgi_44_559451204_17848748577571465_5152645543746387867_n.webp",
        description: "Hand-beaten brass bowl with intricate rim details. A luxurious addition to any dining or console table.",
        aspect: "aspect-[4/5]",
        margin: "md:mt-10"
    },
    {
        id: 15,
        name: "The Guardian Mask",
        category: "Art",
        price: 740,
        image: "assets/imgi_23_571199843_17851597089571465_8449627187663452682_n.webp",
        description: "Stylized wall-hanging mask inspired by regional folk art. Crafted from composite materials and hand-painted.",
        aspect: "aspect-[3/4]"
    },
    {
        id: 16,
        name: "Geometric Balance",
        category: "Art",
        price: 550,
        image: "assets/imgi_24_568897322_17851468485571465_2003800352096531457_n.webp",
        description: "A study in form and shadow. This geometric sculpture plays with negative space and sharp angles.",
        aspect: "aspect-[1/1]",
        margin: "md:-mt-16"
    },
    {
        id: 17,
        name: "Sufi Whirling Vases",
        category: "Art",
        price: 480,
        image: "assets/imgi_8_587395019_17855047494571465_4483598357516427213_n.webp",
        description: "Ceramic vases with a spiraling motif, echoing the movement of a whirling dervish.",
        aspect: "aspect-[3/4]"
    },
    {
        id: 18,
        name: "Lapis Inlay Plate",
        category: "Marble",
        price: 670,
        image: "assets/imgi_38_561815988_17849320440571465_1974739110628439266_n.webp",
        description: "Polished marble plate featuring genuine lapis lazuli inlays in a geometric pattern.",
        aspect: "aspect-[4/5]",
        margin: "md:mt-12"
    },
    {
        id: 19,
        name: "Emerald Weaver's Kilim",
        category: "Textiles",
        price: 2400,
        image: "assets/imgi_35_566887929_17850740034571465_6172063731593522554_n.webp",
        description: "A masterwork of textile art. This hand-knotted rug features deep emerald tones and complex heritage patterns.",
        aspect: "aspect-[3/4]"
    },
    {
        id: 20,
        name: "Terracotta Soul",
        category: "Art",
        price: 1100,
        image: "assets/imgi_41_559151929_17848903494571465_5842289822599636573_n.webp",
        description: "Raw terracotta sculpture that celebrates the earthly connection of artisanal craftsmanship.",
        aspect: "aspect-[4/5]",
        margin: "md:mt-8"
    }
];

let cart = JSON.parse(localStorage.getItem('embellish-cart')) || [];

function initGallery() {
    renderGallery(products);
    updateCartUI();
}

function renderGallery(items) {
    const grid = document.getElementById('gallery-grid');
    if (!grid) return;
    grid.innerHTML = items.map(product => `
        <div class="masonry-item group relative flex flex-col gap-4 ${product.margin || ''}">
            <div class="relative overflow-hidden ${product.aspect} bg-slate-800">
                <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
                <div class="quick-view absolute inset-x-0 bottom-0 p-4 opacity-0 translate-y-4 transition-all duration-300">
                    <button onclick="openQuickView(${product.id})" class="w-full bg-white text-background-dark py-3 text-xs uppercase tracking-widest font-bold hover:bg-primary transition-all">Quick View</button>
                </div>
            </div>
            <div class="flex justify-between items-start">
                <div>
                    <h4 class="text-sm font-medium tracking-wide uppercase">${product.name}</h4>
                    <p class="text-xs text-slate-400 mt-1">${product.category} Collection</p>
                </div>
                <p class="text-sm text-primary">$${product.price.toLocaleString()}</p>
            </div>
        </div>
    `).join('');
}

function filterItems(category) {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('text-primary', 'border-b', 'border-primary', 'pb-1');
        btn.classList.add('hover:text-primary');
    });
    event.target.classList.add('text-primary', 'border-b', 'border-primary', 'pb-1');

    const filtered = category === 'all' ? products : products.filter(p => p.category === category);
    renderGallery(filtered);
}

function toggleCart() {
    document.getElementById('cart-drawer').classList.toggle('open');
    document.getElementById('cart-overlay').classList.toggle('open');
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existing = cart.find(item => item.id === productId);

    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('embellish-cart', JSON.stringify(cart));
    updateCartUI();
    closeQuickView();
    toggleCart();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('embellish-cart', JSON.stringify(cart));
    updateCartUI();
}

function updateCartUI() {
    const cartItemsBody = document.getElementById('cart-items');
    const emptyMsg = document.getElementById('empty-cart-msg');
    const count = document.getElementById('cart-count');
    const subtotal = document.getElementById('cart-subtotal');

    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    count.innerText = totalItems;
    subtotal.innerText = '$' + totalPrice.toLocaleString();

    if (cart.length === 0) {
        if (emptyMsg) emptyMsg.style.display = 'block';
        if (cartItemsBody) cartItemsBody.innerHTML = '';
    } else {
        if (emptyMsg) emptyMsg.style.display = 'none';
        if (cartItemsBody) cartItemsBody.innerHTML = cart.map(item => `
            <div class="flex gap-6 items-center group">
                <div class="w-16 h-20 bg-slate-800 overflow-hidden">
                    <img src="${item.image}" class="w-full h-full object-cover">
                </div>
                <div class="flex-1">
                    <h5 class="text-xs uppercase tracking-widest mb-1 text-slate-100">${item.name}</h5>
                    <p class="text-xs text-primary">$${item.price.toLocaleString()} x ${item.quantity}</p>
                </div>
                <button onclick="removeFromCart(${item.id})" class="text-slate-600 hover:text-white transition-colors">
                    <span class="material-symbols-outlined text-[18px]">close</span>
                </button>
            </div>
        `).join('');
    }
}

function openQuickView(productId) {
    const product = products.find(p => p.id === productId);
    document.getElementById('qv-image').src = product.image;
    document.getElementById('qv-name').innerText = product.name;
    document.getElementById('qv-category').innerText = product.category + " Collection";
    document.getElementById('qv-price').innerText = "$" + product.price.toLocaleString();
    document.getElementById('qv-description').innerText = product.description;
    document.getElementById('qv-add-btn').onclick = () => addToCart(productId);

    document.getElementById('quick-view-modal').classList.add('open');
}

function closeQuickView() {
    document.getElementById('quick-view-modal').classList.remove('open');
}

function scrollToMain() {
    const gallery = document.getElementById('gallery-root');
    if (gallery) gallery.scrollIntoView({ behavior: 'smooth' });
}

function handleNewsletter(e) {
    e.preventDefault();
    const input = e.target.querySelector('input');
    alert(`Welcome to the inner circle. Exclusive previews will be sent to ${input.value}`);
    input.value = '';
}

document.addEventListener('DOMContentLoaded', initGallery);
