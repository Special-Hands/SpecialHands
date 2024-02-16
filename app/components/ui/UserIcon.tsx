"use client";

interface userIconProps {
  name: string;
}
function UserIcon({ name }: userIconProps) {
  return (
    <div className=" bg-[orange] cursor-pointer w-[3.2rem] mr-3 text-center rounded-[100%]">
      <h2 className="text-[2rem] text-white">B</h2>
    </div>
  );
}

export default UserIcon;
