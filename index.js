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
        "github_file_url": "https://github.com/Ayetowo/HNG_Backend",
        "github_repo_url": "https://github.com/Ayetowo/HNG_Backend/blob/main/index.js",
        "status_code": 200
    })
});
