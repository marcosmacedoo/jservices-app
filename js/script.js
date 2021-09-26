const tabsArea = document.querySelector("[data-id=tabs-area]");
const lineTab = document.querySelector("[data-id=line-tab]");

const childesTabsArea = Array.from(tabsArea.children);

tabsArea.addEventListener("click", (event) => {
    const tabClicked = event.target;
    const dataId = tabClicked.getAttribute("data-id");
    const [tabNotClicked] = childesTabsArea.filter(
        (child) =>
            (child.localName === "button") &
            (child.getAttribute("data-id") !== dataId)
    );

    if (dataId === "tab-service-in-progress") {
        !lineTab.classList.contains("main__row-tabs-line--left") &&
            lineTab.classList.add("main__row-tabs-line--left");

        lineTab.classList.remove("main__row-tabs-line--right")
    } else {
        !lineTab.classList.contains("main__row-tabs-line--right") &&
            lineTab.classList.add("main__row-tabs-line--right");
        lineTab.classList.remove("main__row-tabs-line--left")
    }

    tabNotClicked.classList.remove("main__row-tabs__tab--active");

    !tabClicked.classList.contains("main__row-tabs__tab--active") &&
        tabClicked.classList.add("main__row-tabs__tab--active");
});
