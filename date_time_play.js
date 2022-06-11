// weekly
let purple_rot = [
    "MaladyRae",
    "Kara",
    "Jessica Jones",
    "Detective Dee",
    "Chase Yr Dreams",
    "Lenore",
    "LilsterP",
    "HannahKate",
    "Zerep Nalyd",
    "TheySeeMeFindin",
    "Hapegolucke",
    "Annie's Island",
    "LindaG",
    "Colin",
    "Lou Lou"
]
// daily
let golden_rot = [
    "TheySeeMeFindin",
    "Lenore",
    "Zerep Nalyd",
    "LilsterP",
    "Lou Lou",
    "Jessica Jones",
    "LindaG",
    "Hapegolucke",
    "Detective Dee",
    "Annie's Island",
    "Chase Yr Dreams",
    "Colin",
    "Kara",
    "HannahKate",
    "MaladyRae"
]
const one_day = 86400000
const one_week = one_day*7
// the day a new weekly rotation started.
let start_date = new Date(2022, 4, 31)
console.log(`start_date - ${start_date.toString()}`)
let today = new Date()
console.log(`today - ${today.toString()}`)
let start_date_ts = start_date.getTime()
let today_ts = today.getTime()

let purple_div = document.getElementById('purple')
let purple_today = document.createElement('div')
let purple_tomm = document.createElement('div')
purple_today.innerHTML = `This week's Purple Smoke bush goes to ${purple_rot[Math.floor((today_ts-start_date_ts)/one_week)%15]}<br>`
purple_today.classList.add("today")
purple_tomm.innerHTML = `Next week's Purple Smoke goes to ${purple_rot[(Math.floor((today_ts-start_date_ts)/one_week)+1)%15]}`
purple_tomm.classList.add("tomorrow")
purple_div.appendChild(purple_today)
purple_div.appendChild(purple_tomm)
purple_div.hidden = false

let gold_div = document.getElementById("golden")
let gold_today = document.createElement('div')
let gold_tomm = document.createElement('div')
gold_today.innerHTML = `Today's Golden Bell goes to ${golden_rot[Math.floor((today_ts-start_date_ts)/one_day)%15]}`
gold_tomm.innerHTML = `Tomorrow's Golden Bell goes to ${golden_rot[(Math.floor((today_ts-start_date_ts)/one_day)+1)%15]}`
gold_today.classList.add("today")
gold_tomm.classList.add("tomorrow")
gold_div.appendChild(gold_today)
gold_div.appendChild(gold_tomm)
gold_div.hidden = false