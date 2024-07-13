const themes = {
  "light": {
      "primary": "#dd9912",
      "secondary": "#2a3241",
      "background": "#dfe6ec",
      "hyperlink": "#000000"
  },
  "dark": {
      "primary": "#dd9912",
      "secondary": "#BDC5D4",
      "background": "#0B0F12",
      "hyperlink": "#eef4ff"
  }
}

function setTheme() {
  var theme = localStorage.getItem("theme")
  if (theme == null) {
    localStorage.setItem("theme", "dark")
    theme = "dark"
  }

  const lt = themes["light"]
  const dt = themes["dark"]

  if (theme == "dark") {
    document.documentElement.style.setProperty('--primary', dt["primary"]);
    document.documentElement.style.setProperty('--secondary', dt["secondary"]);
    document.documentElement.style.setProperty('--background', dt["background"]);
    document.documentElement.style.setProperty('--hyperlink', dt["hyperlink"]);
    
  } else {
    document.documentElement.style.setProperty('--primary', lt["primary"]);
    document.documentElement.style.setProperty('--secondary', lt["secondary"]);
    document.documentElement.style.setProperty('--background', lt["background"]);
    document.documentElement.style.setProperty('--hyperlink', lt["hyperlink"]);

  }
}

function toggleTheme() {
  var theme = localStorage.getItem("theme")
  if (theme == null) {
    localStorage.setItem("theme", "dark")
    theme = "dark"
  }

  const lt = themes["light"]
  const dt = themes["dark"]

  if (theme == "dark") {
    document.documentElement.style.setProperty('--primary', lt["primary"]);
    document.documentElement.style.setProperty('--secondary', lt["secondary"]);
    document.documentElement.style.setProperty('--background', lt["background"]);
    document.documentElement.style.setProperty('--hyperlink', lt["hyperlink"]);
    localStorage.setItem("theme", "light");
    
  } else {
    document.documentElement.style.setProperty('--primary', dt["primary"]);
    document.documentElement.style.setProperty('--secondary', dt["secondary"]);
    document.documentElement.style.setProperty('--background', dt["background"]);
    document.documentElement.style.setProperty('--hyperlink', dt["hyperlink"]);    localStorage.setItem("theme", "dark");
  }
}

setTheme()

var themeBtn = document.getElementById("themeToggle");
themeBtn.onclick = function() {
  toggleTheme()
}
