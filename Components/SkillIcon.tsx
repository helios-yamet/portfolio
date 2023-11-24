const SkillIcon: React.FC<any> = ({ icon, title }: any) => {

  return (
    <div className="relative">
      <dt>
        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-white">
          <img
            width="90%"
            src={icon}
          />
        </div>
        <p className="ml-16 text-lg leading-6 font-medium pt-3 text-gray-100">
          {title}
        </p>
      </dt>
    </div>
  );
};

export default SkillIcon;
