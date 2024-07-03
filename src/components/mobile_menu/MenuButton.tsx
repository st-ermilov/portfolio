import React from "react";
import "./menu_button.css";

type MenuButtonProps = {
    isActive: boolean
    onClick: () => void
}
export const MenuButton = (props: MenuButtonProps) => {
    return (
        <button
            onClick={() => props.onClick()}
            className={`header__menu-button
        ${!props.isActive ? "active" : ""}
        ${props.isActive ? "unactive" : ""}
      `}
        >
            <span></span>
        </button>
    );
};