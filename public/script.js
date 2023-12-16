const projects = [
    {
        name:"Breaking ChatGPT out of jail",
        des:"2 chatbots were given access to the internet and the ability to talk to each other. The results were slightly terrifying",
        link:"https://replit.com/@sojs/Getting-ChatGPT-out-of-jail?v=1",
        image:"/imgs/chatgpt-out.gif",
        time: "Apr 17, 2023"
    },
    {
        name:"AI Beats Blackjack",
        des:"An AI to play blackjack using a neural network. The results were pretty interesting",
        link:"https://replit.com/@sojs/AI-Beats-Blackjack?v=1",
        image:"/imgs/ai-blackjack.jpg",
        time:"Aug 24, 2023"
    },
    {
        name:"Terminal Canvas",
        des:"A terminal based drawing program using node.js",
        link:"https://replit.com/@sojs/Terminal-Canvas?v=1",
        image:"/imgs/terminal-canvas.png",
        time:"Mar 9, 2023"
    },
    {
        name:"Basic Snake",
        des:"A basic snake game",
        link:"https://replit.com/@sojs/Snake?v=1",
        image:"/imgs/basic_snake.png",
        time: "Feb 27, 2023"
    },
    {
        name: "Simon",
        des: "A Simon game",
        link: "https://replit.com/@sojs/Simon?v=1",
        image: "/imgs/simon.png",
        time: "Dec 3, 2022"
    },
    {
        name: "The So Fun Game Of Killing Things That Are Trying To Kill You",
        des:"Read the title.",
        link:"https://replit.com/@sojs/The-so-fun-game-of-killing-things-that-try-to-kill-you?v=1",
        image:"/imgs/so_fun_game.png",
        time: "Apr 2, 2022"
    },
    {
        name: "Space Wars",
        des:"Defend yourself from swarms of space invaders",
        link: "https://replit.com/@sojs/Space-Wars?v=1",
        image: "/imgs/space-wars.png",
        time:"Nov 18, 2022"
    },
    {
        name: "SoDB",
        des:"A filesystem based database with encryption and compression support",
        link: "https://www.npmjs.com/package/@sojs_coder/sodb",
        image: "/imgs/sodb.png",
        time: "Feb 7, 2023"
    },
    {
        name: "SoIdeas",
        des: "A bunch of ideas to get you inspired, sorted on diffuculty, and tracking how many people complete each project",
        link: "https://replit.com/@sojs/SoIdeas?v=1",
        image: "/imgs/soideas.png",
        time: "Feb 22, 2023"
    },
    {
        name: "SoAuth",
        des: "The world's simplest OAuth system... zero configuration required, works serverless (not in prod)",
        link: "https://replit.com/@sojs/SoAuth?v=1",
        image: "/imgs/soauth.png",
        time: "Dec 29, 2022"
    },
    {
        name: "Gems",
        des: 'A website to share other website "gems". Gems are voted on by the community, and if the gem recieves too much negative feedback, it is removed from the site',
        link: "https://replit.com/@sojs/gems?v=1",
        image: "/imgs/gems.png",
        time: "Dec 2, 2022"
    },
    {
        name: "Code Runner",
        des: "A website to annotate and run code in the browser. (What I believe was the inspiration for replit's comment system)",
        link: "https://replit.com/@sojs/Code-Runner?v=1",
        image: "/imgs/code-runner.png",
        time: "Aug 24, 2020"
    },
    {
        name: "Help!",
        des: "A website to where people help people with their proggaming problems, integrated with replit",
        link: "https://replit.com/@sojs/Help?v=1",
        image: "/imgs/help.png",
        time: "May 11, 2021"
    },
    {
        name: "Live MD Parser (LMDP)",
        des: "A markdown parser that updates in real time, so you can see what your markdown looks like as you type it",
        link: "https://replit.com/@sojs/MD-live-parser-and-editor?v=1",
        image: "/imgs/md-live-parser.png",
        time: "May 21, 2021"
    },
    {
        name: "Thread Mover Bot",
        des: "A discord bot that moves messages from one channel to a thread",
        link: "https://top.gg/bot/1110706043744432128",
        time: "May 12, 2023",
        image: "/imgs/tmb.png"
    },
    {
        name: "MultiSnake V2",
        des: "Multiplayer snake game, V2",
        link: "https://multisnake.xyz/",
        image: "/imgs/multisnake-v2.png",
        time: "Dec 15, 2023"
    },
    {
        name: "MultiSnake Tournaments",
        des: "MultiSnake Tournaments.... win money by playing multisnake",
        link: "https://tournament.multisnake.xyz/",
        image: "/imgs/multisnake-tournaments.png",
        time: "Dec 15, 2023"
    }

]


// sort the projects by data, newest first
function sortProjects() {
    // format the times into timestamps
    projects.forEach(project => {
        project.time = new Date(project.time).getTime()
    })
    projects.sort((a, b) => (a.time > b.time) ? -1 : 1)
}
// build the events on the timeline
function buildEvents() {
    projects.forEach((project,i) => {
        const event = document.createElement("a");
        event.href = project.link;
        event.classList.add("event")
        if (i !== 0) event.classList.add("hidden");
        if (i == 0) event.classList.add("visible")
        event.innerHTML = `
            <div class="event-image">
                <img src="${project.image}" alt="">
            </div>
            <div class="content">
                <h2>${project.name}</h2>
                <p>${project.des}</p>
            </div>
        `
        document.querySelector(".timeline").appendChild(event)
    })

}
sortProjects()
buildEvents()
// Function to check if an element is in the viewport
function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.left <= window.innerWidth/1.1 ||
        rect.right <= window.innerWidth 
    );
}

// Function to handle scroll event
function handleScroll() {
    var events = document.querySelectorAll('.event');
    events.forEach(function(event) {
        if (isElementInViewport(event)) {
            event.classList.remove('hidden')
            event.classList.add('visible');
        } else {
            event.classList.remove('visible'); // Remove the 'visible' class if the event is not in the viewport
            event.classList.add('hidden'); // Add the 'hidden' class if the event is not in the viewport
        }
    });
    var scrollPercentageX = getScrollPercentage();
    document.getElementById("prog").style.width = scrollPercentageX + "%";
}
function getScrollPercentage() {
    var scrollPositionX = window.pageXOffset || document.documentElement.scrollLeft;
    var totalWidth = document.documentElement.scrollWidth - document.documentElement.clientWidth;
    var scrollPercentageX = (scrollPositionX / totalWidth) * 100;
    return scrollPercentageX;
}

// Attach scroll event listener
window.addEventListener('scroll', handleScroll);
window.addEventListener('wheel', function(e) {
    window.scrollBy(e.deltaY, -e.deltaX, {behavior: 'smooth'});
}, {passive: false});