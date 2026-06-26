        function openInvite() {
            document
                .getElementById("cover")
                .style.display = "none";
            document
                .getElementById("content")
                .classList.remove("hidden");
            document
                .getElementById("music")
                .play();
            flowers();
        }
        const target =
            new Date(
                "2026-07-05T10:00:00"
            );
        setInterval(() => {
            let x =
                target - new Date();
            let d =
                Math.floor(
                    x / 86400000
                );
            let h =
                Math.floor(
                    x % 86400000
                    / 3600000
                );
            let m =
                Math.floor(
                    x % 3600000
                    / 60000
                );
            let s =
                Math.floor(
                    x % 60000
                    / 1000
                );
            document.getElementById("d").innerHTML = d;
            document.getElementById("h").innerHTML = h;
            document.getElementById("m").innerHTML = m;
            document.getElementById("s").innerHTML = s;
        }, 1000);
        function flowers() {
            setInterval(() => {
                let f =
                    document
                        .createElement("div");
                f.className = "flower";
                f.innerHTML =
                    Math.random() > 0.5
                        ? "🌸" : "🌼";
                f.style.left =
                    Math.random() * 100
                    + "vw";
                f.style.animationDuration =
                    (
                        4 +
                        Math.random() * 6
                    )
                    + "s";
                document.body
                    .appendChild(f);
                setTimeout(
                    () => f.remove(),
                    9000
                );
            }, 300);
        }
        const params =
            new URLSearchParams(
                location.search
            );
        document
            .getElementById(
                "guest"
            )
            .innerHTML =
            params.get("to")
            ||
            "Tamu Undangan";