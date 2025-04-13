import React from 'react';

interface IProps {
    title: string;
    currency: string;
    totalMin: number;
    totalMax: number;
    onEstimateToggle: () => void;
}

export class Header extends React.PureComponent<IProps> {
    public render() {
        const { currency, totalMin, totalMax } = this.props;
        return (
            <div className='navbar navbar-dark bg-dark shadow-sm'>
                <div className='container d-flex justify-content-between'>
                    <div className='navbar-brand d-flex align-items-center w-100 mr-0'>
                        <div className='d-flex justify-content-between w-100'>
                            <div className='d-none d-lg-block'>{ this.props.title }</div>
                            <div className='d-lg-none d-sm-block d-md-block'>Calculator</div>
                            <button type='button' className='btn btn-outline-light d-lg-none d-sm-block d-md-block btn-sm' onClick={this.props.onEstimateToggle}>
                                { currency }{ totalMin } - { currency }{ totalMax }
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}