import iconsSprite from '../../assets/icons-sprite.svg'
import {theme} from "../../styles/theme.ts";

type IconPropsType = {
    width?: string
    height?: string
    viewBox?: string
    iconId: string
    fill?: string
}


export const Icon = (props: IconPropsType) => {
    return (
        <svg width={props.width || "120"} height={props.height || "120"} viewBox={props.viewBox || "0 0 120 120"}
             fill={theme.primaryColor} xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
        </svg>
    )
}