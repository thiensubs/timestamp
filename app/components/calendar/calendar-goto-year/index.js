/* global document, customElements, BaseElement, CalendarEvent */

class CalendarGoToYear extends BaseElement {
    constructor() {
        super().fetchTemplate();

        this.addEventListener('click', () => this.onClick());
    }

    /**
     * One of the listed years has been clicked. Going to dispatch a
     * CalendarEvent to notify the other components.
     *
     * @return {CalendarGoToYear}
     */
    onClick() {
        const year = this.getAttribute('number');

        // If there is not a number attribute it means it’s the currently
        // selected year and therefore we have nothing to do
        if (year === null) {
            return this;
        }

        this.dispatchEvent(
            new CalendarEvent('goto.year', {
                detail: {
                    year
                }
            })
        );

        return this;
    }
}

// Remember document from import scope. Needed for accessing elements inside
// the imported html…
CalendarGoToYear.ownerDocument = document.currentScript.ownerDocument;

// @see https://developer.mozilla.org/docs/Web/API/CustomElementRegistry/define
customElements.define('calendar-goto-year', CalendarGoToYear);
