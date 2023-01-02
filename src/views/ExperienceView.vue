<template>
    <div class="experience-container col-md-12" :style="inlineStyle">
        <div>
            <h2 id="experience-title">My Experiences.</h2>
            <div class="skill-row">
                <img class="scotiabank-img" src="@/assets/scotiabank.png" alt="Scotiabank-png">
                <h3 class="title-name"><em>Data Scientist Manager, AML/ATF Model Analytic, Scotiabank, ON, Canada</em></h3>
                <h3 class="title-date"><em>2021 - Present</em></h3>
                <div class="job-des">
                    <p >
                    <ul>
                        <li>Developed Client Risk Rating models on Retail (2M entries) using logistic regression and Machine learning algorithms (Random Forest, SVM,etc), which provides the key insights for stakeholders on catching money laundering using python, pyspark, scikit-learn and Oracle DB.
    </li>
                        <li>Integrated a series of client risk rating models for multiple countries, created a standard unified interface which accepts various data sources and countries requirements for previously separated models, improving the monthly ad hoc efficiency and facilitating the monitoring and analysis of existing models</li>
                        <li>Contributed to a Web Platform development, which focuses on the dynamic data visualization toolkit for data impact output for existing models for over 850 end users using python, dash and plotly .
    </li>
                        <li>Automated the repetitive routine maintenance tasks into timely based manner and in the background running automatically on an on-going basis using shell scripts and crontab
    </li>
                    </ul>
                </p>
                </div>
            </div>


            <div class="skill-row">
                <img class="td-img" src="@/assets/td.png" alt="td-logo">
                <h3 class="title-name"><em>Modelling/ Forecasting Modelling Analyst, TD bank, ON, Canada </em></h3>
                <h3 class="title-date"><em>Nov 2019 - Feb 2021</em></h3>
                <div class="job-des">
                    <p >
                    <ul>
                        <li>Collaborating with Model Implementation team and assist in the development of a centralized and automated data creation and wrangling API with SAS and shell script</li>
                        <li>Design an automated data integrity testing for data governance with SAS and bitbucket for code version control and develop data visualization with VBA</li>
                        <li>Use Hadoop to pull and pre-process the datasets and assist the senior quantitative analyst to develop the PD model to predict the default probability with SAS and python</li>
                        <li>Validated classic credit card PD models predictability check on reperforming accounts with SAS</li>
                    </ul>
                </p>
                </div>
            </div>


            <div class="skill-row">
                <img class="uhn-img" src="@/assets/uhn.png" alt="uhn-logo">
                <h3 class="title-name"><em>Research Analyst, UHN Hospital, Toronto, ON, Canada </em></h3>
                <h3 class="title-date"><em>Jan 2018 - Jun 2019</em></h3>
                <div class="job-des">
                    <p>
                    <ul>
                        <li>Design a new classification method targeting microbiome data and validate the new classification method with out-of-sample analytics with R</li>
                        <li>Compare the developed method with existing classification methods on simulated datasets and real datasets, such as linear regression, Linear discriminant analysis, KNN, K-means, decision trees</li>
                        <li>Present statistical results to committee groups, write manuscript for thesis and publication with Latex</li>
                    </ul>
                </p>
                </div>
            </div>

            <div class="finalskill-row">
                <img class="camh-img" src="@/assets/camh.png" alt="camh-logo">
                <h3 class="title-name"><em>Research Analyst, CAMH, Toronto, ON</em></h3>
                <h3 class="title-date"><em>Sept 2017 - April 2018</em></h3>
                <div class="job-des">
                    <p>
                    <ul>
                        <li>Conducted data cleaning and quality control check on large dataset (2.1 million events)       </li>
                        <li>Applied a time series model and autoregressive integrated moving average (ARIMA) model to assess the birthday effect on the traffic-related mortality using R 
    </li>
                        <li>Validate the accuracy and correlation analysis on the final model with R</li>
                    </ul>
                </p>
                </div>
            </div>
        </div>

    </div>
</template>

<style>
.scotiabank-img{
    width: 12vw;
    height: 12vw;
    padding: 2vw;
    float: left;
    margin-right: 30px;
    border-radius: 50%;
}
.td-img{
    width: 12vw;
    height: 12vw;
    padding: 2vw;
    float: right;
    border-radius: 50%;
}
.uhn-img{
    width: 12vw;
    height: 12vw;
    padding: 2vw;
    float: left;
    border-radius: 50%;
    margin-right: 30px;
}
.camh-img{
    width: 12vw;
    height: 12vw;
    padding: 2vw;
    float: right;
    border-radius: 50%;
}
.skill-row{
    width: 50%;
    margin: 1vw auto 1vw auto;
    text-align: left;
    font-size: 1vw;
    text-size-adjust: auto;
}
#experience-title{
    font-family: "Tangerine";
    text-align: center;
    padding: 5vw;
    color: #E5CFE5;
    font-size: 8vw;
    text-size-adjust: auto;

}
.title-name{
    padding: 2rem;
    font-size: 30px;
    color: #E5CFE5;
    font-size: 1.5vw;
    text-size-adjust: auto;
}
.title-date{
    text-align:right;
    padding-bottom: 2vw;
    color: #E5CFE5;
    font-size: 1.2vw;
    text-size-adjust: auto;
}
.job-des{
    font-size: 1vw;
    color: #E5CFE5;
    text-size-adjust: auto;
}
.finalskill-row{
    width: 50%;
    margin: 5vw auto 5vw auto;
    text-align: left;
    padding-bottom: 5%;
    font-size: 1vw;
    text-size-adjust: auto;
}
.experience-container{
    max-width: 1400vw;
    text-size-adjust: auto;
}
</style>

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