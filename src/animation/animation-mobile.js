import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function animationMobile() {
  const master = gsap.timeline({
    scrollTrigger: {
      trigger: "#home",
      endTrigger: "#signup",
      start: "top top",
      end: "top-=300 top",
      // end: "bottom+=7800 top",
      scrub: 3,
      markers: true,
    },
    defaults: {
      duration: 1,
    },
  });

  master
    .addLabel("home")
    .to("#signals", {
      opacity: 0,
    })
    .addLabel("question")
    .fromTo(
      "#question h3",
      {
        y: "100%",
        opacity: 0,
      },
      {
        y: "0%",
        opacity: 1,
      },
      "-=1"
    )
    .to(
      "#character",
      {
        scale: 0.5,
      },
      "-=1"
    );

  master
    .fromTo(
      "#participants",
      {
        opacity: 1,
      },
      {
        opacity: 0,
      }
    )
    .fromTo(
      "#question .block:nth-child(1)",
      {
        x: "-100%",
        opacity: 0,
      },
      {
        x: "0%",
        opacity: 1,
      },
      "-=1"
    );

  master.fromTo(
    "#question .block:nth-child(2)",
    {
      opacity: 0,
    },
    {
      opacity: 1,
    }
    // "+=2"
  );

  master.fromTo(
    "#question .block:nth-child(3)",
    {
      x: "200%",
      opacity: 0,
    },
    {
      x: "0%",
      opacity: 1,
    }
    // "+=3"
  );

  master.addLabel("role").fromTo(
    "#role h3, #role h5",
    {
      y: "100%",
      opacity: 0,
    },
    {
      y: "0%",
      opacity: 1,
    }
    // "+=4"
  );

  master.fromTo(
    "#role .group:nth-child(1)",
    {
      x: "100%",
      opacity: 0,
    },
    {
      x: "0",
      opacity: 1,
    }
    // "+=5"
  );

  master.fromTo(
    "#role .group:nth-child(2)",
    {
      x: "-100%",
      opacity: 0,
    },
    {
      x: "0",
      opacity: 1,
    }
    // "+=6"
  );

  master.fromTo(
    "#role .group:nth-child(3)",
    {
      x: "100%",
      opacity: 0,
    },
    {
      x: "0",
      opacity: 1,
    }
    // "+=7"
  );

  master.addLabel("theme").fromTo(
    "#theme h3, #theme h5",
    {
      y: "100%",
      opacity: 0,
    },
    {
      y: "0%",
      opacity: 1,
    }
    // "+=8"
  );

  master.fromTo(
    "#theme .block:nth-child(1)",
    {
      y: "100%",
      opacity: 0,
    },
    {
      y: "0%",
      opacity: 1,
    }
    // "+=9"
  );

  master.fromTo(
    "#theme .block:nth-child(2)",
    {
      y: "100%",
      opacity: 0,
    },
    {
      y: "0%",
      opacity: 1,
    }
    // "+=10"
  );

  master.fromTo(
    "#theme .block:nth-child(3)",
    {
      y: "100%",
      opacity: 0,
    },
    {
      y: "0%",
      opacity: 1,
    }
    // "+=11"
  );

  master.addLabel("schedule").fromTo(
    "#schedule h3",
    {
      y: "100%",
      opacity: 0,
    },
    {
      y: "0%",
      opacity: 1,
    }
    // "+=12"
  );

  master.fromTo(
    "#schedule li:nth-child(1)",
    {
      y: "100%",
      opacity: 0,
    },
    {
      y: "0%",
      opacity: 1,
    }
    // "+=13"
  );

  master.fromTo(
    "#schedule li:nth-child(2)",
    {
      y: "100%",
      opacity: 0,
    },
    {
      y: "0%",
      opacity: 1,
    }
    // "+=14"
  );

  master.fromTo(
    "#schedule li:nth-child(3)",
    {
      y: "100%",
      opacity: 0,
    },
    {
      y: "0%",
      opacity: 1,
    }
    // "+=15"
  );

  master.fromTo(
    "#schedule-question",
    {
      scale: 2,
      opacity: 0,
    },
    {
      scale: 1,
      opacity: 1,
    }
    // "+=16"
  );

  master.addLabel("prize").fromTo(
    "#prize h3",
    {
      y: "100%",
      opacity: 0,
    },
    {
      y: "0%",
      opacity: 1,
    }
    // "+=17"
  );

  master
    .fromTo(
      "#trophy",
      {
        y: "100%",
        opacity: 0,
      },
      {
        y: "0%",
        opacity: 1,
      }
      // "+=18"
    )
    .to(
      "#trophy-light",
      {
        rotate: "-270deg",
      },
      "-=1"
    );

  master
    .to(
      "#trophy-light",
      {
        rotate: "-540deg",
      } // "+=19"
    )
    .fromTo(
      "#prize-content",
      {
        y: "100%",
        opacity: 0,
      },
      {
        y: "0%",
        opacity: 1,
      },
      "-=1"
    );

  master
    .to(
      "#trophy-light",
      {
        rotate: "-810deg",
      } // "+=20"
    )
    .fromTo(
      "#sponsor h3",
      {
        y: "100%",
        opacity: 0,
      },
      {
        y: "0%",
        opacity: 1,
      },
      "-=1"
    );

  master.fromTo(
    "#sponsor li:nth-child(1)",
    {
      y: "100%",
      opacity: 0,
    },
    {
      y: "0%",
      opacity: 1,
    }
    // "+=21"
  );

  master.fromTo(
    "#sponsor li:nth-child(2)",
    {
      y: "100%",
      opacity: 0,
    },
    {
      y: "0%",
      opacity: 1,
    }
    // "+=22"
  );

  master.fromTo(
    "#sponsor li:nth-child(3)",
    {
      y: "100%",
      opacity: 0,
    },
    {
      y: "0%",
      opacity: 1,
    }
    // "+=23"
  );

  master
    .fromTo(
      "#signup-logo",
      {
        y: "50%",
        opacity: 0,
      },
      {
        y: "0%",
        opacity: 1,
      }
      // "+=24"
    )
    .fromTo(
      "#signup-btn",
      {
        y: "300%",
        opacity: 0,
      },
      {
        y: "0%",
        opacity: 1,
      },
      "-=1"
    )
    .to(
      "#character",
      {
        scale: 1,
      },
      "-=1"
    );
}
