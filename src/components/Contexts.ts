import React from 'react';

export interface IEstimatorContext {
    onChoiceSelected: (sectionID: number, questionID: number, choiceID: number, isDefault?: boolean) => void;
    onEmailSend: () => void;
}

export const EstimatorContext = React.createContext<IEstimatorContext>({
    onChoiceSelected: () => null,
    onEmailSend: () => null,
});