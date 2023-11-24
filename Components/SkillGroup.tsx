import SkillIcon from "./SkillIcon";

const SkillGroup: React.FC<any> = ({ group }: any) => {
  return (
    <div className="mt-5 pt-5">
      <p className="mt-2  tracking-tight text-gray-400 text-xl">
        {group.title}
      </p>
      <dl className="space-y-10 mt-4 md:space-y-0 md:grid md:grid-cols-2 xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 md:gap-x-8 md:gap-y-10">
        { group.skills.map( (skill:any) => 
          <SkillIcon icon={skill.icon} title={skill.title} />
        )}
      </dl>
    </div>
  );
};

export default SkillGroup;
