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
  const master = gsap.timeline();

  const home = gsap
    .timeline({
      scrollTrigger: {
        trigger: "#home",
        start: "top+=1 top",
        end: "bottom+=500 top",
        pin: true,
        scrub: 3,
        markers: true,
        preventOverlaps: true,
        fastScrollEnd: true,
      },
    })
    .set("#cloud-1", {
      x: 0,
    })
    .set("#cloud-2", {
      x: 0,
    });

  // Home
  // frame 1
  home.add(moveToX(["#cloud-1", "#cloud-2"], 100, 0.8));
  home.add(showRedSignal());

  // frame 2
  home.add(moveToX(["#cloud-1", "#cloud-2"], 200, 0.7));
  home.add(showYellowSignal(), "-=0.5");

  // frame 3
  home.add(moveToX(["#cloud-1", "#cloud-2"], 300, 0.3));
  home.add(hideTarget("#cloud-1, #cloud-2"), "-=0.5");
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
      preventOverlaps: true,
      fastScrollEnd: true,
      scrub: 3,
      pin: true,
      pinSpacing: false,
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
        x: -100,
      })
      .set("#question .block:nth-child(3)", {
        x: 100,
      })
      .to("#question h3", {
        opacity: 1,
      })
      .fromTo(
        "#character",
        {
          scale: 1,
        },
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
      .fromTo(
        "#map-now",
        {
          top: "30%",
          left: "0%",
        },
        {
          top: "0%",
          left: "16%",
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
        x: 0,
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
        x: 0,
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
    gsap
      .timeline()
      .fromTo(
        "#character",
        {
          scale: 0.75,
        },
        {
          scale: 1,
        }
      )
      .to(
        "#map-now",
        {
          top: "5%",
          left: "44%",
          immediateRender: false,
        },
        "-=0.5"
      ),
    "-=0.5"
  );

  const role = gsap.timeline({
    scrollTrigger: {
      trigger: "#role",
      scrub: 3,
      pin: true,
      pinSpacing: false,
      markers: true,
      preventOverlaps: true,
      fastScrollEnd: true,
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
        y: 30,
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
      y: 0,
      opacity: 1,
    })
  );

  // frame 4
  role.add(hideTarget("#role h3, #role h5"));
  role.add(
    gsap.timeline().to("#role .container", {
      opacity: 0,
      y: 30,
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
        preventOverlaps: true,
        fastScrollEnd: true,
        pinSpacing: false,
      },
    })
    .set("#theme h3, #theme h5, #theme .block", {
      opacity: 0,
    })
    .set("#theme .block", {
      y: 200,
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
      .to(
        "#map-now",
        {
          top: "6%",
          left: "75%",
          immediateRender: false,
        },
        "-=0.5"
      )
  );

  // frame 2
  theme.add(
    gsap.timeline().to("#theme .block:nth-child(1)", {
      opacity: 1,
      y: 0,
    })
  );

  // frame 3
  theme.add(
    gsap
      .timeline()
      .to("#theme .block:nth-child(1)", {
        opacity: 0,
        y: -500,
      })
      .to(
        "#theme .block:nth-child(2)",
        {
          opacity: 1,
          y: -300,
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
        y: -800,
      })
      .to(
        "#theme .block:nth-child(3)",
        {
          opacity: 1,
          y: -600,
        },
        "-=0.5"
      )
  );

  // frame 5
  theme.add(
    gsap.timeline().to("#theme .block:nth-child(3)", {
      opacity: 0,
      y: -1000,
    })
  );

  // frame 6
  theme.add(hideTarget("#theme h3, #theme h5"));
  theme.add(
    gsap.timeline().fromTo(
      "#character",
      {
        scale: 0.4,
      },
      {
        scale: 0.75,
      }
    ),
    "-=0.5"
  );

  const event = gsap
    .timeline({
      scrollTrigger: {
        trigger: "#schedule",
        end: "bottom+=1000 top",
        scrub: 3,
        pin: true,
        markers: true,
        preventOverlaps: true,
        fastScrollEnd: true,
      },
    })
    .set("#schedule li > div", {
      opacity: 0,
    })
    .set("#schedule li > div:first-child", {
      y: "10%",
    })
    .set("#cloud-3", {
      left: "-35%",
    })
    .set("#cloud-4", {
      right: "-35%",
    })
    .set("#schedule-question", {
      scale: 2,
      opacity: 0,
    });

  // frame 1
  event.add(
    gsap
      .timeline()
      .to("#date-line-mask", {
        left: "100%",
      })
      .to(
        "#map-now",
        {
          top: "36%",
          left: "72%",
          immediateRender: false,
        },
        "-=0.5"
      )
  );

  // frame 2
  event.add(
    gsap
      .timeline()
      .to("#schedule li:nth-child(1) > div:first-child", {
        y: 0,
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
  event.add(
    gsap
      .timeline()
      .to("#schedule li:nth-child(2) > div:first-child", {
        y: 0,
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
  event.add(
    gsap
      .timeline()
      .to("#schedule li:nth-child(3) > div:first-child", {
        y: 0,
      })
      .to(
        "#schedule li:nth-child(3) > div",
        {
          opacity: 1,
        },
        "-=0.5"
      )
  );

  // frame 5
  event.add(
    gsap
      .timeline()

      .to("#schedule ul.container", {
        y: -30,
        opacity: 0,
      })
      .to(
        "#date-line",
        {
          opacity: 0,
        },
        "-=0.5"
      )
  );

  event.add(
    gsap
      .timeline()
      .fromTo(
        "#character",
        {
          scale: 0.75,
        },
        {
          scale: 1,
        }
      )
      .to(
        "#cloud-3",
        {
          left: "-5%",
        },
        "-=0.5"
      )
      .to(
        "#cloud-4",
        {
          right: "-5%",
        },
        "-=0.5"
      ),
    "-=0.5"
  );

  event.add(
    gsap
      .timeline()
      .to("#schedule-question", {
        opacity: 1,
        scale: 1,
        duration: 1,
      })
      .to(
        "#cloud-3",
        {
          left: "5%",
          duration: 1,
        },
        "-=1"
      )
      .to(
        "#cloud-4",
        {
          right: "5%",
          duration: 1,
        },
        "-=1"
      )
      .to(
        "#map-now",
        {
          top: "51%",
          left: "50%",
          immediateRender: false,
        },
        "-=1"
      )
  );

  // frame 6
  event.add(
    gsap
      .timeline()
      .to("#schedule-question", {
        opacity: 0,
        duration: 1,
      })
      .to(
        "#cloud-3",
        {
          opacity: 0,
          scale: 0,
          duration: 1,
        },
        "-=1"
      )
      .to(
        "#cloud-4",
        {
          opacity: 0,
          scale: 0,
          duration: 1,
        },
        "-=1"
      )
      .fromTo(
        "#character",
        {
          scale: 1,
        },
        {
          scale: 0.75,
          duration: 1,
        },
        "-=1"
      )
      .to(
        "#cat",
        {
          scale: 0.8,
        },
        "-=1"
      )
      .fromTo(
        "#prize",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
        },
        "-=1"
      )
      .fromTo(
        "#prize .container",
        {
          x: "-15%",
        },
        {
          x: 0,
          duration: 1,
        },
        "-=1"
      )
      .to(
        "#trophy-light",
        {
          rotate: -180,
          duration: 1,
        },
        "-=1"
      )
  );

  // frame 7
  event.add(
    gsap
      .timeline()
      .to("#prize", {
        opacity: 0,
        duration: 1,
      })
      .to(
        "#prize .container",
        {
          x: "15%",
          duration: 1,
        },
        "-=1"
      )
      .to(
        "#trophy-light",
        {
          rotate: -360,
          duration: 1,
        },
        "-=1"
      )
  );

  const sponsor = gsap
    .timeline({
      scrollTrigger: {
        trigger: "#sponsor",
        scrub: 3,
        pin: true,
        markers: true,
        preventOverlaps: true,
        fastScrollEnd: true,
      },
    })
    .set("#sponsor h3, #sponsor ul.container", {
      opacity: 0,
    })
    .set("#sponsor li:nth-child(1)", {
      y: "10%",
    })
    .set("#sponsor li:nth-child(2)", {
      y: "30%",
    })
    .set("#sponsor li:nth-child(3)", {
      y: "50%",
    })
    .set("#tree-1, #tree-2", {
      scale: 1.5,
      y: "10%",
      opacity: 0,
    })
    .set("#tree-1", {
      x: "-50%",
    })
    .set("#tree-2", {
      x: "50%",
    });

  // frame 1
  sponsor.add(
    gsap
      .timeline()
      .to("#sponsor h3", {
        opacity: 1,
      })
      .to(
        "#tree-1",
        {
          x: "-20%",
          y: "0%",
          opacity: 1,
        },
        "-=0.5"
      )
      .to(
        "#tree-2",
        {
          x: "20%",
          y: "0%",
          opacity: 1,
        },
        "-=0.5"
      )
      .fromTo(
        "#character",
        {
          scale: 0.75,
        },
        {
          scale: 0.8,
        },
        "-=0.5"
      )
      .to(
        "#dog",
        {
          x: "-5%",
        },
        "-=0.5"
      )
      .to(
        "#pig",
        {
          scale: 0.8,
          x: "5%",
          y: "10%",
        },
        "-=0.5"
      )
      .to(
        "#map-now",
        {
          top: "72%",
          left: "32%",
          immediateRender: false,
        },
        "-=0.5"
      )
  );

  // frame 2
  sponsor.add(
    gsap
      .timeline()
      .to("#tree-1, #tree-2", {
        scale: 1,
        x: "0%",
      })
      .to(
        "#sponsor ul",
        {
          opacity: 1,
        },
        "-=0.5"
      )
      .to(
        "#sponsor li",
        {
          y: "0%",
        },
        "-=0.5"
      )
  );

  // frame 3
  sponsor.add(
    gsap
      .timeline()
      .to("#sponsor", {
        opacity: 0,
      })
      .to(
        "#sponsor li",
        {
          yPercent: 10,
        },
        "-=0.5"
      )
      .to(
        "#tree-1",
        {
          x: "20%",
          opacity: 0,
          scale: 0.7,
        },
        "-=0.5"
      )
      .to(
        "#tree-2",
        {
          x: "-20%",
          opacity: 0,
          scale: 0.7,
        },
        "-=0.5"
      )
      .fromTo(
        "#cloud-1",
        {
          x: "-100%",
          y: "70%",
          scale: 1,
        },
        {
          x: "-15%",
          y: "50%",
          scale: 1,
        },
        "-=0.5"
      )
      .fromTo(
        "#cloud-2",
        {
          x: "100%",
          y: "70%",
          scale: 1,
        },
        {
          x: "15%",
          y: "50%",
          scale: 1,
        },
        "-=0.5"
      )
  );

  const finish = gsap.timeline({
    scrollTrigger: {
      trigger: "#finish",
      end: "bottom+=800 bottom",
      pin: true,
      scrub: 3,
      markers: true,
      preventOverlaps: true,
      fastScrollEnd: true,
    },
  });

  // frame 1
  finish.add(
    gsap
      .timeline()
      .fromTo(
        "#goal, #goal-line",
        {
          opacity: 0,
          scale: 2,
        },
        {
          opacity: 1,
          scale: 1,
        }
      )
      .to(
        "#character",
        {
          scale: 1,
        },
        "-=0.5"
      )
      .to(
        "#dog",
        {
          x: "0%",
        },
        "-=0.5"
      )
      .to(
        "#cat",
        {
          scale: 1,
        },
        "-=0.5"
      )
      .to(
        "#pig",
        {
          x: "0%",
          scale: 1,
        },
        "-=0.5"
      )
      .to(
        "#cloud-1",
        {
          x: "30%",
          y: "20%",
        },
        "-=0.5"
      )
      .to(
        "#cloud-2",
        {
          x: "-30%",
          y: "20%",
        },
        "-=0.5"
      )
      .to(
        "#map-now",
        {
          top: "63%",
          left: "10.5%",
        },
        "-=0.5"
      )
      .to(
        "#map-finish",
        {
          opacity: 1,
        },
        "-=0.5"
      )
  );

  // frame 2
  finish.add(
    gsap
      .timeline()
      .fromTo(
        "#goal-line-l",
        {
          x: "2%",
        },
        {
          rotate: "-5deg",
          x: "0%",
          y: "30%",
        }
      )
      .fromTo(
        "#goal-line-r",
        {
          x: "-2%",
        },
        {
          rotate: "5deg",
          x: "0%",
          y: "30%",
        },
        "-=0.5"
      )
      .to(
        "#dog, #cat, #pig",
        {
          scale: 1.2,
        },
        "-=0.5"
      )
      .to(
        "#dog",
        {
          x: "-20%",
        },
        "-=0.5"
      )
      .to(
        "#pig",
        {
          x: "20%",
        },
        "-=0.5"
      )
      .to(
        "#cloud-1",
        {
          x: "50%",
          scale: 0.8,
        },
        "-=0.5"
      )
      .to(
        "#cloud-2",
        {
          x: "-50%",
          scale: 0.8,
        },
        "-=0.5"
      )
  );

  // frame 3
  finish.add(
    gsap
      .timeline()
      .to("#goal-line-l", {
        x: "-50%",
        opacity: 0,
      })
      .to(
        "#goal-line-r",
        {
          x: "50%",
          opacity: 0,
        },
        "-=0.5"
      )
      .to(
        "#dog, #cat, #pig",
        {
          scale: 1.4,
        },
        "-=0.5"
      )
      .to(
        "#dog",
        {
          x: "-40%",
        },
        "-=0.5"
      )
      .to(
        "#pig",
        {
          x: "40%",
        },
        "-=0.5"
      )
      .to(
        "#cloud-1",
        {
          x: "100%",
          scale: 0.6,
          opacity: 0,
        },
        "-=0.5"
      )
      .to(
        "#cloud-2",
        {
          x: "-100%",
          scale: 0.6,
          opacity: 0,
        },
        "-=0.5"
      )
  );

  // frame 4
  finish.add(
    gsap
      .timeline()
      .to("#dog, #cat, #pig", {
        scale: 2,
        opacity: 0,
      })
      .to(
        "#dog",
        {
          x: "-100%",
        },
        "-=0.5"
      )
      .to(
        "#pig",
        {
          x: "100%",
        },
        "-=0.5"
      )
  );

  // frame 5
  finish.add(
    gsap.timeline().to("#goal", {
      opacity: 0,
    })
  );

  // frame 6
  finish.add(
    gsap
      .timeline()
      .fromTo(
        "#signup-logo",
        {
          yPercent: 10,
          opacity: 0,
        },
        {
          yPercent: 0,
          opacity: 1,
        }
      )
      .fromTo(
        "#signup-btn",
        {
          yPercent: 30,
          opacity: 0,
        },
        {
          yPercent: 0,
          opacity: 1,
        },
        "-=0.5"
      )
      .to(
        "#logo-sm",
        {
          opacity: 0,
        },
        "-=0.5"
      )
      .to(
        "#join-btn",
        {
          opacity: 0,
        },
        "-=0.5"
      )
      .to(
        "#map",
        {
          opacity: 0,
        },
        "-=0.5"
      )
  );

  // 沒什麼作用，調用函式的當下就會執行 gsap
  master.add(home);
  master.add(question);
  master.add(role);
  master.add(theme);
  master.add(event);
  master.add(sponsor);
  master.add(finish);
  return master;
}
