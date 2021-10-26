import { Emoji, EmojiType } from "../../atoms/buttons/Emoji";
import "./EmojiGroup.scss";

export const EmojiGroup = (props) => {
    return (
        <div className="hdm-emoji-group">
            <Emoji type={EmojiType.LIKE} />
            <Emoji type={EmojiType.LOVE} />
            <Emoji type={EmojiType.ANGRY} />
        </div>
    )
}
