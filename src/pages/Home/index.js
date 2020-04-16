import React from 'react'

const App = (props) => {
    const { globalState } = props;
    const { content } = globalState;
    return (
        <section className="section" dangerouslySetInnerHTML={{__html: content}}></section>
    );
}

export default App
