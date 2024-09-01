import { Component, render, h } from 'preact';
import { JsNes } from '../../JsNes/JsNes';
import style from './style.css';


interface IProps {

}

interface IState {
    play: boolean
}

class Home extends Component<IProps, IState> {
    /**
     *
     */
    constructor(props: IProps) {
        super(props);
        this.state = {
            play: false,
        }
    }
    /**
     * We need the visitor to perform interaction on the page,
     * like pressing the button to properly initialize AudioContext
     */
    renderReadyButton() {
        return (
            <button onClick={ this.onReadyButtonClicked.bind(this) } >Ready, Player One!</button>
        )
    }

    onReadyButtonClicked() {
        this.setState({ play: true });
    }

    renderNesCanvas() {
        return (
            <div style="margin: auto; width: 75%; height: 250px; border: 1px solid black;">
                <JsNes />
            </div>
        )
    }

    render() {
        return (
            <div class={style.home}>
                { this.state.play ? this.renderNesCanvas() : this.renderReadyButton() }
            </div>
        );
    }
};

export default Home;
