import "./petowner.css";

export default function PetOwners({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="sidebarDogLists">
      <img className="sidebarDogImg" src={PF+user.profilePicture} alt="" />
      <span className="sidebarOwnerName">{user.username}</span>
    </li>
  );
}