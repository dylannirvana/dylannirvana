import React from 'react';
import { 
} from 'react-router-dom';

// NOTE: What is the PURPOSE of story.js? What do I want them to do as a result? How is conversion described?
// NOTE: Do I want to separate STORY from BLOG? Might these be combined? No. These are components not pages or stories. Which brings up another thing: how should I compose components into stories? Scrolling, nesting? Composition is a UX decision. 
// NOTE: Is story.js an about me page? UX
// FIXME: How do I COMPOSE components?
// TODO: UI story.js should show a Bootstrap component that presents content (text, media)


class Story extends React.Component {
    render() {
        return (
            <div>
                <h2>Is Story "about us"? What is important to say about who we are?</h2>
                <ol>
                    <li>How do you want the user to feel after reading this page?</li>
                    <li>From this page, what does conversion look like?</li>
                </ol>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut nulla eaque cum laudantium enim! Labore aliquid numquam rem perferendis, harum excepturi veniam eos eligendi blanditiis corrupti soluta reprehenderit qui voluptate.</p>
                
            </div>
        )
    }
}

export default Story;