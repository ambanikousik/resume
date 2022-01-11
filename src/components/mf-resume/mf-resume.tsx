import { Component, getAssetPath, h, Prop } from "@stencil/core";

@Component({
  tag: "mf-resume",
  styleUrl: "mf-resume.scss",
  shadow: true
})
export class MfResume {
  @Prop() showDownloadLink: boolean = false;

  calcYearsSince(date: string) {
    const birthday = new Date(date);
    const ageDifMs = Date.now() - birthday.getTime();
    const ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  render() {
    return (
      <article class="resume">
        {/* {this.showDownloadLink ? (
          <div class="download-pdf screen-only">
            <a href="https://github.com/matfantinel/resume/raw/master/Matheus%20Fantinel's%20Resume.pdf">
              Download as PDF
            </a>
          </div>
        ) : (
          ""
        )} */}
        <section class="name-and-contact">
          <div>
            {/* <mf-logotype></mf-logotype> */}
            <h1>Rezaul Islam Kousik</h1>
            <h5>Flutter Expert</h5>
          </div>
          <ul>
            <li class="birthday">
              <svg-icon name="birthday"></svg-icon>
              <span>{this.calcYearsSince("1996-09-25")} years old</span>
            </li>
            <li class="experience">
              <svg-icon name="experience"></svg-icon>
              <span>
                {this.calcYearsSince("2014-09-22")} years of experience
              </span>
            </li>
            <li class="location">
              <svg-icon name="location"></svg-icon>
              <span>Uttara, Dhaka, Bangladesh</span>
            </li>
            <li class="email">
              <svg-icon name="email"></svg-icon>
              <a href="mailto:rikousik@gmail.com">rikousik@gmail.com</a>
            </li>
            <li class="linkedin screen-only">
              <svg-icon name="linkedin"></svg-icon>
              <a
                href="https://www.linkedin.com/in/ri-kousik-b5890698/"
                target="_blank"
              >
                LinkedIn Profile
              </a>
            </li>
            <li class="website">
              <svg-icon name="website"></svg-icon>
              <a href="https://squadhead.com" target="_blank">
                squadhead.com
              </a>
            </li>
            <li class="github screen-only">
              <svg-icon name="github"></svg-icon>
              <a href="https://github.com/ambanikousik" target="_blank">
                GitHub Profile
              </a>
            </li>
            <li class="languages">
              <svg-icon name="languages"></svg-icon>
              <span>English, Bangla</span>
            </li>
          </ul>
        </section>
        <section class="photo">
          x
          <img
            class="avatar"
            src={getAssetPath(`./assets/photo.jpeg`)} />
        </section>
        <section class="about">
          <p class="section-title">About</p>
          <p>
            I have always been a creator and builder. As a child, I would often make various interesting tools out of spare parts from my broken toys. All of my childhood adventures became more interesting as I got my first computer (a pentium II). As I got older, I focused on the Programming. I tried every form of coding I could get me hands on, till I found Flutter. While at college, I dove deep into the Game dev field, then I finally moved to flutter and never looked back.
          </p>
        </section>
        <section class="work">
          <p class="section-title">Professional Experience</p>

          <div class="experiences-container">
            <div class="experience">
              <div class="title">
                <div>
                  <span class="company-name">
                    Logitix
                  </span>
                </div>
                <small>Software Engineer | <svg-icon name="location" small={true}></svg-icon> Remote | August 2019 ~ February 2021</small>
              </div>

              <ul>
                <li>
                  Working on a Vue front-end project, aiming to solve current pains and create new and better processes to manage ticket sales and brokerage in the US;
                </li>
                <li>
                  Building new ways of viewing and interacting with huge amounts of data;
                </li>
                <li>
                  Automating previously manual processes with Selenium, improving speed and capacity;
                </li>
              </ul>
            </div>

            <div class="experience">
              <div class="title">
                <div>
                  <span class="company-name">SIGE Cloud</span>
                </div>
                <small>Software Developer | <svg-icon name="location" small={true}></svg-icon> Brazil | July 2017 ~ July 2019</small>
              </div>

              <ul>
                <li>
                  Applying the Microfrontends approach to modernize a legacy product;
                </li>
                <li>
                  Developing a desktop app from scratch for a simplified ERP focused on small companies;
                </li>
                <li>
                  Developing a mobile app that acts as an extension to the company’s main product;
                </li>
                <li>
                  Developing an internal HelpDesk software using Artificial Intelligence to help users before they even opened the ticket;
                </li>
              </ul>
            </div>

            <div class="experience">
              <div class="title">
                <div>
                  <span class="company-name">Promob Software Solutions</span>
                </div>
                <small>Software Developer | <svg-icon name="location" small={true}></svg-icon> Brazil | September 2014 ~ June 2017</small>
              </div>

              <ul>
                <li>
                  Maintenance and modernization of the company's services portal;
                </li>
                <li>
                  Development and maintenance of many APIs used by other development teams;
                </li>
                <li>
                  Refactoring of the company’s internal software structure, according to changes in the business model;
                </li>
                <li>
                  Integration with third-party CRM, HelpDesk and ERP softwares;
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section class="education">
          <p class="section-title">Education</p>
          <span>
            Graduated as a{" "}
            <u>Computer Science Engineer</u> at{" "}
            <i>North South University</i>, 2018.
          </span>
        </section>
        <section class="skills">
          <p class="section-title">Skills</p>

          <ul>

            <li>
              Front-end
              <div class="tags-container">
                <span class="tag">Flutter</span>
                <span class="tag">Svelte</span>
                <span class="tag">TypeScript</span>
                <span class="tag">Tailwind</span>
                <span class="tag">Wordpress</span>
              </div>
            </li>
            <li>
              Back-end
              <div class="tags-container">
                <span class="tag secondary">Firebase</span>
                <span class="tag secondary">Golang</span>
                <span class="tag secondary">Apito</span>
              </div>
            </li>

          </ul>
        </section>
      </article>
    );
  }
}
