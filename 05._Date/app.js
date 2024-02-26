const express = require(`express`);
const app = express();

// UTC - zulu time
console.log(new Date());

// Unix Epoch Time (Seconds since 1970 Jan. 1st)
console.log(Date.now());

// Central European Standard Time - CEST / GMT+1 - Localtime right here right now
console.log(Date());

// create an endpoint that returns date
app.get(`/date`, (req, res) => {
    const date = new Date();
    res.send({ data: `${date}` })
});

// assignment create a route with the endpoint /month that returns the current month
app.get(`/month/version1`, (req, res) => {
    const currentMonth = new Date().toLocaleString('en-us', { month: 'long' });
    res.send({ data: `${currentMonth}` });
});

// solution with making your own array for months
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
app.get(`/month/version2`, (req, res) => {
    const month = new Date().getMonth();
    res.send({ data: months[month] })
});

// slightly hacky but still correct
app.get(`/month/version3`, (req, res) => {
    const month = Date().split(" ")[1];
    res.send({ data: month })
});

// assignment get today on /day
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
app.get(`/day/version1`, (req, res) => {
    const currentDay = new Date().getDay();
    res.send({ data: days[currentDay] });
});

app.get(`/day/version2`, (req, res) => {
    const currentDay = new Date().toLocaleString('en-us', { weekday: 'long' });
    res.send({ data: currentDay });
});

const PORT = 8080;
app.listen(PORT, () => console.log(`Server is running on port`, PORT));