import React from "react";

import ArticleContent from "./ArticleElements/ArticleContent";
import ArticleFooter from "./ArticleElements/ArticleFooter";
import ArticleImg from "./ArticleElements/ArticleImg";
import ArticleInfo from "./ArticleElements/ArticleInfo";
import ArticleTitle from "./ArticleElements/ArticleTitle";
import AuthorInfo from "./ArticleElements/AuthorInfo";
import Separator from "./ArticleElements/Separator";
import styled from "styled-components";
import BackArrow from "./ArticleElements/BackArrow";
function Article() {
  return (
    <>
      <HeaderWrapper>
        <BackArrow />

        <ArticleInfo />
        <ArticleTitle />
        <AuthorInfo
          avatar={
            "https://d2zv2ciw0ln4h1.cloudfront.net/uploads/jim_laurie_763f433a55.png"
          }
          authorname={"Jim Laurie"}
          publishDate={"September 15, 2021"}
        />

        <Separator />
      </HeaderWrapper>
      <ArticleImg
        image={
          "https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Monthly_Updates_69b5ada65f.png"
        }
      />

      <Content>
        <ArticleContent
          body={`<p>
                    Today, I'm announcing that we are going to temporarily close
                    the
                    <a href="https://academy.strapi.io/">Strapi Academy</a> on
                    September 30th, 2021.
                  </p>
                  <p>
                    The Academy was created a bit over a year ago to provide
                    Strapi clients some special content to help them get the
                    most out of Strapi and follow best practices when
                    implementing it. We then opened the platform to share the
                    content with everyone. We also used it for the Partner
                    program to guarantee that you have quality partners working
                    on your projects. But today, it is time to temporarily close
                    it.
                  </p>
                  <p>
                    Today, the Academy represents more than 6,000 students. It
                    helped many community members and clients improve their
                    Strapi skills and helped them build upon their understanding
                    of how Strapi works. Making the configuration,
                    customization, and usage much easier.
                  </p>
                  <h2>But why are we closing the Strapi Academy?</h2>
                  <p>
                    Well, first of all, the current courses will become obsolete
                    with the release of the v4. So all the content in the
                    Academy would have to be rebuilt from scratch. Many
                    technical concepts will change, and the UX/UI has been
                    improved thanks to the
                    <a href="https://github.com/strapi/parts">
                      new Strapi design system
                    </a>
                    .
                  </p>
                  <p>
                    We worked really hard last year to create the current
                    courses. We did our best with the team to keep the content
                    up to date. But it's a lot of work to maintain it all when
                    all Strapi efforts are directed towards improving the
                    project and creating new features. That means that almost
                    every 2-3 months, when we launch something new, the content
                    would have to be updated.
                  </p>
                  <p>
                    Creating the same courses with the same or better quality
                    for the v4 is currently not possible with our team's size.
                    This would require a lot of effort, and the current team is
                    not large enough to support this project.
                  </p>
                  <p>
                    For now, the priority of the User Success department, which
                    is in charge of the Academy, is mainly centered around
                    building the Customer Success team to support our growing
                    customer base, the Support team to help community members
                    and clients by handling their technical questions, and
                    Documentation to provide you the best documentation possible
                    for you to easily learn Strapi and achieve your project
                    goals.
                  </p>
                  <h2>So what now?</h2>
                  <p>
                    We're going to keep working on existing resources for the
                    release of the v4!
                  </p>
                  <p>
                    You can find the
                    <a href="https://strapi.io/resource-center">
                      Resource Center
                    </a>
                    that regroups all resources to learn and improve your Strapi
                    skills.
                  </p>
                  <p>
                    The
                    <a href="https://strapi.io/documentation/">
                      Strapi Documentation
                    </a>
                    , Developer documentation, and User Guides are there to help
                    you understand the interface and technical concepts of
                    Strapi. All of the Academy's content is, in fact, already
                    present in the Documentation.
                  </p>
                  <p>
                    The current courses will not disappear. We migrated all
                    video content to a
                    <a href="https://youtube.com/playlist?list=PL7Q0DQYATmvgzPF8WVaf0nDtar3zDiXgY">
                      YouTube playlist here
                    </a>
                    . With that, you will still be able to access the content.
                  </p>
                  <p>
                    Depending on your preferred support, you can still find
                    <a href="https://strapi.io/tutorials">
                      written tutorials
                    </a>{" "}
                    or
                    <a href="https://strapi.io/video-library">
                      video tutorials
                    </a>
                    .
                  </p>
                  <p>
                    Threat not, we will continue to create new resources for you
                    to make your Strapi project a success.
                  </p>
                  <p>
                    Regarding the partner program, Academy certifications will
                    no longer be a requirement for companies to become an
                    official partner. Instead, any company interested in
                    <a href="https://strapi.io/partner-program#contact">
                      becoming a partner
                    </a>
                    will now have to complete a quiz that will test their
                    technical and business knowledge of Strapi.
                  </p>
                  <p>
                    The goal here remains the same: making sure that agencies
                    that we recommend to our users are fully aware of Strapi's
                    features and capabilities, but also that they are following
                    our best practices with their implementation of the
                    solution.
                  </p>
                  <h2>What are our plans for the future?</h2>
                  <p>
                    We know that providing resources for you to learn and
                    succeed with Strapi is essential.
                  </p>
                  <p>
                    That's the reason why we hope to create a Learning/Education
                    team next year, and this team will be dedicated to managing
                    this important project.
                  </p>
                  <p>
                    <strong>The Academy will be back.</strong>
                  </p>
                
               `}
        />

        <ArticleFooter
          image={
            "https://d2zv2ciw0ln4h1.cloudfront.net/uploads/jim_laurie_763f433a55.png"
          }
          AuthorName={"Jim Laurie"}
          AuthorJob={"Chief User Success Officer"}
          AuthorText={
            " Jim is the Chief User Success Officer at Strapi. By being an  expert on the project and close to the community and their usage needs  he is in charge of making sure Strapi provides all resources, help, guidance, that will set Strapi users up for success. "
          }
        />
      </Content>
    </>
  );
}

export default Article;

const HeaderWrapper = styled.div`
  margin-top: 48px;

  position: relative;
  max-width: 820px;
  margin-left: auto;
  margin-right: auto;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding-left: 30px;
  padding-right: 30px;

  text-align: left;
  margin-bottom: 20px;

  @media (min-width: 992px) {
    margin-bottom: 40px;
  }
`;

const Content = styled.div`
  position: relative;
  max-width: 820px;
  margin-left: auto;
  margin-right: auto;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding-left: 30px;
  padding-right: 30px;
`;
