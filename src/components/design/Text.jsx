import {useNode} from "@craftjs/core";
import ContentEditable from "react-contenteditable";
import {useState} from "react";

export const Text = ({ text, fontSize, ...props }) => {
    const [editable, setEditable] = useState(false);
    const {connectors: {connect, drag}, actions: {setProp}, hovered} = useNode(state => ({
        hovered: state.events.hovered
    }));
    return (
        <div className={hovered ? "border border-warning-subtle" : "border border-white"}
             ref={ref => connect(drag(ref))}
             style={{ fontSize: `${fontSize}px` }}
             {...props}
             onClick={() => { setEditable(true) }}
        >
            <ContentEditable html={text} disabled={!editable} onChange={e => {
                setProp(props => {
                    props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, "");
                })
            }} />
        </div>
    )
}

const TextSettings = () => {
    const { actions: {setProp}, fontSize, text } = useNode((node) => ({
        fontSize: node.data.props.fontSize,
        text: node.data.props.text,
    }));

    return (
        <div>
            <div className="mb-3">
                <label htmlFor="fontSize" className="form-label">Font Size</label>
                <input type="range" className="form-range" id="fontSize" value={fontSize || 13} onChange={e => {
                    setProp(props => {
                        props.fontSize = e.target.value;
                    })
                }}/>
            </div>
            <div className="mb-3">
                <label htmlFor="text" className="form-label">Text</label>
                <input type="text" className="form-control" id="text" value={text} onChange={e => {
                    setProp(props => {
                        props.text = e.target.value;
                    })
                }}/>
            </div>
        </div>
    )
}


Text.craft = {
    props: {
        text: "Hello World",
        fontSize: 13
    },
    related: {
        settings: TextSettings
    }
}
