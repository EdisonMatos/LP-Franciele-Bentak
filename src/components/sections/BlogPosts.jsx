import { useState, useEffect } from "react";
import WordPressBlogCard from "../cards/WordPressBlogCard";
import SectionArea from "../sectionElements/SectionArea";
import SectionWrapper from "../sectionElements/SectionWrapper";
import SectionHeader from "../sectionElements/SectionHeader";
import content from "../../content/content";
import Paragraphs from "../sectionElements/Paragraphs";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";

function BlogPosts({ colorMode = "default" }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(content.texts.blog.blogApiEndpoint)
      .then((response) => response.json())
      .then((data) => setPosts(data.posts))
      .catch((error) => console.error("Erro ao buscar posts:", error));
  }, []);

  // Estilos com base no colorMode
  const bgClasses = {
    dark: "bg-darker",
    light: "bg-lighter",
    default: "squares",
  };
  const textClasses = {
    dark: "text-white",
    light: "text-black",
    default: "text-colorWhite",
  };
  const bgClass = bgClasses[colorMode] || bgClasses.default;
  const textClass = textClasses[colorMode] || textClasses.default;

  return (
    <div>
      <SectionArea paddingbot={false} className={`${bgClass}`}>
        <SectionWrapper>
          <SectionHeader
            className={`text-center ${textClass}`}
            miniTitle={content.texts.blog.miniTag}
            sectionHeaderTitle={content.texts.blog.title}
            sectionHeaderSubtitle={content.texts.blog.subtitle}
            titleColorSet={textClass}
            subtitleColorSet={textClass}
          />
          <ul className="flex flex-wrap gap-[30px] justify-center mb-[80px]">
            {posts.slice(0, 3).map((post) => (
              <li key={post.ID}>
                <WordPressBlogCard
                  img={
                    post.featured_image && (
                      <img
                        src={post.featured_image}
                        alt="Imagem do post"
                        className="rounded-2xl"
                      />
                    )
                  }
                  title={
                    <h1
                      className={textClass}
                      dangerouslySetInnerHTML={{ __html: post.title }}
                    />
                  }
                  subtitle={
                    <p
                      className={textClass}
                      dangerouslySetInnerHTML={{
                        __html:
                          post.excerpt.length > 100
                            ? post.excerpt.substring(0, 100) + "..."
                            : post.excerpt,
                      }}
                    />
                  }
                  link={post.URL}
                />
              </li>
            ))}
          </ul>
          <MotionDivDownToUp>
            <Paragraphs
              className={`text-center underline transition hover:scale-110 ${textClass}`}
            >
              <a href={content.texts.blog.blogLink} target="_blank">
                {content.texts.blog.label}
              </a>
            </Paragraphs>
          </MotionDivDownToUp>
        </SectionWrapper>
      </SectionArea>
    </div>
  );
}

export default BlogPosts;
