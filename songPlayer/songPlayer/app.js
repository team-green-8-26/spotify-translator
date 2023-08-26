// music player start from here. 
// instantly start the function.
!async function main() {
    "use strict";

    const dom = {
        lyric: document.querySelector(".lyric ul"),
        lyricEN: document.querySelector(".lyric-EN ul"),
        player: document.querySelector(".player")
    };

    // load lrc file
    const res = await fetch("sample-CH.lrc");
    const resEN = await fetch("sample-EN.lrc");
    const lrc = await res.text();
    const lrcEN = await resEN.text();

    const lyrics = parseLyric(lrc);
    const lyricsEN = parseLyric(lrcEN);

    dom.player.src = "./hackathon_sample_song.mp3";

    // load lyrics to the DOM element
    lyrics.forEach((ele, id) => {
        const liEle = document.createElement("li");
        liEle.textContent = ele.text;
        liEle.dataset.id = id;
        dom.lyric.appendChild(liEle);
    });
    lyricsEN.forEach((ele, id) => {
        const liEle = document.createElement("li");
        liEle.textContent = ele.text;
        liEle.dataset.id = id;
        dom.lyricEN.appendChild(liEle);
    });

    dom.player.ontimeupdate = () => {
        const time = dom.player.currentTime;
        const index = syncLyric(lyrics, time);

        if (index == null) return;

        dom.lyric.querySelectorAll("li").forEach((ele, id) => {
            if (id == index) {
                ele.style.color = "red";
            } else {
                ele.style.color = "black";
            }
        });
        dom.lyricEN.querySelectorAll("li").forEach((ele, id) => {
            if (id == index) {
                ele.style.color = "red";
            } else {
                ele.style.color = "black";
            }
        });
    };

}();

// lrc (String) - lrc file text
function parseLyric(lrc) {
    // will match "[00:00.00] ooooh yeah!"
    // note: i use named capturing group
    const regex = /^\[(?<time>\d{2}:\d{2}(.\d{2})?)\](?<text>.*)/;

    // split lrc string to individual lines
    const lines = lrc.split("\n");

    const output = [];

    lines.forEach(line => {
        const match = line.match(regex);

        // if doesn't match, return.
        if (match == null) return;

        const { time, text } = match.groups;

        output.push({
            time: parseTime(time),
            text: text.trim()
        });
    });

    // parse formated time
    // "03:24.73" => 204.73 (total time in seconds)
    function parseTime(time) {
        const minsec = time.split(":");

        const min = parseInt(minsec[0]) * 60;
        const sec = parseFloat(minsec[1]);

        return min + sec;
    }

    return output;
}

// lyrics (Array) - output from parseLyric function
// time (Number) - current time from audio player
function syncLyric(lyrics, time) {
    const scores = [];

    lyrics.forEach(lyric => {
        // get the gap or distance or we call it score
        const score = time - lyric.time;

        // only accept score with positive values
        if (score >= 0) scores.push(score);
    });

    if (scores.length == 0) return null;

    // get the smallest value from scores
    const closest = Math.min(...scores);

    // return the index of closest lyric
    return scores.indexOf(closest);
}