from fastapi import FastAPI
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from pathlib import Path

app = FastAPI()

# Serve static files (CSS and JS)
app.mount("/static", StaticFiles(directory="static"), name="static")

# Serve HTML file
@app.get("/", response_class=HTMLResponse)
async def read_index():
    index_file = Path("templates/index.html").read_text()
    return HTMLResponse(content=index_file)
