import {Text} from "@/components/design/Text";
import {Element, useEditor} from "@craftjs/core";
import React from "react";
import {Container} from "@/components/design/Container";

export const Toolbox = () => {
    const { connectors, query } = useEditor();
    return <div className="card mb-4">
        <div className="card-body">
            <button type="button"
                className="btn btn-light w-100 mb-2"
                ref={ref => connectors.create(ref, <Text text="Hello World" />)}
            >
                Text
            </button>
            <button type="button" className="btn btn-light w-100 mb-2"
                ref={ref => connectors.create(ref, <Element is={Container} canvas />)}
            >Container</button>
        </div>
    </div>
}
