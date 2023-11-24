import { NextPage } from "next";
import { Scrollbars } from "react-custom-scrollbars";
import Head from "next/head";
import { skilldata } from "../Components/JSON/skilldata";
import SkillGroup from "../Components/SkillGroup";

const Skills: NextPage = () => {
  return (
    <Scrollbars
      autoHide
      autoHideTimeout={1000}
      autoHideDuration={200}
      universal={true}
    >
      <Head>
        <title>Skills</title>
        <meta name="description" content={`Skills`} />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={"Skills"} />
        <meta name="description" content={`Skills`} />
        <link rel="canonical" href={"https://helios-yamet.onrender.com"} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={"https://helios-yamet.onrender.com"} />
        <meta property="og:site_name" content="Trevion Cannon" />
        <meta property="og:image" content="/mainthumbnail.PNG" />
        <meta property="og:image:width" content="1040" />
        <meta property="og:image:height" content="600" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="twitter:widgets:csp" content="on" />
      </Head>
      <div className=" mt-2 w-full p-5 pb-40 ml-3 text-left">
        <h2 className="lg:text-5xl  font-bold leading-tight text-indigo-500 text-3xl ">
          Skills
        </h2>
        <p className="mt-4 max-w-2xl text-lg font-medium text-gray-300">
          Data Structures and Algorithms, Frontend Development, Backend
          Development, Database Management, System Design and Cloud.
        </p>

        <div className="w-full  mb-5 pb-5 ">
          {
            skilldata().map( (val: any) => 
              <SkillGroup group={val} />
            )
          }
        </div>
      </div>
    </Scrollbars>
  );
};

export default Skills;
