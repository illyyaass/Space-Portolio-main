import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My AI Projects
      </h1>

      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/şekar1.jpg"
          title="Şeker Pancarı Classification"
          description="Deep Learning model built with CNN to classify sugar beet diseases using image data for smart agriculture solutions."
        />

        <ProjectCard
          src="/foto1.jpeg"
          title="Healthcare Support Chatbot"
          description="A multilingual AI chatbot for answering health-related questions, built with NLP and deep learning models."
        />

        <ProjectCard
          src="/sum1.jpg"
          title="Text Summarizer projesi"
          description="An intelligent NLP-powered app for summarizing long medical texts using transformer models like BERT and T5."
        />
      </div>
    </div>
  );
};

export default Projects