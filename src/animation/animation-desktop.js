import { gsap } from "gsap";

function moveClouds(x, scale) {
  const tl = gsap
    .timeline()
    .to("#cloud-1", {
      x,
      scale,
    })
    .to(
      "#cloud-2",
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
  });
  return tl;
}

export default function animationDesktop() {
  const master = gsap.timeline();
  // frame 1
  master.add(moveClouds(100, 0.8));
  master.add(showRedSignal());

  // frame 2
  master.add(moveClouds(200, 0.7));
  master.add(showYellowSignal(), "-=0.5");

  // frame 3
  master.add(moveClouds(300, 0));
  master.add(showGreenSignal(), "-=0.5");

  // frame 4
  master.add(hideTarget("#readyFrame, #participants"));

  // frame 5
  master.add(hideTarget("#startLine, h1, #logo"));
  master.add(showSmallLogo(), "-=0.5");
  return master;
}
