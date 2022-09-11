//Array of all customer quotes to cycle through
const testimonyArray = 
["Sonya changed my life when it comes to fitness. She teaches you form, posture, strength, agility, perserverence, meditation, and healing. She really is the best of both worlds."
, "Sonya was my second Yoga Instructor on my Yoga journey. She worked with me on specific poses to address my nerve pain due to a spinal issue in my back. After completing my private sessions she deveoped a special Yoga Routine on video that I used to continue my practice. Thank you Sonya for your unique talents."
,"Sonya was my mentor in becoming a fitness instructor. Sheis very good in teaching correct form, posture, mobility. Was very patient and a good sense of humor. I have been an instructor for 4 years now. You changed my life Sonya. Love ya!"
, "Sonya is an amzing trainer! She did private lessons for my family and really listened to what each of us could or couldn't do, and made it work for all of us! She can kick your butt or help you gain strength slowly! She has also continued to be there to guide me in my excercising and yoga questions aong the way!"
];


//array of all customer names, quote is tied to order of testimonyArray (IE: quote 0 was said by name 0)
const nameArray = ["Nichole K"
,"Steve Y"
, "Karen P"
, "Amy B"]

let i = 0;

//Starting text in HTML element is white space, replace with last quote in array to ensure cycling is consistant
document.getElementById("customerQuote").innerHTML = testimonyArray[testimonyArray.length - 1];
document.getElementById("customerName").innerHTML = nameArray[nameArray.length - 1];

if (testimonyArray.length != nameArray.length){
    alert("Array out of bounds exception")
    //the number of quotes is not the same as the number of people who said them.
}


function testimonyCycle(){ 
    if(i == testimonyArray.length){
        i = 0;
    }
    document.getElementById("customerName").innerHTML = nameArray[i];
    document.getElementById("customerQuote").innerHTML = testimonyArray[i];
    i++;
}

setInterval(testimonyCycle, 10000);