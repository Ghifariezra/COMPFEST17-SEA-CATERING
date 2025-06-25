import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

export default function ToggleMenu({isOpen, toggleMenu}: { isOpen: boolean; toggleMenu: () => void }) {
  return (
    <button className="md:hidden cursor-pointer" onClick={toggleMenu}>
      {isOpen ? <CloseRoundedIcon className="text-3xl" /> : <MenuRoundedIcon className="text-3xl" />}
    </button>
  );
}
