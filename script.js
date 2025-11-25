document.addEventListener('DOMContentLoaded', () => {
    // Portfolio Filter Logic
    const filters = document.querySelectorAll('#portfolio-filters-final li');
    const portfolioItems = document.querySelectorAll('.portfolio-card');

    if (filters.length > 0 && portfolioItems.length > 0) {
        filters.forEach(filter => {
            filter.addEventListener('click', function() {
                filters.forEach(item => item.classList.remove('filter-active'));
                this.classList.add('filter-active');
                const filterValue = this.getAttribute('data-filter');

                portfolioItems.forEach(item => {
                    if (filterValue === '*' || item.classList.contains(filterValue.substring(1))) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }
});








// মোবাইল মেনু টগল করার কোড
const mobileBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('.navbar nav');

if(mobileBtn) {
    mobileBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // আইকন পরিবর্তন (অপশনাল)
        const icon = mobileBtn.querySelector('i');
        if(navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times'); // ক্রস আইকন
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars'); // বার আইকন
        }
    });
}

// মেনুর লিংকে ক্লিক করলে মেনু বন্ধ হবে
function closeMenu() {
    if(navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        const icon = mobileBtn.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
}










// সব পেজে অটোমেটিক হোয়াটসঅ্যাপ বাটন যোগ করার কোড
document.addEventListener("DOMContentLoaded", function() {
    
    // ১. লিংকের জন্য 'a' ট্যাগ তৈরি
    var waBtn = document.createElement("a");
    // তোমার নম্বর এখানে সেট করা হলো (কান্ট্রি কোড সহ)
    waBtn.href = "https://wa.me/8801609942974"; 
    waBtn.target = "_blank"; // নতুন ট্যাবে ওপেন হবে
    waBtn.className = "whatsapp-float"; // CSS ক্লাস যুক্ত করা হলো
    waBtn.title = "Chat on WhatsApp"; // মাউস নিলে লেখা দেখাবে

    // ২. আইকনের জন্য 'i' ট্যাগ তৈরি
    var waIcon = document.createElement("i");
    waIcon.className = "fab fa-whatsapp"; // FontAwesome আইকন

    // ৩. বাটনটি জোড়া লাগানো
    waBtn.appendChild(waIcon);
    document.body.appendChild(waBtn);
});
