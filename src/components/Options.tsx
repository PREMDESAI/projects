import React from 'react';

import { IOption } from '../data/questionnaire';

interface IProps {
    options: IOption[];
    onOptionSelected: (selectedOptionIndex: number) => void;
}

interface IState {
    selectedOptionIndex?: number;
}

export class Options extends React.PureComponent<IProps, IState> {
    public state: IState = {
        selectedOptionIndex: undefined,
    }
    public render() {
        const { options } = this.props;
        const { selectedOptionIndex } = this.state;

        const baseStyle: React.CSSProperties = {
            padding: 10,
            marginTop: 10,
            border: '1px solid #e5e5e5',
            cursor: 'pointer',
            color: '#555',
        };

        return options.map((option, index) => {
            const style = {
                ...baseStyle,
            };

            if (Boolean(selectedOptionIndex) || selectedOptionIndex === 0) {
                if (index === selectedOptionIndex) {
                    style.border = '1px solid #007bff';
                }
            } else {
                if (option.default) {
                    style.border = '1px solid #007bff';
                }
            }
            return (
                <div
                    key={index}
                    style={style}
                    onClick={() => this.onCheckboxClicked(index)}
                >
                    { option.title }
                </div>
            )
        })
    }

    private onCheckboxClicked = (selectedOptionIndex: number) => {
        this.setState({
            selectedOptionIndex,
        }, () => this.props.onOptionSelected(selectedOptionIndex))
    }
}