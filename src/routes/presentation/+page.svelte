<script>
  import { onMount } from "svelte";

  const board = {
    width: 4300,
    height: 3900,
  };

  const presentationImages = [
    "IMG_6274.jpg",
    "california boardwalk.jpg",
    "california forrest walk.jpg",
    "california me in LA.jpg",
    "california street art.jpg",
    "calisthenics image.jpg",
    "family me and my boys.jpg",
    "family my two boys and niece.jpg",
    "film into the spiderverse.AVIF",
    "food jamaican curried goat.jpg",
    "food sushi.jpg",
    "ikigai - my life philosophy.JPG",
    "legal tech - my ikigai.jpg",
    "me and my dad at golf course.JPG",
    "me and my eldest sister natasha at kendrick lamar.jpg",
    "me and my middle sister.JPG",
    "me as a kid in superman outfit.JPG",
    "me in meixco city with a hummingbird.JPG",
    "me in mexico city with tacos.jpg",
    "me playing golf.JPG",
    "me playing guitar.JPG",
    "mem i made about my son.JPG",
    "meme - accurate about my music and work.JPG",
    "meme about grammar.JPG",
    "my dad and me at eden project before he died.jpg",
    "my eldest son.jpg",
    "my love of plants.JPG",
    "my sacred geometry tattoo.jpg",
    "my two boys hiking.jpg",
  ];

  const evidencePhotos = presentationImages.map((file, index) => {
    const normalized = file.toLowerCase();
    const category = normalized.includes("family") ||
      normalized.includes("son") ||
      normalized.includes("boys") ||
      normalized.includes("dad") ||
      normalized.includes("sister") ||
      normalized.includes("kid")
      ? "family"
      : normalized.includes("california") ||
          normalized.includes("mexico") ||
          normalized.includes("meixco")
        ? "travel"
        : normalized.includes("spiderverse") || normalized.includes("film")
          ? "film"
          : normalized.includes("food") ||
              normalized.includes("tacos") ||
              normalized.includes("sushi")
            ? "food"
            : normalized.includes("kendrick") || normalized.includes("music")
              ? "music"
              : normalized.includes("calisthenics") ||
                  normalized.includes("golf") ||
                  normalized.includes("guitar")
                ? "interests"
                : normalized.includes("legal tech") || normalized.includes("ikigai")
                  ? "work"
            : normalized.includes("plant")
              ? "plants"
              : normalized.includes("tattoo") || normalized.includes("geometry")
                ? "identity"
                : "archive";
    const clusterMap = {
      family: { x: 460, y: 1010, columns: 2 },
      travel: { x: 1190, y: 930, columns: 3 },
      film: { x: 2220, y: 860, columns: 1 },
      food: { x: 2940, y: 1040, columns: 2 },
      music: { x: 3580, y: 1510, columns: 1 },
      interests: { x: 420, y: 2350, columns: 2 },
      work: { x: 2020, y: 2240, columns: 2 },
      plants: { x: 3580, y: 820, columns: 1 },
      identity: { x: 1040, y: 2250, columns: 1 },
      archive: { x: 2160, y: 1680, columns: 3 },
    };
    const categoryIndex = presentationImages
      .slice(0, index)
      .filter((candidate) => {
        const name = candidate.toLowerCase();
        if (category === "family") {
          return (
            name.includes("family") ||
            name.includes("son") ||
            name.includes("boys") ||
            name.includes("dad") ||
            name.includes("sister") ||
            name.includes("kid")
          );
        }
        if (category === "travel") {
          return (
            name.includes("california") ||
            name.includes("mexico") ||
            name.includes("meixco")
          );
        }
        if (category === "film") return name.includes("spiderverse") || name.includes("film");
        if (category === "food") {
          return name.includes("food") || name.includes("tacos") || name.includes("sushi");
        }
        if (category === "music") return name.includes("kendrick") || name.includes("music");
        if (category === "interests") {
          return name.includes("calisthenics") || name.includes("golf") || name.includes("guitar");
        }
        if (category === "work") return name.includes("legal tech") || name.includes("ikigai");
        if (category === "plants") return name.includes("plant");
        if (category === "identity") return name.includes("tattoo") || name.includes("geometry");
        return (
          !name.includes("family") &&
          !name.includes("son") &&
          !name.includes("boys") &&
          !name.includes("dad") &&
          !name.includes("sister") &&
          !name.includes("kid") &&
          !name.includes("california") &&
          !name.includes("mexico") &&
          !name.includes("meixco") &&
          !name.includes("spiderverse") &&
          !name.includes("film") &&
          !name.includes("food") &&
          !name.includes("tacos") &&
          !name.includes("sushi") &&
          !name.includes("kendrick") &&
          !name.includes("music") &&
          !name.includes("calisthenics") &&
          !name.includes("golf") &&
          !name.includes("guitar") &&
          !name.includes("legal tech") &&
          !name.includes("ikigai") &&
          !name.includes("plant") &&
          !name.includes("tattoo") &&
          !name.includes("geometry")
        );
      }).length;
    const cluster = clusterMap[category];
    const column = categoryIndex % cluster.columns;
    const row = Math.floor(categoryIndex / cluster.columns);
    const gapX = 390;
    const gapY = 365;
    const featurePlacement =
      normalized.includes("playing golf")
        ? { x: 2130, y: 2390, rotation: 4 }
        : normalized.includes("playing guitar")
          ? { x: 2510, y: 2410, rotation: -4 }
          : normalized.includes("dad at golf")
            ? { x: 2320, y: 2760, rotation: 3 }
            : null;

    return {
      file,
      x: featurePlacement?.x ?? cluster.x + column * gapX + (row % 2) * 30,
      y: featurePlacement?.y ?? cluster.y + row * gapY,
      rotation: featurePlacement?.rotation ?? [-6, 4, -3, 5, -4, 3][index % 6],
      size: index % 5 === 0 ? "large" : index % 3 === 0 ? "portrait" : "small",
      category,
    };
  });

  const evidenceNodes = [
    { label: "main suspect", x: 520, y: 780, rotation: -7, tone: "yellow" },
    { label: "laughs first", x: 930, y: 1290, rotation: 6, tone: "white" },
    { label: "film trail", x: 1430, y: 740, rotation: -4, tone: "pink" },
    { label: "spider-verse clue", x: 1780, y: 1380, rotation: 5, tone: "yellow" },
    { label: "spidey-sense", x: 2250, y: 790, rotation: 4, tone: "white" },
    { label: "deep focus", x: 2700, y: 1310, rotation: -7, tone: "yellow" },
    { label: "certified plant lover", x: 3220, y: 760, rotation: -5, tone: "pink" },
    { label: "Kendrick file", x: 3740, y: 1320, rotation: 8, tone: "white" },
    { label: "interests cache", x: 760, y: 2180, rotation: 6, tone: "pink" },
    { label: "golf + guitar", x: 1840, y: 2230, rotation: -9, tone: "yellow" },
    { label: "CASE BUILT", x: 2860, y: 2390, rotation: 4, tone: "white" },
  ];

  const postIts = [
    {
      title: "Favourite Films",
      x: 3850,
      y: 1880,
      rotation: -5,
      tone: "yellow",
      items: [
        "Into the Spider-verse",
        "Across the Spider-verse",
        "Interstellar",
        "Inception",
        "The Green Mile",
      ],
    },
    {
      title: "Favourite Batman Films",
      x: 3240,
      y: 2040,
      rotation: 6,
      tone: "pink",
      items: ["Lego Batman", "The Dark Knight", "Dark Knight Rises"],
    },
    {
      title: "Favourite Music",
      x: 3710,
      y: 2320,
      rotation: 4,
      tone: "blue",
      items: ["Kendrick Lamar", "Gotts Street Park", "Anderson Paak"],
    },
    {
      title: "Interests",
      x: 520,
      y: 2450,
      rotation: -6,
      tone: "green",
      items: [
        "Golf",
        "Guitar",
        "Quantum Physics",
        "Economics",
        "Calisthenics",
        "Pyschology",
        "Politics",
      ],
    },
  ];

  const clues = [
    {
      id: "briefing",
      type: "note",
      x: 360,
      y: 310,
      rotation: -5,
      zoom: 0.92,
      eyebrow: "Case file",
      title: "Subject Identified",
      content: "Jay Smith. Known interests include cinema, music, big questions, and suspiciously tidy story arcs.",
    },
    {
      id: "mood",
      type: "image",
      x: 1080,
      y: 430,
      rotation: 4,
      zoom: 0.82,
      eyebrow: "Photo evidence",
      title: "Life In Frames",
      content: "/images/presentation/california street art.jpg",
      caption: "Every picture is a clue. Some are admissible. Most are just excellent context.",
    },
    {
      id: "thread",
      type: "note",
      x: 1770,
      y: 280,
      rotation: -3,
      zoom: 0.9,
      eyebrow: "Working theory",
      title: "Follow The Pattern",
      content: "The thread keeps returning to films, ideas, training, music, and carefully curated chaos.",
    },
    {
      id: "controls",
      type: "document",
      x: 2520,
      y: 520,
      rotation: 3,
      zoom: 0.78,
      eyebrow: "Life goals",
      title: "Life Goals",
      content:
        "- pursue my ikigai\n- know myself\n- be a great dad\n- move to california",
    },
    {
      id: "assets",
      type: "image",
      x: 3350,
      y: 340,
      rotation: -4,
      zoom: 0.76,
      eyebrow: "Exhibit wall",
      title: "Supporting Evidence",
      content: "/images/presentation/ikigai - my life philosophy.JPG",
      caption: "Photos, notes, lists, and loose connections. Classic signs of a compelling suspect profile.",
    },
    {
      id: "motion",
      type: "note",
      x: 3550,
      y: 1180,
      rotation: 5,
      zoom: 0.82,
      eyebrow: "Food evidence",
      title: "Suspect Loves Food",
      content:
        "Particularly tacos, sushi, and Jamaican curried goat.",
    },
    {
      id: "focus",
      type: "document",
      x: 2760,
      y: 1660,
      rotation: -2,
      zoom: 0.84,
      eyebrow: "Favourite word",
      title: "Sonder",
      content:
        "The sudden awareness that every stranger has a life as vivid, complex, and meaningful as your own.",
    },
    {
      id: "ending",
      type: "image",
      x: 1640,
      y: 1780,
      rotation: 3,
      zoom: 0.72,
      eyebrow: "Ikigai",
      title: "Ikigai",
      content: "/images/presentation/legal tech - my ikigai.jpg",
      caption:
        "Jay found his purpose at the intersection of law and technology. Thank you for real.",
    },
    {
      id: "close",
      type: "note",
      x: 700,
      y: 1660,
      rotation: -4,
      zoom: 0.92,
      eyebrow: "Conclusion",
      title: "Case Remains Open",
      content: "The evidence is circumstantial, the connections are dramatic, and the suspect seems oddly pleased.",
    },
  ];

  const stops = [
    ...clues.slice(0, 6).map((clue) => ({
      id: clue.id,
      x: clue.x,
      y: clue.y,
      zoom: clue.zoom ?? 0.82,
      duration: 1700,
    })),
    {
      id: "favourite-music",
      x: postIts[2].x,
      y: postIts[2].y,
      zoom: 0.9,
      duration: 1700,
    },
    {
      id: "interests-cache",
      x: evidenceNodes[8].x,
      y: evidenceNodes[8].y,
      zoom: 1,
      duration: 1700,
    },
    ...clues.slice(6).map((clue) => ({
      id: clue.id,
      x: clue.x,
      y: clue.y,
      zoom: clue.zoom ?? 0.82,
      duration: 1700,
    })),
  ];

  const branchThreads = [
    [clues[0], evidenceNodes[0]],
    [clues[0], evidencePhotos[0]],
    [clues[1], evidencePhotos[5]],
    [clues[1], evidenceNodes[2]],
    [clues[2], evidencePhotos[7]],
    [clues[2], evidenceNodes[3]],
    [clues[3], evidencePhotos[12]],
    [clues[3], evidenceNodes[4]],
    [clues[4], evidencePhotos[17]],
    [clues[4], evidenceNodes[6]],
    [clues[5], evidencePhotos[23]],
    [clues[5], evidenceNodes[7]],
    [clues[6], evidencePhotos[20]],
    [clues[6], evidenceNodes[10]],
    [clues[7], evidencePhotos[20]],
    [clues[7], evidenceNodes[9]],
    [clues[8], evidencePhotos[24]],
    [clues[8], evidenceNodes[8]],
    [evidenceNodes[1], evidencePhotos[2]],
    [evidenceNodes[3], evidencePhotos[9]],
    [evidenceNodes[5], evidencePhotos[14]],
    [evidenceNodes[7], evidencePhotos[21]],
    [evidenceNodes[10], evidencePhotos[23]],
    [clues[5], postIts[0]],
    [clues[6], postIts[1]],
    [postIts[0], postIts[1]],
    [postIts[1], evidencePhotos[8]],
    [postIts[0], postIts[2]],
    [postIts[2], evidencePhotos[14]],
    [clues[8], postIts[3]],
    [postIts[3], evidenceNodes[8]],
    [postIts[3], evidencePhotos[5]],
  ];

  let activeIndex = 0;
  let zoomDelta = 0;
  let viewport = { width: 1280, height: 720 };
  /** @type {HTMLElement | undefined} */
  let presentationEl;
  /** @type {{ src: string; label: string } | null} */
  let selectedPhoto = null;
  let isFullscreen = false;

  $: activeStop = stops[activeIndex];
  $: currentZoom = activeStop
    ? Math.max(0.55, Math.min(1.35, activeStop.zoom + zoomDelta))
    : 1;
  $: cameraTransform = activeStop
    ? `translate3d(${viewport.width / 2 - activeStop.x * currentZoom}px, ${viewport.height / 2 - activeStop.y * currentZoom}px, 0) scale(${currentZoom})`
    : "";
  $: progress = ((activeIndex + 1) / stops.length) * 100;

  /** @param {number} index */
  function moveTo(index) {
    activeIndex = Math.max(0, Math.min(stops.length - 1, index));
    zoomDelta = 0;
  }

  /** @param {number} direction */
  function zoomNode(direction) {
    zoomDelta = Math.max(-0.28, Math.min(0.42, zoomDelta + direction * 0.12));
  }

  /**
   * @param {string} src
   * @param {string} label
   */
  function openPhoto(src, label) {
    selectedPhoto = { src, label };
  }

  function closePhoto() {
    selectedPhoto = null;
  }

  function toggleFullscreen() {
    if (!presentationEl) return;

    if (document.fullscreenElement) {
      document.exitFullscreen();
      return;
    }

    presentationEl.requestFullscreen?.();
  }

  function updateViewport() {
    viewport = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  onMount(() => {
    updateViewport();

    /** @param {KeyboardEvent} event */
    const handleKeydown = (event) => {
      if (event.key === "Escape" && selectedPhoto) {
        event.preventDefault();
        closePhoto();
        return;
      }

      if (event.key === "ArrowRight" || event.key === " ") {
        event.preventDefault();
        moveTo(activeIndex + 1);
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        moveTo(activeIndex - 1);
      }

      if (event.key === "ArrowUp") {
        event.preventDefault();
        zoomNode(1);
      }

      if (event.key === "ArrowDown") {
        event.preventDefault();
        zoomNode(-1);
      }
    };

    const handleFullscreen = () => {
      isFullscreen = Boolean(document.fullscreenElement);
    };

    window.addEventListener("resize", updateViewport);
    window.addEventListener("keydown", handleKeydown);
    document.addEventListener("fullscreenchange", handleFullscreen);

    return () => {
      window.removeEventListener("resize", updateViewport);
      window.removeEventListener("keydown", handleKeydown);
      document.removeEventListener("fullscreenchange", handleFullscreen);
    };
  });

  /**
   * @param {{ x: number; y: number }} from
   * @param {{ x: number; y: number }} to
   * @param {number} index
   */
  function threadPath(from, to, index) {
    const bend = index % 2 === 0 ? -150 : 140;
    const midX = (from.x + to.x) / 2 + (index % 3) * 28;
    const midY = (from.y + to.y) / 2 + bend;

    return `M ${from.x} ${from.y} Q ${midX} ${midY} ${to.x} ${to.y}`;
  }

  /**
   * @param {{ x: number; y: number }} from
   * @param {{ x: number; y: number }} to
   * @param {number} index
   */
  function branchPath(from, to, index) {
    const wobble = index % 2 === 0 ? 80 : -95;
    const firstX = from.x + (to.x - from.x) * 0.34 + wobble;
    const firstY = from.y + (to.y - from.y) * 0.2 - wobble * 0.35;
    const secondX = from.x + (to.x - from.x) * 0.68 - wobble * 0.55;
    const secondY = from.y + (to.y - from.y) * 0.82 + wobble * 0.25;

    return `M ${from.x} ${from.y} C ${firstX} ${firstY}, ${secondX} ${secondY}, ${to.x} ${to.y}`;
  }
</script>

<svelte:head>
  <title>Interactive Conspiracy Board | Suspect: Jay Smith</title>
  <meta
    name="description"
    content="An interactive cinematic evidence board profile for Jay Smith."
  />
</svelte:head>

<section class="presentation-stage" bind:this={presentationEl}>
  <div class="lamp lamp-left"></div>
  <div class="lamp lamp-right"></div>

  <div class="hud topbar">
    <div>
      <p>Interactive Conspiracy Board</p>
      <strong>Suspect: Jay Smith</strong>
    </div>
    <button type="button" on:click={toggleFullscreen}>
      {isFullscreen ? "Exit fullscreen" : "Fullscreen"}
    </button>
  </div>

  <div class="hud controls" aria-label="Presentation controls">
    <span>←</span>
    <span>→ / Space</span>
    <span>↑ / ↓ Zoom</span>
    <span>Esc</span>
  </div>

  <div class="progress" aria-hidden="true">
    <span style={`width: ${progress}%`}></span>
  </div>

  <div
    class="camera"
    class:board-blurred={selectedPhoto}
    style={`transform: ${cameraTransform}`}
  >
    <div class="board" style={`width: ${board.width}px; height: ${board.height}px`}>
      <svg class="threads" viewBox={`0 0 ${board.width} ${board.height}`} aria-hidden="true">
        <defs>
          <filter id="thread-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="7" stdDeviation="5" flood-color="#130706" flood-opacity="0.45" />
          </filter>
        </defs>

        {#each clues.slice(0, -1) as clue, index}
          <path
            class="main-thread"
            class:active-thread={index < activeIndex}
            d={threadPath(clue, clues[index + 1], index)}
            pathLength="1"
          />
        {/each}

        {#each branchThreads as thread, index}
          <path
            class="branch-thread"
            class:active-thread={index < activeIndex * 3}
            d={branchPath(thread[0], thread[1], index)}
            pathLength="1"
          />
        {/each}
      </svg>

      {#each evidencePhotos as photo, index}
        <button
          type="button"
          class={`evidence-photo ${photo.size}`}
          style={`left: ${photo.x}px; top: ${photo.y}px; transform: translate(-50%, -50%) rotate(${photo.rotation}deg);`}
          on:click={() => openPhoto(`/images/presentation/${photo.file}`, photo.file)}
        >
          <span class="pin"></span>
          <img
            src={`/images/presentation/${photo.file}`}
            alt={`Presentation evidence ${index + 1}`}
            loading="eager"
          />
        </button>
      {/each}

      {#each evidenceNodes as node}
        <div
          class={`evidence-node ${node.tone}`}
          class:active={activeStop?.id === "interests-cache" && node.label === "interests cache"}
          style={`left: ${node.x}px; top: ${node.y}px; transform: translate(-50%, -50%) rotate(${node.rotation}deg);`}
        >
          <span class="pin"></span>
          {node.label}
        </div>
      {/each}

      {#each postIts as postIt}
        <section
          class={`post-it ${postIt.tone}`}
          class:active={activeStop?.id === "favourite-music" && postIt.title === "Favourite Music"}
          style={`left: ${postIt.x}px; top: ${postIt.y}px; transform: translate(-50%, -50%) rotate(${postIt.rotation}deg);`}
        >
          <span class="pin"></span>
          <h3>{postIt.title}</h3>
          <ul>
            {#each postIt.items as item}
              <li>{item}</li>
            {/each}
          </ul>
        </section>
      {/each}

      {#each clues as clue, index}
        <article
          class={`clue ${clue.type}`}
          class:active={activeStop?.id === clue.id}
          style={`left: ${clue.x}px; top: ${clue.y}px; transform: translate(-50%, -50%) rotate(${clue.rotation ?? 0}deg);`}
        >
          <span class="pin"></span>
          <p class="eyebrow">{clue.eyebrow}</p>
          <h2>{clue.title}</h2>

          {#if clue.type === "image"}
            <button
              type="button"
              class="clue-image-button"
              on:click={() => openPhoto(clue.content, clue.title)}
            >
              <img src={clue.content} alt={clue.title} />
            </button>
            <p class="caption">{clue.caption}</p>
          {:else if clue.type === "document"}
            <pre>{clue.content}</pre>
          {:else}
            <p>{clue.content}</p>
          {/if}
        </article>
      {/each}

      <div class="annotation a-one">start here</div>
      <div class="annotation a-two">wannabe foodie</div>
      <div class="annotation a-three">interests overlap</div>
      <div class="tape tape-one"></div>
      <div class="tape tape-two"></div>
      <div class="newspaper">SUSPECT PROFILE<br />EXPANDS</div>
    </div>
  </div>

  <div class="spotlight"></div>

  {#if selectedPhoto}
    <button
      type="button"
      class="photo-modal-backdrop"
      aria-label="Close enlarged evidence photo"
      on:click={closePhoto}
    ></button>
    <div class="photo-modal" role="dialog" aria-modal="true" aria-label="Enlarged evidence photo">
      <button type="button" class="modal-close" aria-label="Close" on:click={closePhoto}>
        ×
      </button>
      <img
        src={selectedPhoto.src}
        alt={`Enlarged evidence: ${selectedPhoto.label}`}
      />
      <p>{selectedPhoto.label.replace(/\.[^.]+$/, "")}</p>
    </div>
  {/if}
</section>

<style>
  :global(body:has(.presentation-stage)) {
    overflow: hidden;
    background: #0f0d0a;
  }

  .presentation-stage {
    position: fixed;
    inset: 0;
    z-index: 999;
    overflow: hidden;
    color: #2a1711;
    background:
      radial-gradient(circle at 42% 36%, rgba(255, 210, 137, 0.18), transparent 26%),
      linear-gradient(135deg, #15100d 0%, #241711 44%, #0a0807 100%);
    font-family:
      Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }

  .camera {
    position: absolute;
    left: 0;
    top: 0;
    transform-origin: 0 0;
    transition: transform 1.65s cubic-bezier(0.22, 0.86, 0.2, 1);
    will-change: transform;
  }

  .camera.board-blurred {
    filter: blur(8px) brightness(0.55);
    transition:
      transform 1.65s cubic-bezier(0.22, 0.86, 0.2, 1),
      filter 0.35s ease;
  }

  .board {
    position: relative;
    overflow: hidden;
    background:
      radial-gradient(circle at 22% 18%, rgba(255, 236, 191, 0.16), transparent 20%),
      radial-gradient(circle at 68% 38%, rgba(90, 45, 25, 0.18), transparent 30%),
      repeating-linear-gradient(7deg, rgba(83, 43, 24, 0.18) 0 2px, transparent 2px 18px),
      linear-gradient(135deg, #a46a3b, #7b4529 48%, #52301f);
    box-shadow: inset 0 0 180px rgba(23, 10, 5, 0.72);
  }

  .board::before {
    position: absolute;
    inset: 0;
    content: "";
    opacity: 0.26;
    background-image:
      radial-gradient(#3b2114 1px, transparent 1px),
      radial-gradient(#e5b57d 1px, transparent 1px);
    background-position:
      0 0,
      9px 8px;
    background-size: 18px 18px;
    mix-blend-mode: multiply;
  }

  .threads {
    position: absolute;
    inset: 0;
    z-index: 1;
    overflow: visible;
  }

  .threads path {
    fill: none;
    stroke: #8f1113;
    stroke-linecap: round;
    stroke-dasharray: 1;
    stroke-dashoffset: 0.34;
    filter: url("#thread-shadow");
    opacity: 0.64;
    transition:
      stroke-dashoffset 1.2s ease,
      opacity 0.8s ease;
  }

  .threads .main-thread {
    stroke-width: 9;
  }

  .threads .branch-thread {
    stroke-width: 5;
    stroke: #a21417;
    stroke-dashoffset: 0.58;
    opacity: 0.44;
  }

  .threads path.active-thread {
    stroke-dashoffset: 0;
    opacity: 0.96;
  }

  .clue {
    position: absolute;
    z-index: 4;
    width: 410px;
    min-height: 250px;
    padding: 30px;
    transform-origin: center;
    box-shadow: 0 24px 40px rgba(24, 10, 4, 0.38);
    transition:
      filter 0.9s ease,
      box-shadow 0.9s ease,
      opacity 0.9s ease;
  }

  .clue.active {
    z-index: 5;
    filter: saturate(1.08) contrast(1.06);
    box-shadow: 0 32px 60px rgba(18, 7, 3, 0.48), 0 0 0 7px rgba(255, 238, 190, 0.18);
  }

  .note {
    background:
      linear-gradient(165deg, rgba(255, 247, 160, 0.96), rgba(238, 196, 78, 0.96)),
      #f4d35e;
  }

  .document {
    background:
      linear-gradient(90deg, rgba(106, 60, 35, 0.08) 0 1px, transparent 1px 34px),
      linear-gradient(#f7efe2, #e7d6bd);
    border: 1px solid rgba(63, 37, 23, 0.18);
  }

  .image {
    width: 520px;
    padding: 22px 22px 34px;
    background: #f3eee5;
  }

  .image img {
    display: block;
    width: 100%;
    height: 280px;
    object-fit: cover;
    border: 1px solid rgba(65, 37, 24, 0.2);
    filter: sepia(0.14) contrast(1.04);
  }

  .clue-image-button {
    display: block;
    width: 100%;
    border: 0;
    padding: 0;
    background: transparent;
    cursor: zoom-in;
  }

  .clue-image-button:focus-visible,
  .evidence-photo:focus-visible {
    outline: 8px solid rgba(255, 238, 190, 0.72);
    outline-offset: 8px;
  }

  .pin {
    position: absolute;
    left: 50%;
    top: 12px;
    width: 24px;
    height: 24px;
    border-radius: 999px;
    background:
      radial-gradient(circle at 35% 32%, #ffd9d9 0 14%, transparent 15%),
      linear-gradient(135deg, #b81518, #5d0709);
    box-shadow: 0 8px 12px rgba(41, 8, 6, 0.38);
    transform: translateX(-50%);
  }

  .evidence-photo {
    position: absolute;
    z-index: 2;
    width: 250px;
    border: 0;
    padding: 14px 14px 32px;
    background: #f2eadf;
    box-shadow: 0 18px 30px rgba(24, 10, 4, 0.34);
    cursor: zoom-in;
    transform-origin: center;
  }

  .evidence-photo::after {
    position: absolute;
    right: 18px;
    bottom: 10px;
    color: rgba(41, 25, 16, 0.52);
    content: "EVIDENCE";
    font-size: 13px;
    font-weight: 900;
    letter-spacing: 0;
  }

  .evidence-photo.large {
    width: 330px;
  }

  .evidence-photo.portrait {
    width: 220px;
  }

  .evidence-photo img {
    display: block;
    width: 100%;
    height: 190px;
    object-fit: cover;
    border: 1px solid rgba(65, 37, 24, 0.2);
    filter: sepia(0.12) contrast(1.05) saturate(0.96);
  }

  .evidence-photo.large img {
    height: 235px;
  }

  .evidence-photo.portrait img {
    height: 260px;
  }

  .evidence-node {
    position: absolute;
    z-index: 3;
    min-width: 126px;
    padding: 30px 18px 20px;
    color: #311b12;
    background: #f3d665;
    box-shadow: 0 18px 26px rgba(24, 10, 4, 0.3);
    font-family: "Bradley Hand", "Segoe Print", cursive;
    font-size: 30px;
    font-weight: 800;
    line-height: 0.95;
    text-align: center;
  }

  .evidence-node.white {
    background:
      linear-gradient(90deg, rgba(109, 65, 41, 0.08) 0 1px, transparent 1px 22px),
      #efe5d3;
    font-family: Georgia, "Times New Roman", serif;
    font-size: 24px;
    text-transform: uppercase;
  }

  .evidence-node.pink {
    background: #e7aaa2;
  }

  .evidence-node.active {
    z-index: 5;
    box-shadow: 0 32px 60px rgba(18, 7, 3, 0.48), 0 0 0 7px rgba(255, 238, 190, 0.18);
    filter: saturate(1.08) contrast(1.06);
  }

  .post-it {
    position: absolute;
    z-index: 3;
    width: 360px;
    padding: 34px 28px 28px;
    color: #2b1a11;
    background:
      linear-gradient(165deg, rgba(255, 247, 160, 0.98), rgba(238, 196, 78, 0.98)),
      #f3d665;
    box-shadow: 0 22px 34px rgba(24, 10, 4, 0.34);
    transform-origin: center;
  }

  .post-it.active {
    z-index: 5;
    box-shadow: 0 32px 60px rgba(18, 7, 3, 0.48), 0 0 0 7px rgba(255, 238, 190, 0.18);
    filter: saturate(1.08) contrast(1.06);
  }

  .post-it.pink {
    background:
      linear-gradient(165deg, rgba(250, 202, 198, 0.98), rgba(222, 139, 130, 0.98)),
      #e7aaa2;
  }

  .post-it.blue {
    background:
      linear-gradient(165deg, rgba(189, 226, 232, 0.98), rgba(109, 180, 191, 0.98)),
      #9fd0d7;
  }

  .post-it.green {
    background:
      linear-gradient(165deg, rgba(207, 232, 176, 0.98), rgba(128, 178, 95, 0.98)),
      #b7d889;
  }

  .post-it h3 {
    margin: 0 0 16px;
    color: #5f090a;
    font-family: "Bradley Hand", "Segoe Print", cursive;
    font-size: 36px;
    font-weight: 900;
    line-height: 0.95;
  }

  .post-it ul {
    display: grid;
    gap: 8px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .post-it li {
    position: relative;
    padding-left: 20px;
    font-family: "Bradley Hand", "Segoe Print", cursive;
    font-size: 24px;
    font-weight: 800;
    line-height: 1.08;
  }

  .post-it li::before {
    position: absolute;
    left: 0;
    top: 0.28em;
    width: 9px;
    height: 9px;
    border-radius: 999px;
    background: #8f1113;
    content: "";
  }

  .eyebrow {
    margin: 6px 0 10px;
    color: #7d1a16;
    font-size: 13px;
    font-weight: 800;
    letter-spacing: 0;
    text-transform: uppercase;
  }

  h2 {
    margin: 0 0 16px;
    color: #26140d;
    font-family: Georgia, "Times New Roman", serif;
    font-size: 42px;
    line-height: 0.96;
  }

  .clue p,
  .clue pre {
    margin: 0;
    color: #312016;
    font-size: 23px;
    line-height: 1.25;
    white-space: pre-wrap;
  }

  .caption {
    padding-top: 16px;
    font-size: 18px;
  }

  .hud {
    position: fixed;
    z-index: 20;
    color: #f8ead2;
    text-shadow: 0 2px 12px rgba(0, 0, 0, 0.55);
  }

  .topbar {
    top: 24px;
    left: 28px;
    right: 28px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 24px;
    pointer-events: none;
  }

  .topbar p {
    margin: 0 0 4px;
    color: rgba(248, 234, 210, 0.72);
    font-size: 13px;
    font-weight: 800;
    letter-spacing: 0;
    text-transform: uppercase;
  }

  .topbar strong {
    display: block;
    font-family: Georgia, "Times New Roman", serif;
    font-size: clamp(28px, 4vw, 56px);
    line-height: 1;
  }

  .topbar button {
    pointer-events: auto;
    border: 1px solid rgba(248, 234, 210, 0.38);
    border-radius: 999px;
    padding: 11px 16px;
    color: #f8ead2;
    background: rgba(12, 8, 6, 0.52);
    backdrop-filter: blur(12px);
    font-weight: 800;
  }

  .controls {
    right: 28px;
    bottom: 28px;
    display: flex;
    gap: 8px;
  }

  .controls span {
    border: 1px solid rgba(248, 234, 210, 0.24);
    border-radius: 999px;
    padding: 9px 12px;
    background: rgba(12, 8, 6, 0.48);
    font-size: 13px;
    font-weight: 800;
    backdrop-filter: blur(10px);
  }

  .progress {
    position: fixed;
    z-index: 20;
    left: 28px;
    right: 28px;
    bottom: 25px;
    height: 3px;
    overflow: hidden;
    border-radius: 999px;
    background: rgba(248, 234, 210, 0.18);
  }

  .progress span {
    display: block;
    height: 100%;
    border-radius: inherit;
    background: #d33128;
    transition: width 0.45s ease;
  }

  .spotlight,
  .lamp {
    pointer-events: none;
    position: fixed;
    z-index: 15;
  }

  .spotlight {
    inset: 0;
    background:
      radial-gradient(circle at 50% 48%, transparent 0 42%, rgba(0, 0, 0, 0.42) 76%),
      linear-gradient(90deg, rgba(0, 0, 0, 0.34), transparent 22% 78%, rgba(0, 0, 0, 0.34));
  }

  .photo-modal-backdrop {
    position: fixed;
    inset: 0;
    z-index: 30;
    border: 0;
    background: rgba(8, 5, 4, 0.72);
    backdrop-filter: blur(7px);
  }

  .photo-modal {
    position: fixed;
    left: 50%;
    top: 50%;
    z-index: 31;
    width: min(86vw, 1120px);
    max-height: 86vh;
    padding: 18px 18px 46px;
    background: #f3eee5;
    box-shadow: 0 44px 90px rgba(0, 0, 0, 0.58);
    transform: translate(-50%, -50%) rotate(-1deg);
  }

  .photo-modal img {
    display: block;
    width: 100%;
    max-height: calc(86vh - 92px);
    object-fit: contain;
    background: #1a120d;
  }

  .photo-modal p {
    position: absolute;
    left: 22px;
    right: 72px;
    bottom: 14px;
    margin: 0;
    overflow: hidden;
    color: rgba(41, 25, 16, 0.72);
    font-size: 16px;
    font-weight: 900;
    text-overflow: ellipsis;
    text-transform: uppercase;
    white-space: nowrap;
  }

  .modal-close {
    position: absolute;
    right: -18px;
    top: -18px;
    z-index: 1;
    width: 48px;
    height: 48px;
    border: 2px solid rgba(248, 234, 210, 0.72);
    border-radius: 999px;
    color: #f8ead2;
    background: #7d1a16;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.34);
    font-size: 30px;
    font-weight: 900;
    line-height: 1;
  }

  .lamp {
    width: 45vw;
    height: 45vw;
    border-radius: 999px;
    background: radial-gradient(circle, rgba(255, 203, 112, 0.18), transparent 62%);
    mix-blend-mode: screen;
    animation: flicker 4.8s ease-in-out infinite;
  }

  .lamp-left {
    left: -16vw;
    top: -22vw;
  }

  .lamp-right {
    right: -18vw;
    bottom: -24vw;
    animation-delay: -2.1s;
  }

  .annotation {
    position: absolute;
    z-index: 4;
    color: #5f090a;
    font-family: "Bradley Hand", "Segoe Print", cursive;
    font-size: 38px;
    font-weight: 700;
    transform: rotate(-9deg);
  }

  .a-one {
    left: 1420px;
    top: 760px;
  }

  .a-two {
    left: 3050px;
    top: 980px;
    transform: rotate(10deg);
  }

  .a-three {
    left: 1180px;
    top: 2140px;
    transform: rotate(-6deg);
  }

  .tape {
    position: absolute;
    z-index: 6;
    width: 170px;
    height: 48px;
    background: rgba(238, 219, 174, 0.56);
    box-shadow: 0 10px 18px rgba(36, 17, 8, 0.18);
  }

  .tape-one {
    left: 3200px;
    top: 150px;
    transform: rotate(17deg);
  }

  .tape-two {
    left: 1480px;
    top: 1540px;
    transform: rotate(-12deg);
  }

  .newspaper {
    position: absolute;
    left: 2120px;
    top: 1120px;
    z-index: 2;
    width: 420px;
    padding: 36px 28px;
    color: #292018;
    background:
      repeating-linear-gradient(#d9d0bf 0 16px, #cfc3ad 17px 18px),
      #d9d0bf;
    box-shadow: 0 22px 36px rgba(24, 10, 4, 0.35);
    font-family: Georgia, "Times New Roman", serif;
    font-size: 42px;
    line-height: 0.9;
    text-align: center;
    transform: rotate(-6deg);
  }

  @keyframes flicker {
    0%,
    100% {
      opacity: 0.8;
    }

    45% {
      opacity: 0.52;
    }

    47% {
      opacity: 0.7;
    }
  }

  @media (max-width: 760px) {
    .topbar {
      top: 16px;
      left: 16px;
      right: 16px;
    }

    .topbar button {
      padding: 9px 12px;
      font-size: 12px;
    }

    .controls {
      display: none;
    }

    .progress {
      left: 16px;
      right: 16px;
    }
  }
</style>
