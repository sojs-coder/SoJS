const projects = [
    {
        name:"Breaking ChatGPT out of jail",
        des:"2 chatbots were given access to the internet and the ability to talk to each other. The results were slightly terrifying",
        link:"https://replit.com/@sojs/Getting-ChatGPT-out-of-jail?v=1",
        image:"public/imgs/chatgpt-out.gif",
        time: "Apr 17, 2023",
        tools: ['<i class="fa-brands fa-node-js"></i>', "ChatGPT"]
    },
    {
        name:"AI Beats Blackjack",
        des:"An AI to play blackjack using a neural network. The results were pretty interesting",
        link:"https://replit.com/@sojs/AI-Beats-Blackjack?v=1",
        image:"public/imgs/ai-blackjack.jpg",
        time:"Aug 24, 2023",
        tools: ['<i class="fa-brands fa-node-js"></i>', "Tensorflow"]
    },
    {
        name:"Terminal Canvas",
        des:"A terminal based drawing program using node.js",
        link:"https://replit.com/@sojs/Terminal-Canvas?v=1",
        image:"public/imgs/terminal-canvas.png",
        time:"Mar 9, 2023",
        tools: ['<i class="fa-brands fa-node-js"></i>']
    },
    {
        name:"Basic Snake",
        des:"A basic snake game",
        link:"https://replit.com/@sojs/Snake?v=1",
        image:"public/imgs/basic_snake.png",
        time: "Feb 27, 2023",
        tools: ['<i class="fa-brands fa-html5"></i>', '<i class="fa-brands fa-css3"></i>', '<i class="fa-brands fa-square-js"></i>']
    },
    {
        name: "Simon",
        des: "A Simon game",
        link: "https://replit.com/@sojs/Simon?v=1",
        image: "public/imgs/simon.png",
        time: "Dec 3, 2022",
        tools: ['<i class="fa-brands fa-html5"></i>', '<i class="fa-brands fa-css3"></i>', '<i class="fa-brands fa-square-js"></i>']
    },
    {
        name: "The So Fun Game Of Killing Things That Are Trying To Kill You",
        des:"Read the title.",
        link:"https://replit.com/@sojs/The-so-fun-game-of-killing-things-that-try-to-kill-you?v=1",
        image:"public/imgs/so_fun_game.png",
        time: "Apr 2, 2022",
        tools: ['<i class="fa-brands fa-html5"></i>','<i class="fa-brands fa-css3"></i>','<i class="fa-brands fa-square-js"></i>',"Construct3"]
    },
    {
        name: "Space Wars",
        des:"Defend yourself from swarms of space invaders",
        link: "https://replit.com/@sojs/Space-Wars?v=1",
        image: "public/imgs/space-wars.png",
        time:"Nov 18, 2022",
        tools: ['<i class="fa-brands fa-html5"></i>','<i class="fa-brands fa-css3"></i>','<i class="fa-brands fa-square-js"></i>',"Construct3"]
    },
    {
        name: "SoDB",
        des:"A filesystem based database with encryption and compression support",
        link: "https://www.npmjs.com/package/@sojs_coder/sodb",
        image: "public/imgs/sodb.png",
        time: "Feb 7, 2023",
        tools: ['<i class="fa-brands fa-node-js"></i>']
    },
    {
        name: "SoIdeas",
        des: "A bunch of ideas to get you inspired, sorted on diffuculty, and tracking how many people complete each project",
        link: "https://replit.com/@sojs/SoIdeas?v=1",
        image: "public/imgs/soideas.png",
        time: "Feb 22, 2023",
        tools: ['<i class="fa-brands fa-node-js"></i>',"replit.css",'<i class="fa-brands fa-html5"></i>','<i class="fa-brands fa-css3"></i>','<i class="fa-brands fa-square-js"></i>',"Express","SoDB"]
    },
    {
        name: "SoAuth",
        des: "The world's simplest OAuth system... zero configuration required, works serverless (not in prod)",
        link: "https://replit.com/@sojs/SoAuth?v=1",
        image: "public/imgs/soauth.png",
        time: "Dec 29, 2022",
        tools: ['<i class="fa-brands fa-node-js"></i>','<i class="fa-brands fa-html5"></i>','<i class="fa-brands fa-css3"></i>','<i class="fa-brands fa-square-js"></i>',"Express","<i class='fa-brands fa-aws'></i>"]
    },
    {
        name: "Gems",
        des: 'A website to share other website "gems". Gems are voted on by the community, and if the gem recieves too much negative feedback, it is removed from the site',
        link: "https://replit.com/@sojs/gems?v=1",
        image: "public/imgs/gems.png",
        time: "Dec 2, 2022",
        tools: ['<i class="fa-brands fa-node-js"></i>','<i class="fa-brands fa-html5"></i>','<i class="fa-brands fa-css3"></i>','<i class="fa-brands fa-square-js"></i>',"Express","SoDB"]
    },
    {
        name: "Code Runner",
        des: "A website to annotate and run code in the browser. (What I believe was the inspiration for replit's comment system)",
        link: "https://replit.com/@sojs/Code-Runner?v=1",
        image: "public/imgs/code-runner.png",
        time: "Aug 24, 2020",
        tools: ['<i class="fa-brands fa-html5"></i>','<i class="fa-brands fa-css3"></i>','<i class="fa-brands fa-square-js"></i>']
    },
    {
        name: "Help!",
        des: "A website to where people help people with their proggaming problems, integrated with replit",
        link: "https://replit.com/@sojs/Help?v=1",
        image: "public/imgs/help.png",
        time: "May 11, 2021",
        tools: ['<i class="fa-brands fa-node-js"></i>','<i class="fa-brands fa-html5"></i>','<i class="fa-brands fa-css3"></i>','<i class="fa-brands fa-square-js"></i>',"Express","Firebase"]
    },
    {
        name: "Live MD Parser (LMDP)",
        des: "A markdown parser that updates in real time, so you can see what your markdown looks like as you type it",
        link: "https://replit.com/@sojs/MD-live-parser-and-editor?v=1",
        image: "public/imgs/md-live-parser.png",
        time: "May 21, 2021",
        tools: ['<i class="fa-brands fa-html5"></i>','<i class="fa-brands fa-css3"></i>','<i class="fa-brands fa-square-js"></i>']
    },
    {
        name: "Thread Mover Bot",
        des: "A discord bot that moves messages from one channel to a thread",
        link: "https://top.gg/bot/1110706043744432128",
        time: "May 12, 2023",
        image: "public/imgs/tmb.png",
        tools: ['<i class="fa-brands fa-python"></i>',"Discord.py"]
    },
    {
        name: "MultiSnake V2",
        des: "Multiplayer snake game, V2",
        link: "https://multisnake.xyz/",
        image: "public/imgs/multisnake-v2.png",
        time: "Dec 15, 2023",
        tools: ['<i class="fa-brands fa-node-js"></i>','<i class="fa-brands fa-html5"></i>','<i class="fa-brands fa-css3"></i>','<i class="fa-brands fa-square-js"></i>',"Express","Socket.io",'<i class="fa-brands fa-aws"></i>',"Sqlite"]
    }//,
    // {
    //     name: "MultiSnake Tournaments",
    //     des: "MultiSnake Tournaments.... win money by playing multisnake",
    //     link: "https://tournament.multisnake.xyz/",
    //     image: "public/imgs/multisnake-tournaments.png",
    //     time: "Dec 15, 2023",
    //     tools: ['<i class="fa-brands fa-node-js"></i>','<i class="fa-brands fa-html5"></i>','<i class="fa-brands fa-css3"></i>','<i class="fa-brands fa-square-js"></i>',"Express","Socket.io","<i class='fa-brands fa-aws'></i>","Sqlite", "Supabase", '<i class="fa-brands fa-stripe"></i>']
    // }

]

