const tabsArea = document.querySelector("[data-id=tabs-area]");
const lineTab = document.querySelector("[data-id=line-tab]");
const dataListServicesInProgress = document.querySelector(
    "[data-id=datalist-services-in-progress]"
);
const dataListServicesFinished = document.querySelector(
    "[data-id=datalist-services-finished]"
);

const childesTabsArea = Array.from(tabsArea.children);

tabsArea.addEventListener("click", (event) => {
    if (event.target.localName !== 'button') {
        return
    }

    const tabClicked = event.target;
    console.log(tabClicked)
    const dataIdTabClicked = tabClicked.getAttribute("data-id");
    const [tabNotClicked] = childesTabsArea.filter(
        (child) =>
            (child.localName === "button") &
            (child.getAttribute("data-id") !== dataIdTabClicked)
    );

    if (dataIdTabClicked === "tab-service-in-progress") {
        !lineTab.classList.contains("main__row-tabs-line--left") &&
            lineTab.classList.add("main__row-tabs-line--left");

        lineTab.classList.remove("main__row-tabs-line--right");

        dataListServicesInProgress.classList.contains("gone") &&
            dataListServicesInProgress.classList.remove("gone");

        !dataListServicesFinished.classList.contains("gone") &&
            dataListServicesFinished.classList.add("gone");
    } else {
        !lineTab.classList.contains("main__row-tabs-line--right") &&
            lineTab.classList.add("main__row-tabs-line--right");
        lineTab.classList.remove("main__row-tabs-line--left");

        dataListServicesFinished.classList.contains("gone") &&
            dataListServicesFinished.classList.remove("gone");

        !dataListServicesInProgress.classList.contains("gone") &&
            dataListServicesInProgress.classList.add("gone");
    }

    tabNotClicked.classList.remove("main__row-tabs__tab--active");

    !tabClicked.classList.contains("main__row-tabs__tab--active") &&
        tabClicked.classList.add("main__row-tabs__tab--active");
});
