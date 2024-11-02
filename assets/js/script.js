
function toggleMenu() {
    const navLinks = document.getElementById("nav-links");
    const heroSection = document.getElementById("hero");

    navLinks.classList.toggle("show");

    // Shift hero section down if menu is visible, otherwise reset margin
    if (navLinks.classList.contains("show")) {
        heroSection.classList.add("shift-down");
    } else {
        heroSection.classList.remove("shift-down");
    }
}

// Automatically hide the menu and reset hero section on window resize
window.addEventListener("resize", () => {
    const navLinks = document.getElementById("nav-links");
    const heroSection = document.getElementById("hero");

    if (window.innerWidth > 768) { 
        navLinks.classList.remove("show");
        heroSection.classList.remove("shift-down");
    }
});


function animateCountUp(element, target, duration) {
    let start = 0;
    const increment = target / (duration / 50);
    const counter = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.innerText = target + "+";
            clearInterval(counter);
        } else {
            element.innerText = Math.floor(start) + "+";
        }
    }, 50);
}



document.addEventListener("DOMContentLoaded", function() {
    const dropdownToggle = document.querySelector(".dropdown-toggle");
    const dropdownContent = document.querySelector(".dropdown-content");

    dropdownToggle.addEventListener("click", function(event) {
        event.preventDefault();
        dropdownContent.classList.toggle("show"); 
    });

    // Close dropdown if clicked outside
    document.addEventListener("click", function(event) {
        if (!dropdownToggle.contains(event.target) && !dropdownContent.contains(event.target)) {
            dropdownContent.classList.remove("show");
        }
    });
});




  // Function to count up the stats numbers
  function animateCountUp(element, target, duration) {
    let start = 0;
    const increment = target / (duration / 50);
 
    const counter = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.innerText = target + "+"; 
            clearInterval(counter);
        } else {
            element.innerText = Math.floor(start) + "+";
        }
    }, 50);
 }
 // Function to start counting when the stats section is in view
 function startCountingStats() {
    const statNumbers = document.querySelectorAll(".stat-number");
 
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute("data-target"));
        animateCountUp(stat, target, 2000);
    });
 }
 
 // Optional: Trigger counting only when stats section is in view
 function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
 }
 
 // Trigger counting when scrolling to the stats section
 window.addEventListener("scroll", () => {
    const statsSection = document.querySelector(".service-stats");
    if (isElementInViewport(statsSection)) {
        startCountingStats();
    }
 });

 // JavaScript to handle portfolio filtering
function filterPortfolio(category) {

    const items = document.querySelectorAll('.portfolio-item');
    const filters = document.querySelectorAll('.filter');

    
    filters.forEach(filter => {
        filter.classList.remove('active');
        if (filter.textContent.trim().toLowerCase() === category) {
            filter.classList.add('active');
        }
    });

    // Show/hide items based on selected category
    items.forEach(item => {
        const itemCategory = item.getAttribute('data-category');

        if (category === 'all' || itemCategory === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Set default filter on page load
filterPortfolio('all');



// Function to scroll to the top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Intersection Observer to show button when contact section is in view
document.addEventListener("DOMContentLoaded", () => {
    const backToTopButton = document.getElementById("backToTop");
    const contactSection = document.getElementById("contact");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                
                backToTopButton.style.display = "block";
            } else {
        
                backToTopButton.style.display = "none";
            }
        });
    }, { threshold: 0.1 });

    observer.observe(contactSection);
});


document.getElementById('learn-more').addEventListener('click', function(event) {
    event.preventDefault();
    const moreContent = document.getElementById('more-content');
    if (moreContent.style.display === 'none') {
        moreContent.style.display = 'inline';
        this.textContent = 'Show Less';
    } else {
        moreContent.style.display = 'none';
        this.textContent = 'Read More >';
    }
});



// Select the containers
const experienceCarousel = document.querySelector('.experience-cards');
const feedbackCarousel = document.querySelector('.feedback-carousel');

// Function to auto-scroll to the next card
function autoScroll(container) {
    const scrollAmount = container.offsetWidth * 0.8;
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });

    // Reset the scroll position if at the end
    if (container.scrollLeft + container.offsetWidth >= container.scrollWidth) {
        setTimeout(() => {
            container.scrollTo({ left: 0, behavior: 'smooth' });
        }, 2000);
    }
}

// Start the auto-scrolling
function startAutoScroll() {
    setInterval(() => {
        autoScroll(experienceCarousel);
        autoScroll(feedbackCarousel);
    }, 2000);
}

// Start auto-scrolling when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', startAutoScroll);





function rateStar(rating) {
    const stars = document.querySelectorAll('.star-rating .fa-star');
    stars.forEach((star, index) => {
        star.classList.toggle('active', index < rating);
    });
    document.getElementById('rating-feedback').innerText = `You rated this ${rating} star(s). Thank you!`;
}


document.addEventListener('DOMContentLoaded', () => {
    const reactionButtons = document.querySelectorAll('.reaction-button');
    const commentForm = document.querySelector('.comment-form');
    const commentList = document.querySelector('.comment-list');

    
    loadComments();

    // Reaction handling
    reactionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const reactionType = button.getAttribute('data-reaction');
            storeReaction(reactionType);
        });
    });

    // Comment handling
    commentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const commentText = commentForm.querySelector('textarea').value;

        if (commentText.trim() !== '') {
            addComment(commentText);
            commentForm.reset();
        }
    });

    // Function to store reaction in local storage
    function storeReaction(reaction) {
        const reactions = JSON.parse(localStorage.getItem('reactions')) || {};
        reactions[reaction] = (reactions[reaction] || 0) + 1; // Increment reaction count
        localStorage.setItem('reactions', JSON.stringify(reactions));
        alert(`You reacted with: ${reaction}`);
    }


    function addComment(commentText) {
        const comments = JSON.parse(localStorage.getItem('comments')) || [];
        comments.push(commentText);
        localStorage.setItem('comments', JSON.stringify(comments));
        renderComments();
    }

    
    function loadComments() {
        const comments = JSON.parse(localStorage.getItem('comments')) || [];
        comments.forEach(comment => {
            const commentDiv = document.createElement('div');
            commentDiv.classList.add('comment');
            commentDiv.innerHTML = `<span class="comment-author">Anonymous:</span><p>${comment}</p>`;
            commentList.appendChild(commentDiv);
        });
    }

    
    function renderComments() {
        commentList.innerHTML = '';
        loadComments();
    }
});