window.scrollTo(0,0)
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
        const event = document.createElement("div");
        event.setAttribute("data-link",project.link) ==
        event.classList.add("event");
        event.id = i;
        event.classList.add("hidden");
        event.innerHTML = `
            <div class="event-image">
                <img src="${project.image}" alt="">
            </div>
            <div class="content">
                <h2>${project.name}</h2>
                <p><i>${new Date(project.time).toDateString()}</i></p>
                <p>${project.des}</p>
            </div>
        `
        // add list of tools
        const tools = document.createElement("div")
        tools.classList.add("tools")
        project.tools.forEach(tool => {
            const toolElement = document.createElement("span")
            toolElement.innerHTML = tool
            tools.appendChild(toolElement)
        })
        event.querySelector(".content").appendChild(tools)
        document.querySelector(".timeline").appendChild(event)
    })

}
sortProjects()
buildEvents();
var currentEvent = 0;

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
document.querySelector(".prog-parent").addEventListener("click", function(e) {
    var scrollPercentageX = getScrollPercentage();
    var scrollPositionX = window.pageXOffset || document.documentElement.scrollLeft;
    var totalWidth = document.documentElement.scrollWidth - document.documentElement.clientWidth;
    var scrollX = (e.clientX / window.innerWidth) * totalWidth;
    window.scrollTo(scrollX, window.pageYOffset);
    updateClosestEvent();
    scrollToEvent()
    
});
// add dragging to the progress bar
var mouseDown = false;
var progDown = false;
var progScrollX = 0;
var progStartX = 0;
var startX = 0;
var scrollX = 0;
document.querySelector(".timeline").addEventListener("mousedown", function(e) {
    mouseDown = true;
    startX = e.clientX;
    scrollX = window.pageXOffset || document.documentElement.scrollLeft;
    // change to drag cursor
    document.querySelector(".timeline").style.cursor = "move";
});
document.querySelector(".timeline").addEventListener("mouseup", function(e) {
    mouseDown = false;
    document.querySelector(".timeline").style.cursor = "pointer";
});
document.querySelector(".prog-parent").addEventListener("mousedown", function(e) {
    progDown = true;
    progStartX = e.clientX;
    progScrollX = window.pageXOffset || document.documentElement.scrollLeft;
    document.querySelector(".prog-parent").style.cursor = "move";
});
document.querySelector(".prog-parent").addEventListener("mouseup", function(e) {
    progDown = false;
    document.querySelector(".prog-parent").style.cursor = "pointer";
})
document.querySelector("body").addEventListener("mousemove", function(e) {

    if (mouseDown) {
        var diff = e.clientX - startX;
        window.scrollTo(scrollX - diff, window.pageYOffset);
            // update the current event
        updateClosestEvent();
        // scroll to the current
        scrollToEvent()
    }
    if(progDown) {
        var diff = e.clientX - progStartX;
        var totalWidth = document.documentElement.scrollWidth - document.documentElement.clientWidth;
        window.scrollTo((e.clientX / window.innerWidth) * totalWidth, window.pageYOffset);
            // update the current event
        updateClosestEvent();
        // scroll to the current
        scrollToEvent()
    }
    return;

});
// add arrow keys
document.addEventListener("keydown", function(e) {
    if (e.key == "ArrowRight") {
        // scroll to the next event
        var events = document.querySelectorAll('.event');
        var nextEvent = events[currentEvent+1];
        if (nextEvent) {
            currentEvent++;
        }
        e.preventDefault();
    }
    if (e.key == "ArrowLeft") {
        // scroll to the next event
        var events = document.querySelectorAll('.event');
        var prevEvent = events[currentEvent-1];
        if (prevEvent) {
            currentEvent--;
        }
        e.preventDefault();

    }
    // up and down keys too
    if (e.key == "ArrowUp") {
        // scroll to the next event
        var events = document.querySelectorAll('.event');
        var prevEvent = events[currentEvent-1];
        if (prevEvent) {
            currentEvent--;
        }
        e.preventDefault();
    }
    if (e.key == "ArrowDown") {
        // scroll to the next event
        var events = document.querySelectorAll('.event');
        var nextEvent = events[currentEvent+1];
        if (nextEvent) {
            currentEvent++;
        }
        e.preventDefault();
    }
    scrollToEvent()

});
// Attach scroll event listener
window.addEventListener('scroll', handleScroll);

