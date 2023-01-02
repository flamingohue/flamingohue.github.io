<template>
  <div class="home" :style="inlineStyle">
    <div class="about-container">
      <h1 id = 'nameTitle'> Self-Introduction</h1>
      <div class="description">
        <table>
          <tbody>
            <tr>
              <td><img id = 'fanprofilepic' src="@/assets/IMG_5766.png" alt="Fan profile picture"></td>
              <td>
                  <div class = 'exp-sections'>
                    <h2 class="about-title"><strong>Education</strong></h2>
                    <hr/>
                    <table class = 'subex-sections'>
                      <tr>
                        <td>
                          <p class="subex-sections">MSc in Bio Statistics, Thesis stream, University of Toronto, Canada  </p>
                        </td>
                        <td>
                          <p class="education-time">2017 - Summer 2019</p> 
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <p>
                          BSc in Biological Science, University of California Irvine, USA  
                          </p>
                        </td>
                        <td>
                          <p class="education-time">Fall 2012 - Summer 2016</p>
                        </td>
                      </tr>
                    </table>
                  </div>
                <div class = 'exp-sections' >
                <h2 class="about-title">About</h2>
                <hr/>
                <p class = 'subex-sections'>
                  <ul>
                    <li>AWS certified Cloud Practitioner</li>
                    <li>Proficient in Python, Spark, SQL, R, html, javascript, and Shell script</li>
                    <li>Understanding BigData, Machine Learning, and Deep Learning</li>
                    <li>A dedicated and enthusiastic master graduate with solid data science, mathematical finance, statistical background</li>
                    <li>Good at designing and implementing ML and DL visualization, automation, workflow and infrastructure</li>
                  </ul>
                </p>
                </div>
                

                <div class = 'exp-sections'>
                  <h2 class="certificate-text"><strong>Certificates</strong></h2>
                  <hr/>
                  <p class = 'subex-sections'>
                    <ul>
                      <li><a href="https://www.credly.com/badges/67743a71-5612-4ae0-8aa6-c40375813b65?source=linked_in_profile">AWS Certified Cloud Practitioner</a></li>
                      <li><a href="https://www.youracclaim.com/badges/194e5d04-70ab-4121-87f8-a393d0b8de3f/linked_in_profile">SAS Certified Base Programmer for SAS 9</a></li>
                      <li><a href="https://www.credly.com/badges/1856ef45-08cb-4936-ae5e-9c3206cfd49e/public_url">SAS Certified Advanced Programmer for SAS 9</a></li>
                      <li><a href="https://my.garp.org/DigitalBadgeFRM?id=0031W000023vhCzQAI">Certified Financial Risk Manager (FRM)</a></li>
                    </ul>
                  </p>
                </div>

                <div id = 'skills'>
                  <h2 class="about-title"><strong>Skills</strong></h2>
                  <hr/>
                  <table class = 'skill-sections subex-sections'>
                    <tr>
                      <td>
                        <table>

                          <tr>
                            <td><p class = 'subex-sections'>Shell Scripts: </p></td>
                            <td><p class = 'subex-sections'>🌟️🌟️🌟️🌟️</p></td>
                          </tr>
                          <tr>
                            <td><p class = 'subex-sections'>R: </p></td>
                            <td><p class = 'subex-sections'>🌟️🌟️🌟️🌟️🌟️</p></td>
                          </tr>
                          <tr>
                            <td><p class = 'subex-sections'>SAS: </p></td>
                            <td><p class = 'subex-sections'>🌟️🌟️🌟️🌟️🌟️</p></td>
                          </tr>
                          <tr>
                            <td><p class = 'subex-sections'>SQL: </p></td>
                          <td><p class = 'subex-sections'>🌟️🌟️🌟️🌟️🌟️</p></td>
                          </tr>
                          <tr>
                            <td><p class = 'subex-sections'>git: </p></td>
                            <td><p class = 'subex-sections'>🌟️🌟️🌟️🌟️</p></td>
                          </tr>
                          <tr>
                            <td><p class = 'subex-sections'>html, css, Vue: </p></td>
                            <td><p class = 'subex-sections'>🌟️🌟️🌟️</p></td>
                          </tr>
                        </table>
                      </td>
                      <td>
                        <div id="secondSkills subex-sections">
                          <table>
                            <tr>
                              <td><p class = 'subex-sections'>Spark: </p></td>
                              <td><p class = 'subex-sections'>🌟️🌟️🌟️🌟️</p></td>
                            </tr>
                            <tr>
                              <td><p class = 'subex-sections'>python:</p></td>
                              <td><p nclass = 'subex-sections'>🌟️🌟️🌟️🌟️🌟️</p></td>
                            </tr>
                            <tr>
                              <td><p class = 'subex-sections'>Pyspark: </p></td>
                            <td><p class = 'subex-sections'>🌟️🌟️🌟️🌟️🌟️</p></td>
                            </tr>
                            <tr>
                              <td><p class = 'subex-sections'>scipy: </p></td>
                              <td><p class = 'subex-sections'>🌟️🌟️🌟️🌟️</p></td>
                            </tr>
                            <tr>
                              <td><p class = 'subex-sections'>Scikit-learn: </p></td>
                              <td><p class = 'subex-sections'>🌟️🌟️🌟️🌟️</p></td>
                            </tr>
                            <tr>
                              <td><p class = 'subex-sections'>tensorflow: </p></td>
                              <td><p class = 'subex-sections'>🌟️🌟️🌟️</p></td>
                            </tr>
                        </table>
                        </div>
                      </td>
                    </tr>
                  </table>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
export default {
  computed: {
    bgImage () {
      return require('@/assets/background.png')
    },
    inlineStyle () {
      return {
        backgroundImage: `url(${this.bgImage})`,
        backgroundSize: "cover"
      }
  }
}
}
</script>

<style>
#nameTitle{
  font-size: 8vw;
  color: aliceblue;
  font-family: "Tangerine";
  text-align: center;
  padding: 6rem;
  top: 0%;
  left: 40%;
  text-size-adjust: auto;
}
#fanprofilepic{
  width: 15vw;
  float: left;
  padding-left: 10rem;
  margin-right: 30px;

}
.about-title{
  text-size-adjust: auto;
  font-size: 1.5vw;
}
#selfDescription{
  color: aliceblue;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  width: 60rem;
  text-size-adjust: auto;
  font-size: 1vw;
}
.description{
  color: aliceblue;
  font-size: 1vw;
  text-size-adjust: auto;
}
.exp-sections{
  margin-top: 3rem;
  padding-right: 8rem;
}
.subex-sections{
  margin-top: 2rem;
  padding-right: 8rem;
}
a{
  color: aliceblue;
}
a:hover {
  color: hotpink;
}
.about-container{
  max-width: 1400vw;
}
/* selected link */
a:active {
  color: #A555EC;
}
hr {
    border-style:none;
    border-top-style: dotted;
    border-color: #C8B6E2;
    border-width: 40px;
    width: 50%;
    text-size-adjust: auto;
}
#skills{
  margin-top: 3rem;
  padding-right: 8rem;
}
.skill-sections{
  margin-top: 2rem;
  padding-bottom: 10rem;
  padding-right: 8rem;
}
#secondSkills{
  margin-left: 20rem;
}
#pythonPackage{
  margin-bottom: 2rem;
}
.education-time{
  text-align: right;
  text-size-adjust: auto;
  font-size: 1vw;
}
</style>