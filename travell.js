document.getElementById('btn_id').addEventListener('click', ShowDetails)

function ShowDetails() {
    event.preventDefault()
    window.location.href = "redirect.html"

}

console.log("Check 1")
EnterDetails()

function EnterDetails() {
    console.log("Check 2s")
    // event.preventDefault()

    var obj = {
        "Agra": [{
            "Days": "4 days Trip, Two Nights and 2 days"
        }, {
            "Total Price": "10k per head"
        }, {
            "Food": "Break-Fast, Lunch, Dinner (2k per Day)"
        }, {
            "Hotel": "Available for three nights"
        }],

        "Ooty": [{
            "Days": "4 days Trip, Two Nights and 2 days"
        }, {
            "Total Price": "10k per head"
        }, {
            "Food": "Break-Fast, Lunch, Dinner (2k per Day)"
        }, {
            "Hotel": "Available for three nights"
        }],

        "Rajasthan": [{
            "Days": "4 days Trip, Two Nights and 2 days"
        }, {
            "Total Price": "10k per head"
        }, {
            "Food": "Break-Fast, Lunch, Dinner (2k per Day)"
        }, {
            "Hotel": "Available for three nights"
        }],

        "Kerla": [{
            "Days": "4 days Trip, Two Nights and 2 days"
        }, {
            "Total Price": "10k per head"
        }, {
            "Food": "Break-Fast, Lunch, Dinner (2k per Day)"
        }, {
            "Hotel": "Available for three nights"
        }],

        "Goa": [{
            "Days": "4 days Trip, Two Nights and 2 days"
        }, {
            "Total Price": "10k per head"
        }, {
            "Food": "Break-Fast, Lunch, Dinner (2k per Day)"
        }, {
            "Hotel": "Available for three nights"
        }],

        "Sikkim": [{
            "Days": "4 days Trip, Two Nights and 2 days"
        }, {
            "Total Price": "10k per head"
        }, {
            "Food": "Break-Fast, Lunch, Dinner (2k per Day)"
        }, {
            "Hotel": "Available for three nights"
        }],

        "Mumbai": [{
            "Days": "4 days Trip, Two Nights and 2 days"
        }, {
            "Total Price": "10k per head"
        }, {
            "Food": "Break-Fast, Lunch, Dinner (2k per Day)"
        }, {
            "Hotel": "Available for three nights"
        }],

        "Haridwar": [{
            "Days": "4 days Trip, Two Nights and 2 days"
        }, {
            "Total Price": "10k per head"
        }, {
            "Food": "Break-Fast, Lunch, Dinner (2k per Day)"
        }, {
            "Hotel": "Available for three nights"
        }],


    }

    window.localStorage.setItem('details', JSON.stringify(obj))



    // window.localStorage.setItem('user', JSON.stringify(person));



    // JSON.parse(window.localStorage.getItem('user'));

}