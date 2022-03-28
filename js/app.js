data = [
    {
        "title": "Work",
        "timeframes": {
            "daily": {
                "current": 5,
                "previous": 7
            },
            "weekly": {
                "current": 32,
                "previous": 36
            },
            "monthly": {
                "current": 103,
                "previous": 128
            }
        }
    },
    {
        "title": "Play",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 2
            },
            "weekly": {
                "current": 10,
                "previous": 8
            },
            "monthly": {
                "current": 23,
                "previous": 29
            }
        }
    },
    {
        "title": "Study",
        "timeframes": {
            "daily": {
                "current": 0,
                "previous": 1
            },
            "weekly": {
                "current": 4,
                "previous": 7
            },
            "monthly": {
                "current": 13,
                "previous": 19
            }
        }
    },
    {
        "title": "Exercise",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 1
            },
            "weekly": {
                "current": 4,
                "previous": 5
            },
            "monthly": {
                "current": 11,
                "previous": 18
            }
        }
    },
    {
        "title": "Social",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 3
            },
            "weekly": {
                "current": 5,
                "previous": 10
            },
            "monthly": {
                "current": 21,
                "previous": 23
            }
        }
    },
    {
        "title": "Self Care",
        "timeframes": {
            "daily": {
                "current": 0,
                "previous": 1
            },
            "weekly": {
                "current": 2,
                "previous": 2
            },
            "monthly": {
                "current": 7,
                "previous": 11
            }
        }
    }
]


let current_tags = document.querySelectorAll(".content .time p:nth-of-type(1)");
let previous_tags = document.querySelectorAll(".content .time p:nth-of-type(2)");
let all_time = document.querySelectorAll(".time");
let all_content = document.querySelectorAll(".content");

for (let i = 0; i < 6; i++) {
    all_time[i].addEventListener('mouseover', () => { all_content[i].style.backgroundColor = 'hsl(235, 45%, 61%)' })
    all_time[i].addEventListener('mouseout', () => { all_content[i].style.backgroundColor = 'hsl(235, 46%, 20%)' })
}

function disableButtons() {
    daily.style.pointerEvents = 'none';
    weekly.style.pointerEvents = 'none';
    monthly.style.pointerEvents = 'none';
}

function enableButtons() {
    daily.style.pointerEvents = 'auto';
    weekly.style.pointerEvents = 'auto';
    monthly.style.pointerEvents = 'auto';
}

function animation(timeframe) {
    for (let i = 0; i < 6; i++) {
        disableButtons()
        current_tags[i].animate([
            {
                transform: 'translateY(0)'
            },
            {
                transform: 'translateY(-30px)',
                opacity: 0
            }
        ], { duration: 250, fill: 'forwards' })
        previous_tags[i].animate([
            {
                transform: 'translateY(0)'
            },
            {
                transform: 'translateY(-30px)',
                opacity: 0
            }
        ], { duration: 250, fill: 'forwards' })
        setTimeout(() => {
            current_tags[i].innerText = `${data[i].timeframes[timeframe].current}hrs`;
            previous_tags[i].innerText = `Last ${(timeframe == 'daily') ? 'day' : timeframe.slice(0, -2)} - ${data[i].timeframes[timeframe].previous}hrs`
            setTimeout(() => {
                current_tags[i].animate([
                    {
                        transform: 'translateY(30px)'
                    },
                    {
                        transform: 'translateY(0)',
                        opacity: 1
                    }
                ], { duration: 250, fill: 'forwards' })
                previous_tags[i].animate([
                    {
                        transform: 'translateY(30px)'
                    },
                    {
                        transform: 'translateY(0)',
                        opacity: 1
                    }
                ], { duration: 250, fill: 'forwards' })
                setTimeout(enableButtons, 300);
            }, 250);
        }, 250);
    }
}

daily.addEventListener("click", (e) => {
    e.preventDefault();
    animation('daily');
})

weekly.addEventListener("click", (e) => {
    e.preventDefault();
    animation('weekly');
})

monthly.addEventListener("click", (e) => {
    e.preventDefault();
    animation('monthly');
})