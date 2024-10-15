import {useEditor} from "@craftjs/core";
import React from "react";
import {useLoader} from "@/core/app-store";

export const Inspector = () => {
    const setLoader = useLoader(state => state.set);
    const { selected, actions, query } = useEditor((state, query) => {
        const [currentNodeId] = state.events.selected;
        if (currentNodeId) {
            const selected = {
                id: currentNodeId,
                name: state.nodes[currentNodeId].data.name,
                settings: state.nodes[currentNodeId].related?.settings,
                isDeletable: query.node(currentNodeId).isDeletable()
            };
            return { selected }
        }
    });

    return (
        <div className="card  mb-4">
            <div className="card-body">
                <h4 className="card-subtitle mb-3">
                    <span className="badge text-bg-info">{selected?.name}</span>
                </h4>
                {selected?.settings && React.createElement(selected.settings)}
                {selected?.isDeletable && <button type="button" className="btn btn-danger" onClick={() => {
                    actions.delete(selected.id);
                }}>Delete</button>}
            </div>
            <div className="card-footer text-center py-4">
                <button type="button" className="btn btn-outline-primary w-100 mb-3" onClick={() => {
                    console.log(query.serialize());
                }}>
                    Serialize JSON
                </button>
                <button type="button" className="btn btn-outline-secondary w-100" onClick={() => setLoader(true)}>
                    Load JSON
                </button>
            </div>
        </div>
    )
}
