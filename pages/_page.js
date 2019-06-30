import underscore from 'underscore';
const _ = underscore;

export default props => {
    return (<div {..._.omit(props, 'children')}>
        <div className="content">{props.children}</div>
    </div>);
}
