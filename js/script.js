const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const player = {
    _playlist: $(".playlist"),
    _togglePlayElement: $(".btn-toggle-play"),
    _playingTitleElement: $(".playing-title"),
    _audioElement: $("#audio"),
    _playIconElement: $(".play-icon"),
    _nextElement: $(".btn-next"),
    _prevElement: $(".btn-prev"),
    _loopElement: $(".btn-repeat"),
    _randomElement: $(".btn-random"),
    _progressElement: $("#progress"),

    _isPlaying: false,
    _isloop: false,
    _isRandom: false,
    _currentIndex: 0,

    //_songs là dữ liệu/thuộc tính nội bộ, chủ yếu dùng bên trong object.
    _songs: [
        {
            id: 1,
            path: "./song/Âm Thầm Bên Em.mp3",
            name: "Âm thầm bên em",
            singer: "Sơn Tùng mvp",
        },
        {
            id: 2,
            path: "./song/Ấn Nút Nhớ... Thả Giấc Mơ.mp3",
            name: "Thả giấc mơ",
            singer: "Sơn Tùng mvp",
        },
        {
            id: 3,
            path: "./song/Buông Đôi Tay Nhau Ra.mp3",
            name: "Buông tay nhau ra",
            singer: "Sơn Tùng mvp",
        },
        {
            id: 4,
            path: "./song/Muộn Rồi Mà Sao Còn.mp3",
            name: "Muôn rồi mà sao còn",
            singer: "Sơn Tùng mvp",
        },
        {
            id: 5,
            path: "./song/Nơi Này Có Anh.mp3",
            name: "Nơi này có anh",
            singer: "Sơn Tùng mvp",
        },
    ],

    start() {
        this._render();
        this._loadCurrentSong();

        // DOM events
        // Xử lý nút play/pause
        this._togglePlayElement.onclick = this._togglePlay.bind(this);

        // Khi audio bắt đầu phát
        this._audioElement.onplay = () => {
            this._isPlaying = true;
            this._playIconElement.classList.remove("fa-play");
            this._playIconElement.classList.add("fa-pause");
        };

        // Khi audio bị pause
        this._audioElement.onpause = () => {
            this._isPlaying = false;
            this._playIconElement.classList.remove("fa-pause");
            this._playIconElement.classList.add("fa-play");
        };

        // khi next audio
        this._nextElement.onclick = () => {
            // xử lý trạng thái bật tắt của random
            if (this._isRandom) {
                this._currentIndex = Math.floor(
                    Math.random() * this._songs.length,
                );
            }
            // trạng thái next
            else {
                this._currentIndex =
                    (++this._currentIndex + this._songs.length) %
                    this._songs.length;
            }

            this._loadCurrentSong();
            this._render();
        };
        // khi prev audio
        this._prevElement.onclick = () => {
            // xử lý trạng thái bật tắt của random
            if (this._isRandom) {
                this._currentIndex = Math.floor(
                    Math.random() * this._songs.length,
                );
            }
            // trạng thái previous
            else {
                this._currentIndex =
                    (--this._currentIndex + this._songs.length) %
                    this._songs.length;
            }
            this._loadCurrentSong();
            this._render();
        };

        this._loopElement.onclick = () => {
            this._isloop = !this._isloop;
            this._audioElement.loop = this._isloop; // bật/tắt lặt
            this._loopElement.classList.toggle("active", this._isloop);
        };

        this._randomElement.onclick = () => {
            this._isRandom = !this._isRandom;
            this._randomElement.classList.toggle("active", this._isRandom);

            // cập nhật bài chỉ số của bài hát
            this._currentIndex = Math.floor(Math.random() * this._songs.length);
            this._loadCurrentSong();
            this._render();
        };

        // xử lý thanh progress time hiện tại (tiến trình)
        this._audioElement.ontimeupdate = () => {
            this._progressElement.value =
                (this._audioElement.currentTime / this._audioElement.duration) *
                100;
        };
        // xử lý phần progress tua
        this._progressElement.oninput = () => {
            this._audioElement.currentTime =
                (this._progressElement.value / 100) *
                this._audioElement.duration;
        };

        // xử lý khi click vào playlist
        this._playlist.onclick = (event) => {
            const songElement = event.target.closest(".song");
            // nếu chỗ click không phải song thì end
            if (!songElement) {
                return;
            }
            this._currentIndex = Number(songElement.dataset.index);
            this._isPlaying = true;
            this._loadCurrentSong();
            this._render();
        };
        // xử lý bài hát hết
        this._audioElement.onended = () => {
            // nếu bật repeat
            if (this._isloop) {
                return;
            }
            // nếu random
            if (this._isRandom) {
                this._currentIndex = Math.floor(
                    Math.random() * this._songs.length,
                );
            }
            // nếu bình thg next bài tiếp theo
            else {
                this._currentIndex =
                    (++this._currentIndex + this._songs.length) %
                    this._songs.length;
            }
            this._isPlaying = true; // next sang bài khác thì vẫn tt
            this._loadCurrentSong();
            this._render();
        };
    },
    // load bài hát hiện tại lên
    _loadCurrentSong() {
        const currentSong = this._getCurrentSong(); // lấy giá trị hiện tại trong songs
        this._playingTitleElement.innerText = currentSong.name; // thêm tên bài hát hiện tại
        this._audioElement.src = currentSong.path; // thêm src vào id audio bên html

        this._audioElement.loop = this._isloop; // bật / tắt lặp audio
        this._loopElement.classList.toggle("active", this._isloop);
        this._audioElement.oncanplay = () => {
            if (player._isPlaying) {
                this._audioElement.play();
            }
        };
    },

    _getCurrentSong() {
        // lấy tên bài hát hiện tại
        return this._songs[this._currentIndex];
    },
    _togglePlay() {
        if (this._audioElement.paused) {
            this._audioElement.play();
        } else {
            this._audioElement.pause();
        }
    },

    _render() {
        const html = this._songs

            .map((song, index) => {
                const isActive = index === this._currentIndex;

                return ` <div class="song ${isActive ? "active" : ""}" data-index="${index}">
                    <div
                        class="thumb"
                        style="
                            background-image: url(&quot;./img/img1.jpg&quot;);
                        "
                    ></div>
                    <div class="body">
                        <h3 class="title">${song.name}</h3>
                        <p class="author">${song.singer}</p>
                    </div>
                    <div class="option">
                        <i class="fas fa-ellipsis-h"></i>
                    </div>
                </div>`;
            })
            .join(""); // join ghép các phần tử trong mảng lại thành một chuỗi.
        this._playlist.innerHTML = html;
    },
};

player.start();
