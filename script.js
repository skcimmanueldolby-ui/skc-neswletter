/* =========================================================
   SEVA KENDRA CALCUTTA
   LIQUID GLASS NEWSLETTER ARCHIVE
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  const app = document.getElementById("newsletter-app");

  if (!app) return;


  /* =======================================================
     NEWSLETTER DATA
     ======================================================= */

  const archiveData = [
    {
      year: "2026",
      meta: "Current newsletter collection",
      newsletters: [
        {
          month: "September",
          url: "https://sevakendracalcutta.org/storage/files/X4ANXYafyt17zkvITDDnFgoO7WVH5wwyW5Z9s58F.pdf"
        },
        {
          month: "August",
          url: "https://sevakendracalcutta.org/storage/files/fCS0koYGKlXniGLIZKPIYpKBUAW2NxzZSscCMTPK.pdf"
        },
        {
          month: "July",
          url: "https://sevakendracalcutta.org/storage/files/zT6Eqc9gDPbQ7pnuhCAMhHk1gkkluCXgA7uTJlmT.pdf"
        },
        {
          month: "June",
          url: "https://sevakendracalcutta.org/storage/files/ZEBnTKTcBcDf8jwelxgFP53EoNB85q0rplQ72uXc.pdf"
        },
        {
          month: "May",
          url: "https://sevakendracalcutta.org/storage/files/WeqtJhTMeTNGhOVjGxQQxLdFT54GuzZg5GyOcpnd.pdf"
        },
        {
          month: "March",
          url: "https://sevakendracalcutta.org/storage/files/pZp0HFJSZ9ywMQsQsLGorwQe9BQv7ziLVeYJHrH7.pdf"
        },
        {
          month: "February",
          url: "https://sevakendracalcutta.org/storage/files/zAhQHnwDglUmrHuznSufGnHtyUn9nqH40VKBXUIH.pdf"
        },
        {
          month: "January",
          url: "https://sevakendracalcutta.org/storage/files/ceiq60DfzmC4vgjGR5arrecbfYCWJkLvWb5HjtR8.pdf"
        }
      ]
    },

    {
      year: "2025",
      meta: "Newsletter collection",
      newsletters: [
        {
          month: "December",
          url: "https://sevakendracalcutta.org/storage/files/reDs3aWdb95R2YixT40AJGskM4BjpPfVLl5tkhFH.pdf"
        },
        {
          month: "November",
          url: "https://sevakendracalcutta.org/storage/files/CQrnzzrVzT06J420TQGtnhHd0AWCwhvNAnS7apLA.pdf"
        },
        {
          month: "October",
          url: "https://sevakendracalcutta.org/storage/files/q1rIBOetCzv5Ob2kGmud5xJTDlTavHnNJCNtSxp2.pdf"
        },
        {
          month: "September",
          url: "https://sevakendracalcutta.org/storage/files/IK0dlDck7Njz7P7uYliNmBy5KXUh2xHi2CpBdmDN.pdf"
        },
        {
          month: "August",
          url: "https://sevakendracalcutta.org/storage/files/wFA0cRkbtCociK31MwLoHBZXYkYEiarzWkl9eLnc.pdf"
        },
        {
          month: "July",
          url: "https://sevakendracalcutta.org/storage/files/MlQsslpxh2nubsiM4apdBnAHCrgSlcz4mYqsie88.pdf"
        },
        {
          month: "June",
          url: "https://sevakendracalcutta.org/storage/files/lYK2KqDEwgm9p8WqORFfJKSfXUkSFnARzdsMfALw.pdf"
        },
        {
          month: "May",
          url: "https://sevakendracalcutta.org/storage/files/jo9nZNgl093sdblMOGQFLCZWd1Uxy2tuitBFjzCT.pdf"
        },
        {
          month: "April",
          url: "https://sevakendracalcutta.org/storage/files/QYvo9U09cqMhbAOIt7I7pEEQeNCdRuTUW7kWX6OE.pdf"
        },
        {
          month: "March",
          url: "https://sevakendracalcutta.org/storage/files/5b101a3fe2uMilho54EFMJIiR7iX2hMka9UmYTNp.pdf"
        },
        {
          month: "February",
          url: "https://sevakendracalcutta.org/storage/files/P5iI1fCyoKP3BGNtZUap9FB5jjiPEV7kkxciKx88.pdf"
        },
        {
          month: "January",
          url: "https://sevakendracalcutta.org/storage/files/0MjBuQ2HTmolG5XtdL0rEuXPE64GMwUzPo2Tzxr5.pdf"
        }
      ]
    },

    {
      year: "2024",
      meta: "Newsletter collection",
      newsletters: [
        {
          month: "September",
          url: "https://sevakendracalcutta.org/storage/files/FBafa3OedkT8ArP4H7EqdFgUwKH3ZpSbQqqY4QHy.pdf"
        },
        {
          month: "August",
          url: "https://sevakendracalcutta.org/storage/files/EkSUS1tcuIWjcMWGFYSJdPRArqWvsqr0wiMiskOV.pdf"
        },
        {
          month: "July",
          url: "https://sevakendracalcutta.org/storage/files/T88sQSqZubVDvv7UNy318rqsCJxaFV2d2n8og8sg.pdf"
        },
        {
          month: "June",
          url: "https://sevakendracalcutta.org/storage/files/cZw0t2GOW3uOYw5sJijj3jKrHqInbqXuVzJ9veY4.pdf"
        },
        {
          month: "May",
          url: "https://sevakendracalcutta.org/storage/files/y9thwyjFZyAqst2pNDjbnXXYhaU4iDCS9pwTcmZ0.pdf"
        },
        {
          month: "April",
          url: "https://sevakendracalcutta.org/storage/files/H06cNAcrr07w3x0jLI2bFZKmXQX7zhLZbKnCEame.pdf"
        },
        {
          month: "March",
          url: "https://sevakendracalcutta.org/storage/files/1x6WznK4mgJo8wfYRiPBR2GJKQMUa02djPYYmknt.pdf"
        },
        {
          month: "February",
          url: "https://sevakendracalcutta.org/storage/files/kr2l7ca8ckLmSB67Z7lPLTNQs48STfkjfiU5Home.pdf"
        }
      ]
    },

    {
      year: "2023",
      meta: "Archive currently unavailable",
      newsletters: []
    },

    {
      year: "2022",
      meta: "Newsletter collection",
      newsletters: [
        {
          month: "June",
          url: "newsletter/june2022.pdf"
        },
        {
          month: "May",
          url: "newsletter/may2022.pdf"
        },
        {
          month: "April",
          url: "newsletter/apr2022.pdf"
        },
        {
          month: "March",
          url: "newsletter/mar2022.pdf"
        },
        {
          month: "February",
          url: "newsletter/feb2022.pdf"
        },
        {
          month: "January",
          url: "newsletter/jan2022.pdf"
        }
      ]
    }
  ];


  /* =======================================================
     CALCULATE TOTALS
     ======================================================= */

  const totalEditions = archiveData.reduce(
    (total, year) => total + year.newsletters.length,
    0
  );

  const totalYears = archiveData.length;


  /* =======================================================
     CREATE PAGE
     ======================================================= */

  app.innerHTML = `
    <div class="ambient-orb one"></div>
    <div class="ambient-orb two"></div>

    <main class="newsletter-page">

      <section class="hero">

        <div class="hero-content">

          <div>

            <div class="eyebrow">
              <span class="eyebrow-dot"></span>
              Seva Kendra Calcutta
            </div>

            <h1>
              Newsletter
              <span>Archive.</span>
            </h1>

            <p>
              Explore our collection of newsletters documenting
              community initiatives, development programmes, events,
              stories and milestones from Seva Kendra Calcutta.
            </p>

          </div>

          <div class="hero-stats">

            <div class="stat">
              <strong id="editionCount">0</strong>
              <small>Editions</small>
            </div>

            <div class="stat">
              <strong id="yearCount">0</strong>
              <small>Years</small>
            </div>

          </div>

        </div>

      </section>


      <section class="toolbar">

        <div class="search">

          <i class="fa-solid fa-magnifying-glass"></i>

          <input
            id="searchInput"
            type="search"
            placeholder="Search newsletters by month or year..."
            autocomplete="off"
            aria-label="Search newsletters"
          >

        </div>

        <div
          class="result"
          id="resultText"
        >
          Showing all editions
        </div>

      </section>


      <section
        class="years"
        id="yearsContainer"
      ></section>


      <div class="footer">
        <span>
          <i class="fa-regular fa-file-lines"></i>
          Click any edition to open the newsletter PDF
        </span>
      </div>

    </main>
  `;


  /* =======================================================
     RENDER ARCHIVE
     ======================================================= */

  const yearsContainer =
    document.getElementById("yearsContainer");

  function renderArchive() {

    yearsContainer.innerHTML =
      archiveData.map((year, yearIndex) => {

        const count = year.newsletters.length;

        let contentHTML = "";

        if (count === 0) {

          contentHTML = `
            <div class="empty">
              <i class="fa-regular fa-folder-open"></i>
              Newsletter editions for ${year.year}
              are not currently listed.
            </div>
          `;

        } else {

          contentHTML = `
            <div class="newsletters">

              ${year.newsletters.map((newsletter) => `

                <article
                  class="newsletter"
                  data-search="${newsletter.month} ${year.year}"
                >

                  <a
                    class="newsletter-link"
                    href="${newsletter.url}"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open ${newsletter.month} ${year.year} newsletter"
                  >

                    <span class="pdf-icon">
                      <i class="fas fa-file-pdf"></i>
                    </span>

                    <span class="month">

                      <strong>
                        ${newsletter.month} ${year.year}
                      </strong>

                      <small>
                        Open newsletter PDF
                      </small>

                    </span>

                    <span class="open">
                      <i class="fas fa-arrow-up-right-from-square"></i>
                    </span>

                  </a>

                </article>

              `).join("")}

            </div>
          `;
        }


        return `
          <article
            class="year ${yearIndex === 0 ? "active" : ""}"
            data-year="${year.year}"
          >

            <button
              class="year-button"
              type="button"
              aria-expanded="${yearIndex === 0 ? "true" : "false"}"
            >

              <span class="year-icon">
                <i class="fa-solid fa-calendar-days"></i>
              </span>

              <span>

                <span class="year-title">
                  ${year.year}
                </span>

                <span class="year-meta">
                  ${year.meta}
                </span>

              </span>

              <span class="year-count">
                <strong>${count}</strong>
                ${count === 1 ? "edition" : "editions"}
              </span>

              <span class="chevron">
                <i class="fa-solid fa-chevron-down"></i>
              </span>

            </button>

            <div class="year-panel">

              <div class="year-inner">

                <div class="year-content">
                  ${contentHTML}
                </div>

              </div>

            </div>

          </article>
        `;

      }).join("");

  }

  renderArchive();


  /* =======================================================
     COUNTER ANIMATION
     ======================================================= */

  function animateCounter(element, target, duration = 1200) {

    const startTime = performance.now();

    function update(currentTime) {

      const elapsed =
        currentTime - startTime;

      const progress =
        Math.min(elapsed / duration, 1);

      const eased =
        1 - Math.pow(1 - progress, 3);

      element.textContent =
        Math.round(target * eased);

      if (progress < 1) {
        requestAnimationFrame(update);
      }

    }

    requestAnimationFrame(update);
  }


  animateCounter(
    document.getElementById("editionCount"),
    totalEditions
  );

  animateCounter(
    document.getElementById("yearCount"),
    totalYears
  );


  /* =======================================================
     YEAR ACCORDION
     ======================================================= */

  const yearBlocks =
    document.querySelectorAll(".year");

  yearBlocks.forEach((yearBlock) => {

    const button =
      yearBlock.querySelector(".year-button");

    button.addEventListener("click", () => {

      const isOpen =
        yearBlock.classList.contains("active");


      yearBlocks.forEach((block) => {

        block.classList.remove("active");

        const blockButton =
          block.querySelector(".year-button");

        blockButton.setAttribute(
          "aria-expanded",
          "false"
        );

      });


      if (!isOpen) {

        yearBlock.classList.add("active");

        button.setAttribute(
          "aria-expanded",
          "true"
        );

      }

    });

  });


  /* =======================================================
     SEARCH
     ======================================================= */

  const searchInput =
    document.getElementById("searchInput");

  const resultText =
    document.getElementById("resultText");


  searchInput.addEventListener("input", () => {

    const query =
      searchInput.value
        .trim()
        .toLowerCase();

    let matches = 0;


    if (!query) {

      yearBlocks.forEach((year) => {

        year.style.display = "";

        year.classList.remove(
          "search-match-year"
        );

        year.querySelectorAll(
          ".newsletter"
        ).forEach((card) => {

          card.classList.remove(
            "search-hidden"
          );

        });

      });


      resultText.textContent =
        "Showing all editions";

      return;
    }


    yearBlocks.forEach((year) => {

      const yearNumber =
        year.dataset.year.toLowerCase();

      let yearMatches = 0;


      year.querySelectorAll(
        ".newsletter"
      ).forEach((card) => {

        const text =
          card.dataset.search.toLowerCase();

        const match =
          text.includes(query) ||
          yearNumber.includes(query);


        if (match) {

          card.classList.remove(
            "search-hidden"
          );

          card.classList.remove(
            "search-hit"
          );

          void card.offsetWidth;

          card.classList.add(
            "search-hit"
          );

          yearMatches++;
          matches++;

        } else {

          card.classList.add(
            "search-hidden"
          );

        }

      });


      if (yearMatches > 0) {

        year.style.display = "";

        year.classList.add(
          "search-match-year"
        );

        year.classList.add(
          "active"
        );

        year.querySelector(
          ".year-button"
        ).setAttribute(
          "aria-expanded",
          "true"
        );

      } else {

        year.style.display = "none";

        year.classList.remove(
          "active",
          "search-match-year"
        );

      }

    });


    resultText.textContent =
      matches === 0
        ? "No editions found"
        : matches === 1
          ? "1 edition found"
          : `${matches} editions found`;

  });


  /* =======================================================
     CARD 3D TILT
     ======================================================= */

  function setupTilt() {

    const cards =
      document.querySelectorAll(".newsletter");

    cards.forEach((card) => {

      card.addEventListener(
        "mousemove",
        (event) => {

          if (
            window.innerWidth < 800
          ) return;


          const rect =
            card.getBoundingClientRect();

          const x =
            event.clientX - rect.left;

          const y =
            event.clientY - rect.top;

          const percentX =
            x / rect.width;

          const percentY =
            y / rect.height;


          const rotateY =
            (percentX - .5) * 7;

          const rotateX =
            (.5 - percentY) * 7;


          card.style.setProperty(
            "--mouse-x",
            `${percentX * 100}%`
          );

          card.style.setProperty(
            "--mouse-y",
            `${percentY * 100}%`
          );


          card.style.transform = `
            perspective(900px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-8px)
            scale(1.015)
          `;

        }
      );


      card.addEventListener(
        "mouseleave",
        () => {

          card.style.transform = `
            perspective(900px)
            rotateX(0deg)
            rotateY(0deg)
            translateY(0)
            scale(1)
          `;

        }
      );

    });

  }

  setupTilt();


  /* =======================================================
     BUTTON MAGNETIC EFFECT
     ======================================================= */

  document
    .querySelectorAll(".open")
    .forEach((icon) => {

      icon.parentElement.addEventListener(
        "mousemove",
        (event) => {

          if (
            window.innerWidth < 800
          ) return;


          const rect =
            icon.parentElement.getBoundingClientRect();

          const x =
            event.clientX - rect.left;

          const y =
            event.clientY - rect.top;

          const moveX =
            ((x / rect.width) - .5) * 8;

          const moveY =
            ((y / rect.height) - .5) * 8;


          icon.style.transform = `
            translate(
              ${moveX}px,
              ${moveY}px
            )
            rotate(7deg)
          `;

        }
      );


      icon.parentElement.addEventListener(
        "mouseleave",
        () => {

          icon.style.transform = "";

        }
      );

    });


  /* =======================================================
     CURSOR AURA
     ======================================================= */

  const cursorGlow =
    document.createElement("div");

  cursorGlow.style.position = "fixed";
  cursorGlow.style.width = "280px";
  cursorGlow.style.height = "280px";
  cursorGlow.style.borderRadius = "50%";
  cursorGlow.style.pointerEvents = "none";
  cursorGlow.style.zIndex = "0";
  cursorGlow.style.transform = "translate(-50%,-50%)";
  cursorGlow.style.background =
    "radial-gradient(circle, rgba(0,198,255,.13), rgba(124,77,255,.07) 35%, transparent 70%)";
  cursorGlow.style.filter = "blur(16px)";
  cursorGlow.style.opacity = "0";
  cursorGlow.style.transition = "opacity .25s ease";

  document.body.appendChild(cursorGlow);


  const finePointer =
    window.matchMedia(
      "(pointer:fine)"
    ).matches;


  if (finePointer) {

    document.addEventListener(
      "mousemove",
      (event) => {

        cursorGlow.style.opacity = "1";

        cursorGlow.style.left =
          `${event.clientX}px`;

        cursorGlow.style.top =
          `${event.clientY}px`;

      }
    );

  } else {

    cursorGlow.style.display =
      "none";

  }


  /* =======================================================
     PARALLAX BACKGROUND
     ======================================================= */

  const orbOne =
    document.querySelector(
      ".ambient-orb.one"
    );

  const orbTwo =
    document.querySelector(
      ".ambient-orb.two"
    );


  if (finePointer) {

    document.addEventListener(
      "mousemove",
      (event) => {

        const x =
          event.clientX /
          window.innerWidth -
          .5;

        const y =
          event.clientY /
          window.innerHeight -
          .5;


        if (orbOne) {

          orbOne.style.transform =
            `translate(
              ${x * 40}px,
              ${y * 30}px
            )`;

        }


        if (orbTwo) {

          orbTwo.style.transform =
            `translate(
              ${x * -55}px,
              ${y * -38}px
            )`;

        }

      }
    );

  }


  /* =======================================================
     SMOOTH SCROLL TO SEARCH RESULTS
     ======================================================= */

  searchInput.addEventListener(
    "keydown",
    (event) => {

      if (
        event.key !== "Enter"
      ) return;

      const visibleCards =
        document.querySelectorAll(
          ".newsletter:not(.search-hidden)"
        );

      if (
        visibleCards.length > 0 &&
        searchInput.value.trim()
      ) {

        visibleCards[0]
          .scrollIntoView({
            behavior: "smooth",
            block: "center"
          });

      }

    }
  );


  /* =======================================================
     RE-INITIALISE TILT AFTER SEARCH
     ======================================================= */

  const originalSearchListener =
    searchInput.oninput;

  const observer =
    new MutationObserver(() => {

      setupTilt();

    });

  observer.observe(
    yearsContainer,
    {
      subtree: true,
      attributes: true,
      attributeFilter: [
        "class"
      ]
    }
  );


  /* =======================================================
     PAGE ENTRY MICRO-ANIMATION
     ======================================================= */

  window.requestAnimationFrame(() => {

    document
      .querySelector(".hero")
      ?.classList.add("loaded");

  });

});
