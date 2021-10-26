import { useState } from "react";
import Container from "../../atoms/container/Container";
import SimpleModal from "../../atoms/modal/SimpleModal";
import FeedHeader from "../../molecules/feed/FeedHeader";
import FeedDetails from "../../molecules/feed/FeedDetails";
import FeedFooter from "../../molecules/feed/FeedFooter";
import { EmojiGroup } from "../../molecules/button-group/EmojiGroup";
import { AnimatedEmojiGroup } from "../../molecules/button-group/AnimatedEmojiGroup";
import { FeedbackButtonGroup } from "../../molecules/button-group/FeedbackButtonGroup";
import "./FeedListContainer.scss";
import newsFeedData from "./feedMock";
import { Parser } from "html-to-react";

//feed.feedDetails.userText = Parser().parse(feed.feedDetails.userText);

const FeedListContainer = ({children}) => {
    const [show, setShow] = useState(false);

    const likeButtonOver = () => {
        setShow(true);
    }

    const likeButtonLeave = () => {
        setShow(false);
    }

    return (
        <div className="hdo-feed-list-container">
            {
                newsFeedData.newsFeed.map(feed =>
                (<Container key={feed.feedId}>
                    <>
                        <FeedHeader {...feed.feedHeader} />
                        <FeedDetails {...feed.feedDetails}/>
                        <FeedFooter 
                            emojiGroup={<EmojiGroup />} 
                            feedbackButtonGroup={<FeedbackButtonGroup onMouseOver={likeButtonOver}  />}/>
                    </>
                </Container>))
            }
            <SimpleModal isOpen={show} onMouseOver={likeButtonOver} onMouseLeave={likeButtonLeave}>
                <AnimatedEmojiGroup />
            </SimpleModal>
        </div>
    )
}

export default FeedListContainer;