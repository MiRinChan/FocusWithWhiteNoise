"use strict";
const playButton = document.querySelector("#play");
const audio = document.getElementById("audio");

// 播放按钮
playButton.addEventListener("click", function () {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});

// 音频相关
audio.onloadstart = function () {
    document.querySelector("#loading").style.display = "block";
};
audio.oncanplaythrough = function () {
    document.querySelector("#loading").style.display = "none";
};
audio.onplay = function () {
    playButton.classList.add("active");
};
audio.onpause = function () {
    playButton.classList.remove("active");
};

audio.addEventListener("timeupdate", function () {
    if (audio.currentTime >= 599) {
        audio.currentTime = 2;
    }
});

// 深色模式按钮
const darkModeBtn = document.getElementById("dark");

// 检查系统是否开启深色模式
function checkSystemDarkMode() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

// 切换深色模式
function toggleDarkMode() {
    const darkModeStylesheet = document.getElementById("dark-mode-stylesheet");
    if (darkModeStylesheet) {
        document.head.removeChild(darkModeStylesheet);
        darkModeBtn.classList.remove("active");
    } else {
        const darkStylesheet = document.createElement("link");
        darkStylesheet.id = "dark-mode-stylesheet";
        darkStylesheet.rel = "stylesheet";
        darkStylesheet.href = "main.dark.add.css";
        document.head.appendChild(darkStylesheet);
        darkModeBtn.classList.add("active");
    }
}

// 初始化深色模式
if (checkSystemDarkMode()) {
    toggleDarkMode();
}

// 监听深色模式按钮的点击事件
darkModeBtn.addEventListener("click", toggleDarkMode);


const blankModeButton = document.getElementById("clean");
const blankModePage = document.getElementById("blankMode");
blankModeButton.addEventListener("click", () => {
    blankMode.classList.remove("hidden");
    setTimeout(() => {
        blankMode.querySelector("#blankMode p").style.opacity = "0";
    }, "1000");
});

blankModePage.addEventListener("click", () => {
    blankMode.classList.add("hidden");
});







