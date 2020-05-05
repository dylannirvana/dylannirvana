import React from 'react';
import { 
    // Route, 
    Link 
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
                <h1>Page is Story</h1>
                <p>Lorem ipsum</p>
                
            </div>
        )
    }
}

export default Story;