window.addEventListener('wheel', function(e) {
    // dont actually scroll, instead snap to next event
    var events = document.querySelectorAll('.event');
    var nextEvent = events[currentEvent+1];
    var prevEvent = events[currentEvent-1];
     if (e.deltaY > 0) {
        // scroll down
        if (nextEvent) {
            currentEvent++;

        }
    } else {
        // scroll up
        if (prevEvent) {
            currentEvent--;
 
        }
    }
    scrollToEvent()
    e.preventDefault();
    return false;
}, {passive: false});

function scrollToEvent(){
    var events = document.querySelectorAll('.event');
    currentEvent = Math.min(Math.max(currentEvent,0),events.length-1)
    window.scroll({
        top: 0,
        left: events[currentEvent].offsetLeft,
        behavior: 'smooth',
        duration: 5000
    });
    currentEvent = Math.min(Math.max(currentEvent,0),events.length-1);
}
function updateClosestEvent(){
    var events = document.querySelectorAll('.event');
    var closest = 0;
    var closestDiff = Infinity;
    events.forEach(function(event,i) {
        var diff = Math.abs(event.offsetLeft - window.pageXOffset);
        if (diff < closestDiff) {
            closest = event.offsetLeft;
            closestDiff = diff;
            currentEvent = i;
        }
    });
}
