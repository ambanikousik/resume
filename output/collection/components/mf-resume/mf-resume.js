import { getAssetPath, h } from "@stencil/core";
export class MfResume {
    constructor() {
        this.showDownloadLink = false;
    }
    calcYearsSince(date) {
        const birthday = new Date(date);
        const ageDifMs = Date.now() - birthday.getTime();
        const ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    render() {
        return (h("article", { class: "resume" },
            h("section", { class: "name-and-contact" },
                h("div", null,
                    h("h1", null, "Rezaul Islam Kousik"),
                    h("h5", null, "Flutter Expert")),
                h("ul", null,
                    h("li", { class: "birthday" },
                        h("svg-icon", { name: "birthday" }),
                        h("span", null,
                            this.calcYearsSince("1996-09-25"),
                            " years old")),
                    h("li", { class: "experience" },
                        h("svg-icon", { name: "experience" }),
                        h("span", null,
                            this.calcYearsSince("2014-09-22"),
                            " years of experience")),
                    h("li", { class: "location" },
                        h("svg-icon", { name: "location" }),
                        h("span", null, "Uttara, Dhaka, Bangladesh")),
                    h("li", { class: "email" },
                        h("svg-icon", { name: "email" }),
                        h("a", { href: "mailto:rikousik@gmail.com" }, "rikousik@gmail.com")),
                    h("li", { class: "linkedin screen-only" },
                        h("svg-icon", { name: "linkedin" }),
                        h("a", { href: "https://www.linkedin.com/in/ri-kousik-b5890698/", target: "_blank" }, "LinkedIn Profile")),
                    h("li", { class: "website" },
                        h("svg-icon", { name: "website" }),
                        h("a", { href: "https://squadhead.com", target: "_blank" }, "squadhead.com")),
                    h("li", { class: "github screen-only" },
                        h("svg-icon", { name: "github" }),
                        h("a", { href: "https://github.com/ambanikousik", target: "_blank" }, "GitHub Profile")),
                    h("li", { class: "languages" },
                        h("svg-icon", { name: "languages" }),
                        h("span", null, "English, Bangla")))),
            h("section", { class: "photo" },
                "x",
                h("img", { class: "avatar", src: getAssetPath(`./assets/photo.jpeg`) })),
            h("section", { class: "about" },
                h("p", { class: "section-title" }, "About"),
                h("p", null, "I have always been a creator and builder. As a child, I would often make various interesting tools out of spare parts from my broken toys. All of my childhood adventures became more interesting as I got my first computer (a pentium II). As I got older, I focused on the Programming. I tried every form of coding I could get me hands on, till I found Flutter. While at college, I dove deep into the Game dev field, then I finally moved to flutter and never looked back.")),
            h("section", { class: "work" },
                h("p", { class: "section-title" }, "Professional Experience"),
                h("div", { class: "experiences-container" },
                    h("div", { class: "experience" },
                        h("div", { class: "title" },
                            h("div", null,
                                h("span", { class: "company-name" }, "Logitix")),
                            h("small", null,
                                "Software Engineer | ",
                                h("svg-icon", { name: "location", small: true }),
                                " Remote | August 2019 ~ February 2021")),
                        h("ul", null,
                            h("li", null, "Working on a Vue front-end project, aiming to solve current pains and create new and better processes to manage ticket sales and brokerage in the US;"),
                            h("li", null, "Building new ways of viewing and interacting with huge amounts of data;"),
                            h("li", null, "Automating previously manual processes with Selenium, improving speed and capacity;"))),
                    h("div", { class: "experience" },
                        h("div", { class: "title" },
                            h("div", null,
                                h("span", { class: "company-name" }, "SIGE Cloud")),
                            h("small", null,
                                "Software Developer | ",
                                h("svg-icon", { name: "location", small: true }),
                                " Brazil | July 2017 ~ July 2019")),
                        h("ul", null,
                            h("li", null, "Applying the Microfrontends approach to modernize a legacy product;"),
                            h("li", null, "Developing a desktop app from scratch for a simplified ERP focused on small companies;"),
                            h("li", null, "Developing a mobile app that acts as an extension to the company\u2019s main product;"),
                            h("li", null, "Developing an internal HelpDesk software using Artificial Intelligence to help users before they even opened the ticket;"))),
                    h("div", { class: "experience" },
                        h("div", { class: "title" },
                            h("div", null,
                                h("span", { class: "company-name" }, "Promob Software Solutions")),
                            h("small", null,
                                "Software Developer | ",
                                h("svg-icon", { name: "location", small: true }),
                                " Brazil | September 2014 ~ June 2017")),
                        h("ul", null,
                            h("li", null, "Maintenance and modernization of the company's services portal;"),
                            h("li", null, "Development and maintenance of many APIs used by other development teams;"),
                            h("li", null, "Refactoring of the company\u2019s internal software structure, according to changes in the business model;"),
                            h("li", null, "Integration with third-party CRM, HelpDesk and ERP softwares;"))))),
            h("section", { class: "education" },
                h("p", { class: "section-title" }, "Education"),
                h("span", null,
                    "Graduated as a",
                    " ",
                    h("u", null, "Computer Science Engineer"),
                    " at",
                    " ",
                    h("i", null, "North South University"),
                    ", 2018.")),
            h("section", { class: "skills" },
                h("p", { class: "section-title" }, "Skills"),
                h("ul", null,
                    h("li", null,
                        "Front-end",
                        h("div", { class: "tags-container" },
                            h("span", { class: "tag" }, "Flutter"),
                            h("span", { class: "tag" }, "Svelte"),
                            h("span", { class: "tag" }, "TypeScript"),
                            h("span", { class: "tag" }, "Tailwind"),
                            h("span", { class: "tag" }, "Wordpress"))),
                    h("li", null,
                        "Back-end",
                        h("div", { class: "tags-container" },
                            h("span", { class: "tag secondary" }, "Firebase"),
                            h("span", { class: "tag secondary" }, "Golang"),
                            h("span", { class: "tag secondary" }, "Apito")))))));
    }
    static get is() { return "mf-resume"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["mf-resume.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["mf-resume.css"]
    }; }
    static get properties() { return {
        "showDownloadLink": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "show-download-link",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
}
