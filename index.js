const app = require('express')();
const PORT = 8080;

app.listen(
    PORT,
    () => console.log('connected to http://localhost:8080')
)
app.get('/route', (req, res) => {
    res.status(200).send({
        "slack_name": "Light",
        "current_day": "Monday",
        "utc_time": new Date(). toUTCString(),
        "track": "backend",
        "github_file_url": "",
        "github_repo_url": "",
        "status_code": 200
    })
});