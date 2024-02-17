"use client";

interface userIconProps {
  name: string;
}
function UserIcon({ name }: userIconProps) {
  return (
    <div className=" bg-[orange] cursor-pointer w-[2.7rem] h-[2.7rem] mr-3 text-center rounded-[100%]">
      <h2 className="text-[1.7rem] text-white">{name}</h2>
    </div>
  );
}

export default UserIcon;
