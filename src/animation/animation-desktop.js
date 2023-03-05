import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

function moveToX(targets, x, scale) {
  const tl = gsap
    .timeline()
    .to(targets[0], {
      x,
      scale,
    })
    .to(
      targets[1],
      {
        x: -x,
        scale,
      },
      "-=0.5"
    );
  return tl;
}

function showRedSignal() {
  const tl = gsap.timeline().to(
    ["#signal-text", "#signal-yellow", "#signal-green"],
    {
      opacity: 0,
    },
    "-=0.5"
  );
  return tl;
}

function showYellowSignal() {
  const tl = gsap
    .timeline()
    .to("#signal-red", {
      opacity: 0,
    })
    .to(
      "#signal-yellow",
      {
        opacity: 1,
      },
      "-=0.5"
    );
  return tl;
}

function showGreenSignal() {
  const tl = gsap
    .timeline()
    .to("#signal-yellow", {
      opacity: 0,
    })
    .to(
      "#signal-green",
      {
        opacity: 1,
      },
      "-=0.5"
    )
    .set(
      "#signal-text",
      {
        text: "GO!!",
        left: "5rem",
      },
      "-=0.5"
    )
    .to(
      "#signal-text",
      {
        opacity: 1,
      },
      "-=0.5"
    );
  return tl;
}

function hideTarget(targets) {
  const tl = gsap.timeline().to(targets, {
    opacity: 0,
  });
  return tl;
}

function showSmallLogo() {
  const tl = gsap.timeline().to("#logo-sm", {
    display: "block",
    opacity: 1,
  });
  return tl;
}

export default function animationDesktop() {
  const master = gsap.timeline({
    onUpdate: () => {
      console.log(gsap.utils.clamp(0, 1, master.progress()));
    },
  });

  const home = gsap.timeline({
    scrollTrigger: {
      trigger: "#home",
      start: "top top",
      end: "bottom+=300px top",
      pin: true,
      scrub: 3,
      markers: true,
    },
  });

  // Home
  // frame 1
  home.add(moveToX(["#cloud-1", "#cloud-2"], 100, 0.8));
  home.add(showRedSignal());

  // frame 2
  home.add(moveToX(["#cloud-1", "#cloud-2"], 200, 0.7));
  home.add(showYellowSignal(), "-=0.5");

  // frame 3
  home.add(moveToX(["#cloud-1", "#cloud-2"], 300, 0));
  home.add(showGreenSignal(), "-=0.5");

  // frame 4
  home.add(hideTarget("#signals, #participants"));

  // frame 5
  home.add(hideTarget("#startLine, h1, #logo"));
  home.add(showSmallLogo(), "-=0.5");

  const question = gsap.timeline({
    scrollTrigger: {
      trigger: "#question",
      start: "top-=500px top",
      end: "bottom-=900px top",
      markers: true,
      scrub: 3,
    },
  });
  // Question
  // frame1
  question.add(
    gsap
      .timeline()
      .set(["#question h3", "#question .block"], {
        opacity: 0,
      })
      .set(".block:nth-child(1)", {
        translateX: -100,
      })
      .set(".block:nth-child(3)", {
        translateX: 100,
      })
      .to("#question h3", {
        opacity: 1,
      })
      .to(
        "#character",
        {
          scale: 0.75,
        },
        "-=0.5"
      )
      .to(
        "#grass-1",
        {
          y: -100,
        },
        "-=0.5"
      )
      .to(
        "#grass-2",
        {
          y: -100,
        },
        "-=0.5"
      )
  );

  // frame 2
  question.add(
    gsap
      .timeline()
      .to(".block:nth-child(1)", {
        opacity: 1,
        translateX: 0,
      })
      .to(
        "#grass-1",
        {
          x: 15,
          y: -125,
          scaleX: 0.8,
          scaleY: -0.8,
        },
        "-=0.5"
      )
      .to(
        "#grass-2",
        {
          x: -15,
          y: -125,
          scale: 0.8,
        },
        "-=0.5"
      )
  );

  // frame 3
  question.add(
    gsap
      .timeline()
      .to(".block:nth-child(2)", {
        opacity: 1,
      })
      .to(
        "#grass-1",
        {
          x: 110,
          y: -150,
          scaleX: 0.7,
          scaleY: -0.7,
        },
        "-=0.5"
      )
      .to(
        "#grass-2",
        {
          x: -110,
          y: -150,
          scale: 0.7,
        },
        "-=0.5"
      )
  );

  // frame 4

  question.add(
    gsap
      .timeline()
      .to(".block:nth-child(3)", {
        opacity: 1,
        translateX: 0,
      })
      .to(
        "#grass-1",
        {
          x: 300,
          y: -210,
          scale: 0,
        },
        "-=0.5"
      )
      .to(
        "#grass-2",
        {
          x: -300,
          y: -210,
          scale: 0,
        },
        "-=0.5"
      )
  );

  // 沒什麼作用，調用函式的當下就會執行 gsap
  master.add(home);
  master.add(question);
  return master;
}
