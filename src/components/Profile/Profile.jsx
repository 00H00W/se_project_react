import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

function Profile({
  clothingItems,
  onAddButtonClick,
  onCardClicked,
  onEditProfile,
  onLogOut,
}) {
  return (
    <div className="profile">
      <SideBar onEditProfile={onEditProfile} onLogOut={onLogOut} />
      <ClothesSection
        clothingItems={clothingItems}
        onAddButtonClick={onAddButtonClick}
        onCardClicked={onCardClicked}
      ></ClothesSection>
    </div>
  );
}

export default Profile;
