import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

import { IQuestion } from '../data/questionnaire';
import { EstimatorContext } from './Contexts';
import { Options } from './Options';

interface IProps {
    questions: IQuestion[],
    sectionID: number;
    expandedQuestionNumber: number;
    onQuestionExpanded: (questionNumber: number) => void;
}

export class Questions extends React.PureComponent<IProps> {
    static contextType = EstimatorContext;

    public render() {
        const { questions, expandedQuestionNumber } = this.props;
        return questions.map((question, index) => {
            const isCollapsed = question.questionNumber !== expandedQuestionNumber;
            return (
                <div key={index} style={{ marginBottom: isCollapsed ? 20 : 40, border: '1px solid #e5e5e5', padding: 10 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <p className='font-weight-bold' style={{ cursor: 'pointer', marginBottom: 0 }} onClick={() => this.onToggle(index)}>{ question.questionNumber }. { question.title }</p>
                        <OverlayTrigger
                            key='right'
                            placement='right'
                            overlay={
                                <Tooltip id={'tooltip-right'}>
                                    <strong>{ question.hint.title }</strong>
                                    <p>{ question.hint.description }</p>
                                </Tooltip>
                            }
                        >
                            <span style={{ cursor: 'pointer' }}>?</span>
                        </OverlayTrigger>
                    </div>
                    <div style={{ display: isCollapsed ? 'none' : 'block' }}>
                        <Options options={question.options} onOptionSelected={(selectedOptionIndex) => this.onOptionSelected(index, selectedOptionIndex)}/> 
                    </div>
                </div>
            )
        })
    }

    private onToggle = (index: number) => {
        const question = this.props.questions[index];
        this.props.onQuestionExpanded(question.questionNumber);
        const defaultAnswerIndex = question.options.findIndex((option) => option.default);
        this.onDefaultOptionSelected(index, defaultAnswerIndex);
    }

    private onOptionSelected = (questionIndex: number, selectedOptionIndex: number) => {
        const { onChoiceSelected } = this.context;
        onChoiceSelected(this.props.sectionID, questionIndex, selectedOptionIndex);
    }

    private onDefaultOptionSelected = (questionIndex: number, selectedOptionIndex: number) => {
        const { onChoiceSelected } = this.context;
        onChoiceSelected(this.props.sectionID, questionIndex, selectedOptionIndex, true);
    }
}