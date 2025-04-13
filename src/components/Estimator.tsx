import React from 'react';

import { IRange } from '../data/questionnaire';
import { EstimatorContext } from './Contexts';

import styles from './Estimator.module.css';

export interface ISelectedService {
    title: string;
    range: IRange | string;
    order: number;
    selectedChoice: string;
}

interface IProps {
    title: string;
    currency: string;
    selectedServices: IObject<ISelectedService>;
}

export class Estimator extends React.PureComponent<IProps> {
    static contextType = EstimatorContext;
    public render() {
        const { currency, title, selectedServices } = this.props;
        const servicesArray = Object.values(selectedServices).sort((a, b) => a.order > b.order ? 1 : -1)
        const totalMin = servicesArray.reduce((acc, o) => acc + ((o.range as IRange).min || 0), 0);
        const totalMax = servicesArray.reduce((acc, o) => acc + ((o.range as IRange).max || 0), 0);
        return (
            <div className='card'>
                <div className='card-header'>
                    { title } ({ currency }{ totalMin } - { currency }{ totalMax })
                </div>
                <div className={styles.CardBody}>
                    {
                        servicesArray.map((service, index) => {
                            const { min, max } = service.range as IRange;

                            return min == null && max == null ? (
                                <div className='card-body' key={index}>
                                    <h5 className='card-title'>{ service.title }</h5>
                                    <p className='card-text'>{ service.range }</p>
                                </div>
                            ) : (
                                <div className='card-body' key={index}>
                                    <h5 className='card-title'>{ service.title }</h5>
                                    <p className='card-text'>{ currency }{ (service.range as IRange).min } - { currency }{ (service.range as IRange).max }</p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='card-footer'>
                    <button className='btn btn-outline-dark' onClick={() => this.context.onEmailSend()}>Email</button>
                </div>
            </div>
        );
    }
}