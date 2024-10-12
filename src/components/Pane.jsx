import {useNode} from "@craftjs/core";

export const Pane = ({ children }) => {
    const { connectors: {connect, drag} } = useNode();
    return (
        <div className="p-3 border border-info" ref={ref=> connect(drag(ref))}>
            {children}
        </div>
    )
}
