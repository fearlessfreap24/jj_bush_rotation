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
purple_div.innerHTML = `This week's Purple Smoke bush goes to ${purple_rot[Math.floor((today_ts-start_date_ts)/one_week)%15]}<br>`
purple_div.innerHTML = purple_div.innerHTML + `Next week's Purple Smoke goes to ${purple_rot[(Math.floor((today_ts-start_date_ts)/one_week)+1)%15]}`
purple_div.hidden = false

let gold_div = document.getElementById("golden")
gold_div.innerHTML = `Today's Golden Bell goes to ${golden_rot[Math.floor((today_ts-start_date_ts)/one_day)%15]}<br>Tomorrow's Golden Bell goes to ${golden_rot[(Math.floor((today_ts-start_date_ts)/one_day)+1)%15]}`
gold_div.hidden = false