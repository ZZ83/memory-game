export class Settings {
    constructor(theme = "numbers", players = "1", gridSize = "4x4") {
        this.theme = theme; 
        this.players = players;
        this.gridSize = gridSize;
    }

    get settingsMenu() {
       return document.getElementById('settingsMenu');
    }

    hideSettingsMenu() {
        this.settingsMenu.style.display = "none";
    }

    highlightSelectedButton(element) {
        const ele = [...element.parentElement.children].filter(function (element) {
            return element.classList.contains("-active");
        }); 
        ele[0].classList.remove("-active");
        element.classList.add("-active");
    }

    setSettings() {
        this.settingsMenu.addEventListener('click', (event) => {
            if(event.target.tagName === "BUTTON" & event.target.innerHTML === "Numbers") {
                this.theme = event.target.innerHTML;
                this.highlightSelectedButton(event.target);
            } else if (event.target.tagName === "BUTTON" & event.target.innerHTML === "Icons") {
                this.theme = event.target.innerHTML;
                this.highlightSelectedButton(event.target);
            } 
            if (event.target.tagName === "BUTTON" & event.target.innerHTML === "1") {
                this.players = event.target.innerHTML;
                this.highlightSelectedButton(event.target);
            } else if (event.target.tagName === "BUTTON" & event.target.innerHTML === "2") {
                this.players = event.target.innerHTML;
                this.highlightSelectedButton(event.target);
            } else if (event.target.tagName === "BUTTON" & event.target.innerHTML === "3") {
                this.players = event.target.innerHTML;
                this.highlightSelectedButton(event.target);
            } else if (event.target.tagName === "BUTTON" & event.target.innerHTML === "4") {
                this.players = event.target.innerHTML;
                this.highlightSelectedButton(event.target);
            }
            if(event.target.tagName === "BUTTON" & event.target.innerHTML === "4x4") {
                this.gridSize = event.target.innerHTML;
                this.highlightSelectedButton(event.target);
            } else if (event.target.tagName === "BUTTON" & event.target.innerHTML === "6x6") {
                this.gridSize = event.target.innerHTML;
                this.highlightSelectedButton(event.target);
            }
        });
    }
}