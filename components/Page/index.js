// node_modules
import underscore from 'underscore';

// components
import Footer from '../Footer';
import Nav from '../Nav';

const _ = underscore;

export default props => {
    return (<div {..._.omit(props, 'children')}>
        <Nav />
        <div className="content">{props.children}</div>
        <Footer />
    </div>);
}
