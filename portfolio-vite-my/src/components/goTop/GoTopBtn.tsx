import styled from "styled-components";
import { Icon } from "../icon/Icon.tsx";
import { theme } from "../../styles/theme.ts";
import { animateScroll } from "react-scroll";
import { useEffect, useState } from "react";

export const GoTopBtn = () => {
    const [showButton, setShowButton] = useState(false);

    const checkScrollTop = () => {
        if (window.scrollY > 450) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", checkScrollTop);
        return () => {
            window.removeEventListener("scroll", checkScrollTop);
        };
    }, []);

    return (
        <>
            {showButton && (
                <GoTopStyledBtn onClick={() => animateScroll.scrollToTop()}>
                    <Icon iconId={'goTop'} width={'35'} height={'30'} viewBox={'-2 -2 35 30'} />
                </GoTopStyledBtn>
            )}
        </>
    );
};

const GoTopStyledBtn = styled.button`
    position: fixed;
    z-index: 333;
    right: 30px;
    bottom: 30px;
    background-color: ${theme.primaryColor};
    opacity: 0.7;
    color: ${theme.colorFont};
    border-radius: 50%;
    aspect-ratio: 1;
    &:hover {
        opacity: 1;
    }
    @media ${theme.mediaMobile} {
        display: none;
    }
`;