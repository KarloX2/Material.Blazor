﻿export function syncScrollByID(gridHeaderID: string, gridBodyID: string) {
    const headerDiv: HTMLElement | null = document.getElementById(gridHeaderID);
    const bodyDiv: HTMLElement | null = document.getElementById(gridBodyID);
    if ((headerDiv != null) && (bodyDiv != null)) {
        headerDiv.scrollLeft = bodyDiv.scrollLeft;
    }
}

export function syncScrollByRef(gridHeaderRef: HTMLElement, gridBodyRef: HTMLElement) {
    gridHeaderRef.scrollLeft = gridBodyRef.scrollLeft;
}

export function getScrollBarWidth(className: string): number {
    const firstDiv: HTMLDivElement = document.createElement("div");

    // Set styles
    firstDiv.style.position = 'absolute';
    firstDiv.style.visibility = 'hidden';
    firstDiv.style.whiteSpace = 'nowrap';
    firstDiv.style.left = '-9999px';

    // Set the class
    firstDiv.className = className;

    // Append to the body
    document.body.appendChild(firstDiv);

    // Create a second div
    const secondDiv: HTMLDivElement = document.createElement("div");

    // Append it as a child of the first div
    firstDiv.appendChild(secondDiv);

    // Calculate width
    const width: number = firstDiv.offsetWidth - secondDiv.offsetWidth;

    // Remove the divs
    document.body.removeChild(firstDiv);

    return width;
}

export function getTextWidth(className: string, textToMeasure: string): string {
    // Create an element
    const ele: HTMLDivElement = document.createElement('div');

    // Set styles
    ele.style.position = 'absolute';
    ele.style.visibility = 'hidden';
    ele.style.whiteSpace = 'nowrap';
    ele.style.left = '-9999px';

    // Set the class
    ele.className = className;

    // Set the text
    ele.innerText = textToMeasure;

    // Append to the body
    document.body.appendChild(ele);

    // Get the width
    const width: string = window.getComputedStyle(ele).width;

    // Remove the element
    document.body.removeChild(ele);

    return width;
}
