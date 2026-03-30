import { Meteor } from "meteor/meteor";

const translateCell = (cell: HTMLElement) => {
    const originalText = cell.textContent?.trim();
    if (!originalText) return;

    Meteor.call("translate", originalText, (err, translated) => {
        if (err) {
            console.error("Ошибка перевода:", err);
            return;
        }
        cell.textContent = translated;
    });
};

export const observeTranslations = () => {
    const table = document.querySelector("table");
    if (!table) return;

    const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            if (mutation.type === "childList" && mutation.addedNodes.length) {
                mutation.addedNodes.forEach((node) => {
                    if (node instanceof HTMLElement) {
                        node.querySelectorAll<HTMLElement>("td.__t").forEach(translateCell);
                    }
                });
            }

            if (mutation.type === "characterData") {
                const parent = mutation.target.parentElement;
                if (parent?.classList.contains("__t")) {
                    translateCell(parent);
                }
            }
        }
    });

    observer.observe(table, {
        childList: true,
        subtree: true,
        characterData: true,
    });

    table.querySelectorAll<HTMLElement>("td.__t").forEach(translateCell);
};