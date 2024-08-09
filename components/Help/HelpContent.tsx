import React from "react";

type Props = {};

const HelpContent = (props: Props) => {
  return (
    <div className="w-full  px-5   h-full my-10 ">
      <h1 className="text-3xl font-bold text-black">
        What is Google Tag Manager (GTM)?
      </h1>
      <p className="text-xl font-semibold text-gray-800 mt-2">
        Google Tag Manager is a free tag management system that allows you to
        manage and deploy marketing tags (snippets of code or tracking pixels)
        on your website (or mobile app) without having to modify the code.
        Here’s a very simple example of how Google Tag Manager works.
        Information from one data source (your website) is shared with another
        data source (Google Analytics) through Google Tag Manager. GTM becomes
        very handy when you have lots of tags to manage because all of the code
        is stored in one place.
      </p>
      <h1 className="text-3xl font-bold text-black mt-3">
        Is Google Tag Manager easy to use?
      </h1>
      <p className="text-xl font-semibold text-gray-800 mt-2">
        They say it’s a “simple” tool that any marketer can use without needing
        a web developer. I may get run over in the comments section for saying
        this, but I’m standing my ground. Google Tag Manager is not “easy” to
        use without some technical knowledge or training (courses or
        self-taught). You have to have some technical knowledge to understand
        how to set up tags, triggers and variables. If you’re dropping in
        Facebook pixels, you’ll need some understanding of how Facebook tracking
        pixels work. If you want to set up event tracking in Google Tag Manager,
        you’ll need some knowledge about what “events” are, how Google Analytics
        works, what data you can track with events, what the reports look like
        in Google Analytics and how to name your categories, actions and labels.
        Although it is “easy” to manage multiple tags in GTM, there is a
        learning curve. Once you’re over the hump, GTM is pretty slick about
        what you can track.
      </p>
    </div>
  );
};

export default HelpContent;
