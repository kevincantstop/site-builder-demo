import {useNode} from "@craftjs/core";

export const Container = ({ children, padding, ...props }) => {
    const {connectors: {connect, drag}} = useNode();
    return (
        <div ref={ref => connect(drag(ref))}
             className="container border border-light-subtle"
             style={{ padding: `${padding}px` }} {...props}
        >
            {children}
        </div>
    )
}

const ContainerSettings = () => {
    const { actions: {setProp}, padding } = useNode((node) => ({
        padding: node.data.props.padding
    }));

    return (
        <div className="mb-3">
            <label htmlFor="padding" className="form-label">Padding</label>
            <input type="number" className="form-control" id="padding" value={padding || 20} onChange={e => {
                setProp(props => {
                    props.padding = e.target.value;
                })
            }}/>
        </div>
    )
}

Container.craft = {
    props: {
        padding: 20,
    },
    related: {
        settings: ContainerSettings
    }
}
