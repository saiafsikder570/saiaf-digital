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










// হোয়াটসঅ্যাপ বাটন (আইকন + টেক্সট সহ)
document.addEventListener("DOMContentLoaded", function() {
    
    var waBtn = document.createElement("a");
    // তোমার নম্বর
    waBtn.href = "https://wa.me/8801609942974"; 
    waBtn.target = "_blank";
    waBtn.className = "whatsapp-float";
    
    // আইকন এবং টেক্সট একসাথে যোগ করা হলো
    waBtn.innerHTML = '<i class="fab fa-whatsapp"></i> WhatsApp Me';

    document.body.appendChild(waBtn);
});






document.addEventListener('DOMContentLoaded', () => {
    // Portfolio Filter Logic
    const filters = document.querySelectorAll('#portfolio-filters-final li');
    const portfolioItems = document.querySelectorAll('.glass-card'); // আগে portfolio-card ছিল, এখন glass-card

    if (filters.length > 0 && portfolioItems.length > 0) {
        filters.forEach(filter => {
            filter.addEventListener('click', function() {
                // Active Class Change
                filters.forEach(item => item.classList.remove('filter-active'));
                this.classList.add('filter-active');
                
                const filterValue = this.getAttribute('data-filter');

                portfolioItems.forEach(item => {
                    if (filterValue === '*' || item.classList.contains(filterValue.substring(1))) {
                        item.style.display = 'block';
                        // Animation Effect
                        item.style.opacity = '0';
                        setTimeout(() => item.style.opacity = '1', 50);
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }
    // ... বাকি কোড
});
