import { createRef } from "preact";
import { Component, Fragment, h } from "preact";
import { nes_boot, nes_init, nes_load_url } from "./JsNesIntegration";

interface IProps { }
interface IState { }

export class JsNes extends Component<IProps, IState> {
    refMainCanvas  =  createRef<HTMLCanvasElement>()

    shouldComponentUpdate() {
        return false;
    }

    componentDidMount() {
        // nes_load_url("nes-canvas", "/assets/SuperMarBros.nes");
        nes_load_url("nes-canvas", "/assets/InterglacticTransmissing.nes");
    }

    render() {
        return (
        <Fragment>
            <canvas id="nes-canvas" width="256" height="240" style="width: 100%" ref={this.refMainCanvas}/>
        </Fragment>)
    }

}

