let photos = [
    "photo1.jpg", "photo2.jpg", "photo3.jpg", "photo4.jpg", "photo5.jpg",
    "photo6.jpg", "photo7.jpg", "photo8.jpg", "photo9.jpg", "photo10.jpg",
    "photo11.jpg", "photo12.jpg", "photo13.jpg", "photo14.jpg", "photo15.jpg",
    "photo16.jpg", "photo17.jpg", "photo18.jpg", "photo19.jpg", "photo20.jpg"
];
let currentPhotoIndex = 0;

function enterSite() {
    document.getElementById("cover").style.display = "none";
    document.getElementById("content").style.display = "block";
}

function showPhoto(index) {
    currentPhotoIndex = index;
    document.getElementById("content").style.display = "none";
    document.getElementById("photo-container").style.display = "block";
    document.getElementById("photo-display").src = photos[index];

    // 显示上一张和下一张按钮的逻辑：
    document.getElementById("prev-photo").style.display = index === 0 ? "none" : "inline-block";
    document.getElementById("next-photo").style.display = index === photos.length - 1 ? "none" : "inline-block";
    document.getElementById("restart").style.display = index === photos.length - 1 ? "inline-block" : "none";
}

function nextPhoto() {
    if (currentPhotoIndex < photos.length - 1) {
        showPhoto(++currentPhotoIndex);
    }
}

function prevPhoto() {
    if (currentPhotoIndex > 0) {
        showPhoto(--currentPhotoIndex);
    }
}

function restart() {
    document.getElementById("photo-container").style.display = "none";
    document.getElementById("content").style.display = "block";
}

// 处理背景音乐自动播放问题
document.addEventListener("DOMContentLoaded", function () {
    var music = document.getElementById("bg-music");
    var playPromise = music.play();
    if (playPromise !== undefined) {
        playPromise.then(_ => {
            // 自动播放成功
        }).catch(error => {
            console.log("Auto-play was prevented. Please click anywhere to start the music.");
            document.addEventListener("click", function playMusicOnce() {
                music.play();
                document.removeEventListener("click", playMusicOnce);
            });
        });
    }
});
