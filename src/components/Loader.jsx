import {useLoader} from "@/core/app-store";
import {useEditor} from "@craftjs/core";
import {useState} from "react";

export const Loader = () => {
    const setLoader = useLoader(state => state.set);
    const visible   = useLoader(state => state.visible);
    const [json, setJSON] = useState('');

    const {actions} = useEditor();
    return (
        <div className={`modal ${visible ? "d-block" : ""}`} tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Load JSON</h5>
                        <button type="button" className="btn-close" aria-label="Close" onClick={() => setLoader(false)}></button>
                    </div>
                    <div className="modal-body">
                        <div className="mb-3">
                            <label htmlFor="json" className="form-label">JSON</label>
                            <textarea className="form-control" id="json" rows="3" onChange={e => setJSON(e.target.value)} value={json}></textarea>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={() => setLoader(false)}>Close</button>
                        <button type="button" className="btn btn-primary" onClick={() => {
                            actions.deserialize(json);
                            setLoader(false);
                        }}>Proceed</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
