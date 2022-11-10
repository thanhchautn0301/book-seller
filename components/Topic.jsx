import { useEffect } from "react";
import { useState } from "react";
import { getTopics } from "../services/topic";

const Topic = () => {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    getTopics().then((res) => {
      setTopics(res.content);
    });
  }, []);
  return (
    <div className="w-1/6">
      <div className="font-semibold border-b-[1px] py-2">Chủ đề:</div>
      <div>
        {topics.length > 0 &&
          topics.map((topic) => {
            return (
              <a
                href={`http://localhost:3000?keyword=${topic.name}`}
                className="block p-2 text-sm hover:text-orange-400 border-b-[1px]"
              >
                {topic.name}
              </a>
            );
          })}
      </div>
    </div>
  );
};

export default Topic;
