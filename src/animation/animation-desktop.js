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
      end: "bottom+=500 top",
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
      markers: true,
      scrub: 3,
      pin: true,
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
      .set("#question .block:nth-child(1)", {
        translateX: -100,
      })
      .set("#question .block:nth-child(3)", {
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
      .to("#question .block:nth-child(1)", {
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
      .to("#question .block:nth-child(2)", {
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
      .to("#question .block:nth-child(3)", {
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

  // frame 5
  question.add(hideTarget("#question"));
  question.add(
    gsap.timeline().to("#character", {
      scale: 1,
    }),
    "-=0.5"
  );

  const role = gsap.timeline({
    scrollTrigger: {
      trigger: "#role",
      scrub: 3,
      pin: true,
      markers: true,
    },
  });

  // frame 1
  role.add(
    gsap
      .timeline()
      .set("#role h3, #role h5, #role .container", {
        opacity: 0,
      })
      .set("#role .container", {
        translateY: 30,
      })
  );

  // frame 2

  role.add(
    gsap.timeline().to("#role h3, #role h5", {
      opacity: 1,
    })
  );

  // frame 3
  role.add(
    gsap.timeline().to("#role .container", {
      translateY: 0,
      opacity: 1,
    })
  );

  // frame 4
  role.add(hideTarget("#role h3, #role h5"));
  role.add(
    gsap.timeline().to("#role .container", {
      opacity: 0,
      translateY: 30,
    }),
    "-=0.5"
  );

  const theme = gsap
    .timeline({
      scrollTrigger: {
        trigger: "#theme",
        // start: "top-=300 top",
        // end: "bottom-=800 top",
        scrub: 3,
        pin: true,
        markers: true,
      },
    })
    .set("#theme h3, #theme h5, #theme .block", {
      opacity: 0,
    })
    .set("#theme .block", {
      translateY: 200,
    });
  // frame 1
  theme.add(
    gsap
      .timeline()
      .to("#character", {
        scale: 0.4,
      })
      .to(
        "#theme h3, #theme h5",
        {
          opacity: 1,
        },
        "-=0.5"
      )
  );

  // frame 2
  theme.add(
    gsap.timeline().to("#theme .block:nth-child(1)", {
      opacity: 1,
      translateY: 0,
    })
  );

  // frame 3
  theme.add(
    gsap
      .timeline()
      .to("#theme .block:nth-child(1)", {
        opacity: 0,
        translateY: -500,
      })
      .to(
        "#theme .block:nth-child(2)",
        {
          opacity: 1,
          translateY: -300,
        },
        "-=0.5"
      )
  );

  // frame 4
  theme.add(
    gsap
      .timeline()
      .to("#theme .block:nth-child(2)", {
        opacity: 0,
        translateY: -800,
      })
      .to(
        "#theme .block:nth-child(3)",
        {
          opacity: 1,
          translateY: -600,
        },
        "-=0.5"
      )
  );

  // frame 5
  theme.add(
    gsap.timeline().to("#theme .block:nth-child(3)", {
      opacity: 0,
      translateY: -1000,
    })
  );

  // frame 6
  theme.add(hideTarget("#theme h3, #theme h5"));
  theme.add(
    gsap.timeline().to("#character", {
      scale: "+=0.35",
    }),
    "-=0.5"
  );

  const schedule = gsap
    .timeline({
      scrollTrigger: {
        trigger: "#schedule",
        // start: "top-=300 top",
        // end: "bottom-=100 top",
        scrub: 3,
        pin: true,
        markers: true,
      },
    })
    .set("#schedule li > div", {
      opacity: 0,
    })
    .set("#schedule li > div:first-child", {
      translateY: "10%",
    });

  // frame 1
  schedule.add(
    gsap.timeline().to("#date-line-mask", {
      left: "100%",
    })
  );
  // console.log(document.querySelector("#schedule li:nth-child(1)"));
  // frame 2
  schedule.add(
    gsap
      .timeline()
      .to("#schedule li:nth-child(1) > div:first-child", {
        translateY: 0,
      })
      .to(
        "#schedule li:nth-child(1) > div",
        {
          opacity: 1,
        },
        "-=0.5"
      )
  );

  // frame 3
  schedule.add(
    gsap
      .timeline()
      .to("#schedule li:nth-child(2) > div:first-child", {
        translateY: 0,
      })
      .to(
        "#schedule li:nth-child(2) > div",
        {
          opacity: 1,
        },
        "-=0.5"
      )
  );

  // frame 4
  schedule.add(
    gsap
      .timeline()
      .to("#schedule li:nth-child(3) > div:first-child", {
        translateY: 0,
      })
      .to(
        "#schedule li:nth-child(3) > div",
        {
          opacity: 1,
        },
        "-=0.5"
      )
  );

  // 沒什麼作用，調用函式的當下就會執行 gsap
  master.add(home);
  master.add(question);
  master.add(role);
  master.add(theme);
  master.add(schedule);
  return master;
}
