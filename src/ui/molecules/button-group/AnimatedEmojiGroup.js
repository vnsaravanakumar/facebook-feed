import { Emoji, EmojiType } from "../../atoms/buttons/Emoji";
import "./AnimatedEmojiGroup.scss";

export const AnimatedEmojiGroup = (props) => {
    return (
        <div className="hdm-animated-emoji-group">
            <Emoji type={EmojiType.LIKE} animated={true} />
            <Emoji type={EmojiType.LOVE} animated={true} />
            <Emoji type={EmojiType.HAHA} animated={true} />
            <Emoji type={EmojiType.SAD} animated={true} />
            <Emoji type={EmojiType.ANGRY} animated={true} />
        </div>
    )
}
