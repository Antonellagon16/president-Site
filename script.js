document.addEventListener("DOMContentLoaded", function () {
    console.log("Website Loaded!");

    // Interactive Timeline
    const timelineEvents = {
        event1: "📅 1843 - Born in Niles, Ohio.",
        event2: "⚔️ 1861 - Served in the Civil War and reached brevet major rank.",
        event3: "🏛️ 1876 - Elected to the U.S. Congress and served for 14 years.",
        event4: "🇺🇸 1897 - Became the 25th President of the United States.",
        event5: "🔫 1901 - Assassinated at the Pan-American Exposition."
    };

    function showEventDetails(eventKey) {
        document.getElementById("eventDetails").innerHTML = `<p>${timelineEvents[eventKey]}</p>`;
    }

    document.querySelectorAll(".event").forEach(event => {
        event.addEventListener("click", function () {
            showEventDetails(this.getAttribute("onclick").replace("showEventDetails('", "").replace("')", ""));
        });
    });

    // Quote Generator
    const quotes = [
        "🇺🇸 'The mission of the United States is one of benevolent assimilation.'",
        "🕊️ 'War should never be entered upon until every agency of peace has failed.'",
        "🤝 'Our differences are politics, our agreements principles.'",
        "📈 'The path of progress is never swift nor easy.'"
    ];

    document.getElementById("quoteBtn").addEventListener("click", function () {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        document.getElementById("quoteDisplay").textContent = randomQuote;
    });

    // Scroll Animation for Timeline
    const timelineItems = document.querySelectorAll(".timeline-item");

    function checkTimelineScroll() {
        const triggerBottom = window.innerHeight * 0.9;
        timelineItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            if (itemTop < triggerBottom) {
                item.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", checkTimelineScroll);
    checkTimelineScroll();
});
